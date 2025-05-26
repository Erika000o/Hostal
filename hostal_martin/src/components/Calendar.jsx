import { useState } from 'react'; 
import { useTranslation } from 'react-i18next';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './calendarCustom.css';

//cambiar False por True para mostrar habitaciones Reservadas                      !
function Calendar({ reservations, isCalendarioData = false, showReservedDates = false }) {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date());

  const parseDateLocal = (fechaStr) => {
    const [year, month, day] = fechaStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const reservedDates = new Set();

  if (isCalendarioData) {
    reservations.forEach(({ fecha }) => {
      if (fecha) {
        reservedDates.add(parseDateLocal(fecha).toDateString());
      }
    });
  } else {
    reservations.forEach(({ fecha_entrada, fecha_salida }) => {
      let currentDate = parseDateLocal(fecha_entrada);
      const endDate = parseDateLocal(fecha_salida);
      while (currentDate <= endDate) {
        reservedDates.add(currentDate.toDateString());
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });
  }

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && showReservedDates && reservedDates.has(date.toDateString())) {
      return 'reserved-date';
    }
    return null;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{t('selectDates')}</h2>

      <div className="custom-calendar-wrapper w-full max-w-2xl mx-auto">
        <ReactCalendar
          onChange={setDate}
          value={date}
          selectRange={true}
          minDate={new Date()}
          tileClassName={tileClassName}
          className="rounded-3xl p-3"
        />
      </div>

      {/* Leyenda moderna */}
      <div className="flex flex-wrap gap-x-10 gap-y-4 mt-8 text-base items-center justify-center">
        <div className="flex items-center gap-3 px-2 py-1">
          <span className="inline-block w-5 h-5 bg-gray-300 rounded-full border border-gray-400"></span>
          <span className="text-gray-700">{t('reserved')}</span>
        </div>
        <div className="flex items-center gap-3 px-2 py-1">
          <span className="inline-block w-5 h-5 bg-white border border-gray-400 rounded-full"></span>
          <span className="text-gray-700">{t('available')}</span>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style>{`
        .reserved-date {
          background-color: #699cdb !important;
          color: #1f2937 !important;
          border-radius: 9999px !important;
          font-weight: bold;
        }

        .react-calendar {
          border: none;
          font-family: Arial, sans-serif;
          font-size: 1.1rem; /* Aumenta el tamaño de fuente */
          max-width: 100%;    /* Asegura que use el espacio disponible */
        }

        .react-calendar__tile {
          padding: 1rem 0.75rem; /* Más padding para celdas */
          border-radius: 0.5rem;
          transition: background 0.3s ease;
        }

        .react-calendar__tile--active {
          background: #0ae7d5 !important;
          color: white !important;
        }

        .react-calendar__tile:enabled:hover {
          background-color: #e0f2f1;
          color: black;
        }
      `}</style>
    </div>
  );
}

export default Calendar;
