const express = require('express');
const country = require('../controllers/country.controller');

const router = express.Router();

router.get('/country', country.findAll);

module.exports = router;