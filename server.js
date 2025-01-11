const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./public/src/routes/api/mongobd.js')
const os = require('os')

mongoose.connect('mongodb://mongo:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })

const networkInterfaces = os.networkInterfaces()
let ipAddress = '127.0.0.1' // Default to localhost
for (const interfaceName in networkInterfaces) {
    const addresses = networkInterfaces[interfaceName]
    for (const address of addresses) {
        if (address.family === 'IPv4' && !address.internal) {
            ipAddress = address.address
            console.log(`IP Address: ${address.address}`)
        }
    }
}

if(mongoose.connection)
{
    console.log('Connected to database')
    console.log('---------------------')
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(express.static('public'))


app.listen(3000, '0.0.0.0', () =>
{
    console.log(`Server runing in port 3000, http://${ipAddress}:3000`)
})



