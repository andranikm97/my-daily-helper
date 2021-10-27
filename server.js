const express = require('express');
const app = express();
const path = require('path');
const connectToDB = require('./db/connect');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

// Start up

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

const startServer = async () => {
  try {
    await connectToDB(mongoURI);
    console.log('Successful connection to DB!');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
