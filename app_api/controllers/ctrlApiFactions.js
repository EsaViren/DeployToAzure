const mongoose = require('mongoose');

const factionsModel = mongoose.model('factions');

const rankList = function (req, res) {

    factionsModel.find({}, function(err, factions) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(factions);
        }
    });
};

const addFaction = function (req, res) {
    factionsModel.create(req.body, function(err, newFaction){
        if (err) {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newFaction);
        }
    })
};

module.exports = {
    rankList,
    addFaction
};
