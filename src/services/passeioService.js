const { listPasseios, findPasseioById, createPasseio } = require('../models/passeioModel');
const { AppError } = require('../utils/appError');

function getPasseios() {
  return listPasseios();
}

function getPasseioById(id) {
  const passeio = findPasseioById(id);

  if (!passeio) {
    throw new AppError('Passeio não encontrado', 404);
  }

  return passeio;
}

function createNewPasseio(passeioData) {
  const novoPasseio = createPasseio(passeioData);
  return novoPasseio;
}

module.exports = {
  getPasseios,
  getPasseioById,
  createNewPasseio
};
