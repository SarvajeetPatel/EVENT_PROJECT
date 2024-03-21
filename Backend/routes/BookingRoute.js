const express = require('express')
const router = express.Router()

const bookingController = require('../controllers/bookingController')
const userLogin = require('../middlewares/userLogin')
const adminLogin = require('../middlewares/adminLogin')
const authJwt = require('../middlewares/AuthJwt')

router.post('/add-booking', userLogin, bookingController.addBooking)
router.post('/get-all-bookings', adminLogin, bookingController.getAllBookings)
router.get('/get-bookingByID/:id', bookingController.getBookingsByID)
router.post('/get-user-bookings/:id', adminLogin, bookingController.getUserBookings)
router.post('/update-booking/:id', userLogin, bookingController.updateBooking)

module.exports = router;  