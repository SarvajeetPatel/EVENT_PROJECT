var db = require('../models')
var bookings = db.bookings
var venue = db.venue
var event = db.event

const addBooking = async (req, res) => {
    try {
        const { userId, guests, startTime, endTime, estimatedTime, eventName, eventType, venueName, bookingDate } = req.body;

        const venueData = await venue.findOne({ where: { name: venueName } })
        if (venueData && venueData.id) {
            const eventDetails = {
                name: eventName,
                type: eventType,
                venue_id: venueData.id
            }
            const eventData = await event.create(eventDetails)

            if (eventData && eventData.id) {

                const data = await bookings.create({
                    bookingDate: bookingDate,
                    startTime: startTime,
                    endTime: endTime,
                    estimatedHours: estimatedTime,
                    totalCost: estimatedTime * venueData.chargesPerHour,
                    guestCount: guests,
                    event_id: eventData.id,
                    user_id: userId
                })

                res.json({ data })
            }
        }

    } catch (error) {
        console.log(error.message)
    }
}

const getBookingsByID = async (req, res) => {
    try {
        const data = await bookings.findByPk(req.params.id)
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const getAllBookings = async (req, res) => {
    try {
        const data = await bookings.findAll()
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const getUserBookings = async (req, res) => {
    try {
        const data = await bookings.findAll({
            where: { user_id: req.params.id }
        })
        res.json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const updateBooking = async (req, res) => {
    try {
        const { userId, guests, startTime, endTime, estimatedTime, eventName, eventType, bookingDate, venue_id, event_id } = req.body;

        const venueData = await venue.findByPk(venue_id)
        const values = {
            venue_id: venue_id,
            name: eventName,
            type: eventType
        }
        console.log(event_id , "event")
        const updatedEvent = await event.update(values, { where: { id: event_id } })
        console.log(updatedEvent)

        if (updatedEvent) {
            const dataToUpdate = {
                bookingDate: bookingDate,
                startTime: startTime,
                endTime: endTime,
                estimatedHours: estimatedTime,
                totalCost: estimatedTime * venueData.chargesPerHour,
                guestCount: guests
            }

            const bookingData = await bookings.update(dataToUpdate, {
                where: {
                    event_id: event_id ,
                    user_id: userId,
                    id: req.params.id
                }
            })

            res.json({ data: bookingData })
        }

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    addBooking,
    getAllBookings,
    getBookingsByID,
    getUserBookings,
    updateBooking
}