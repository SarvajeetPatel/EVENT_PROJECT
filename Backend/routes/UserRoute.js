const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController.js')
const adminLogin = require('../middlewares/adminLogin.js')
const authJwt = require('../middlewares/AuthJwt.js')

router.post('/register-users',userController.registerUser)
router.post('/login-user',userController.loginUser)
router.post('/get-all-users', adminLogin, authJwt, userController.getAllUsers)
router.post('/get-user/:id', adminLogin, authJwt, userController.getUserByID)
router.get('/delete-user/:id', userController.deleteUsers)

module.exports = router;