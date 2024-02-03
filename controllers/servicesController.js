const services = require('../models/services');

// Get all services
exports.getAllServices = (req, res) => {
  res.json(services);
};

// Get service by ID
exports.getServiceById = (req, res) => {
  const serviceId = parseInt(req.params.id);
  const service = services.find(service => service.id === serviceId);
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }
  res.json(service);
};

// Create a new service
exports.createService = (req, res) => {
  const { name, description } = req.body;
  const newService = { id: services.length + 1, name, description };
  services.push(newService);
  res.status(201).json(newService);
};

// Update service
exports.updateService = (req, res) => {
  const serviceId = parseInt(req.params.id);
  const { name, description } = req.body;
  const serviceIndex = services.findIndex(service => service.id === serviceId);
  if (serviceIndex === -1) {
    return res.status(404).json({ message: 'Service not found' });
  }
  services[serviceIndex] = { ...services[serviceIndex], name, description };
  res.json(services[serviceIndex]);
};

// Delete service
exports.deleteService = (req, res) => {
  const serviceId = parseInt(req.params.id);
  const serviceIndex = services.findIndex(service => service.id === serviceId);
  if (serviceIndex === -1) {
    return res.status(404).json({ message: 'Service not found' });
  }
  services.splice(serviceIndex, 1);
  res.status(204).send();
};
