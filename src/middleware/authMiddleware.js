const { verifyToken } = require('../services/authService');
const { getUserById } = require('../models/usuarioModel');
const { AppError } = require('../utils/appError');

function authMiddleware(requiredType) {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization || '';
      const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
      const decoded = verifyToken(token);
      const usuario = getUserById(decoded.id);

      if (!usuario) {
        throw new AppError('Usuário não encontrado', 401);
      }

      if (requiredType && usuario.tipo !== requiredType) {
        throw new AppError('Acesso não autorizado', 403);
      }

      req.usuario = usuario;
      next();
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }

      return res.status(500).json({ message: 'Erro inesperado no middleware' });
    }
  };
}

module.exports = {
  authMiddleware
};
