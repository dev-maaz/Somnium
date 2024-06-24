
const {model} = require('mongoose');
const dreamscapeSchema = require('../schemas/dreamscapeSchema');

const dreamscapeModel = new model('Dream Scape', dreamscapeSchema);

const getDreamscape = async(req,res) => {

    try {
        
        const newDreamscape = dreamscapeModel.findOne({title: req.params.title});
        if (newDreamscape) res.json(newDreamscape);
        else throw new Error('Dreamscape not Found!');

    } catch (error) {
        res.send(error);
    }


}

const createDreamScape = async(req,res) => {

    try {
        
        const newDreamscape = dreamscapeModel.create(req.body);
        if (newDreamscape) res.json(newDreamscape);
        else throw new Error('Dreamscape could not be created!');

    } catch (error) {
        res.send(error);
    }
}

module.exports = {

    getDreamscape,
    createDreamScape
}

