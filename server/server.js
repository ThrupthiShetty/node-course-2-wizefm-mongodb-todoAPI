const { ObjectID } = require("mongodb")

var express = require("express");
var bodyParser = require("body-parser")

const port = process.env.PORT || 3000;
var { mongoose } = require('./db/mongoose.js')

var { Todo } = require('./models/todo.js')

var { User } = require('./models/user.js')

var app = express();

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })
    console.log(req.body)
    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos })
    }, (e) => {
        res.status(400).send(e);
    })
})

//GETb/todos/12345
app.get('/todos/:id', (req, res) => {
    //res.send(req.params)

    var id = req.params.id;

    //valid id using isValid
    //400 send back emmpty send
    if (!ObjectID.isValid(id)) {
       // console.log('id is not valid')
        return res.status(400).send();
    }

    //findBy Id

    Todo.findById(id).then((todos) => {

        // success
        // if no todo send back 404 with empty bode

        if (!todos) {

            return res.status(400).send();
        }
        //if todo send it back

       // res.send(JSON.stringify(todos, undefined, 2))
        res.send({todos})
        //console.log('Todos By Id', todos)

    }).catch((e) => {
         res.status(400).send()
    })
})

app.listen(port, () => {
    console.log('listening to port ',port)
})




// var newtodo2 = new Todo({
//     text : ' default values '
//   // completed :true,
//   // completedAt : 23
// });

// newtodo2.save().then((doc) =>{
//     console.log(JSON.stringify(doc,undefined,3))
// },(e) =>{
//     console.log('unaable to save')


// })


module.exports = { app }
