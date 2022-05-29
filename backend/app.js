const express = require('express');

const app = express();

app.get("/post",(req,res)=>{
    res.send("welcome to real-estate properties")
})

app.listen(5000,()=>{
    console.log("listening server 5000...");
})