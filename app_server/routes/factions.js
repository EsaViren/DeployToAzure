const express = require('express');
const router = express.Router();

const ctrlFactions = require('../controllers/ctrlFactions');


router.get('/', ctrlFactions.ranklist);

module.exports = router;
