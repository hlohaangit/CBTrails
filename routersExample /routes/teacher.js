const route= require('express').Router();

let teacher = [
    {name: "harshit", subject:"web devb"},
    {name: "joban", subject: "cpp"}

]

route.get('/',(req,res)=>{
    res.send(teacher)
})
route.get("/add",(req,res)=>{
    teacher.push({
        name: req.query.name,
        subject:req.query.subject
    })
})

route.get('/:id',(req,res)=>{
    res.send (teacher[req.params.id])
})




module.exports=route;