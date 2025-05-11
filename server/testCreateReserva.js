const http = require('http');

const data = JSON.stringify({
  habitacion_id: 1,
  nombre_cliente: "Test User",
  email: "test@example.com",
  fecha_entrada: "2025-05-10",
  fecha_salida: "2025-05-12"
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/reservas',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
