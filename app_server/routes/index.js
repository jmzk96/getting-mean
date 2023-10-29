var express = require('express');
const crtlMain = require('../controllers/main')
var router = express.Router();

/* GET home page. */


router.get('/', crtlMain.index);



module.exports = router;
