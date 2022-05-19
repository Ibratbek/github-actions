const express = require('express');
require('dotenv').config();

const app = express();

app.get('/users', (req, res) => {
  res.send('Ibrat');
});

// app.get('/documents', (req, res) => {
//   res.send('All documents');
// });

app.get('/profile', (req, res) => {
  res.send('Your profile');
});

app.get('/newbranch', (req, res) => {
  res.send('newbranch');
});

app.use('*', (req, res) => {
  res.send('Not found!');
});

const port = process.env.APP_PORT;

app.listen(port, () => console.log(`server is run on port: ${port}`));
