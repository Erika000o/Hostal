function Gallery() {
    const images = [
      { src: '/images/habitacion.png', alt: 'Habitación Doble' },
      { src: '/images/habitacion2.png', alt: 'Habitación con Vista' },
      { src: '/images/habitacion1.png', alt: 'Aviario' },
    ]
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="w-full h-48 object-cover rounded" />
        ))}
      </div>
    )
  }
  
  export default Gallery