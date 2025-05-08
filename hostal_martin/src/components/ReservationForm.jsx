import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createReserva } from '../lib/api';

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
      alert(t('reservationSuccess', { defaultValue: 'Reserva creada con éxito' }));
    } catch (error) {
      console.error('Error al crear la reserva:', error);
      alert(t('reservationError', { defaultValue: 'Error al crear la reserva. Por favor, inténtalo de nuevo.' }));
    }
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">{t('reservationForm')}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="habitacion_name" className="block">{t('room')}</label>
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
          <label htmlFor="nombre_cliente" className="block">{t('name')}</label>
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
          <label htmlFor="email" className="block">{t('email')}</label>
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
          <label htmlFor="fecha_entrada" className="block">{t('checkInDate')}</label>
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
          <label htmlFor="fecha_salida" className="block">{t('checkOutDate')}</label>
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
          {t('submitReservation')}
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;