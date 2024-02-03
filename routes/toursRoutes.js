const express = require('express');
const router = express.Router();
const toursController = require('../controllers/toursController');

// Define routes for tours resource
router.get('/', toursController.getAllTours);
router.get('/:id', toursController.getTourById);
router.post('/', toursController.createTour);
router.put('/:id', toursController.updateTour);
router.delete('/:id', toursController.deleteTour);

module.exports = router;
