const express = require('express');
const app = express();
const path = require('path');
const connectToDB = require('./db/connect');
const requestLogger = require('./middleware/requestLogger');
const router = require('./routes/router');
require('dotenv').config();

// Chore
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Middleware

// Routing
app.use('/api/v1/tasks', router);

// Not found

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
