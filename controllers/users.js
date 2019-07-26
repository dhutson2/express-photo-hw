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

router.post('/', async (req, res) => {
    try{
        const newUser = await User.create(req.body);
        req.session.userId = newUser._id
        res.redirect('/photos')
    } catch(err){
        res.send(err)
    }
})

router.get('/login', (req, res) =>{
    res.render('users/login.ejs')
})

router.post('/login', async (req, res) => {
    try{
    const userFromDb = await User.findOne({username: req.body.username})
    if(userFromDb.password === req.body.password){
        req.session.userId = userFromDb._id
        res.redirect('./photos')
    } else{
        res.send('bad login!')
    }
    }catch(err) {
        res.send(err)
    }
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, foundUser) =>{
        if(err){
            res.send(err)
        } else{
            res.render('users/show.ejs', {
                users: foundUser
            })
        }
    })
})

router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        if(err){
            res.send(err)
        } else{
            res.render('users/edit.ejs', {
                user: foundUser
            })
        }
    })
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
        console.log(updatedUser, '<-- updated user')
        if(err){
            res.send(err)
        } else{
            res.redirect('/users')
        }
    })
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