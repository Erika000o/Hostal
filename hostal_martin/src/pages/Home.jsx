import Gallery from '../components/Gallery'
import { AnimatedTestimonials } from '../components/ui/animated-testimonials'
import { WordRotate } from '../components/ui/WordRotate'
import { VelocityScroll } from '../components/ui/VelocityScroll'

const habitaciones = [
  {
    quote: "Habitación acogedora con vista al jardín",
    name: "Habitación Estándar",
    designation: "2 personas",
    src: "/images/habitacion1.png"
  },
  {
    quote: "Suite con balcón privado y jacuzzi",
    name: "Suite Premium",
    designation: "2 personas",
    src: "/images/habitacion2.png"
  },
  {
    quote: "Habitación Tierra Chanama sencilla con baño privado",
    name: "Habitación Sencilla",
    designation: "4 personas",
    src: "/images/habitacionbaño.jpg"
  },
  {
    quote: "Habitación familiar con espacio amplio",
    name: "Habitación Familiar",
    designation: "4 personas",
    src: "/images/habitacion.png"
  }
]

function Home() {
  return (
    <div className="container mx-auto p-4 relative">
      <div className="absolute top-4 right-4 z-10">
        <WordRotate 
          words={["Descanso", "y", "tranquilidad","que te hará","volver!"]} 
          className="text-3xl font-bold text-primary bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
        />
      </div>

      <h1 className="mb-4">
        <span className="font-['Pacifico'] text-4xl">Martín Pescador</span>
        <br />
        <span className="font-['Raleway'] font-medium text-2xl">--Casa de Descanso--</span>
      </h1>
      <p className="mb-4">
        Un lugar familiar, ideal para aquellos que desean conocer el municipio y descansar después de una aventura turística y gastronómica. También perfecto para quienes practican ecoturismo y se
        conectan con el Paisaje Cultural Cafetero. Además, es excelente para quienes llegan al municipio por temporadas laborales y necesitan pernoctar.
      </p>

      <div className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Habitaciones</h2>
        <AnimatedTestimonials testimonials={habitaciones} autoplay={true} />
      </div>

      <div className="my-12">
        <VelocityScroll className="text-center">
          ¡Reserva tu estadía ahora!
        </VelocityScroll>
      </div>

      <Gallery />
    </div>
  )
}

export default Home