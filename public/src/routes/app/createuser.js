const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../../models/user.js');


router.post('/createuser', (req, res) =>
{
    const { name, email, password } = req.body
    const newUser = new user({ name, email, password })
    newUser.save()
    res.send('User created')
});