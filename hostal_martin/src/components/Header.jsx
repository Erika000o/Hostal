import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/images/logoMartin.jpg" alt="Hostal Martín Pescador" className="h-12" />
        <nav className="space-x-4">
          <NavLink to="/" className="hover:underline">Inicio</NavLink>
          <NavLink to="/about" className="hover:underline">Sobre Nosotros</NavLink>
          <NavLink to="/rooms" className="hover:underline">Habitaciones</NavLink>
          <NavLink to="/reservations" className="hover:underline">Reservas</NavLink>
          <NavLink to="/contact" className="hover:underline">Contacto</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
