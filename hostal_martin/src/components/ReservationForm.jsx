import { useState, useEffect } from 'react';
import { createReserva } from '../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReservationForm({ initialHabitacionId = '', initialHabitacionName = '', initialFechaEntrada = '', initialFechaSalida = '' }) {
  const [formData, setFormData] = useState({
    habitacion_id: initialHabitacionId,
    nombre_cliente: '',
    email: '',
    fecha_entrada: initialFechaEntrada,
    fecha_salida: initialFechaSalida,
  });

  const [habitacionName, setHabitacionName] = useState(initialHabitacionName);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      habitacion_id: initialHabitacionId,
      fecha_entrada: initialFechaEntrada,
      fecha_salida: initialFechaSalida,
    }));
    setHabitacionName(initialHabitacionName);
  }, [initialHabitacionId, initialHabitacionName, initialFechaEntrada, initialFechaSalida]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Crear la reserva en el sistema
      await createReserva(formData);
      
    // Notificación de éxito con estilos personalizados
    toast.success('¡Reserva creada con éxito!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored'
    });

    // Construir el mensaje para WhatsApp
    const whatsappMessage = `NUEVA RESERVA:\n Hola \n quiero reservar la: ${habitacionName}\n  A nombre de: ${formData.nombre_cliente}\n  Para la fecha del: ${formData.fecha_entrada} al ${formData.fecha_salida}\n  Email: ${formData.email}`;
    const whatsappUrl = `https://wa.me/573187752351?text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
      } catch (error) {
    console.error('Error al crear la reserva:', error);
    
    // Notificación de error con estilos personalizados
    toast.error('Error al crear la reserva. Por favor, inténtalo de nuevo.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored'
    });
  }
};

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Formulario de Reserva</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="habitacion_name" className="block">Habitación</label>
          <input
            type="text"
            id="habitacion_name"
            name="habitacion_name"
            value={habitacionName}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />
          <input
            type="hidden"
            id="habitacion_id"
            name="habitacion_id"
            value={formData.habitacion_id}
          />
        </div>
        <div>
          <label htmlFor="nombre_cliente" className="block">Nombre</label>
          <input
            type="text"
            id="nombre_cliente"
            name="nombre_cliente"
            value={formData.nombre_cliente}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="fecha_entrada" className="block">Fecha de Entrada</label>
          <input
            type="date"
            id="fecha_entrada"
            name="fecha_entrada"
            value={formData.fecha_entrada}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="fecha_salida" className="block">Fecha de Salida</label>
          <input
            type="date"
            id="fecha_salida"
            name="fecha_salida"
            value={formData.fecha_salida}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Enviar Reserva
        </button>
      </form>
      <ToastContainer /> 
    </div>
  
  );
}

export default ReservationForm;