const express = require('express');

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const router = express.Router();

/* GET home page. */

/* Routes for Location pages */ 
router.get("/",ctrlLocations.homeList);
router.get("/location",ctrlLocations.locationInfo);
router.get("/location/review/new",ctrlLocations.addReview);

/* Routes for Other pages */
router.get("/about", ctrlOthers.about);

module.exports = router;
