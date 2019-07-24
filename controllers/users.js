const express = require('express')
const router = express.Router()
const Photo = require('../models/photo')

router.get('/', (req, res) => {
    res.send('hi, im a user index route. look at my pix')
})

router.get('/:id', (req, res) => {
    res.send('im an individual user, look at my pretty pics!')
})

module.exports = router;