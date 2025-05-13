import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from '../components/Calendar';
import ReservationForm from '../components/ReservationForm';

const AdminPanel = () => {
  const { t } = useTranslation();
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [selectedRoomDisponible, setSelectedRoomDisponible] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [savingDisponible, setSavingDisponible] = useState(false);
  const [saveError, setSaveError] = useState('');

  const token = localStorage.getItem('token');

  const fetchReservations = async (roomId) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/reservas', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(t('errorFetchingReservations'));
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error(t('errorFetchingReservations'));
      }
      const data = result.data;
      const filtered = data.filter(r => r.habitacion_id === roomId);
      setReservations(filtered);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    if (selectedRoomId) {
      const room = rooms.find(r => r.id === selectedRoomId);
      setSelectedRoomDisponible(room ? room.disponible : false);
      fetchReservations(selectedRoomId);
    } else {
      setReservations([]);
      setSelectedRoomDisponible(false);
    }
  }, [selectedRoomId, rooms]);

  const fetchRooms = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/habitaciones', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(t('errorFetchingRooms'));
      }
      const result = await response.json();
      if (!result.success) {
        throw new Error(t('errorFetchingRooms'));
      }
      const data = result.data;
      if (!Array.isArray(data)) {
        throw new Error(t('errorFetchingRooms'));
      }
      setRooms(data);
      if (data.length > 0 && !selectedRoomId) {
        setSelectedRoomId(data[0].id);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRoomChange = (e) => {
    setSelectedRoomId(parseInt(e.target.value));
    setSelectedReservation(null);
  };

  const handleDisponibleChange = (e) => {
    setSelectedRoomDisponible(e.target.checked);
  };

  const saveDisponible = async () => {
    if (!selectedRoomId) return;
    setSavingDisponible(true);
    setSaveError('');
    try {
      if (!selectedRoomDisponible) {
        const response = await fetch('http://localhost:5000/api/reservas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            habitacion_id: selectedRoomId,
            nombre_cliente: 'Bloqueo Admin',
            email: 'admin@example.com',
            fecha_entrada: new Date().toISOString().split('T')[0],
            fecha_salida: new Date().toISOString().split('T')[0],
          }),
        });
        if (!response.ok) {
          throw new Error(t('errorSavingDisponible'));
        }
      } else {
        const response = await fetch(`http://localhost:5000/api/reservas/habitacion/${selectedRoomId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(t('errorSavingDisponible'));
        }
      }
      const updateResponse = await fetch(`http://localhost:5000/api/habitaciones/${selectedRoomId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ disponible: selectedRoomDisponible }),
      });
      if (!updateResponse.ok) {
        throw new Error(t('errorSavingDisponible'));
      }
      const result = await updateResponse.json();
      if (!result.success) {
        throw new Error(t('errorSavingDisponible'));
      }
      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.id === selectedRoomId ? { ...room, disponible: selectedRoomDisponible } : room
        )
      );
      await fetchReservations(selectedRoomId);
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setSavingDisponible(false);
    }
  };

  const handleDateToggle = async (date, isSelected) => {
    setLoading(true);
    setError('');
    try {
      if (isSelected) {
        const response = await fetch('http://localhost:5000/api/reservas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            habitacion_id: selectedRoomId,
            nombre_cliente: 'Admin',
            email: 'admin@example.com',
            fecha_entrada: date.toISOString().split('T')[0],
            fecha_salida: date.toISOString().split('T')[0],
          }),
        });
        if (!response.ok) {
          throw new Error(t('errorSavingDisponible'));
        }
      } else {
        alert(t('deleteConfirmMessage'));
      }
      await fetchReservations(selectedRoomId);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditReservation = (reservation) => {
    setSelectedReservation(reservation);
  };

  const handleDeleteReservation = async (id) => {
    if (!window.confirm(t('deleteConfirmMessage'))) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:5000/api/reservas/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(t('errorDeletingReservation'));
      }
      await fetchReservations(selectedRoomId);
      if (selectedReservation && selectedReservation.id === id) {
        setSelectedReservation(null);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReservationUpdated = async () => {
    await fetchReservations(selectedRoomId);
    setSelectedReservation(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('adminPanelTitle')}</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading && <p className="mb-4">{t('loadingText')}</p>}

      <div className="mb-6">
        <label htmlFor="room-select" className="block mb-2 font-medium">{t('selectRoomLabel')}</label>
        <select
          id="room-select"
          value={selectedRoomId || ''}
          onChange={handleRoomChange}
          className="border p-2 rounded w-full max-w-xs"
        >
          {rooms.map(room => (
            <option key={room.id} value={room.id}>{room.nombre}</option>
          ))}
        </select>
      </div>

      <div className="mb-6 flex items-center space-x-4">
        <label htmlFor="disponible-checkbox" className="font-medium">{t('disponibleLabel')}</label>
        <input
          type="checkbox"
          id="disponible-checkbox"
          checked={selectedRoomDisponible}
          onChange={handleDisponibleChange}
          className="h-5 w-5"
        />
        <button
          onClick={saveDisponible}
          disabled={savingDisponible}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {savingDisponible ? t('savingText') : t('saveButton')}
        </button>
      </div>

      <Calendar reservations={reservations} onDateToggle={handleDateToggle} />

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">{t('reservationsTitle')}</h2>
        {reservations.length === 0 ? (
          <p>{t('noReservations')}</p>
        ) : (
          <ul className="space-y-2">
            {reservations.map((res) => (
              <li key={res.id} className="border p-2 rounded flex justify-between items-center">
                <div>
                  <p><strong>{t('clientLabel')}</strong> {res.nombre_cliente}</p>
                  <p><strong>{t('emailClientLabel')}</strong> {res.email}</p>
                  <p><strong>{t('checkInLabel')}</strong> {res.fecha_entrada}</p>
                  <p><strong>{t('checkOutLabel')}</strong> {res.fecha_salida}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEditReservation(res)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    {t('editButton')}
                  </button>
                  <button
                    onClick={() => handleDeleteReservation(res.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    {t('deleteButton')}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedReservation && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">{t('editReservationTitle')}</h3>
          <ReservationForm
            initialHabitacionId={selectedReservation.habitacion_id}
            initialHabitacionName={rooms.find(r => r.id === selectedReservation.habitacion_id)?.nombre || ''}
            initialFechaEntrada={selectedReservation.fecha_entrada}
            initialFechaSalida={selectedReservation.fecha_salida}
            key={selectedReservation.id}
            onSuccess={handleReservationUpdated}
            reservationId={selectedReservation.id}
          />
          <button
            onClick={() => setSelectedReservation(null)}
            className="mt-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            {t('cancelButton')}
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
