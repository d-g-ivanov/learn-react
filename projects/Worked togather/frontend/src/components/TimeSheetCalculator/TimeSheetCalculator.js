import { useState } from 'react';
import FilePicker from '../FilePicker';
import DataGrid from '../DataGrid';
import Collapsible from '../Collapsible';
import TestFiles from '../TestFiles';

import { readCsvFile } from './utils/csv';

import { getPairs, groupPairs } from './utils/calculations';

// should be a bit ore efficient version, O(n log n) ?!
// import { getPairs, groupPairs } from './utils/calculations2';

export default function TimeSheetCalculator() {
  const [data, setData] = useState([]);

  const handleFile = async (file) => {
    const dataArray = await readCsvFile(file);
    setData(dataArray);
  };

  const hasData = data.length !== 0;
  const modifiedData = hasData ? groupPairs(getPairs(data)) : [];

  return (
    <>
      <TestFiles fileIdentifier="#file-input" />
      <FilePicker
        processFile={handleFile}
        acceptTypes={['text/csv', 'text/plain']}
      />
      {hasData && (
        <>
          <Collapsible label="Raw Data" initialState={false}>
            <DataGrid data={data} />
          </Collapsible>
          <DataGrid data={modifiedData} useSections />
        </>
      )}
    </>
  );
}
