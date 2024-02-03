const tours = require('../models/tours');

// Get all tours
exports.getAllTours = (req, res) => {
  res.json(tours);
};

// Get tour by ID
exports.getTourById = (req, res) => {
  const tourId = parseInt(req.params.id);
  const tour = tours.find(tour => tour.id === tourId);
  if (!tour) {
    return res.status(404).json({ message: 'Tour not found' });
  }
  res.json(tour);
};

// Create a new tour
exports.createTour = (req, res) => {
  const { name, location } = req.body;
  const newTour = { id: tours.length + 1, name, location };
  tours.push(newTour);
  res.status(201).json(newTour);
};

// Update tour
exports.updateTour = (req, res) => {
  const tourId = parseInt(req.params.id);
  const { name, location } = req.body;
  const tourIndex = tours.findIndex(tour => tour.id === tourId);
  if (tourIndex === -1) {
    return res.status(404).json({ message: 'Tour not found' });
  }
  tours[tourIndex] = { ...tours[tourIndex], name, location };
  res.json(tours[tourIndex]);
};

// Delete tour
exports.deleteTour = (req, res) => {
  const tourId = parseInt(req.params.id);
  const tourIndex = tours.findIndex(tour => tour.id === tourId);
  if (tourIndex === -1) {
    return res.status(404).json({ message: 'Tour not found' });
  }
  tours.splice(tourIndex, 1);
  res.status(204).send();
};
