function Gallery() {
  const images = [
    { src: '/images/casa2.jpg', alt: 'Casa' },
    { src: '/images/personas2.jpg', alt: 'Personas' },
    { src: '/images/personas1.jpg', alt: 'Personas mesa' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-72 object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
