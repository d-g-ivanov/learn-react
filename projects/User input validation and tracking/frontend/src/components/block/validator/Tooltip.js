import { ReactComponent as Img } from './icon.svg';

export default function Tooltip({ suggestion, position, onChange }) {
  return (
    <div
      style={{ top: position.y, left: position.x }}
      className="content-validator-tooltip"
    >
      <header>
        <span>
          <Img />
          Content Improvement
        </span>
        <label>
          <input
            type="checkbox"
            onChange={onChange}
            checked={suggestion.ignored || false}
          />
          Ignore{suggestion.ignored ? 'd' : ''}
        </label>
      </header>
      {!suggestion.ignored && <p>{suggestion.message}</p>}
    </div>
  );
}
