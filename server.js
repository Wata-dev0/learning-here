const express = require('expess')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.listen(3000, '0.0.0.0', () =>
{
    console.log('Server runing in port 3000, http://ip:3000')
})
