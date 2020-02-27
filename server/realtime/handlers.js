const { readDataFile } = require('./utils');
const Redis = require('../configs/redis');

const sendData = async socket => {
  const [lastSave, lastRead] = await Promise.all([
    Redis.getAsync('data:lastSave'),
    Redis.getAsync(`data:lastRead:${socket.id}`)
  ]);
  if (lastSave && lastSave === lastRead) return;

  const data = await readDataFile();
  if (!data) return;

  socket.emit('newData', data);
  console.log(`[socket] ${socket.id}: sent data`);

  if (!lastSave) {
    const now = new Date().toISOString();
    Redis.set('data:lastSave', now);
    Redis.set(`data:lastRead:${socket.id}`, now);
  } else {
    Redis.set(`data:lastRead:${socket.id}`, lastSave);
  }
};

module.exports = {
  sendData
};
