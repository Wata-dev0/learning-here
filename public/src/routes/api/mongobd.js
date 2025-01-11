const express = require('express')
const router = express.Router()
const user = require('../../models/user')


router.use(express.json())

const testData = []

router.get('/users', (req, res) => {
    res.json(testData)
    console.log(JSON.stringify(testData))
});

router.post('/users', (req, res) => {
    const data = req.body
    testData.push(data)
    res.json(data)
    console.log(JSON.stringify(data))
});



module.exports = router