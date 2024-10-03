const { Movie, validate } = require('../models/movieModel');

exports.getAllMovies = async(req, res) => {
    const movies = await Movie.find().sort('title');
    res.send(movies);
};


exports.createMovies = async(req, res) => {
    // validation error
    const {error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

     // Destructuring properties from req.body
     const { title, fullName, gender, seatType, isPublished, amount } = req.body;

    // creating new movies instance using destructured variable
    let movie = new Movie({
        title,
        fullName,
        gender,
        seatType,
        isPublished,
        amount,
    });

    movie = await movie.save();

    res.send(movie);
};

exports.getMovieById = async(req, res) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
};

exports.updateMovie = async(req, res) => {
    // validation error
    const { error } = validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    // instance for update the movie
    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        fullName: req.body.fullName,
        gender: req.body.gender,
        seatType: req.body.seatType,
        isPublished: req.body.isPublished,
        amount: req.body.amount
    }, {
        new: true
    });

    if (!movie) return res.status(404).send('The movie with the given ID not found.');

    res.send(movie);
};

exports.deleteMovie = async(req, res) => {
    const movie = await Movie.findByIdAndDelete(req.param.id);

    if (!movie) return res.status(404).send('The movie with the given ID not found.');

    res.send(movie);
};