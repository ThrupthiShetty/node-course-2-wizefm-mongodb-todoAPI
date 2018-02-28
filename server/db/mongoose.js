var mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://wizetrndbuser:welcome1@localhost:27017/wizetrndb')


module.exports ={mongoose}