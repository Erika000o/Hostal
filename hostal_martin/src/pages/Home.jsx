import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Gallery from '../components/Gallery';
import { VelocityScroll } from '../components/ui/VelocityScroll';
import { fetchHabitaciones } from '../lib/api';

function Home() {
  const { t } = useTranslation();
  const [habitaciones, setHabitaciones] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHabitaciones();
        setHabitaciones(response.data);
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

  // Función para formatear precio en COP
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price);
  };

  return (
    <div className="container mx-auto p-4 relative">
      <h1 className="mb-4">
        <span className="font-['Pacifico'] text-4xl">{t('homeTitle')}</span>
        <br />
        <span className="font-['Raleway'] font-medium text-2xl">--{t('homeSubtitle')}--</span>
      </h1>
      <p className="mb-4">{t('homeDescription')}</p>

      <div className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('ourRooms')}</h2>

        {habitaciones.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-lg shadow-lg overflow-hidden">
              <img
                src={selectedRoom.src || '/images/habitacionbaño.jpg'}
                alt={t(selectedRoom.nombre || '')}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold mb-2">{t(selectedRoom.nombre || '')}</h3>
              <p className="text-gray-600 mb-2">
                {selectedRoom.capacidad} {selectedRoom.capacidad === 1 ? 'persona' : 'personas'}
              </p>
              <p className="text-gray-800 font-bold mb-4">{formatPrice(selectedRoom.precio || 0)}</p>
              <p className="text-gray-500 italic mb-4">{t(selectedRoom.quote || '')}</p>
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
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="my-12">
        <VelocityScroll className="text-center">{t('bookNow')}</VelocityScroll>
      </div>

      <Gallery />
    </div>
  );
}

export default Home;
