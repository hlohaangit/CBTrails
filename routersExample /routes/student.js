const route= require('express').Router();

let students=[
    {name:"arsh",clg: "TU", year: "I"},
    {name:"pop",clg: "pU", year: "II"},
    {name:"cathy",clg: "bU", year: "III"}
    
]

route.get('/',(req,res)=>{
    res.send(students)
})

route.post('/',(req,res)=>{
    students.push({
        name: req.body.name,
        clg: req.body.clg,
        year: req.body.year
    })
    res.send(students);
})
route.get('/:id',(req,res)=>{
    res.send(student[req.params.id])
})

module.exports=route;