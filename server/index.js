const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const compression = require('compression');
const api = require('./api');
const realtime = require('./realtime');

const { PORT } = process.env;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');

api(app);
realtime(io);

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
