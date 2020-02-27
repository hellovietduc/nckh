const Redis = require('redis');
const { promisifyAll } = require('bluebird');

const client = Redis.createClient({ url: process.env.REDIS_URI });

client.on('connect', () => console.info('Redis connected'));
client.on('error', err => console.error(err));

module.exports = promisifyAll(client);
