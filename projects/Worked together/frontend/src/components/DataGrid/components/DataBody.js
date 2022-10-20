import { useState } from 'react';

export default function DataBody({ data, header, footer, collapseDescriptor }) {
  const [areDataRowsCollapsed, setAreDataRowsCollapsed] = useState(false);

  const onClick = (e) => {
    if (e.target.matches(collapseDescriptor)) {
      setAreDataRowsCollapsed((old) => !old);
    }
  };

  return (
    <tbody
      className={areDataRowsCollapsed ? 'body-collapsed' : ''}
      onClick={collapseDescriptor ? onClick : null}
    >
      {header}
      {!areDataRowsCollapsed &&
        data.map((row, rowKey) => (
          <tr key={rowKey}>
            {row.map((cell, cellKey) => (
              <td key={cellKey}>{cell}</td>
            ))}
          </tr>
        ))}
      {footer}
    </tbody>
  );
}
