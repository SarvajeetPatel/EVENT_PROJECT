const express = require('express')
const router = express.Router()

const stateController = require('../controllers/stateController')

router.post('/add-State', stateController.addState)
router.get('/get-all-states', stateController.getAllStates)
router.get('/get-stateByID/:id', stateController.getStateByID)
router.post('/update-state/:id', stateController.updateState)
router.get('/delete-state/:id', stateController.deleteState)

module.exports = router;