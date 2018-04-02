const mongoose = require('mongoose');

const factionsModel = mongoose.model('factions');

const factionList = function (req, res) {
    res
        .status(200)
        .json({"faction" : "kilta"});
};

const addFaction = function (req, res) {
    res.status(201).json({"Add faction" : "Work in progress"});
};

module.exports = {
    factionList,
    addFaction
};
