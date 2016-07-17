const express = require('express');
const app = express();

//
app.use('/static',  express.static(__dirname + '/node_modules'));
app.use('/public',  express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.listen(3000,()=>{
  console.log("Rodando");
});
