const express = require('express')
const router = express.Router()
const Photo = require('../models/photo')
const User = require('../models/user')

router.get('/', (req, res) => {
    res.send('hi, im a photo index route. show all the photoz here')
})

router.get('/:id', (req, res) => {
    res.send('im an individual photo, who took me?')
})

module.exports = router;