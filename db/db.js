const mongoose = require('mongoose')

connectionString = 'mongodb://localhost/photos'

mongoose.connect(connectionString, {useNewUrlParser: true})

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
    console.log(`mongoose disconnected from ${connectionString}`)
})

mongoose.connection.on('error', () => {
    console.log(`mongoose error on ${connectionString}`)
})