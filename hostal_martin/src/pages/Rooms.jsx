import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const habitaciones = [
  {
    id: 1,
    name: "standardRoomName",
    designation: "standardRoomDesignation",
    price: "standardRoomPrice",
    src: "/images/habitacion1.png",
    quote: "standardRoomQuote",
  },
  {
    id: 2,
    name: "premiumSuiteName",
    designation: "premiumSuiteDesignation",
    price: "premiumSuitePrice",
    src: "/images/habitacion2.png",
    quote: "premiumSuiteQuote",
  },
  {
    id: 3,
    name: "singleRoomName",
    designation: "singleRoomDesignation",
    price: "singleRoomPrice",
    src: "/images/habitacionbaño.jpg",
    quote: "singleRoomQuote",
  },
  {
    id: 4,
    name: "familyRoomName",
    designation: "familyRoomDesignation",
    price: "familyRoomPrice",
    src: "/images/habitacion.png",
    quote: "familyRoomQuote",
  },
];

function Rooms() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedRoom = location.state?.selectedRoom || null;

  const [selected, setSelected] = useState(selectedRoom);

  const handleReserve = (room) => {
    navigate('/reservations', { state: { selectedRoom: room } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('rooms')}</h1>

      {selected && (
        <div className="mb-6 p-6 border rounded shadow flex flex-col md:flex-row items-center gap-6">
          <img src={selected.src} alt={t(selected.name)} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">{t(selected.name)}</h2>
            <p className="text-gray-600 mb-2">{t(selected.designation)}</p>
            <p className="text-gray-800 font-bold mb-4">{t(selected.price)}</p>
            <p className="italic text-gray-500 mb-4">"{t(selected.quote)}"</p>
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
            <img src={room.src} alt={t(room.name)} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{t(room.name)}</h3>
              <p className="text-gray-600 mb-1">{t(room.designation)}</p>
              <p className="text-gray-800 font-bold mb-2">{t(room.price)}</p>
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