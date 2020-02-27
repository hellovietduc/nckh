const fs = require('fs').promises;
const moment = require('moment');

const readDataFile = async () => {
  try {
    const data = await fs.readFile(process.env.DATA_DIR + '/data.txt', { encoding: 'utf-8' });
    const arr = data
      .split('\r\n')
      .filter(e => e.trim().length > 0)
      .reverse()
      .map(e => {
        let [time, vol, cur] = e.split('\t');
        vol = parseFloat(vol);
        cur = parseFloat(cur);
        time = moment(time);
        time = time.hour(time.hour() + 7).format('k:mm:ss D/M/YYYY');
        return { vol, cur, time };
      });
    const maxVol = arr.reduce((a, b) => (a.vol > b.vol ? a : b));
    const maxCur = arr.reduce((a, b) => (a.cur > b.cur ? a : b));
    const minVol = arr.reduce((a, b) => (a.vol < b.vol ? a : b));
    const minCur = arr.reduce((a, b) => (a.cur < b.cur ? a : b));
    const avgVol = parseFloat((arr.reduce((t, c) => t + c.vol, 0) / arr.length).toFixed(2));
    const avgCur = parseFloat((arr.reduce((t, c) => t + c.cur, 0) / arr.length).toFixed(2));
    return {
      u: {
        arr: arr.map(e => ({ value: e.vol, time: e.time })),
        max: { value: maxVol.vol, time: maxVol.time },
        min: { value: minVol.vol, time: minVol.time },
        average: { value: avgVol, time: 'All time' },
        live: { value: arr[0].vol }
      },
      i: {
        arr: arr.map(e => ({ value: e.cur, time: e.time })),
        max: { value: maxCur.cur, time: maxCur.time },
        min: { value: minCur.cur, time: minCur.time },
        average: { value: avgCur, time: 'All time' },
        live: { value: arr[0].cur }
      }
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = {
  readDataFile
};
