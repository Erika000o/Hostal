const API_URL = 'http://localhost:5000/api';

// Funciones para consumir la API
export const fetchHabitaciones = async () => {
  const response = await fetch(`${API_URL}/habitaciones`);
  return response.json();
};

export const fetchCalendario = async () => {
  const response = await fetch(`${API_URL}/calendario`);
  return response.json();
};

export const fetchReservas = async () => {
  const response = await fetch(`${API_URL}/reservas`);
  return response.json();
};

export const createReserva = async (reservaData) => {
  const response = await fetch(`${API_URL}/reservas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reservaData),
  });
  return response.json();
};

export const registerUsuario = async (usuarioData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuarioData),
  });
  return response.json();
};

export const loginUsuario = async (usuarioData) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuarioData),
  });
  return response.json();
};