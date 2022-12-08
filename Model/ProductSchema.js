const mongoose = require("mongoose")


const mongooseSchema = mongoose.Schema({

name:{type:String, required:true},
price:{type:Number, required:true},
number:{type:Number, required:true},



})

module.exports = mongoose.model("marketproducts", mongooseSchema)