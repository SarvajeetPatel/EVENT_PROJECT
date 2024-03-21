var db = require('../models')
var state = db.state;

const addState = async (req, res) => {
    try {
        const { stateName } = req.body;
        const data = await state.create({ name: stateName })
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const getAllStates = async (req, res) => {
    try {
        const data = await state.findAll()
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const getStateByID = async (req, res) => {
    try {
        const data = await state.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const updateState = async (req, res) => {
    try {
        const { stateName } = req.body;
        const data = await state.update({
            name: stateName
        }, {
            where: {
                id: req.params.id
            }
        })
        res.json({ data })

    } catch (error) {
        console.log(error.message)
    }
}

const deleteState = async (req, res) => {
    try {
        const data = await state.destroy({ where: { id: req.params.id } })
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    addState,
    getAllStates,
    getStateByID,
    updateState,
    deleteState
}