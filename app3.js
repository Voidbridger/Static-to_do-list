const express= require('express');
const bodyParser= require('body-parser');
const path = require('path');

 
var app = express();
var example="working";
var items=[];
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("list1",{ele:items});
});
app.post("/",function(req,res){
    var item= req.body.elel;
    items.push(item);
    res.redirect("/");

});


app.listen(8000,function(){
    console.log("server started ");
});

