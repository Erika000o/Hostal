import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{t('selectDates')}</h2>
      <ReactCalendar
        onChange={setDate}
        value={date}
        selectRange={true}
        minDate={new Date()}
      />
      {date.length > 0 ? (
        <p>
          {t('checkIn')}: {date[0].toDateString()} <br />
          {t('checkOut')}: {date[1].toDateString()}
        </p>
      ) : (
        <p>{t('selectRange')}</p>
      )}
    </div>
  );
}

export default Calendar;