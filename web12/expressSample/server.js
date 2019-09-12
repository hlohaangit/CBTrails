const express = require('express');
const srv= express();
const todoRoute=require('./routes/todolist')

srv.use(express.json());
srv.use(express.urlencoded({extended: true}))

srv.get("/hello",(req,res)=>{
    res.send('hello dear, how are you ?')
})
srv.use ('/public', express.static(__dirname + "/public"))

srv.use('/todos',todoRoute)

srv.listen(1224) 