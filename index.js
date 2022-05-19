const express = require('express');
require('dotenv').config();

const app = express();

app.get('/users', (req, res) => {
  res.send('All users');
});

app.get('/docutents', (req, res) => {
  res.send('All documents');
});

app.use('*', (req, res) => {
  res.send('Not found!');
});

const port = process.env.APP_PORT;

app.listen(port, () => console.log(`server is run on port: ${port}`));
