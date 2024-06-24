
const express = require("express");
const router = express.Router();
const dreamscapeControllers = require("../controllers/dreamscapeControllers")

router
    .get("/get/:username",dreamscapeControllers.getDreamscape)
    .post("/create",dreamscapeControllers.createDreamScape)
    // .put("/update",dreamControllers.updateUser)
    // .patch("/edit",dreamControllers.editUser)
    // .delete("/delete",dreamControllers.deleteUser)


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