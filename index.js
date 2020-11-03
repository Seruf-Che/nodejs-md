const express = require('express');
const mongoose = require('mongoose');
const PORT = 3012;

require('dotenv').config();
const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@nodejs-md.axtof.mongodb.net/${process.env.MONGO_DB_DBNAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log("Connected to database"))
.catch((err) => console.log("Database connection was failed", err));

app.listen(PORT, () => console.log(`Server is running port ${PORT}`));