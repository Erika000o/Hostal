import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchHabitaciones } from '../lib/api';

const roomImages = [
  '/images/Atarraya y Anzuelo 2.jpg',
  '/images/Atarraya y Anzuelo.jpg',
  '/images/El Ave que Pesca.jpg',
  '/images/Herencia Colonial.jpg',
  '/images/Las Heliconias 2.jpg',
  '/images/Mariposa monarca.jpg',
  '/images/Raíces Campesinas.jpg',
  '/images/Santuario del Yipao.jpg',
  '/images/Santuario del Yipao 2.jpg',
  '/images/Tierra Chanama.jpg',
  '/images/Tierra de Encanto.jpg',
  '/images/Tierra de Encanto 2.jpg',
];

function Rooms() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedRoom = location.state?.selectedRoom || null;

  const [habitaciones, setHabitaciones] = useState([]);
  const [selected, setSelected] = useState(selectedRoom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHabitaciones();
        // Asignar imágenes de habitaciones, repitiendo si hay más habitaciones que imágenes
        const roomsWithImages = response.data.map((room, index) => ({
          ...room,
          src: roomImages[index % roomImages.length],
        }));
        setHabitaciones(roomsWithImages);
      } catch (error) {
        console.error('Error al obtener las habitaciones:', error);
      }
    };
    fetchData();
  }, []);

  const handleReserve = (room) => {
    navigate('/reservations', { state: { selectedRoom: room } });
  };

  // Función para formatear precio en COP
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('rooms')}</h1>

      {selected && (
        <div className="mb-6 p-6 border rounded shadow flex flex-col md:flex-row items-center gap-6">
          <img src={selected.src} alt={t(selected.nombre)} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">{t(selected.nombre)}</h2>
            <p className="text-gray-600 mb-2">{selected.capacidad} {selected.capacidad === 1 ? 'persona' : 'personas'}</p>
            <p className="text-gray-800 font-bold mb-4">{formatPrice(selected.precio)}</p>
            <button
              onClick={() => handleReserve(selected)}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              {t('reserveNow')}
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {habitaciones.map((room) => (
          <div key={room.id} className="border rounded shadow overflow-hidden">
            <img src={room.src} alt={t(room.nombre)} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{t(room.nombre)}</h3>
              <p className="text-gray-600 mb-1">{room.capacidad} {room.capacidad === 1 ? 'persona' : 'personas'}</p>
              <p className="text-gray-800 font-bold mb-2">{formatPrice(room.precio)}</p>
              <button
                onClick={() => setSelected(room)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                {t('viewDetails')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
