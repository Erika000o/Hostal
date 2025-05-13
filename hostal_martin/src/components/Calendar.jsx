import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar({ reservations, isCalendarioData = false }) {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date());

  
  const reservedDates = new Set();

  if (isCalendarioData) {
  
    reservations.forEach(({ fecha }) => {
      if (fecha) {
        reservedDates.add(new Date(fecha).toDateString());
      }
    });
  } else {
  
    reservations.forEach(({ fecha_entrada, fecha_salida }) => {
      let currentDate = new Date(fecha_entrada);
      const endDate = new Date(fecha_salida);
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
    <div>
      <h2 className="text-xl font-semibold mb-2">{t('selectDates')}</h2>
      <ReactCalendar
        onChange={setDate}
        value={date}
        selectRange={true}
        minDate={new Date()}
        tileClassName={tileClassName}
      />
      {date.length > 0 ? (
        <p>
          {t('checkIn')}: {date[0].toDateString()} <br />
          {t('checkOut')}: {date[1].toDateString()}
        </p>
      ) : (
        <p>{t('selectRange')}</p>
      )}
      <style>{`
        .reserved-date {
          background-color: red !important;
          color: white !important;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}

export default Calendar;
