const express = require('express');
const router = express.Router();

const ctrlFactions = require('../controllers/ctrlFactions');


router.get('/f', ctrlFactions.rankList);

module.exports = router;
