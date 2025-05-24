import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
// import { VelocityScroll } from '../components/ui/VelocityScroll';
import { fetchHabitaciones } from '../lib/api';

const roomImages = [

  '/images/Tierra Chanama.jpg',
  '/images/herencia Colonial 1.jpg',
  '/images/Las Heliconias5.jpg',
  '/images/Tierra de Encanto 1.jpg',
  '/images/Tradicion Cafetera1.jpg',
  '/images/Santuario del yipao1.jpg',
  '/images/Atarraya y Anzuelo.jpg',
  '/images/El Ave que Pesca 2.jpg',
  '/images/Mariposa Monarca 2.jpg',
];

function Home() {
  const { t } = useTranslation();
  const [habitaciones, setHabitaciones] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHabitaciones();
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

  const prevRoom = () => {
    setSelectedIndex((prev) => (prev === 0 ? habitaciones.length - 1 : prev - 1));
  };

  const nextRoom = () => {
    setSelectedIndex((prev) => (prev === habitaciones.length - 1 ? 0 : prev + 1));
  };

  const selectedRoom = habitaciones[selectedIndex] || {};

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price);
  };

  const handleSelectRoom = (room) => {
    navigate('/rooms', { state: { selectedRoom: room } });
  };

  return (
    <div className="container mx-auto p-14 relative">
      <p className="mb-3 text-2xl">{t('homeDescription')}</p>

      <div className="my-10">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('ourRooms')}</h2>

        {habitaciones.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleSelectRoom(selectedRoom)}
            >
              <img
                src={selectedRoom.src || '/images/habitacionbaño.jpg'}
                alt={t(selectedRoom.nombre || '')}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="max-w-md">
              <h3
                className="text-3xl font-semibold mb-2 cursor-pointer text-red-600 hover:underline"
                onClick={() => handleSelectRoom(selectedRoom)}
              >
                {t(selectedRoom.nombre || '')}
              </h3>
              <p className="text-gray-600 mb-2 text-2xl">
                {selectedRoom.capacidad} {selectedRoom.capacidad === 1 ? 'persona' : 'Personas'}
              </p>
              <p className="text-gray-800 font-bold mb-4 text-2xl">{formatPrice(selectedRoom.precio || 0)}</p>
              <p className="text-gray-500 italic mb-4 text-2xl">{t(selectedRoom.quote || '')}</p>
              <div className="flex gap-4">
                <button
                  onClick={prevRoom}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  &larr;
                </button>
                <button
                  onClick={nextRoom}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  &rarr;
                </button>
                <button
                  onClick={() => handleSelectRoom(selectedRoom)}
                  className="bg-rojoHostal text-white px-4 py-2 rounded hover:bg-rojoHostal text-lg"
                >
                  {t('viewDetails')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="my-10">
        <VelocityScroll className="text-center ">{t('bookNow')}</VelocityScroll>
      </div> */}


      <Gallery />
      {/* Sección sobre el Martín Pescador */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 my-16">
      <div className="w-full lg:w-[45%]">
          <img
            src="/images/martin2.jpg" 
            alt="Martín Pescador Grande"
            className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4 text-rojoHostal">{t('whyRoomQuote')}</h3>
          <p className="text-black mb-3 text-2xl">
            {t('whyRoomDescription')}
            <br /><br />
            {t('whyRoomDescription2')}
            <br /><br />
            {t('whyRoomDescription3')}
            <br /><br />
            
          </p>
        </div>
      </div>

      {/* Sección sobre la despulpadora */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 my-16">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4 text-rojoHostal">{t('coffeeMachine')}</h3>
          <p className="text-black mb-3 text-2xl">
            {t('coffeeMachineDescription')}
            <br /><br />
            {t('coffeeMachineDescription2')}
            <br /><br />
            {t('coffeeMachineDescription3')}
            <br /><br />
            {t('coffeeMachineDescription4')}
            <br /><br />
            {t('coffeeMachineDescription5')}
          </p>
        </div>
        <div className="w-full lg:w-[30%]">
          <img
            src="/images/MaquinaCafe.jpg" 
            alt="Despulpadora de café Bonasa #4"
            className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
