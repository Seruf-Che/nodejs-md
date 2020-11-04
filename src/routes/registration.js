const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const UserModel = require('../models/user');

router
  .route("/registration")
  .post((req, res) => {
    const userData = {fullName, birthDate, email, password} = req.body;

    bcrypt.hash(userData.password, 10)
      .then(hash => {
        const user = new UserModel({
          ...userData,
          password: hash
        });

        user.save()
          .then(result => {
            res.status(201).json({
              message: "User created!"
            })
          })
          .catch(err => res.send(err));
      })
      .catch(err => res.send(err));
  });

module.exports = router;