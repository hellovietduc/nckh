const getU = () =>
  new Promise(rel => {
    const data = [
      { name: 'Day 1', val: 2.5 },
      { name: 'Day 2', val: 2.3 },
      { name: 'Day 3', val: 2.1 },
      { name: 'Day 4', val: 2.2 },
      { name: 'Day 5', val: 2.3 }
    ];
    setTimeout(rel, 100, data);
  });

const getI = () =>
  new Promise(rel => {
    const data = [
      { name: 'Day 1', val: 0.48 },
      { name: 'Day 2', val: 0.49 },
      { name: 'Day 3', val: 0.52 },
      { name: 'Day 4', val: 0.54 },
      { name: 'Day 5', val: 0.51 }
    ];
    setTimeout(rel, 100, data);
  });

export default {
  getU,
  getI
};
