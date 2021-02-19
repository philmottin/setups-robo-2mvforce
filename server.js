const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
