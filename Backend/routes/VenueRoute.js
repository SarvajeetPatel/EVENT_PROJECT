const express = require('express')
const router = express.Router()

const VenueController = require('../controllers/VenueController')
const adminLogin = require('../middlewares/adminLogin')

router.post('/add-Venue', adminLogin, VenueController.addVenue)
router.get('/get-VenueByID/:id', VenueController.getVenueByID)
router.get('/get-all-Venues', VenueController.getAllVenues)
router.post('/update-Venue/:id', adminLogin, VenueController.updateVenue)
router.get('/delete-Venue/:id', VenueController.deleteVenue)

module.exports = router;