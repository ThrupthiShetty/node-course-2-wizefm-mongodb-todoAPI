//const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();

console.log(obj)

MongoClient.connect('mongodb://wizetrndbuser:welcome1@localhost:27017/wizetrndb',(err, db) =>{
    if(err){
        return console.log('unable to connect to mongodb server')
    }
    console.log('connected to mongodb server successfully')
    // db.collection('Todos').insertOne({
    //     text : 'Sonething to do here',
    //     completed : false
    // },(err, result) =>{
    //     if(err){
    //         return console.log('unable to insert todo',err)
    
    //     }
    //     console.log(JSON.stringify(result.ops))
    // })
    
    //  db.collection('Users').insertOne({
    //   __id : 77,
    //     name : 'Thrupthi Shetty',
    //     age : 29,
    //     location : 'India'
    // },(err, result) =>{
    //     if(err){
    //         return console.log('unable to insert user',err)
    
    //     }
    //     console.log(JSON.stringify(result.ops[0].__id))
    //     console.log("id is ",result.ops[0].__id.getTimeStamp())
    // })
    
    db.collection('Todos').find().toArray().then((docs) =>{
        console.log('Todos')
        console.log(JSON.stringify(docs,undefined,3))
    },(err) =>{
        console.log('unable to reach todos',err)
    })
    
    
   // db.close();
})