const express= require("express")
const cors = require("cors")

const app = express()
app.use(cors())

var username="rahaman@gmail.com"
var password = 123456

app.get("http://netflix-backend.up.railway.app/login",function(req,res){

    console.log(req.query.username)
    if(req.query.username === username  && req.query.password == password )
    {
        res.send(true)
    }
    else{
        res.send(false)
    }
})

app.listen(3000,function(){
    console.log("server started....");
})