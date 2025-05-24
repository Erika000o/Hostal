import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchHabitaciones } from '../lib/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaUsers, FaMoneyBillWave, FaMapMarkerAlt, FaWifi, FaUtensils, FaBinoculars } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const roomImages = [
  ['/images/Tierra Chanama.jpg','/images/Tierra Chanama 3.jpg','/images/Tierra Chanama2.jpg','/images/Tierra Chanama5.jpg'],
  ['/images/herencia Colonial 1.jpg','/images/Las Heliconias 2.jpg', '/images/Las Heliconias5.jpg', '/images/Las Heliconias6.jpg'],
  ['/images/Las Heliconias5.jpg', '/images/Las Heliconias6.jpg','/images/Las Heliconias 2.jpg'],
  ['/images/Tierra de Encanto.jpg', '/images/Tierra de Encanto 2.jpg','/images/Tierra de Encanto 1.jpg','/images/Tierra de Encanto4.jpg','/images/Tierra de Encanto5.jpg'],
  ['/images/Tradicion Cafetera1.jpg','/images/Tradicion Cafetera3.jpg','/images/Tradicion Cafetera4.jpg','/images/Tradicion Cafetera5.jpg'],
  ['/images/Santuario del Yipao.jpg', '/images/Santuario del Yipao 2.jpg','/images/Santuario del yipao1.jpg','/images/Santuario del yipao2.jpg','/images/Santuario del yipao3.jpg','/images/Santuario del yipao4.jpg'],
  ['/images/Atarraya y Anzuelo 2.jpg', '/images/Atarraya y Anzuelo.jpg','/images/atarraya y anzuelo3.jpg'],
  ['/images/El Ave que Pesca.jpg', '/images/El Ave que Pesca 1.jpg', '/images/El Ave que Pesca 2.jpg'], 
  ['/images/Mariposa monarca.jpg','/images/Mariposa Monarca 1-0.jpg','/images/Mariposa Monarca 1-2.jpg','/images/Mariposa Monarca 1-4.jpg','/images/Mariposa Monarca 1.jpg','/images/Mariposa Monarca 2.jpg'],
  ['/images/Raíces Campesinas.jpg','/images/Raices Campesinas 1.jpg','/images/Raices Campesinas 2.jpg'],
  
  
  
  
];

function Rooms() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedRoomFromState = location.state?.selectedRoom || null;

  const [habitaciones, setHabitaciones] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHabitaciones();
        const roomsWithImages = response.data.map((room, index) => ({
          ...room,
          images: roomImages[index % roomImages.length],
        }));
        setHabitaciones(roomsWithImages);
  
        // Si llegó un selectedRoom desde el Home, busca su versión con images
        if (selectedRoomFromState) {
          const match = roomsWithImages.find(
            (r) => r.id === selectedRoomFromState.id
          );
          if (match) {
            setSelected(match);
          }
        }
      } catch (error) {
        console.error('Error al obtener las habitaciones:', error);
      }
    };
    fetchData();
  }, []);

  const handleReserve = (room) => {
    navigate('/reservations', { state: { selectedRoom: room } });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-emerald-700">{t('rooms')}</h1>

      {selected && (
        <div className="mb-6 p-6 border rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-9 bg-white">
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="rounded-lg shadow-lg"
            >
              {selected.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={img} 
                    alt={`Imagen ${index + 1}`} 
                    className="w-full h-auto max-h-96 mx-auto object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2 text-emerald-800">{t(selected.nombre)}</h2>
            <p className="flex items-center text-gray-600 mb-1">
              <FaUsers className="mr-2" />
              {selected.capacidad} {selected.capacidad === 1 ? 'persona' : 'personas'}
            </p>
            <p className="flex items-center text-gray-800 font-bold mb-4">
              <FaMoneyBillWave className="mr-2" />
              {formatPrice(selected.precio)}
            </p>
            <button
              onClick={() => handleReserve(selected)}
              className="bg-rojoHostal text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
            >
              {t('reserveNow')}
            </button>

            <div className="mt-4 space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt size={18} />
                <span>{t('ofrece')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWifi size={18} />
                <span>{t('wifi')}</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">{t('preguntaPor')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt size={18} />
                  <span>{t('ruta')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaUtensils size={18} />
                  <span>{t('recorrido')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaBinoculars size={18} />
                  <span>{t('aves')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {habitaciones.map((room) => (
          <div
            key={room.id}
            className={`transition-transform duration-300 hover:scale-105 hover:shadow-xl border rounded-2xl shadow overflow-hidden bg-white ${
              selected?.id === room.id ? 'border-emerald-600 ring-4 ring-emerald-300' : ''
            }`}
          >
            <img src={room.images[0]} alt={t(room.nombre)} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1 text-emerald-800">{t(room.nombre)}</h3>
              <p className="flex items-center text-gray-600 mb-1">
                <FaUsers className="mr-2" />
                {room.capacidad} {room.capacidad === 1 ? 'persona' : 'personas'}
              </p>
              <p className="flex items-center text-gray-800 font-bold mb-2">
                <FaMoneyBillWave className="mr-2" />
                {formatPrice(room.precio)}
              </p>
              <button
                onClick={() => setSelected(room)}
                className="bg-rojoHostal text-white px-4 py-2 rounded hover:bg-red-600 w-full transition"
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
