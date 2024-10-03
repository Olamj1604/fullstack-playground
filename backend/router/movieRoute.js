const express = require('express');
const movieController = require('../controllers/movieController');
const router = express.Router();

router.route('/create-movies').post(movieController.createMovies);
router.route('/get-allMovies').get(movieController.getAllMovies);

router.route('/get-singleMovie/:id').get(movieController.getMovieById);
router.route('/update-movie/:id').patch(movieController.updateMovie);
router.route('/delete-movie/:id').delete(movieController.deleteMovie);



module.exports = router;