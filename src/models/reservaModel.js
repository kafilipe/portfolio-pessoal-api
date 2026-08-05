const { reservas, nextIds } = require('./dataStore');

function listReservas() {
  return reservas;
}

function listReservasByUsuarioId(idUsuario) {
  return reservas.filter((reserva) => reserva.id_usuario === Number(idUsuario));
}

function findReservaById(id) {
  return reservas.find((reserva) => reserva.id === Number(id));
}

function createReserva(reserva) {
  const novaReserva = {
    id: nextIds.reserva++,
    ...reserva,
    status: 'RESERVADO'
  };

  reservas.push(novaReserva);
  return novaReserva;
}

function updateReservaStatus(id, status) {
  const reserva = findReservaById(id);

  if (!reserva) {
    return null;
  }

  reserva.status = status;
  return reserva;
}

module.exports = {
  listReservas,
  listReservasByUsuarioId,
  findReservaById,
  createReserva,
  updateReservaStatus
};
