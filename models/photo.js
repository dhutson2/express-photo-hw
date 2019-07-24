const mongoose = require('mongoose')
require('mongoose-type-url')

const photoSchema = new mongoose.Schema({
    user: String,
    title: String,
    photos: String //FIXME: make this link to url to photo
});

const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo;