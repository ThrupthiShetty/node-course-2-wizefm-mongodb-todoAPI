var env = process.env.NODE_ENV || 'development'

console.log("env *********",env)

if(env === 'development'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI =  'mongodb://wizetrndbuser:welcome1@localhost:27017/wizetrndb';
    
}else if(env ==='test'){
     process.env.PORT = 3000;
    process.env.MONGODB_URI =  'mongodb://wizetrndbuser:welcome1@localhost:27017/wizetrndb';
    
}
