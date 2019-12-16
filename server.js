const express = require("express"),
    app = express(),
port = 8000,
path = require('path'),
mongoose = require("mongoose"),
server = app.listen(port, () => console.log(`listerning on port ${port}`));

// app.use(express.static(__dirname + '/static'));
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.use(express.json());


// app.get('/',(req,res)=>res.sendFile(path.join(__dirname)))

require('./server/config/database')
require('./server/config/routes')(app)

app.use(express.static( __dirname + '/public/dist/public' ));
//reroutes to Angular project if it doesn't hit express routes
app.all("*", (req,res,next)=>{
    res.sendFile(path.resolve("/public/dist/public/index.html"))
    });