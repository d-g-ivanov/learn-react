export default function DataHeader({ data }) {
  return (
    <tr className="section-header">
      <td>{data.emp1}</td>
      <td>{data.emp2}</td>
      <td colSpan="2">Total time: {data.total}</td>
    </tr>
  );
}
