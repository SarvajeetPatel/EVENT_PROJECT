const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const user = require('./routes/UserRoute')
app.use('/user', user)

const state = require('./routes/StateRoute')
app.use('/state', state)

const city = require('./routes/CityRoute')
app.use('/city', city)

const venue = require('./routes/VenueRoute')
app.use('/venue', venue)

const booking = require('./routes/BookingRoute')
app.use('/booking', booking)

app.listen(8080, () => {
    console.log('App will listen on PORT 8080!')
})