const usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsuarios = async (req, res) => {
  try {
    console.log('Intentando obtener usuarios...');
    const usuarios = await usuario.findAll();
    console.log('Usuarios encontrados:', usuarios);
    res.json(usuarios);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.registerUsuario = async (req, res) => {
  try {
    console.log('Intentando registrar usuario...');
    console.log('Cuerpo de la solicitud:', req.body);

    const { email, password, nombre } = req.body;
    console.log('Datos desestructurados:', { email, password, nombre });

    if (!email || !password) {
      console.log('Faltan email o contraseña');
      return res.status(400).json({ error: 'Faltan email o contraseña' });
    }

    console.log('Encriptando contraseña...');
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Contraseña encriptada:', hashedPassword);

    console.log('Creando usuario en la base de datos...');
    const nuevoUsuario = await usuario.create({ email, password: hashedPassword, nombre });
    console.log('Usuario creado:', nuevoUsuario);

    res.status(201).json({ message: 'Usuario registrado', usuario: nuevoUsuario });
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    // Manejar error de email duplicado
    if (error.name === 'SequelizeUniqueConstraintError' || error.name === 'SequelizeValidationError') {
      // Buscar si el error es por restricción única en el campo email
      const emailError = error.errors?.find(err => err.path === 'email' && err.type === 'unique violation');
      if (emailError) {
        return res.status(400).json({ error: 'El email ya está registrado' });
      }
    }
    res.status(500).json({ error: error.message });
  }
};

exports.loginUsuario = async (req, res) => {
  try {
    console.log('Intentando iniciar sesión...');
    console.log('Cuerpo de la solicitud:', req.body);

    const { email, password } = req.body;
    console.log('Datos desestructurados:', { email, password });

    if (!email || !password) {
      console.log('Faltan email o contraseña');
      return res.status(400).json({ error: 'Faltan email o contraseña' });
    }

    console.log('Buscando usuario en la base de datos...');
    const user = await usuario.findOne({ where: { email } });
    console.log('Usuario encontrado:', user);

    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    console.log('Comparando contraseñas...');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Contraseña válida:', isPasswordValid);

    if (!isPasswordValid) {
      console.log('Contraseña incorrecta');
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role || 'user' },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    res.status(500).json({ error: error.message });
  }
};
