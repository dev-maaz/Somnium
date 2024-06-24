
const { model } = require("mongoose");
const userSchema = require("../schemas/userSchema");


// Creating a model to access documents.
let userModel = new model('User', userSchema);

const getUser = async (req,res) => {

    console.log(req.params.username + req.body);
    try {
        
        // Find user by username in the URL parameter
        const user = await userModel.findOne({username: req.params.username});

        // Return the user, if it is null then throw an error
        if (user) res.json(user);
        else throw new Error("User not found!");



    } catch (error) {
        res.send(error);
    }
}

const createUser = async(req,res) => {

    try {

        const newUser = new userModel(req.body);
        await newUser.save().then(()=>console.log('saved user!'))

        res.json(newUser);


    } catch (error) {
        res.send(error);
    }
}

const updateUser = (req,res) => {

    try {
        
        

    } catch (error) {
        res.send(error);
    }
}

const editUser = (req,res) => {

    try {


        
    } catch (error) {
        res.send(error);
    }
}

const deleteUser = (req,res) => {

    try {

        
        
    } catch (error) {
        res.send(error);
    }
}

module.exports = {

    getUser,
    createUser,
    updateUser,
    editUser,
    deleteUser
}