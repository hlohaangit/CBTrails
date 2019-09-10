const express = require('express');
const router = express.Router();
const route=router();

let students=[
    {name:"arsh",clg: "TU", year: "I"},
    {name:"pop",clg: "pU", year: "II"},
    {name:"cathy",clg: "bU", year: "III"}
    
]

route.get('/',(req,res)=>{
    res.send(students)
})
route.get('/:id',(req,res)=>{
    res.send(student[req.params.id])
})

module.exports=route;