const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Registro de usuario
router.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.create({ email, password, role });
    res.status(201).json({ message: 'Usuario creado', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login (simplificado, sin JWT por ahora)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (user) {
      res.json({ message: 'Login exitoso', user });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;