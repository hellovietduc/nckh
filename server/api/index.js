const fs = require('fs');

const route = app => {
  if (!fs.existsSync(process.env.DATA_DIR)) {
    fs.mkdirSync(process.env.DATA_DIR);
  }
  app.use('/data', require('./data'));
};

module.exports = route;
