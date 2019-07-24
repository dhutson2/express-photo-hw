const express = require('express')
const router = express.Router()
const User = require('../models/user')

// index route
router.get('/', (req, res) => {
    User.find({}, (err, foundUser) => {
        if(err){
            console.log(err)
        } else {
            res.render('users/index.ejs', {
                users: foundUser
            })
        }
    })
})

// get and post routes to make new user
router.get('/new', (req, res) => {
    res.render('users/new.ejs')
})

router.post('/', (req, res) => {
    console.log(req.body);
    User.create(req.body, (err, createdUser) => {
        console.log(createdUser, '<-- created user')
        if(err){
            res.send(err)
        } else{
            res.redirect('/users')
        }
    })
})

router.get('/:id', (req, res) => {
    res.send('im an individual user, look at my pretty pics!')
})

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, deletedUser) =>{
        console.log(deletedUser)
        if(err){
            res.send(err)
        } else{
            res.redirect('/users')
        }
    })
})

module.exports = router;