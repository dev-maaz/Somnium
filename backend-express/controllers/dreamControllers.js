

const { model } = require("mongoose");
const dreamSchema = require('../schemas/dreamSchema');

const dreamModel = new model('Dream', dreamSchema);

const getDream = async(req,res) => {

    try {
        //Search for dream in db
        const newDream = await dreamModel.findOne({title: req.params.title});

        if(newDream!==null) res.json(newDream);

        else throw new Error('Dream not Found!');

    } catch (error) {
        res.send(error);
    }


}

const createDream = async(req,res) => {

    try {

        //Create a document with the requirements given in the body
        const newDream = await dreamModel.create(req.body);

        if(newDream!==null) res.json(newDream);

        else throw new Error('Dream could not be created!');

    } catch (error) {
        res.send(error);
    }
}

module.exports = {

    getDream,
    createDream
}
