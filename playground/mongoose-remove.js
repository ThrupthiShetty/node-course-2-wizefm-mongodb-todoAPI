const { ObjectID } = require("mongodb")
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo")
const {Users} = require("./../server/models/user")

// Todo.remove({}).then((result) =>{
//     console.log(result)
// });



// Todo.findOneAndRemove({_id :'5a9ab56cf8280cff48b70068'}).then((result) =>{
//     console.log(result)
// });

Todo.findByIdAndRemove('5a9ab5d3f8280cff48b70099').then((result) =>{
    console.log(result)
});