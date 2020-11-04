const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const registrationRoute = require('./src/routes/registration');
const loginRoute = require('./src/routes/login');
const citiesRoute = require('./src/routes/cities');

const PORT = 3012;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@nodejs-md.axtof.mongodb.net/${process.env.MONGO_DB_DBNAME}?w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Database connection was failed", err));

app.use(registrationRoute);
app.use(loginRoute);
app.use(citiesRoute);

app.listen(PORT, () => console.log(`Server is running port ${PORT}`));