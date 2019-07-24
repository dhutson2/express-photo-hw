const mongoose = require('mongoose')
require('mongoose-type-url')

const photoSchema = new mongoose.Schema({
    user: String,
    title: String,
    url: {
        photo: mongoose.SchemaTypes.url
    }
});

const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo;