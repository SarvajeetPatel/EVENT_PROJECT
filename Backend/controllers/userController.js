var db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

var user = db.User
var tokenTable = db.token

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, contact_no, address, userType } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10)
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            contact_no: contact_no,
            address: address,
            userType: userType
        }

        const data = await user.create(userData)

        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password, userId } = req.body;

        const data = await user.findOne({ where: { email: email, id: userId } })

        if (!data) {
            res.json({ error: 'No user Found!' })
        } else {
            var passMatch = await bcrypt.compare(password, data.password)
            if (!passMatch) {
                res.json({ error: 'Check Password! No user Found!' })
            }
        }

        if (data && passMatch) {
            var token = jwt.sign({ email: email }, 'your-secret-key')
            await tokenTable.create({ token: token, user_id: data.id })
        }

        res.json({ data, accessToken: token })
    } catch (error) {
        console.log(error.message)
    }
}

const getAllUsers = async (req, res) => {
    try {
        const data = await user.findAll();
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const getUserByID = async (req, res) => {
    try {
        const data = await user.findOne({ where: { id: req.params.id } })
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const deleteUsers = async (req, res) => {
    try {
        const data = await user.destroy({ where: { id: req.params.id }, include: [{ model: tokenTable }] })
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserByID,
    deleteUsers
}