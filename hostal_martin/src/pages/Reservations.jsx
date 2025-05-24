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

      const formattedReservations = result.data.map(res => ({
        ...res,
        fecha_entrada: res.fecha_entrada || res.start_date,
        fecha_salida: res.fecha_salida || res.end_date,
        habitacion_id: res.habitacion_id || res.room_id
      }));

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

  const handleDateToggle = (date, isReserved) => {
    console.log('Fecha clickeada:', date, 'Reservada:', isReserved);
  };

  return (
    <div className="flex justify-center py-10 px-4">
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full items-start">
        {/* 👉 Selector + Calendario a la izquierda */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-6">{t('reservations')}</h1>

          {error && <p className="text-red-600 mb-4">{error}</p>}
          {loading && <p className="mb-4">Cargando...</p>}

          <label htmlFor="room-select" className="block mb-2 font-medium text-gray-700">
            {t('selectRoom')}
          </label>
          <select
            id="room-select"
            value={selectedRoom?.id || ''}
            onChange={handleRoomChange}
            className="border border-gray-300 p-2 rounded w-full max-w-xs mb-6"
            disabled={loading}
          >
            {rooms.map(room => (
              <option key={room.id} value={room.id}>
                {room.nombre}
              </option>
            ))}
          </select>

          <Calendar
            reservations={reservations}
            isCalendarioData={false}
            onDateToggle={handleDateToggle}
          />
        </div>

        {/* 👉 Formulario más a la derecha, centrado vertical y con buen ancho */}
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mx-auto">
            <ReservationForm
              initialHabitacionId={selectedRoom?.id || ''}
              initialHabitacionName={selectedRoom?.nombre || ''}
              roomReservations={reservations}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
