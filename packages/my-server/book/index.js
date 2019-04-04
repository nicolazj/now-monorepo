const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('*', async (_, res) => {
  res.set('Content-Type', 'application/json');
  res.status(200).send({ hello: 'book' });
});

module.exports = app;
