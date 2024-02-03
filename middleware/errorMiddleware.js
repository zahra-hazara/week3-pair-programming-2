
const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  response.status(500).send('Something broke!'); // 'res' should be 'response'
};

module.exports = errorHandler;
