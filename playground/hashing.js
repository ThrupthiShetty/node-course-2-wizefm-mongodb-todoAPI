const {SHA256} = require("crypto-js")

const jwt = require("jsonwebtoken")

var data = {
    id : 4
}
var token = jwt.sign(data,'123abc')
console.log(token)

var decodedResult = jwt.verify(token ,'123abc')
console.log('decoded result',decodedResult)

// var message  = 'I am thrupthi'

// var hash = SHA256(message).toString();

// console.log('message is ',message)
// console.log('encrypted value is ',hash)



// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
// console.log('before changing id ',token.data)
// console.log('before changing id ',token.hash)
// token.data.id = 57777;
// console.log('after changing id',token.data)
// token.hash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
// console.log('after changing hash with new id ',token.hash)
// var resultHash =SHA256(JSON.stringify(token.data) + 'somesecret').toString()
// console.log(token.data)
// console.log(resultHash)
// console.log(token.hash)
// if(resultHash===token.hash){
    
//     console.log('data was not changed')

// }else{
//     console.log('data was changed')

// }