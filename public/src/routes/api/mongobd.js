const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.get('/api/users', (req, res) =>
{
    res.send('Hello world')
})

module.exports = router