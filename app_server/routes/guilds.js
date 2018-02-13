const express = require('express');
const router = express.Router();

const ctrlGuilds = require('../controllers/ctrlGuilds');



router.get('/', ctrlGuilds.ranklist);

module.exports = router;
