var db = require('../models')
var city = db.city

const addCity = async (req, res) => {
    try {
        const { state_id, cityName } = req.body;
        const data = await city.create({
            name: cityName,
            state_id: state_id
        })
        res.json({ data })

    } catch (error) {
        console.log(error.message)
    }
}

const getAllCities = async (req, res) => {
    try {
        const data = await city.findAll()
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const getCityByID = async (req, res) => {
    try {
        const data = await city.findOne({ where: { id: req.params.id } })
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const updateCity = async (req, res) => {
    try {
        const { cityName, state_id } = req.body;
        const originalData = await city.findOne({ where: { id: req.params.id } })

        if (originalData.name === cityName && state_id === originalData.state_id) {
            res.send('No Updation Required!')
        } else {
            const data = await city.update({
                name: cityName, state_id: state_id
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.json({ data })
        }

    } catch (error) {
        console.log(error.message)
    }
}

const deleteCity = async (req, res) => {
    try {
        const data = await city.destroy({ where: { id: req.params.id } })
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {
    addCity,
    getAllCities,
    getCityByID,
    updateCity,
    deleteCity
}