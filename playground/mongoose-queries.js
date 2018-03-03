const { ObjectID } = require("mongodb")
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo")
const {Users} = require("./../server/models/user")

var id = '5a94574d7c998a540c9c4365';

if (!ObjectID.isValid(id)) {
    console.log('id is not valid')
}

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos',todos)

// })

// Todo.findOne({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos One',todos)

// })

Todo.findById('5a999fc4a8225047656bd6db').then((todos) => {

    if (!todos) {

        return console.log("id not found")
    }
    console.log('Todos By Id', todos)

}).catch((e) => console.log(e))




Users.findById('5a9a63ce52c3870423808950').then((user) => {

    if (!user) {

        return console.log(" userid not found")
    }
    console.log('User By Id found', JSON.stringify(user,undefined,2))

}).catch((e) => console.log(e))

