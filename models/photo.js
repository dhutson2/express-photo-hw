const mongoose = require('mongoose')
require('mongoose-type-url')

const photoSchema = new mongoose.Schema({
    title: String,
    url: String,
    // userId: String
    user: {
        // required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo;