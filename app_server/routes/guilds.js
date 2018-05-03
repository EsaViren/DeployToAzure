const express = require('express');
const router = express.Router();

const ctrlGuilds = require('../controllers/ctrlGuilds');



router.get('/', ctrlGuilds.rankList);

module.exports = router;
