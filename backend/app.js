const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("welcome to real-estate properties")
})


// const router = require("./routes/router");
// app.use("/", router);
mongoose.connect(process.env.SERVER_CONNECT,()=>{
    console.log('connected to DB');
})

const PORT = process.env.PORT || 5000;

//Import routes
const postRoute = require('./routes/Form')
app.use("/api/v1/posts",postRoute)


app.listen(5000,()=>{
    console.log("listening server 5000...");
})