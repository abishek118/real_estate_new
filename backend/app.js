const express = require('express');
require('dotenv/config')
const mongoose=require('mongoose')
const Post=require('./model/Post');
const app = express();
const multer = require("multer")
mongoose.connect(process.env.SERVER_CONNECT,()=>{
    console.log('connected to DB');
})
//



const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'photos')
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+'--'+file.originalname)
    }
})

const upload = multer({storage:fileStorage})
app.post('/', upload.single('image'),  async (req,res)=>{
    console.log(req.body,req.file);
    const post = new Post({
        PPID: req.body.PPID,
        image: req.file.filename,
        property: req.body.property,
        contact: req.body.contact,
        area: req.body.area,
        views: req.body.views,
        status: req.body.status,
        daysLeft: req.body.daysLeft
    });
    try{
        const savedPost= await post.save();
        res.json(savedPost);
    }catch(e){
        res.json({msg:e});
    }
   
});
app.get("/search/:key", async (req, res)=>{
       console.log(req.params.key)
        let data =await Post.find({
            "$or":[{"PPID":{$regex:req.params.key}}]

        })
        res.send(data)
    })
app.listen(5000,()=>{
    console.log("listening server 5000...");
})