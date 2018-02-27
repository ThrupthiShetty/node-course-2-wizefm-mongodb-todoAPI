//const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();

console.log(obj)

MongoClient.connect('mongodb://wizetrndbuser:welcome1@localhost:27017/wizetrndb', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server')
    }

//update operator using set

// db.collection('Todos').findOneAndUpdate({
//     _id : new ObjectID('5a959296f8280cff48b6c5d8')
// },{
//     $set : {
//         completed : false
//     }
// },{
//     returnOriginal : false
// }).then((result)=>{
//   console.log(result) 
// })

db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5a94574d7c998a540c9c4365')
},{
    $set : {
        name : 'appu shetty'
    },
    
    $inc :{
        age : 1
    }

},


{
    returnOriginal : false
}).then((result)=>{
   console.log(result) 
})


    // db.close();
})