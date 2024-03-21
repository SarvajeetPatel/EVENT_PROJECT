const express = require('express')
const router = express.Router()

const cityController = require('../controllers/cityController')

router.post('/add-city', cityController.addCity)
router.get('/get-all-cities', cityController.getAllCities)
router.get('/get-cityByID/:id', cityController.getCityByID)
router.post('/update-city/:id', cityController.updateCity)
router.get('/delete-city/:id', cityController.deleteCity)

module.exports = router;