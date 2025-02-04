const express = require('express')
const app = express()
const mongoose = require('mongoose')
const os = require('os')
const routes = require('./public/src/routes/api/mongobd.js')

mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)

const networkInterfaces = os.networkInterfaces()
let ipAddress = '127.0.0.1'
for (const interfaceName in networkInterfaces) {
    const addresses = networkInterfaces[interfaceName]
    for (const address of addresses) {
        if (address.family === 'IPv4' && !address.internal) {
            ipAddress = address.address
            console.log(`IP Address: ${address.address}`)
        }
    }
}

mongoose.connection.once('open', () => {
    console.log('Connected to database')
    console.log('---------------------')
});



app.listen(3000, '0.0.0.0', () =>
{
    console.log(`Server runing in port 3000, http://${ipAddress}:3000`)
})