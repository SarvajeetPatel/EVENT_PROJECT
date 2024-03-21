var db = require('../models')
var venue = db.venue
var city = db.city
var state = db.state

const addVenue = async (req, res) => {
    try {
        const { venueName, city_id, capacity, chargesPerHour } = req.body;
        const VenueData = {
            name: venueName,
            city_id: city_id,
            capacity: capacity,
            chargesPerHour: chargesPerHour
        }
        const data = await venue.create(VenueData)
        res.json({ data })

    } catch (error) {
        console.log(error.message)
    }
}

const getVenueByID = async (req, res) => {
    try {
        const data = await venue.findByPk(req.params.id)
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const getAllVenues = async (req, res) => {
    try {
        const data = await venue.findAll()
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const updateVenue = async (req, res) => {
    try {
        const venueDetails = req.body;
        const venueData = await venue.findOne({ where: { id: req.params.id } })
        console.log(venueDetails, "user ne bheja", req.params.id)
        const name = (venueDetails?.name) ? venueDetails?.name : venueData.name
        const capacity = (venueDetails?.capacity) ? venueDetails?.capacity : venueData.capacity
        const chargesPerHour = (venueDetails?.chargesPerHour) ? venueDetails?.chargesPerHour : venueData.chargesPerHour
        const city_id = (venueDetails?.city_id) ? venueDetails?.city_id : venueData.city_id

        const search = {
            where: {
                id: req.params.id
            }
        }
        const data = venue.update({
            name: name,
            capacity: capacity,
            chargesPerHour: chargesPerHour,
            city_id: city_id
        }, search)
        res.json({ data:'Updated Successfully' })
    } catch (error) {
        console.log(error.message)
    }
}

const deleteVenue = async (req, res) => {
    try {
        await venue.destroy({ where: { id: req.params.id } })
        res.send('Venue Deleted!')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    addVenue,
    getVenueByID,
    getAllVenues,
    updateVenue,
    deleteVenue
}