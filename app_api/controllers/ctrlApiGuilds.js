const mongoose = require('mongoose');

const guildsModel = mongoose.model('guilds');

const rankList = function (req, res) {

    guildsModel.find({}, function(err, guilds) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(guilds);
        }
    });
};

const addGuild = function (req, res) {
    guildsModel.create(req.body, function(err, newGuild){
        if (err) {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newGuild);
        }
    })
};

module.exports = {
    rankList,
    addGuild
};
