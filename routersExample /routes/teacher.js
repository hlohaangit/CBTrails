const express = require('express');
const router = express.Router();
const route=router();

let teacher = [
    {name: "harshit", subject:"web devb"},
    {name: "joban", subject: "cpp"}

]

route.get('/',(req,res)=>{
    res.send(reacher)
})
route.get('/:id',(req,res)=>{
    res.send (teacher[req.params.id])
})


module.exports=route;