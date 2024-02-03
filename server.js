const express = require('express');
const notFoundMiddleware = require('./middleware/notFoundMiddleware'); // Import middleware
const errorMiddleware = require('./middleware/errorMiddleware'); // Import middleware
const unknownEndpoint = require('./middleware/unknownEndpoint'); // Import middleware

const app = express();

// Middleware
app.use(express.json());

// Import routes
const usersRoutes = require('./routes/usersRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const toursRoutes = require('./routes/toursRoutes');

// Routes
app.use('/api/users', usersRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/tours', toursRoutes);

// Not found middleware
app.use(notFoundMiddleware);

// Unknown endpoint middleware
app.use(unknownEndpoint);

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
