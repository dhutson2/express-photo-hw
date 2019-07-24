const express = require('express')
const router = express.Router()
const Photo = require('../models/photo')

router.get('/', (req, res) => {
    Photo.find({}, (err,foundPhoto) =>{
        if(err){
            res.send(err)
        } else {
            res.render('photos/index.ejs', {
                photos: foundPhoto
            })
        }
    })
})

router.get('/new', (req, res) => {
    res.render('photos/new.ejs')
})

router.post('/', (req, res) => {
    Photo.create(req.body, (err, addedPhoto) => {
        if(err){
            res.send(err)
        } else{
            res.redirect('/photos')
        }
    })
})

router.get('/:id', (req, res) => {
    Photo.find({}, (err, foundPhoto) => {
        if(err){
            res.send(err)
        } else{
            res.render('photos/index.ejs', {
                photos: foundPhoto
            })
        }
    })
})

module.exports = router;