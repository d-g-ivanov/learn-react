import { useEffect, useState } from 'react';

import Editable from './editable';
import Validator from './validator';

import './block.css';

export default function Block() {
  const [userData, setUserData] = useState({});

  const onBlur = (e) => {
    const name = e.target.dataset.attr;
    if (!name) return;
    const value = e.target.innerHTML
      .trim()
      .replace(/(<mark[^>]*>|<\/mark>)/g, ''); // strip mark tags
    setUserData({ ...userData, [name]: value });
  };

  const onValidationError = (issues, category) => {
    console.log(category || '', JSON.parse(JSON.stringify(issues)));
  };

  useEffect(() => console.log('Current user entered data: ', userData), [
    userData
  ]);

  return (
    <article className="block">
      <Editable
        className="heading"
        data-attr="heading"
        onBlur={onBlur}
        placeholder="Title"
      />
      <Editable
        className="subheading"
        data-attr="subheading"
        onBlur={onBlur}
        placeholder="Company Name"
      />
      <div className="sub-blocks">
        <Editable data-attr="dates" onBlur={onBlur} placeholder="Date period" />
        <Editable
          data-attr="location"
          onBlur={onBlur}
          placeholder="New York, NY"
        />
      </div>
      <Validator onBlur={onBlur} onValidationError={onValidationError}>
        <Editable
          onInput={() => {}}
          className="long-form"
          data-attr="description"
          placeholder="Company Description"
        />
      </Validator>
    </article>
  );
}
