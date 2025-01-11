const { Schema } = require("mongoose");

const user = new Schema({
    name: String,
    email: String,
    password: String
})


module.exports = user