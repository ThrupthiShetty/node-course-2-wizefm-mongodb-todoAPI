const mongoose = require('mongoose');
const validator = require("validator")
const jwt = require("jsonwebtoken")
const _ = require("lodash")

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique : [true, 'A user with that email address exists. The email must be unique.'],
        minlength: 1,
        
        validate: {
            validator: validator.isEmail,
            maessage: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
    tokens : [{
       access :{
           type: String,
        required: true
       },
       token:{
           type: String,
        required: true
       }
            
        }]
})

UserSchema.methods.toJSON = function () {
    var user = this;
    var  userObject = user.toObject();
    return _.pick(userObject,['_id','email'])
    
}


//used to generate this keyword
UserSchema.methods.generateAuthToken = function() {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id : user._id.toHexString() , access} , 'abc123').toString();
    
    
  //  user.tokens.push({access,token})
user.tokens = user.tokens.concat([{access,token}])

return user.save().then(() =>{
    console.log(token)
    return token;
})
    
}
var User = mongoose.model('User', UserSchema)
    


module.exports = { User }
