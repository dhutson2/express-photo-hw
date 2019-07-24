const express = require('express')
const router = express.Router()
const Photo = require('../models/photo')

router.get('/', (req, res) => {
    res.send('give me pix plz')
})

router.get('/:id', (req, res) => {
    res.send('im an individual photo, who took me?')
})

module.exports = router;