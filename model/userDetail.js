const mongoose = require('mongoose')

const detailschema = mongoose.Schema({
    Name:String,
    Email:String,
    Password:String
})

const userdetailModel = mongoose.model('detailuser', detailschema)
module.exports = userdetailModel