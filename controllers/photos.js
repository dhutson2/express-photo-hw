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
    Photo.findById(req.params.id, (err, foundPhoto) => {
        if(err){
            res.send(err)
        } else{
            res.render('photos/show.ejs', {
                photo: foundPhoto
            })
        }
    })
})

router.get('/:id/edit', (req, res) => {
    Photo.findById(req.params.id, (err, foundPhoto) => {
        if(err){
            res.send(err)
        } else{
            res.render('photos/edit.ejs', {
                photo: foundPhoto
            })
        }
    })
})

router.put('/:id', (req, res) => {
    Photo.findByIdAndUpdate(req.params.id, req.body, (err, foundPhoto) =>{
        if(err){
            res.send(err)
        } else{
            res.redirect('/photos')
        }
    })
})

router.delete('/:id', (req, res) => {
    Photo.findByIdAndDelete(req.params.id, (err, deletedPhoto) => {
        if(err){
            res.send(err)
        } else{
            console.log(deletedPhoto)
            res.redirect('/photos')
        }
    })
})

module.exports = router;