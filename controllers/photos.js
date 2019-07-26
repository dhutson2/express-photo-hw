const express = require('express')
const router = express.Router()
const Photo = require('../models/photo')
const User = require('../models/user')


router.get('/', (req, res) => {
    console.log(`visit from ${req.session.userId}`)
    Photo.find({}, (err,foundPhoto) =>{
        console.log(foundPhoto)
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
    //query db for all users
    res.render('photos/new.ejs')
    //then pass found users here

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

// router.get('/:id', (req, res) => {
//     Photo.findById(req.params.id, (err, foundPhoto) => {
//         if(err){
//             res.send(err)
//         } else{
            
//                     Photo.findOne({ title: req.params.id }).
//         populate('user').
//         exec(function (err, user) {
//             if (err){
//                 res.send(err)
//             } else{
//             console.log('The photographer is ', user.name);
//             // prints "The author is Ian Fleming"
//             }
//         });

router.get('/:id', async (req, res) => {
    try{
        const user = await Photo.findById(req.params.id).populate('user')
        console.log(user)
        res.render('photos/show.ejs', {
            photo: user
        })
    } catch(err){
        res.send(err)
    }
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