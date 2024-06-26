
const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers")

router
    .get("/get/:username",userControllers.getUser)
    .post("/create",userControllers.createUser)
    .put("/update",userControllers.updateUser)
    .patch("/edit",userControllers.editUser)
    .delete("/delete",userControllers.deleteUser)


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