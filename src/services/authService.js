const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../models/usuarioModel');
const { AppError } = require('../utils/appError');

const JWT_SECRET = process.env.JWT_SECRET || 'aurora-secret';

function login(email, senha) {
  const usuario = findUserByEmail(email);

  if (!usuario || usuario.senha !== senha) {
    throw new AppError('Credenciais inválidas', 401);
  }

  const token = jwt.sign({ id: usuario.id, tipo: usuario.tipo }, JWT_SECRET, { expiresIn: '1h' });

  return {
    token,
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      tipo: usuario.tipo
    }
  };
}

function verifyToken(token) {
  if (!token) {
    throw new AppError('Token não informado', 401);
  }

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new AppError('Token inválido', 401);
  }
}

module.exports = {
  login,
  verifyToken
};
