const { listReservas, listReservasByUsuarioId, createReserva, updateReservaStatus, findReservaById } = require('../models/reservaModel');
const { AppError } = require('../utils/appError');
const { getUserById } = require('../models/usuarioModel');
const { findPasseioById } = require('../models/passeioModel');

function getAllReservas() {
  return listReservas();
}

function getReservasByUsuario(idUsuario) {
  return listReservasByUsuarioId(idUsuario);
}

function createNewReserva(usuarioId, reservaData) {
  const usuario = getUserById(usuarioId);
  if (!usuario || usuario.tipo !== 'cliente') {
    throw new AppError('Apenas clientes podem fazer reservas', 403);
  }

  const passeio = findPasseioById(reservaData.id_passeio);
  if (!passeio) {
    throw new AppError('Passeio não encontrado', 404);
  }

  const novaReserva = createReserva({
    id_usuario: usuario.id,
    id_passeio: reservaData.id_passeio,
    data: reservaData.data,
    quantidade_pessoas: reservaData.quantidade_pessoas
  });

  return novaReserva;
}

function cancelReserva(usuarioId, reservaId) {
  const reserva = findReservaById(reservaId);
  if (!reserva) {
    throw new AppError('Reserva não encontrada', 404);
  }

  if (reserva.id_usuario !== Number(usuarioId)) {
    throw new AppError('Você só pode cancelar suas próprias reservas', 403);
  }

  if (reserva.status === 'CANCELADO') {
    throw new AppError('Reserva já cancelada', 400);
  }

  return updateReservaStatus(reservaId, 'CANCELADO');
}

module.exports = {
  getAllReservas,
  getReservasByUsuario,
  createNewReserva,
  cancelReserva
};
