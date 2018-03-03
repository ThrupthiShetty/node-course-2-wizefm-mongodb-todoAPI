const { ObjectID } = require("mongodb")

const expect = require("expect")
const request = require("supertest")

const {app} = require("./../server")
const {Todo} = require("./../models/todo")

var todosArray = [{
    _id : new ObjectID(),
    text : "text 1here"
},
{   _id : new ObjectID(),
    text : 'text 2 here',
    completed : true,
    completedAt : 333
}]

beforeEach((done) =>{
    Todo.remove({}).then(() => {
      Todo.insertMany(todosArray) ; 
    }).then(() => done())
})


describe('POST/todos', () => {
    
    it('should create a new todo' , (done) =>{
        var text = 'Test todo text';
        
        request(app)
        .post('/todos')
        .send({ text})
        .expect(200)
        .expect((res) =>{
            expect(res.body.text).toBe(text);
        }) 
        .end((err,res) =>{
            if(err){
                return done(err);
            }
            
            Todo.find({text}).then((todos) =>{
                expect(todos.length).toBe(1)
                expect(todos[0].text).toBe(text)
                done();
            }).catch((e) => done(e))
        })
    })
   
    it('should not create a new todo with invalid data' , (done) =>{
      //  var text = 'Test todo text';
        
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
         
        .end((err,res) =>{
            if(err){
                return done(err);
            }
            
            Todo.find().then((todos) =>{
                expect(todos.length).toBe(2)
                //expect(todos[0].text).toBe(text)
                done();
            }).catch((e) => done(e))
        })
    })
    
    
   
    
})



describe('GET /todos',() =>{
    it('should get all todos' ,(done)=>{
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) =>{
          expect(  res.body.todos.length).toBe(2)
        }).end(done);
    })
})




describe('GET /todos/:id',() =>{
    it('should return todo doc with sepecific id' ,(done)=>{
        request(app)
        .get(`/todos/${todosArray[1]._id.toHexString()}`)
        .expect(200)
        .expect((res) =>{
          expect(res.body.todos.text).toBe(todosArray[1].text)
        }).end(done);
    })
    
    it('should return 400 if todo not found' ,(done)=>{
        var hexId = new ObjectID().toHexString();
        request(app)
        .get(`/todos/${hexId}`)
        .expect(400)
        .end(done);
    })
    
    it('should return 400 for non object Ids' ,(done)=>{
        var hexId = new ObjectID().toHexString();
        request(app)
        .get(`/todos/123aabc`)
        .expect(400)
        .end(done);
    })
})



describe('DELETE /todos/:id',() =>{
    it('should remove a todo' ,(done)=>{
        var hexId = todosArray[1]._id.toHexString();
        request(app)
        .delete(`/todos/${hexId}`)
        .expect(200)
        .expect((res) =>{
          expect(res.body.todos._id).toBe(hexId);
        }).end((err,res) =>{
            if(err){
                return done(err)
            }
            Todo.findById(hexId).then((todos) =>{
                expect(todos).toNotExist();
                
                done();
            }).catch((e) => done(e))
        });
    })
    
    it('should return 400 if todo not found' ,(done)=>{
        var hexId = new ObjectID().toHexString();
        request(app)
        .delete(`/todos/${hexId}`)
        .expect(400)
        .end(done);
    })
    
    it('should return 400 for non object Ids' ,(done)=>{
        var hexId = new ObjectID().toHexString();
        request(app)
        .delete(`/todos/123aabc`)
        .expect(400)
        .end(done);
    })
})

describe('PATCH /todos/:id',() =>{
    it('should update a given todo' ,(done)=>{
        var hexId = todosArray[0]._id.toHexString();
        
        var text ='This should be the updated text'
      
        request(app)
        .patch(`/todos/${hexId}`)
        .send({
            completed : true,
            text : text
        })
        .expect(200)
        .expect((res) =>{
          expect(res.body.todo.text).toBe(text);
          expect(res.body.todo.completed).toBe(true)

          expect(res.body.todo.completedAt).toBeA('number')
        }).end(done);
            
            
    })     
    it('should clear comlpletedat when todo is not completed' ,(done)=>{
        var hexId = todosArray[1]._id.toHexString();
        
        var text ='This should be the updated text'
      
        request(app)
        .patch(`/todos/${hexId}`)
        .send({
            completed : false,
            text : text
        })
        .expect(200)
        .expect((res) =>{
          expect(res.body.todo.text).toBe(text);
          expect(res.body.todo.completed).toBe(false)

          expect(res.body.todo.completedAt).toNotExist()
        }).end(done);
            
            
    })     
       
})
