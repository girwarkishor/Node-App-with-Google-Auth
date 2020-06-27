const express = require('express');
const dotenv = require('dotenv');

const server = require('http').createServer();

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
