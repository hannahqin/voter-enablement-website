// app.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const logger = require('morgan');

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) { return val; }
  if (port >= 0) { return port; }
  return false;
}

const app = express();

app.use(cors({ credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(logger('dev'));

// Add your API routes under the route `/api`
// const api = require('./api');
// app.use('/api', api);
// create a GET route
app.get('/api/connected', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT TEST' });
});

// Serve the React application
// app.use(express.static('D:/home/site/wwwroot/static'));
// app.get('/', (req, res) => {
//   res.sendFile('D:/home/site/wwwroot/index.html');
// });

app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = normalizePort(process.env.PORT || 5000);
app.listen(port, () => {
  console.log(`API listening on port: ${port}`);
});
