const mongoose = require('mongoose');

const guildsModel = mongoose.model('guilds');

const rankList = function (req, res) {

    guildsModel.find({}, function(err, factions) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(factions);
        }
    });
};

const addGuild = function (req, res) {
    guildsModel.create(req.body, function(err, newFaction){
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
    addGuild
};
