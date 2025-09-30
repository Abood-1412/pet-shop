const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    petName: {
        type: String,
        required: true,
    },
    petType: {
        type: String,
        required: true,
    },
    petBreed: {
        type: String,
        required: true,
    },
    petAge: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    AdoptedById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;