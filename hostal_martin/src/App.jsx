import { Routes, Route } from 'react-router-dom';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import { FloatingWhatsApp } from './components/ui/WhatsApp';

// Páginas
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
