const mongoose = require('mongoose');

const guildsSchema = new mongoose.Schema({mones:String, kilta:String});
const factionsSchema = new mongoose.Schema({mones:String, faction:String, kilta:String});

mongoose.model('guilds', guildsSchema, 'Guilds');
mongoose.model('factions', factionsSchema, 'Factions');