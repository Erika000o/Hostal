import Gallery from '../components/Gallery'

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenidos al Hostal Martín Pescador</h1>
      <p className="mb-4">
        Un refugio acogedor con un ambiente familiar y un aviario único. ¡Reserva tu experiencia hoy!
      </p>
      <Gallery />
    </div>
  )
}

export default Home