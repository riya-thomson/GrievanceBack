//1 import
const mongoose = require('mongoose');

//2 creating schema
const schema = mongoose.Schema({
    Name:String,
    Email:String,
    Sub:String,
    Description:String,
    Category:String,
    Urgency_level:String
})

const userModel = mongoose.model("user", schema);
module.exports = userModel;