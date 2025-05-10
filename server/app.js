require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app = express();

// Middlewares
app.use(cors({
  origin: function(origin, callback){
    callback(null, true);
  },
  credentials: true
}));
app.use(express.json());

// Rutas
app.use('/api/auth',   require('./routes/usuarioRoutes'));
app.use('/api/habitaciones',  require('./routes/habitacionRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes'));
app.use('/api/calendario', require('./routes/calendarioRoutes'));

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
