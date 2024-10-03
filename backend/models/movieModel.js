const mongoose = require('mongoose');
const Joi = require('joi');
const { required } = require('joi/lib/types/lazy');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        minlenght: 5,
        maxlenght: 50,
        required: true,
    },
    isPublished: {
        type: Boolean,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        minlenght: 5,
        maxlenght: 50,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    seatType: {
        type: String,
        required: true,
        enum: ['Single', 'Double']
    },
    createdAt: {
        type: Date
    }
});

const Movie = mongoose.model('Movies', movieSchema);

function validateMovie(movie) {
    const schema = {
        title: Joi.string().min(3).required(),
        fullName: Joi.string(),
        gender: Joi.string(),
        seatType: Joi.string(),
        isPublished: Joi.boolean(),
        amount: Joi.number()
    };

    return Joi.validate(movie, schema);
}

exports.movieSchema = movieSchema;
exports.Movie = Movie; // this export is responsible for interacting with MongoDb collection
exports.validate = validateMovie;