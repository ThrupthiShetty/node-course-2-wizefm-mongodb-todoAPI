//const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();

console.log(obj)

MongoClient.connect('mongodb://wizetrndbuser:welcome1@localhost:27017/wizetrndb', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server')
    }


    // db.collection('Todos').find({
    //     _id: new ObjectID('5a9455f8c8d08253ce641041') 
    //   // _id: "5a9455f8c8d08253ce641041"//we need to use the object id to find the details as declared up
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 3))
    // }, (err) => {
    //     console.log('unable to reach todos', err)
    // })
    
    // count
    
    db.collection('Todos').find({
       // _id: new ObjectID('5a9455f8c8d08253ce641041') 
       // _id: "5a9455f8c8d08253ce641041"//we need to use the object id to find the details as declared up
    }).count().then((count) => {
        console.log('Todos count',count)
        //console.log(JSON.stringify(docs, undefined, 3))
    }, (err) => {
        console.log('unable to reach todos', err)
    })
    
      db.collection('Users').find({
       name : 'Thrupthi Shetty'
    }).count().then((count) => {
        console.log('Users count',count)
        //console.log(JSON.stringify(docs, undefined, 3))
    }, (err) => {
        console.log('unable to reach todos', err)
    })


    // db.close();
})