const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017';

app.get('/', (req, res) => {
  res.send('User Service is running');
});

app.get('/env', (req, res) => {
  res.json({
    dbUrl: dbUrl,
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(port, () => {
  console.log(`User service listening on port ${port}`);
});

