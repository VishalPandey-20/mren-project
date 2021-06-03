const express = require("express");
router = express.Router();
const all_user = require("../databaseModel/userModel");
router.get("/",(req,res)=>{
    res.send("hello world");
    console.log("hello world");
})


router.post("/saved",(req,res)=>{
    console.log(req.body);
    try{
        let user_data = new all_user(req.body)
        user_data.save()
        .then((data)=>{
            res.send("done");
            console.log(data);
        }).catch((er)=>{
            console.log(er);
        })
    }catch{
        console.log(error);
    }
})

router.get("/all_data",(req,res)=>{
    try{
        // var mysort = { name: 1 }; 
        all_user.find()
        .then((data)=>{
            res.send(data);
            // console.log(data);
        }).catch((er)=>{
            console.log(er);
        })
    }catch(err){
        console.log(err);
    }
})




router.put("/update/:_id",(req,res)=>{
    try{
        all_user.find({_id:req.params._id})
        .updateOne(req.body)
        .then(()=>{
            res.send("update succesfull");
            console.log("update succesfull");
        }).catch((er)=>{
            console.log(er);
        })
    }catch(err){
        console.log(err);
    }
})


router.delete("/delete/:_id",async(req,res)=>{
    try{
        all_user
        .remove({_id:req.params._id})
        .then((data)=>{
            res.send("data delete successfully,...");
            console.log("data delete successfully,...");
        }).catch((er)=>{
            console.log(er);
        })
    }catch(err){
        console.log(err);
    }
})

module.exports = router