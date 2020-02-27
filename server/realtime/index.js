const { sendData } = require('./handlers');
const Redis = require('../configs/redis');

const listen = io => {
  io.on('connection', socket => {
    console.log(`[socket] ${socket.id}: connected`);
    Redis.sadd('sockets:connected', socket.id);
    socket.emit('receivedId', socket.id);

    sendData(socket);
    const id = setInterval(sendData, 1000, socket);

    socket.on('disconnect', () => {
      clearInterval(id);
      Redis.srem('sockets:connected', socket.id);
      Redis.del(`data:lastRead:${socket.id}`);
      console.log(`[socket] ${socket.id}: disconnected`);
    });
  });
};

module.exports = listen;
