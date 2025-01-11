const express = require('express')
const router = express.Router()
const user = require('../../models/user')



router.use(express.json())

router.get('/users', async (req, res) => {

});

router.post('/users', (req, res) => {
    const data = req.body
    user.create(data)

    res.json(data)
    console.log(JSON.stringify(data))
});



module.exports = router
