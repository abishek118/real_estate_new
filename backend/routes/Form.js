const express = require("express")
const form = express.Router();
const Post = require("../model/Post")
const multer = require("multer")


const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./photos')
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+'--'+file.originalname)
    }
})

const upload = multer({storage:fileStorage})

form.get("/", async (req, res)=>{
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
})

form.post('/', upload.single('image'),  async (req,res)=>{
    console.log(req.body,req.file);
    const post = new Post({
        image: req.file.filename,
        PPID: req.body.PPID,
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
    // const data= new Post({...req.body});
    // res.json({
    //     status:"sucess",
    //     data:await data.save(),
    // });
});

// form.update(
//     {"Employeeid" : 1},
//     {$set: { "EmployeeName" : "NewMartin"}});

module.exports = form;