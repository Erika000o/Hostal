import { useState, useEffect } from 'react';
import { createReserva } from '../lib/api';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import 'react-toastify/dist/ReactToastify.css';


function ReservationForm({ initialHabitacionId = '', initialHabitacionName = '', initialFechaEntrada = '', initialFechaSalida = '' }) {
  const { t } = useTranslation();
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
      await createReserva(formData);

      toast.success('¡Reserva creada con éxito!', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });

      const whatsappMessage = `NUEVA RESERVA:\n Hola \n quiero reservar la habitacion: ${habitacionName}\n  A nombre de: ${formData.nombre_cliente}\n  Para la fecha del: ${formData.fecha_entrada} al ${formData.fecha_salida}\n  Email: ${formData.email}`;
      const whatsappUrl = `https://wa.me/573187752351?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.error('Error al crear la reserva:', error);
      toast.error('Error al crear la reserva. Por favor, inténtalo de nuevo.', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 w-full max-w-2xl mx-auto text-[18px]">

      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">{t('reservationForm')}</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="habitacion_name" className="block text-2xl font-medium text-gray-700 mb-1">
            {t('room')}
          </label>
          <input
            type="text"
            id="habitacion_name"
            name="habitacion_name"
            value={habitacionName}
            readOnly
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="hidden"
            id="habitacion_id"
            name="habitacion_id"
            value={formData.habitacion_id}
          />
        </div>

        <div>
          <label htmlFor="nombre_cliente" className="block text-2xl font-medium text-gray-700 mb-1">
            {t('name')}
          </label>
          <input
            type="text"
            id="nombre_cliente"
            name="nombre_cliente"
            value={formData.nombre_cliente}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-2xl font-medium text-gray-700 mb-1">
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label htmlFor="fecha_entrada" className="block text-2xl font-medium text-gray-700 mb-1">
            {t('checkInDate')}
          </label>
          <input
            type="date"
            id="fecha_entrada"
            name="fecha_entrada"
            value={formData.fecha_entrada}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label htmlFor="fecha_salida" className="block text-2xl font-medium text-gray-700 mb-1">{t('checkOutDate')}
          </label>
          <input
            type="date"
            id="fecha_salida"
            name="fecha_salida"
            value={formData.fecha_salida}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          {t('submitReservation')}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ReservationForm;
