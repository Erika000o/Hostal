import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      // General
      welcome: "Bienvenido al Hostal Martin Pescador",
      changeLanguage: "Cambiar idioma",
      loading: "Cargando...",
      error: "Error: ",
      price: "Precio: ",

      // Home.jsx
      homeTitle: "Martín Pescador",
      homeSubtitle: "Casa de Descanso",
      homeDescription: "Un lugar familiar, ideal para aquellos que desean conocer el municipio y descansar después de una aventura turística y gastronómica. También perfecto para quienes practican ecoturismo y se conectan con el Paisaje Cultural Cafetero. Además, es excelente para quienes llegan al municipio por temporadas laborales.",
      ourRooms: "Nuestras Habitaciones",
      bookNow: "¡Reserva tu estadía ahora!",
      standardRoomQuote: "Habitación acogedora con vista al jardín",
      standardRoomName: "Habitación Estándar",
      standardRoomDesignation: "2 personas",
      premiumSuiteQuote: "Suite con balcón privado y jacuzzi",
      premiumSuiteName: "Suite Premium",
      premiumSuiteDesignation: "2 personas",
      singleRoomQuote: "Habitación Tierra Chanama sencilla con baño privado",
      singleRoomName: "Habitación Sencilla",
      singleRoomDesignation: "4 personas",
      familyRoomQuote: "Habitación familiar con espacio amplio",
      familyRoomName: "Habitación Familiar",
      familyRoomDesignation: "4 personas",
      whyRoomQuote: "¿Por qué Martín Pescador?",
      whyRoomDescription: "El nombre de nuestro hostal rinde homenaje al Martín Pescador Grande (Megaceryle torquata), un ave fascinante que habita en las cercanías de ríos, lagunas y costas de América Latina.",
      whyRoomDescription2: "Este hermoso pájaro, con su plumaje azul grisáceo y su pecho color ladrillo, es conocido por su increíble habilidad para lanzarse al agua y capturar peces con gran precisión.",
      whyRoomDescription3: "Así como el martín pescador elige cuidadosamente su sitio para observar el entorno y disfrutar de la naturaleza, queremos que tú también encuentres en nuestro hostal un lugar perfecto para descansar, conectar con lo natural y vivir una experiencia tranquila y acogedora.",

      coffeeMachine: "Nuestra Despulpadora de Café Federal #3",
      coffeeMachineDescription: "Un símbolo de tradición, trabajo y pasión por el café.",
      coffeeMachineDescription2: "En un rincón especial de nuestro hostal se encuentra una despulpadora manual de café Federal #3, una máquina de tres chorros que ha sido testigo de madrugadas llenas de esfuerzo y aroma a grano fresco.",
      coffeeMachineDescription3: "Esta despulpadora, utilizada tradicionalmente en fincas cafeteras, representa más que un simple proceso: es la historia del campo, de las manos que cultivan y transforman el fruto en lo que conocemos como café.",
      coffeeMachineDescription4: "Al hospedarte con nosotros, no solo descansas; te conectas con la esencia del café, desde su origen hasta tu taza.",
      coffeeMachineDescription5: "Porque cada detalle en el Hostal Martín Pescador te habla, te cuenta algo, y esta máquina es un homenaje a la dedicación que hay detrás de cada sorbo.",

      // About.jsx
      about: "Sobre Nosotros",
      aboutWelcome: "¿Recuerdas esa paz de la infancia cuando todo era sencillo? Así se siente dormir en Martín Pescador: como volver a casa.",
      history: "Historia",
      historyText: "Bienvenidos a Casa de Descanso Martín Pescador, un Hostal donde la tranquilidad y la naturaleza se fusionan en una experiencia inolvidable. En este lugar del Paisaje Cultural Cafetero, cada día comienza con el aroma del café y la frescura de la mañana. Inspirado por el legado de un hombre apasionado por la pesca y el campo, este lugar invita a desconectar del mundo moderno y reconectar con lo esencial.",
      ourEnvironment: "Nuestro Entorno",
      environmentText: "Ubicado en una zona residencial tranquila y central del municipio de Caicedonia, Valle del Cauca, el Hostal Martín Pescador ofrece a sus huéspedes una experiencia totalmente diferente. Aunque está dentro de la vida urbana, su ambiente interno está diseñado para transportarte a las tradicionales fincas cafeteras, rodeadas de vegetación exuberante. El verde de las plantas y la calma que se respira evocan recuerdos en los paisajes cafeteros y cordilleranos, donde la naturaleza siempre es la protagonista. Cada espacio del hostal invita al descanso y a reconectar con la tranquilidad.",
      ourSpace: "Nuestro Espacio",
      ourSpaceText: "El verde de las plantas y la calma que se respira evocan recuerdos en los paisajes cafeteros y cordilleranos, donde la naturaleza siempre es la protagonista. Cada espacio del hostal invita al descanso y a reconectar con la tranquilidad.",
      
      missionVisionTitle: "Misión y Visión",
      visionTitle: "Visión",
      visionText: "Aspiramos a ser reconocidos como el destino preferido en el municipio para quienes buscan un lugar de descanso que combina la comodidad urbana con la tranquilidad del hostal. Nos comprometemos a crecer de manera sostenible, ofreciendo un servicio excepcional que fomente el turismo responsable y genere experiencias extraordinarias. Queremos ser un referente en el respeto por el medio ambiente y en la creación de un espacio donde los huéspedes puedan reconectar con la naturaleza, asegurando su regreso continuo.",
      missionTitle: "Misión",
      missionText: "Nuestra misión es ofrecer a nuestros huéspedes un espacio donde la tranquilidad del campo se encuentra con la comodidad de lo urbano. A través de una atención cálida y personalizada, brindamos una experiencia de descanso memorable, en un entorno natural que evoca las tradiciones del Paisaje Cultural Cafetero. Promovemos un turismo responsable y sostenible, respetando el medio ambiente, mientras ofrecemos un servicio accesible y de calidad.",

      // Contact.jsx
      contact: "Contacto",
      contactInfo: "Información de Contacto",
      address: "Dirección",
      addressText: "Carrera 13 # 10-62, Caicedonia, Valle del Cauca",
      phone: "Teléfono",
      phoneText: "+57 3225956704",
      contactEmailLabel: "Email",
      emailText: "casamartinpescador590@gmail.com",
      hours: "Horario de Atención",
      hoursText: "Lunes a Domingo: 8:00 AM - 8:00 PM",
      contactWhatsApp: "Contactar por WhatsApp",

      // Reservations.jsx
      reservations: "Reservas",
      selectRoom: "Selecciona una habitación",

      // Rooms.jsx
      rooms: "Nuestras Habitaciones",
      standardRoomPrice: "$150,000 COP",
      premiumSuitePrice: "$250,000 COP",
      singleRoomPrice: "$120,000 COP",
      familyRoomPrice: "$200,000 COP",
      viewDetails: "Ver Detalles",
      reserveNow: "Reservar Ahora",
      wifi: "Wifi",
      preguntaPor: "Pregunta por:",
      ofrece: "Lo que ofrece el hostal",
      ruta: "Rutas de ecoturismo guiadas por operadores locales.",
      recorrido: "Recorrido cultural por la ciudad y gastronomía local.",
      aves: "Observación de aves.",
      


      // Calendar.jsx
      selectDates: "Selecciona tus fechas",
      checkIn: "Fecha de entrada",
      checkOut: "Fecha de salida",
      selectRange: "Por favor, selecciona un rango de fechas.",
      reserved: "Reservado",
      available: "Disponible",


      //Admin.jsx
      loginTitle: "Iniciar Sesión",
      adminEmailLabel: "Email:",
      emailPlaceholder: "tuemail@ejemplo.com",
      passwordLabel: "Contraseña:",
      passwordPlaceholder: "********",
      loginButton: "Entrar",
      // Removed duplicate key 'loadingText'
      loginSuccess: "Login exitoso",
      loginError: "Error al iniciar sesión",

      adminPanelTitle: "Panel de Administración",
      selectRoomLabel: "Selecciona una habitación:",
      disponibleLabel: "Disponible",
      saveButton: "Guardar",
      savingText: "Guardando...",
      reservationsTitle: "Reservas",
      noReservations: "No hay reservas para esta habitación.",
      clientLabel: "Cliente:",
      emailClientLabel: "Email:",
      checkInLabel: "Entrada:",
      checkOutLabel: "Salida:",
      editButton: "Editar",
      deleteButton: "Eliminar",
      editReservationTitle: "Editar Reserva",
      cancelButton: "Cancelar",
      deleteConfirmMessage: "¿Estás seguro de eliminar esta reserva?",
      deleteRoomConfirmMessage: "¿Estás seguro de eliminar esta habitación?",
      errorFetchingRooms: "Error al obtener habitaciones",
      errorFetchingReservations: "Error al obtener reservas",
      errorSavingDisponible: "Error al guardar disponibilidad",
      errorDeletingReservation: "Error al eliminar reserva",
      errorDeletingRoom: "Error al eliminar habitación",
      // Removed duplicate key 'loadingText'

      // ReservationForm.jsx
      reservationForm: "Formulario de Reserva",
      room: "Habitación",
      name: "Nombre",
      email: "Email",
      checkInDate: "Fecha de Entrada",
      checkOutDate: "Fecha de Salida",
      submitReservation: "Enviar Reserva",

      // Footer.jsx
      footerText: "© 2025 Hostal Martín Pescador. Todos los derechos reservados.",
      contactViaWhatsApp: "Contáctanos vía WhatsApp",
      AtenciónUsuario: "Atención al Usuario",
      biora: "Biora",
      bioraAliadoTuristico: "Biora aliado turístico",
      shareExperience: "Comparte tu experiencia",
      Ubicación: "Ubicación",
      Team: "Equipo de Desarrollo de Software:"
    },
  },
  en: {
    translation: {
      // General
      welcome: "Welcome to Hostal Martin Pescador",
      changeLanguage: "Change language",
      loading: "Loading...",
      error: "Error: ",
      price: "Price: ",

      // Home.jsx
      homeTitle: "Martin Pescador",
      homeSubtitle: "Rest House",
      homeDescription: "A family-friendly place, ideal for those who wish to explore the town and relax after a tourist and gastronomic adventure. It’s also perfect for eco-tourism enthusiasts connecting with the Coffee Cultural Landscape. Additionally, it’s excellent for those visiting the town for work seasons and needing a place to stay overnight.",
      ourRooms: "Our Rooms",
      bookNow: "Book your stay now!",
      standardRoomQuote: "Cozy room with garden view",
      standardRoomName: "Standard Room",
      standardRoomDesignation: "2 people",
      premiumSuiteQuote: "Suite with private balcony and jacuzzi",
      premiumSuiteName: "Premium Suite",
      premiumSuiteDesignation: "2 people",
      singleRoomQuote: "Tierra Chanama single room with private bathroom",
      singleRoomName: "Single Room",
      singleRoomDesignation: "4 people",
      familyRoomQuote: "Family room with spacious area",
      familyRoomName: "Family Room",
      familyRoomDesignation: "4 people",
      whyRoomQuote: "Why Martin Pescador?",
      whyRoomDescription: "Our hostel's name pays homage to the Great Kingfisher (Megaceryle torquata), a fascinating bird that inhabits the areas near rivers, lagoons, and coasts of Latin America.",
      whyRoomDescription2: "This beautiful bird, with its grayish-blue plumage and brick-colored chest, is known for its incredible ability to dive into the water and catch fish with great precision.",
      whyRoomDescription3: "Just as the kingfisher carefully chooses its spot to observe the surroundings and enjoy nature, we want you to find in our hostel a perfect place to rest, connect with nature, and experience tranquility and warmth.",

      coffeeMachine: "Our Federal #3 Coffee Pulper",
      coffeeMachineDescription: "A symbol of tradition, work, and passion for coffee.",
      coffeeMachineDescription2: "In a special corner of our hostel, you'll find a manual Bonasa #4 coffee pulper, a three-spout machine that has witnessed early mornings filled with effort and the fresh aroma of coffee beans.",
      coffeeMachineDescription3: "This pulper, traditionally used on coffee farms, represents more than just a simple process: it's the story of the countryside, of the hands that cultivate and transform the fruit into what we know as coffee.",
      coffeeMachineDescription4: "When you stay with us, you don't just rest; you connect with the essence of coffee, from its origin to your cup.",
      coffeeMachineDescription5: "Because every detail at Martin Pescador Hostel speaks to you, tells you something, and this machine is a tribute to the dedication behind every sip.",

      // About.jsx
      about: "About Us",
      aboutWelcome: "Remember that childhood peace when everything was simple? That's how it feels to sleep at Martin Pescador: like coming home.",
      history: "History",
      historyText: "Welcome to Martin Pescador Rest House, a hostel where tranquility and nature blend into an unforgettable experience. In this place within the Coffee Cultural Landscape, each day begins with the aroma of coffee and the freshness of the morning. Inspired by the legacy of a man passionate about fishing and the countryside, this place invites you to disconnect from the modern world and reconnect with the essentials.",
      ourEnvironment: "Our Environment",
      environmentText: "Located in a quiet and central residential area of the Caicedonia municipality, Valle del Cauca, Hostal Martin Pescador offers its guests a completely different experience. Although it’s within the urban life, its internal environment is designed to transport you to traditional coffee farms, surrounded by lush vegetation. The green of the plants and the calm atmosphere evoke memories of coffee and mountain landscapes, where nature is always the protagonist. Every space in the hostel invites rest and reconnection with tranquility.",
      ourSpace: "Our Space",
      ourSpaceText: "Explore our facilities, enjoy the gardens, and breathe fresh air. Here you can relax, read, walk, or simply enjoy the scenery.",
  
      missionVisionTitle: "Mission and Vision",
      visionTitle: "Vision",
      visionText: "We aspire to be recognized as the preferred destination in the town for those seeking a place of rest that combines urban comfort with the tranquility of the hostel. We are committed to growing sustainably, offering exceptional service that promotes responsible tourism and creates extraordinary experiences. We aim to be a benchmark in environmental respect and in creating a space where guests can reconnect with nature, ensuring their continued return.",
      missionTitle: "Mission",
      missionText: "Our mission is to offer our guests a space where the calm of the countryside meets the comfort of the urban. Through warm and personalized attention, we provide a memorable resting experience in a natural environment that evokes the traditions of the Coffee Cultural Landscape. We promote responsible and sustainable tourism, respecting the environment while offering accessible and quality service.",



      // Contact.jsx
      contact: "Contact",
      contactInfo: "Contact Information",
      address: "Address",
      addressText: "Calle 5 # 5-45, Caicedonia, Valle del Cauca",
      phone: "Phone",
      phoneText: "+57 315 123 4567",
      emailLabel: "Email",
      emailText: "info@hostalmartinpescador.com",
      hours: "Operating Hours",
      hoursText: "Monday to Sunday: 8:00 AM - 8:00 PM",
      contactWhatsApp: "Contact via WhatsApp",

      // Reservations.jsx
      reservations: "Reservations",
      selectRoom: "Select a room",

      // Rooms.jsx
      rooms: "Our Rooms",
      standardRoomPrice: "$150,000 COP",
      premiumSuitePrice: "$250,000 COP",
      singleRoomPrice: "$120,000 COP",
      familyRoomPrice: "$200,000 COP",
      viewDetails: "View Details",
      reserveNow: "Reserve Now",
      wifi: "Wifi",
      ofrece: "What the hostel offers",
      ruta: "Guided ecotourism routes by local operators.",
      recorrido: "Cultural tour of the city and local gastronomy.",
      aves: "Bird watching.",
      preguntaPor: "Ask for:",


      // Calendar.jsx
      selectDates: "Select your dates",
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      selectRange: "Please select a date range.",
      reserved: "Reserved",
      available: "Available",
      
      // Admin.jsx
      loginTitle: "Login",
      contactEmailLabel: "Email:",
      emailPlaceholder: "youremail@example.com",
      passwordLabel: "Password:",
      passwordPlaceholder: "********",
      loginButton: "Login",
      // Removed duplicate key 'loadingText'
      loginSuccess: "Login successful",
      loginError: "Login error",

      adminPanelTitle: "Admin Panel",
      selectRoomLabel: "Select a room:",
      disponibleLabel: "Available",
      saveButton: "Save",
      savingText: "Saving...",
      reservationsTitle: "Reservations",
      noReservations: "No reservations for this room.",
      clientLabel: "Client:",
      emailClientLabel: "Email:",
      checkInLabel: "Check-in:",
      checkOutLabel: "Check-out:",
      editButton: "Edit",
      deleteButton: "Delete",
      editReservationTitle: "Edit Reservation",
      cancelButton: "Cancel",
      deleteConfirmMessage: "Are you sure you want to delete this reservation?",
      deleteRoomConfirmMessage: "Are you sure you want to delete this room?",
      errorFetchingRooms: "Error fetching rooms",
      errorFetchingReservations: "Error fetching reservations",
      errorSavingDisponible: "Error saving availability",
      errorDeletingReservation: "Error deleting reservation",
      errorDeletingRoom: "Error deleting room",
      loadingText: "Loading...",

      // ReservationForm.jsx
      reservationForm: "Reservation Form",
      room: "Room",
      name: "Name",
      email: "Email",
      checkInDate: "Check-in Date",
      checkOutDate: "Check-out Date",
      submitReservation: "Submit Reservation",

      // Footer.jsx
      footerText: "© 2025 Hostal Martín Pescador. All rights reserved.",
      contactViaWhatsApp: "Contact us via WhatsApp",
      AtenciónUsuario: "User attention",
      biora: "Biora",
      bioraAliadoTuristico: "Biora ally turistic",
      shareExperience: "Share your experience",
      Ubicación: "Location",
      Team: "Software Development Team:"
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;