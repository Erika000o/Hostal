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
      homeDescription: "Un lugar familiar, ideal para aquellos que desean conocer el municipio y descansar después de una aventura turística y gastronómica. También perfecto para quienes practican ecoturismo y se conectan con el Paisaje Cultural Cafetero. Además, es excelente para quienes llegan al municipio por temporadas laborales y necesitan pernoctar.",
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

      // About.jsx
      about: "Sobre Nosotros",
      aboutWelcome: "Bienvenidos a Casa de Descanso Martín Pescador, un Hostal donde la tranquilidad y la naturaleza se fusionan en una experiencia inolvidable.",
      history: "Historia",
      historyText: "Bienvenidos a Casa de Descanso Martín Pescador, un Hostal donde la tranquilidad y la naturaleza se fusionan en una experiencia inolvidable. En este lugar del Paisaje Cultural Cafetero, cada día comienza con el aroma del café y la frescura de la mañana. Inspirado por el legado de un hombre apasionado por la pesca y el campo, este lugar invita a desconectar del mundo moderno y reconectar con lo esencial.",
      ourEnvironment: "Nuestro Entorno",
      environmentText: "Ubicado en una zona residencial tranquila y central del municipio de Caicedonia, Valle del Cauca, el Hostal Martín Pescador ofrece a sus huéspedes una experiencia totalmente diferente. Aunque está dentro de la vida urbana, su ambiente interno está diseñado para transportarte a las tradicionales fincas cafeteras, rodeadas de vegetación exuberante. El verde de las plantas y la calma que se respira evocan recuerdos en los paisajes cafeteros y cordilleranos, donde la naturaleza siempre es la protagonista. Cada espacio del hostal invita al descanso y a reconectar con la tranquilidad.",

      // Contact.jsx
      contact: "Contacto",
      contactInfo: "Información de Contacto",
      address: "Dirección",
      addressText: "Calle 5 # 5-45, Caicedonia, Valle del Cauca",
      phone: "Teléfono",
      phoneText: "+57 315 123 4567",
      contactEmailLabel: "Email",
      emailText: "info@hostalmartinpescador.com",
      hours: "Horario de Atención",
      hoursText: "Lunes a Domingo: 8:00 AM - 8:00 PM",
      contactWhatsApp: "Contactar por WhatsApp",

      // Reservations.jsx
      reservations: "Reservas",

      // Rooms.jsx
      rooms: "Nuestras Habitaciones",
      standardRoomPrice: "$150,000 COP",
      premiumSuitePrice: "$250,000 COP",
      singleRoomPrice: "$120,000 COP",
      familyRoomPrice: "$200,000 COP",
      viewDetails: "Ver Detalles",
      reserveNow: "Reservar Ahora",

      // Calendar.jsx
      selectDates: "Selecciona tus fechas",
      checkIn: "Fecha de entrada",
      checkOut: "Fecha de salida",
      selectRange: "Por favor, selecciona un rango de fechas.",


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

      // About.jsx
      about: "About Us",
      aboutWelcome: "Welcome to Martin Pescador Rest House, a hostel where tranquility and nature blend into an unforgettable experience.",
      history: "History",
      historyText: "Welcome to Martin Pescador Rest House, a hostel where tranquility and nature blend into an unforgettable experience. In this place within the Coffee Cultural Landscape, each day begins with the aroma of coffee and the freshness of the morning. Inspired by the legacy of a man passionate about fishing and the countryside, this place invites you to disconnect from the modern world and reconnect with the essentials.",
      ourEnvironment: "Our Environment",
      environmentText: "Located in a quiet and central residential area of the Caicedonia municipality, Valle del Cauca, Hostal Martin Pescador offers its guests a completely different experience. Although it’s within the urban life, its internal environment is designed to transport you to traditional coffee farms, surrounded by lush vegetation. The green of the plants and the calm atmosphere evoke memories of coffee and mountain landscapes, where nature is always the protagonist. Every space in the hostel invites rest and reconnection with tranquility.",

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

      // Rooms.jsx
      rooms: "Our Rooms",
      standardRoomPrice: "$150,000 COP",
      premiumSuitePrice: "$250,000 COP",
      singleRoomPrice: "$120,000 COP",
      familyRoomPrice: "$200,000 COP",
      viewDetails: "View Details",
      reserveNow: "Reserve Now",

      // Calendar.jsx
      selectDates: "Select your dates",
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      selectRange: "Please select a date range.",
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