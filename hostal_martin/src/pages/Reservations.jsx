import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import ReservationForm from '../components/ReservationForm';
import Calendar from '../components/Calendar';

function Reservations() {
  const { t } = useTranslation();
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    if (selectedRoom) {
      fetchReservations(selectedRoom.id);
    } else {
      setReservations([]);
    }
  }, [selectedRoom]);

  const fetchRooms = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/habitaciones', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Error al obtener habitaciones');
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error('Error en la respuesta de habitaciones');
      }
      const data = result.data;
      if (!Array.isArray(data)) {
        throw new Error('La respuesta de habitaciones no es un array');
      }
      setRooms(data);
      if (data.length > 0) {
        setSelectedRoom(data[0]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchReservations = async (roomId) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/calendario', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Error al obtener reservas');
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error('Error en la respuesta de reservas');
      }
      const data = result.data;
      const filtered = data.filter(r => r.habitacion_id === roomId);
      setReservations(filtered);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRoomChange = (e) => {
    const roomId = parseInt(e.target.value);
    const room = rooms.find(r => r.id === roomId);
    setSelectedRoom(room);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('reservations')}</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading && <p className="mb-4">Cargando...</p>}

      <div className="mb-6">
        <label htmlFor="room-select" className="block mb-2 font-medium">Selecciona una habitación:</label>
        <select
          id="room-select"
          value={selectedRoom ? selectedRoom.id : ''}
          onChange={handleRoomChange}
          className="border p-2 rounded w-full max-w-xs"
        >
          {rooms.map(room => (
            <option key={room.id} value={room.id}>{room.nombre}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Calendar reservations={reservations} />
        <ReservationForm
          initialHabitacionId={selectedRoom ? selectedRoom.id : ''}
          initialHabitacionName={selectedRoom ? selectedRoom.nombre : ''}
        />
      </div>
    </div>
  );
}

export default Reservations;
