const router = require('express').Router();
const fs = require('fs').promises;
const Redis = require('../configs/redis');

router.post('', async (req, res) => {
  try {
    const time = new Date().toISOString();
    const data = { voltage: parseFloat(req.query.Volt) || 0, current: parseFloat(req.query.Current) || 0 };
    const line = `${time}\t${data.voltage}\t${data.current}\r\n`;
    await fs.appendFile(process.env.DATA_DIR + '/data.txt', line);
    await Redis.setAsync('data:lastSave', time);
    console.log(`[api] ${time}:`, data);
    res.sendStatus(200);
  } catch (err) {
    console.error(`[api] error:`, err);
    res.sendStatus(500);
  }
});

router.get('/download', async (req, res) => {
  try {
    const { socket_id } = req.query;
    if (!(socket_id && (await Redis.sismemberAsync('sockets:connected', socket_id)))) return res.sendStatus(403);
    const filePath = process.env.DATA_DIR + '/data.txt';
    res.attachment(filePath).sendFile(filePath);
  } catch (err) {
    console.error(`[api] error:`, err);
    res.sendStatus(500);
  }
});

module.exports = router;
