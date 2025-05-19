import { useState } from 'react'; 
import { useTranslation } from 'react-i18next';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarCustom.css'; // Importamos nuestros estilos personalizados opcionalmente

function Calendar({ reservations, isCalendarioData = false }) {
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
    if (view === 'month' && reservedDates.has(date.toDateString())) {
      return 'reserved-date';
    }
    return null;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{t('selectDates')}</h2>

      <div className="custom-calendar-wrapper">
        <ReactCalendar
          onChange={setDate}
          value={date}
          selectRange={true}
          minDate={new Date()}
          tileClassName={tileClassName}
          className="rounded-lg p-2"
        />
      </div>

      {/* Leyenda moderna */}
      <div className="flex gap-6 mt-6 text-sm items-center justify-center">
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 bg-gray-300 rounded-full border border-gray-400"></span>
          <span className="text-gray-700">{t('reserved')}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 bg-white border border-gray-400 rounded-full"></span>
          <span className="text-gray-700">{t('available')}</span>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style>{`
        .reserved-date {
          background-color: #699cdb !important;  /* slate-300 */
          color: #1f2937 !important;            /* gray-800 */
          border-radius: 9999px !important;
          font-weight: bold;
        }

        .react-calendar {
          border: none;
          font-family: Arial, sans-serif;
        }

        .react-calendar__tile {
          padding: 0.75rem 0.5rem;
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
