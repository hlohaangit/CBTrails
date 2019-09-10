const express= require("express");
const srv = express();

srv.get('/a',(req,res)=>{
    res.send('AAA');
})


srv.get('/b',(req,res)=>{
    res.send('BBB');
})


srv.use((req,res)=>{
    res.send("<h2>404 not found</h2>")
})

srv.listen(2543);