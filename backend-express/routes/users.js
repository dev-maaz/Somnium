
const express = require("express");
const { default: userModel } = require("../schemas/userSchema");
const router = express.Router();

router.get("/", (req,res) =>{

    res.send('users list')
})

router.get("/new", (req,res) =>{

    res.render("users/users", {firstName: "Test"});
})

router.post("/create", (req,res)=>{

    const userDetails = req.body;
    console.log(req.body);

    const newUser = new userModel({userDetails})
    newUser.save();


    console.log(userDetails.username)
    res.send('Hi User' )
})

// router
//     .route("/:id")
//     .get((req,res)=>{

//         res.send(`Get user With ID ${req.params.id}`)
//     })
//     .post((req,res)=>{

//         res.send(`Get user With ID ${req.params.id}`)
//     })
//     .delete((req,res)=>{

//         res.send(`Get user With ID ${req.params.id}`)
//     })
//     .put((req,res)=>{

//         res.send(`Get user With ID ${req.params.id}`)
//     });

// router.param("id", (req,res,next,id) => {

//     console.log(id);
//     next()
// })




module.exports = router