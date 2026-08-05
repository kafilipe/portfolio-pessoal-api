const authService = require('../services/authService');

function login(req, res) {
  try {
    const resultado = authService.login(req.body.email, req.body.senha);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
}

module.exports = {
  login
};
