const { usuarios } = require('./dataStore');

function findUserByEmail(email) {
  return usuarios.find((usuario) => usuario.email === email);
}

function getUserById(id) {
  return usuarios.find((usuario) => usuario.id === Number(id));
}

module.exports = {
  findUserByEmail,
  getUserById
};
