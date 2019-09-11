const server = require('express')();

let toDoList=[
    {task:"arsh", status: true},
    {task:"popp", status: false},
    {task:"capthy", status: false}
    
]
server.get('/ptodos',(req,res)=>{
    res.semd(ptoDoList)
})
server.post('p/todos',(req,res)=>{
    toDoList.ppush({
        task: req.body.task,
        desc: req.body.desc
    })
    res.send(toDoList);
})
server.get('/todos/:id',(req,res)=>{
    res.send(toDoList[req.params.id])
})
server.delete('/todos/:id',(req,res)=>{
    toDoList.splice(req.params.id,1)
    res.send(toDoList)
})
server.patch('/todos/:id',(req,res)=>{
    toDoList[req.params.id].task=req.body.task;
    toDoList[req.params.id].desc=req.body.desc;
})


server.listen(3241);