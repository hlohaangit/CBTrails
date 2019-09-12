const express = require ("express");

const server = express();

server.get('/',function(req, res,next){
    res.send('hello world');
    res.send('there is nothing new here');
})

server.get('/greet/:tod/:name',function(req,res,next){
    let tod = "morning"
    switch (req.params.tod){
        case "morning" : tod = "morning"; break;
        case "evening" : tod = "evening"; break;
    }
    let greeting="good "+req.params.tod+" " + req.params.name
    res.send(greeting)
})

server.get('/html',function(req,res,next){
    res.send(`
    <html>
        <body>
        <h1> This is a html page </h1>
        <i> this looks really good </i>
        </body>
    </html>
    `)
})

server.listen(2121);