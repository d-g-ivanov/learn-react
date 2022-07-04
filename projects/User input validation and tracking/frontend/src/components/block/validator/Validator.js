import { cloneElement, useState, useEffect } from 'react';
import { checkContent } from '../../../services/content';

import Tooltip from './Tooltip';

import './validator.css';

// utils
const sleep = (delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
};

export default function Validator({ children, onBlur, onValidationError }) {
  const [validated, setValidated] = useState('');
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState('');
  const [tipPosition, setTipPosition] = useState({});

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const newText = suggestions.reduce((final, current, index) => {
      const [start, end] = current.range;
      const slice = userInput.slice(start, end);
      final = final.replace(
        slice,
        `<mark data-suggestion=${index}>${slice}</mark>`
      );
      return final;
    }, userInput);

    setValidated(newText);
  }, [suggestions, userInput]);

  useEffect(
    () => console.log('Active suggestion changed: ', activeSuggestion),
    [activeSuggestion]
  );

  // helpers
  const handleValidation = async (text) => {
    let serviceSuggestions = await checkContent(text);

    if (serviceSuggestions.length) {
      serviceSuggestions = serviceSuggestions.sort((s1, s2) => {
        if (s1.range[0] < s2.range[0]) return -1;
        else return 1;
      });
    }

    setSuggestions(serviceSuggestions);
    onValidationError &&
      onValidationError(serviceSuggestions, 'Updated suggestions: ');
  };

  const reportCorrections = () => {
    const viewedAndCorrected = suggestions.map((s) => {
      if (s.viewed) s.corrected = true;
      else s.viewed = false;
      return s;
    });
    onValidationError &&
      onValidationError(viewedAndCorrected, 'Report corrections: ');
  };

  // events
  const _onBlur = async (e) => {
    const text = e.target.innerText.trim();

    if (text !== userInput) {
      if (suggestions.length) reportCorrections();
      await handleValidation(text);
      setUserInput(text);
    }

    onBlur && onBlur(e);
  };

  const onChange = (e) => {
    const isChecked = e.target.checked;
    const newSuggestions = suggestions.map((s, idx) => {
      if (idx.toString() === activeSuggestion)
        return { ...s, ignored: isChecked };
      return s;
    });
    setSuggestions(newSuggestions);
    onValidationError && onValidationError(newSuggestions, 'Report ignore: ');
  };

  let showTooltip2 = false;
  const onMouseOver = async (e) => {
    showTooltip2 = true;
    await sleep(500);
    if (!showTooltip2) return;

    const mark =
      e.target.tagName === 'MARK' ? e.target : e.target.closest('mark');
    if (!mark) return;
    const idx = mark.dataset.suggestion;
    if (!idx) return;
    const box = mark.getBoundingClientRect();
    setTipPosition({ x: box.left, y: box.bottom - 2 });
    setActiveSuggestion(idx);

    if (!suggestions[idx].viewed) {
      const newSuggestions = suggestions.map((s, id) => {
        if (id.toString() === idx) return { ...s, viewed: true };
        return s;
      });
      setSuggestions(newSuggestions);
      onValidationError &&
        onValidationError(newSuggestions, 'Report viewed suggestions: ');
    }
  };

  const onMouseLeave = (e) => {
    showTooltip2 = false;

    if (activeSuggestion) setActiveSuggestion('');
  };

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className="content-validator"
    >
      {cloneElement(children, { onBlur: _onBlur, validatedValue: validated })}

      {activeSuggestion && (
        <Tooltip
          suggestion={suggestions[activeSuggestion]}
          position={tipPosition}
          onChange={onChange}
        />
      )}
    </div>
  );
}
