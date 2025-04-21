import { useState } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Calendar() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Selecciona tus fechas</h2>
      <ReactCalendar
        onChange={setDate}
        value={date}
        selectRange={true}
        minDate={new Date()}
      />
      {date.length > 0 ? (
        <p>
          Fecha de entrada: {date[0].toDateString()} <br />
          Fecha de salida: {date[1].toDateString()}
        </p>
      ) : (
        <p>Por favor, selecciona un rango de fechas.</p>
      )}
    </div>
  )
}

export default Calendar