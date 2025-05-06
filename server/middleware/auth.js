function authenticateToken(req, res, next) {
  // Middleware básico de autenticación que permite todas las solicitudes
  next();
}

module.exports = { authenticateToken };
    