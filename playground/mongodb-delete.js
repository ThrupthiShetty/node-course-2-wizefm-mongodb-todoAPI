//const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();

console.log(obj)

MongoClient.connect('mongodb://wizetrndbuser:welcome1@localhost:27017/wizetrndb', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb server')
    }

//deletemany
//   db.collection('Todos').deleteMany({text :'Eat lunch'}).then((result) =>{
//       console.log(result)
//   });
    
    
   //deleteOne
//   db.collection('Todos').deleteOne({text :'Eat lunch'}).then((result) =>{
//       console.log(result)
//   });
     
  //deleteOne
//   db.collection('Todos').findOneAndDelete({completed : false}).then((result) =>{
//       console.log(result)
//   });
     
     
      db.collection('Users').deleteMany({name : 'Thrupthi Shetty'}).then((result) =>{
      console.log(result)
  });


    // db.close();
})