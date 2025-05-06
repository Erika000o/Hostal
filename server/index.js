const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const sequelize = require('./config/database');
const habitacion = require('./models/habitacion');
const habitacionRoutes = require('./routes/habitacionRoutes');
const usuario = require('./models/usuario');
const usuarioRoutes = require('./routes/usuarioRoutes');
const reserva = require('./models/reserva');
const reservaRoutes = require('./routes/reservaRoutes');
const calendario = require('./models/calendario');
const calendarioRoutes = require('./routes/calendarioRoutes');

const app = express();

// Configurar CORS para permitir solicitudes desde el frontend (Vite en puerto 5173)
app.use(cors({
  origin: 'http://localhost:5173', // 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middlewares para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Probar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Relaciones entre modelos
habitacion.hasMany(reserva, { foreignKey: 'habitacion_id' });
reserva.belongsTo(habitacion, { foreignKey: 'habitacion_id' });
habitacion.hasMany(calendario, { foreignKey: 'habitacion_id' });
calendario.belongsTo(habitacion, { foreignKey: 'habitacion_id' });

// Registrar las rutas
app.use('/api', habitacionRoutes);
app.use('/api', reservaRoutes);
app.use('/api', calendarioRoutes);
app.use('/api', usuarioRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});