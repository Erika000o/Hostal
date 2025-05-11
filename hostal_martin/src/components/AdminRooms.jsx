import React, { useEffect, useState } from 'react';

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion_es: '',
    precio: '',
  });
  const [editingRoomId, setEditingRoomId] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/habitacion', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Error al obtener habitaciones');
      }
      const data = await response.json();
      if (data.success) {
        setRooms(data.data);
      } else {
        setError('Error al obtener habitaciones');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const url = editingRoomId
        ? `http://localhost:5000/api/habitacion/${editingRoomId}`
        : 'http://localhost:5000/api/habitacion';
      const method = editingRoomId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar habitación');
      }

      await fetchRooms();
      setFormData({ nombre: '', descripcion_es: '', precio: '' });
      setEditingRoomId(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (room) => {
    setFormData({
      nombre: room.nombre,
      descripcion_es: room.descripcion_es,
      precio: room.precio,
    });
    setEditingRoomId(room.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta habitación?')) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:5000/api/habitacion/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Error al eliminar habitación');
      }
      await fetchRooms();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Gestión de Habitaciones</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading && <p className="mb-4">Cargando...</p>}

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Descripción</label>
          <textarea
            name="descripcion_es"
            value={formData.descripcion_es}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Precio</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            step="0.01"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {editingRoomId ? 'Actualizar Habitación' : 'Crear Habitación'}
        </button>
        {editingRoomId && (
          <button
            type="button"
            onClick={() => {
              setEditingRoomId(null);
              setFormData({ nombre: '', descripcion_es: '', precio: '' });
            }}
            className="ml-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Cancelar
          </button>
        )}
      </form>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Nombre</th>
            <th className="border border-gray-300 p-2">Descripción</th>
            <th className="border border-gray-300 p-2">Precio</th>
            <th className="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td className="border border-gray-300 p-2">{room.nombre}</td>
              <td className="border border-gray-300 p-2">{room.descripcion_es}</td>
              <td className="border border-gray-300 p-2">{room.precio}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => handleEdit(room)}
                  className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(room.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {rooms.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No hay habitaciones disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRooms;
