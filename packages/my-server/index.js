const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

console.log('my-be index');

app.get('*', (_, res) => {
  res.set('Content-Type', 'application/json');
  res.status(200).send({ hello: 'world' });
});

module.exports = app;
