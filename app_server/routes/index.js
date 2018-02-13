const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlGuilds = require('../controllers/ctrlGuilds');
const ctrlFactions = require('../controllers/ctrlFactions');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/', ctrlGuilds.ranklist);
router.get('/', ctrlFactions.ranklist);

module.exports = router;
