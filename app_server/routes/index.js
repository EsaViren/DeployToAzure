const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlGuilds = require('../controllers/ctrlGuilds');
const ctrlFactions = require('../controllers/ctrlFactions');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/guilds', ctrlGuilds.rankList);
router.get('/factions', ctrlFactions.rankList);

router
    .route('/guilds/add')
    .get(ctrlGuilds.showForm)
    .post(ctrlGuilds.addData);

module.exports = router;
