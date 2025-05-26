const API_URL = 'http://localhost:5000/api';


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

export const createReserva = async (data) => {
  const response = await fetch(`${API_URL}/reservas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
/* validacion para permitir solo una reserva por fecha y habitacion*/
  // if (!response.ok) {
  //   throw new Error('Error al crear la reserva');
  // }

  // return await response.json();
};
export const deleteReserva = async (habitacion_id) => {
  const response = await fetch(`${API_URL}/reservas/habitacion/${habitacion_id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Error al eliminar la reserva');
  }

  return await response.json();
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