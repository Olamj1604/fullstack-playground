const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./router/movieRoute');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const dbURI = process.env.MONGODB_URI;

// Connecting mongodb to our node.js application
mongoose.connect(dbURI)
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.log('Error Connecting to MongoDb...'));

// const movies = [
//     {id: 1, title: 'Merlin', isPublished: true },
//     {id: 2, title: 'Avengers', isPublished: true },
//     {id: 3, title: 'Black Panter', isPublished: true },
//     {id: 4, title: 'Flash', isPublished: false },
//     {id: 5, title: 'The Originals', isPublished: true },
// ];


// Middleware function
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// endpoints
app.use('/api/v1/ozone', movieRoutes);


// Router Handler function
app.get('/', (req, res) => {
    res.send('Hello from node.js');
});

// app.get('/api/v1/ozone', (req, res) => {
//     res.send(movies);
// });

// app.post('/api/v1/ozone', (req, res) => {
//     const movie = {
//         id: movies.length + 1,
//         title: req.body.title,
//         isPublished: req.body.isPublished
//     };
//     movies.push(movie);
//     res.send(movie);
// });

// app.get('/api/v1/ozone/:id', (req, res) => {
//     // Look up the movie on the array of object
//     const movie = movies.find(m => m.id === parseInt(req.params.id));
//     // If not existing, return 404
//     if (!movie) return res.status(404).send('The Movie with the given ID was not found.');
//     res.send(movie);
// });

// app.put('/api/v1/ozone/:id', (req, res) => {
//     // Look up the movie on the array of object
//     const movie = movies.find(m => m.id === parseInt(req.params.id));
//     // If not existing, return 404
//     if (!movie) return res.status(404).send('The Movie with the given ID was not found.');

//     // validate the movie on the object
//     const { error } = validateMovie(req.body); //result.error
//     if (error) return res.status(404).send(error.send.details[0]. message); // This validation error is going to explain user-friendly message explaining why the validation failed

//     // update the movie
//     movie.title = req.body.title;
//     movie.isPublished = req.body.isPublished
//     res.send(movie);

// });

// app.delete('/api/v1/ozone/:id', (req, res) => {
//     const movie =  movies.find(m => m.id === parseInt(req.params.id));
//     // If not existing, return 404
//     if (!movie) return res.status(404).send('The movie with the given ID was not found.');

//     // Delete
//     const index = movies.indexOf(movie);
//     movies.splice(index, 1);


//     // Return the same course
//     res.send(movies);
// });

// app.delete('/api/v1/ozone/:id', (req, res) => {

// });

// function validateMovie(movie) {
//     const schema = {
//         title: joi.string().min(3).required(),
//         isPublished:joi.boolean()
//     };

//     return joi.validate(movie, schema);
// }


// successffully read the value of the parameter
// /api/v1/courses/${2023}/${4}
app.get('/api/v1/courses/:year/:month', (req, res) => {
    res.send(req.query);
});

// PORT
const port = process.env.PORT;
app.listen(port,() => {
    console.log(`Listening on port ${port}...`);
});