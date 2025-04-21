function Rooms() {
    const rooms = [
      { 
        name: 'Habitación Doble', 
        description: 'Cama doble, vista al jardín', 
        price: '$150,000 COP',
        image: '/images/habitacion.png'
      },
      { 
        name: 'Habitación con Vista', 
        description: 'Cama king, balcón privado', 
        price: '$200,000 COP',
        image: '/images/habitacion2.png'
      },
      { 
        name: 'Habitación Aviario', 
        description: 'Vista al aviario, ambiente tranquilo', 
        price: '$180,000 COP',
        image: '/images/habitacion1.png'
      }
    ]
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Nuestras Habitaciones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
                <p className="text-gray-600 mb-3">{room.description}</p>
                <p className="font-bold text-primary mb-4">{room.price}</p>
                <button className="btn btn-primary w-full">
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Rooms