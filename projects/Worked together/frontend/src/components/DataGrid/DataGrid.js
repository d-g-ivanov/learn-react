import DataBody from './components/DataBody';
import DataHeader from './components/DataHeader';
import './styles.css';

function constructBody(data, useSections) {
  if (useSections)
    return data.map((d, key) => (
      <DataBody
        key={key}
        data={d.data}
        collapseDescriptor=".section-header td"
        header={<DataHeader data={d} />}
      />
    ));

  return <DataBody data={data} />;
}

export default function DataGrid({ data, useSections }) {
  const [head, ...body] = data;

  if (head === undefined || body.length === 0) return '';

  return (
    <div className="grid-container">
      <table>
        <thead>
          <tr>
            {head.map((item, key) => (
              <th key={key}>{item}</th>
            ))}
          </tr>
        </thead>

        {constructBody(body, useSections)}
      </table>
    </div>
  );
}
