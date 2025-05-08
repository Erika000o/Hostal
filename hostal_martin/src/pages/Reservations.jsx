import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';
import Calendar from '../components/Calendar';

function Reservations() {
  const { t } = useTranslation();
  const location = useLocation();
  const selectedRoom = location.state?.selectedRoom || null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{t('reservations')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Calendar />
        <ReservationForm
          initialHabitacionId={selectedRoom ? selectedRoom.id : ''}
          initialHabitacionName={selectedRoom ? selectedRoom.name : ''}
        />
      </div>
    </div>
  );
}

export default Reservations;