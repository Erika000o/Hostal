require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Rutas
app.use('/api/auth',   require('./routes/auth'));
app.use('/api/rooms',  require('./routes/rooms'));
app.use('/api/reservations', require('./routes/reservations'));

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
