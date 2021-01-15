// import express from 'express';
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

var dd_options = {
  response_code: true,
  tags: ['app:my_app'],
};
var connect_datadog = require('connect-datadog')(dd_options);
app.use(connect_datadog);

// app.use(bodyParser.json({ limit: '2mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  return res.json({
    status: 'success',
    message: 'Invite sent!',
    payload: req.body,
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
