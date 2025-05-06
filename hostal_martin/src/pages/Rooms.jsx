import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const habitaciones = [
  {
    id: 1,
    name: "Habitación Estándar",
    designation: "2 personas",
    price: "$150,000 COP",
    src: "/images/habitacion1.png",
    quote: "Habitación acogedora con vista al jardín"
  },
  {
    id: 2,
    name: "Suite Premium",
    designation: "2 personas",
    price: "$250,000 COP",
    src: "/images/habitacion2.png",
    quote: "Suite con balcón privado y jacuzzi"
  },
  {
    id: 3,
    name: "Habitación Sencilla",
    designation: "4 personas",
    price: "$120,000 COP",
    src: "/images/habitacionbaño.jpg",
    quote: "Habitación Tierra Chanama sencilla con baño privado"
  },
  {
    id: 4,
    name: "Habitación Familiar",
    designation: "4 personas",
    price: "$200,000 COP",
    src: "/images/habitacion.png",
    quote: "Habitación familiar con espacio amplio"
  }
];

function Rooms() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedRoom = location.state?.selectedRoom || null;

  const [selected, setSelected] = useState(selectedRoom);

  const handleReserve = (room) => {
    navigate('/reservations', { state: { selectedRoom: room } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Nuestras Habitaciones</h1>

      {selected && (
        <div className="mb-6 p-6 border rounded shadow flex flex-col md:flex-row items-center gap-6">
          <img src={selected.src} alt={selected.name} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">{selected.name}</h2>
            <p className="text-gray-600 mb-2">{selected.designation}</p>
            <p className="text-gray-800 font-bold mb-4">{selected.price}</p>
            <p className="italic text-gray-500 mb-4">"{selected.quote}"</p>
            <button
              onClick={() => handleReserve(selected)}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {habitaciones.map((room) => (
          <div key={room.id} className="border rounded shadow overflow-hidden">
            <img src={room.src} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{room.name}</h3>
              <p className="text-gray-600 mb-1">{room.designation}</p>
              <p className="text-gray-800 font-bold mb-2">{room.price}</p>
              <button
                onClick={() => setSelected(room)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
