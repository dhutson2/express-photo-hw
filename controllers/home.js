const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hi, give me your photos plz')
})

module.exports = router;