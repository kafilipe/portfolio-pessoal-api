const passeioService = require('../services/passeioService');

function listPasseios(req, res) {
  try {
    const passeios = passeioService.getPasseios();
    res.status(200).json(passeios);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

function getPasseioById(req, res) {
  try {
    const passeio = passeioService.getPasseioById(req.params.id);
    res.status(200).json(passeio);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

function createPasseio(req, res) {
  try {
    const passeio = passeioService.createNewPasseio(req.body);
    res.status(201).json(passeio);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

module.exports = {
  listPasseios,
  getPasseioById,
  createPasseio
};
