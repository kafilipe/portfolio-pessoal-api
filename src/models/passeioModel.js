const { passeios, nextIds } = require('./dataStore');

function listPasseios() {
  return passeios;
}

function findPasseioById(id) {
  return passeios.find((passeio) => passeio.id === Number(id));
}

function createPasseio(passeio) {
  const novoPasseio = {
    id: nextIds.passeio++,
    ...passeio
  };

  passeios.push(novoPasseio);
  return novoPasseio;
}

module.exports = {
  listPasseios,
  findPasseioById,
  createPasseio
};
