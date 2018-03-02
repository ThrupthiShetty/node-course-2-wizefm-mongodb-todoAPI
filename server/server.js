var express = require("express");
var bodyParser = require("body-parser")


var {mongoose} = require('./db/mongoose.js')

var {Todo} = require('./models/todo.js')

var {User} = require('./models/user.js')

var app = express();

app.use(bodyParser.json())

app.post('/todos', (req,res) =>{
    var todo = new Todo({
        text : req.body.text
    })
    console.log(req.body)
    todo.save().then((doc) =>{
        res.send(doc)
    },(e) =>{
        res.status(400).send(e)
    })
})

app.get('/todos',(req, res) =>{
    Todo.find().then((todos) =>{
        res.send({todos})
    },(e) =>{
        res.status(400).send(e);
    })
})

app.listen(3000 , () =>{
    console.log('listening to port 3000')
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


module.exports = {app}