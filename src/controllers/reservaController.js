const reservaService = require('../services/reservaService');

function listReservas(req, res) {
  try {
    const reservas = reservaService.getReservasByUsuario(req.usuario.id);
    res.status(200).json(reservas);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

function createReserva(req, res) {
  try {
    const novaReserva = reservaService.createNewReserva(req.usuario.id, req.body);
    res.status(201).json(novaReserva);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

function cancelReserva(req, res) {
  try {
    const reservaCancelada = reservaService.cancelReserva(req.usuario.id, req.params.id);
    res.status(200).json(reservaCancelada);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

function listAllReservasAdmin(req, res) {
  try {
    const reservas = reservaService.getAllReservas();
    res.status(200).json(reservas);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

module.exports = {
  listReservas,
  createReserva,
  cancelReserva,
  listAllReservasAdmin
};
