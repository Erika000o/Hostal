import React, { useEffect, useState } from 'react';
import Calendar from './Calendar';

const AdminAvailability = () => {
  const [availability, setAvailability] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch all rooms for dropdown
  const fetchRooms = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/habitacion');
      if (!response.ok) {
        throw new Error('Error al obtener las habitaciones');
      }
      const data = await response.json();
      if (data.success) {
        setRooms(data.data);
        if (data.data.length > 0) {
          setSelectedRoom(data.data[0]);
        }
      } else {
        setError('Error al obtener las habitaciones');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch availability for selected room
  const fetchAvailability = async (roomId) => {
    if (!roomId) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:5000/api/calendario?habitacion_id=${roomId.id}`);
      if (!response.ok) {
        throw new Error('Error al obtener la disponibilidad');
      }
      const data = await response.json();
      setAvailability(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    if (selectedRoom) {
      fetchAvailability(selectedRoom);
    }
  }, [selectedRoom]);

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Gestión de Disponibilidad</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading && <p className="mb-4">Cargando...</p>}

      <div className="mb-4">
        <label className="block mb-1 font-medium">Selecciona una habitación:</label>
        <select
          value={selectedRoom ? selectedRoom.id : ''}
          onChange={(e) => {
            const room = rooms.find(r => r.id === e.target.value);
            setSelectedRoom(room);
          }}
          className="border p-2 rounded w-full max-w-xs"
        >
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <Calendar
          value={selectedDates}
          onChange={handleDateChange}
          calendarEntries={availability}
        />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Entradas de Disponibilidad</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Habitación</th>
            <th className="border border-gray-300 p-2">Fecha</th>
            <th className="border border-gray-300 p-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {availability.length > 0 ? (
            availability.map((entry) => (
              <tr key={entry.id}>
                <td className="border border-gray-300 p-2">{entry.id}</td>
                <td className="border border-gray-300 p-2">{entry.habitacion ? entry.habitacion.nombre : 'N/A'}</td>
                <td className="border border-gray-300 p-2">{entry.fecha}</td>
                <td className="border border-gray-300 p-2">{entry.estado}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No hay datos de disponibilidad disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

