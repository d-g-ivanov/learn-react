const calculateOverlap = (start1, edn1, start2, end2) => {
  const startDate1 = new Date(start1);
  const endDate1 = edn1 === 'NULL' ? new Date() : new Date(edn1);
  const startDate2 = new Date(start2);
  const endDate2 = end2 === 'NULL' ? new Date() : new Date(end2);

  const start = startDate1 < startDate2 ? startDate2 : startDate1;
  const end = endDate1 < endDate2 ? endDate1 : endDate2;

  if (end < start) return 0;

  const diffTimeInMS = Math.abs(end - start);
  const diffTimeInDays = Math.ceil(diffTimeInMS / (1000 * 60 * 60 * 24));
  return diffTimeInDays;
};

export function getPairs(data) {
  const overlaps = [
    ['Employee ID #1', 'Employee ID #2', 'Project ID', 'Days worked']
  ];

  const map = {};

  for (let i = 0, len = data.length; i < len; i++) {
    const [empId, projId, startDate, endDate] = data[i];

    let projectWorkers = map[projId];

    if (!projectWorkers) {
      projectWorkers = map[projId] = [];
    }

    projectWorkers.forEach((worker) => {
      const hoursWorkedTogather = calculateOverlap(
        worker[2],
        worker[3],
        startDate,
        endDate
      );

      if (hoursWorkedTogather > 0)
        overlaps.push([worker[0], empId, projId, hoursWorkedTogather]);
    });

    projectWorkers.push(data[i]);
  }

  return overlaps;
}

export function groupPairs(dataArray) {
  const [header, ...data] = dataArray;

  const grouped = Object.values(
    data.reduce((final, current) => {
      const [emp1, emp2, , time] = current;
      const key = emp1 + '-' + emp2;
      final[key] = final[key] || { emp1, emp2, data: [], total: 0 };

      final[key].data.push(current);
      final[key].total += time;

      return final;
    }, {})
  ).sort((a, b) => b.total - a.total);

  return [header, ...grouped];
}
