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
      
      if (!response.ok) throw new Error('Error al obtener habitaciones');
      
      const result = await response.json();
      if (!result.success) throw new Error('Error en la respuesta de habitaciones');
      if (!Array.isArray(result.data)) throw new Error('La respuesta no es un array');
      
      setRooms(result.data);
      if (result.data.length > 0) {
        setSelectedRoom(result.data[0]);
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
      const response = await fetch('http://localhost:5000/api/reservas', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.ok) throw new Error('Error al obtener reservas');
      
      const result = await response.json();
      if (!result.success) throw new Error('Error en la respuesta de reservas');
      
      // Formateamos las reservas para asegurar compatibilidad
      const formattedReservations = result.data.map(res => ({
        ...res,
        fecha_entrada: res.fecha_entrada || res.start_date,
        fecha_salida: res.fecha_salida || res.end_date,
        habitacion_id: res.habitacion_id || res.room_id
      }));
      
      // Filtramos por habitación seleccionada
      const filtered = formattedReservations.filter(r => r.habitacion_id === roomId);
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

  // Función para manejar clics en fechas del calendario
  const handleDateToggle = (date, isReserved) => {
    console.log('Fecha clickeada:', date, 'Reservada:', isReserved);
    // Aquí puedes añadir lógica adicional si necesitas
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('reservations')}</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading && <p className="mb-4">Cargando...</p>}

      <div className="mb-6">
        <label htmlFor="room-select" className="block mb-2 font-medium">
          Selecciona una habitación:
        </label>
        <select
          id="room-select"
          value={selectedRoom?.id || ''}
          onChange={handleRoomChange}
          className="border p-2 rounded w-full max-w-xs"
          disabled={loading}
        >
          {rooms.map(room => (
            <option key={room.id} value={room.id}>
              {room.nombre} (ID: {room.id})
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="calendar-container">
          <Calendar 
            reservations={reservations}
            isCalendarioData={false}  // Cambia a true si tu API usa formato simple { fecha }
            onDateToggle={handleDateToggle}
          />
        </div>
        
        <ReservationForm
          initialHabitacionId={selectedRoom?.id || ''}
          initialHabitacionName={selectedRoom?.nombre || ''}
          roomReservations={reservations}
        />
      </div>
    </div>
  );
}

export default Reservations;