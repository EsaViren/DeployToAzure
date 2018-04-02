const mongoose = require('mongoose');

const guildsModel = mongoose.model('guilds');

const guildList = function (req, res) {
    res
        .status(200)
        .json({"mones" : "kilta"});
};

const addGuild = function (req, res) {
    res.status(201).json({"Add guild" : "Work in progress"});
};

module.exports = {
    guildList,
    addGuild
};
