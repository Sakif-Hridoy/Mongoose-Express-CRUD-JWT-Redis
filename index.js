const express = require('express');
const mongoose = require('mongoose');
const todoRouters = require("./routers/todoRouters")


const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://hridoy:sdh0612xtrm@cluster0.djg6r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log('Connection Successful'))
    .catch(err=>console.log(err))

function errorHandler(err,req,res,next){
    if(res.headersSent){
        return next(err)
    }
    res.status(500).json({error:err})
}

app.use('/todo',todoRouters);


app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})