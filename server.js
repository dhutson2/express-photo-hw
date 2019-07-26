const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')

require('./db/db')

const photoController = require('./controllers/photos')
const homeController = require('./controllers/home')
const userController = require('./controllers/users')

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'))
app.use(session({
    secret: 'secretsafesecret',
    resave: false,
    saveUninitialized: false
}))

app.use('/users', userController)
app.use('/photos', photoController)
app.use('/', homeController)


// app.get('/', (req, res) => {
//     res.send('hi, give me your photos plz')
// })


app.listen(3000, () => {
    console.log('listening on 3k')
})