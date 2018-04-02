const express = require('express');
const router = express.Router();

const ctrlApiFactions = require('../controllers/ctrlApiFactions');
const ctrlApiGuilds = require('../controllers/ctrlApiGuilds');

router
    .route('/guilds')
    .get(ctrlApiGuilds.guildList)
    .post(ctrlApiGuilds.addGuild);

router
    .route('/factions')
    .get(ctrlApiFactions.factionList)
    .post(ctrlApiFactions.addFaction);

module.exports = router;
