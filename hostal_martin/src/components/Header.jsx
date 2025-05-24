import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-green-600 text-white p-3 shadow-md">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-12">

        <div className="flex-shrink-0">
          <img
            src="/images/logoMartin.jpg"
            alt="Hostal Martín Pescador"
            className="h-36 rounded-2xl shadow-lg"
          />
        </div>

        {/* Menú horizontal alineado y responsivo */}
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xl whitespace-nowrap">
          <NavLink to="/" className="hover:underline text-2xl">Inicio</NavLink>
          
          <NavLink to="/about" className="hover:underline text-2xl">{t('about')}</NavLink>
          <NavLink to="/rooms" className="hover:underline text-2xl">{t('rooms')}</NavLink>
          <NavLink to="/reservations" className="hover:underline text-2xl">{t('reservations')}</NavLink>
          <NavLink to="/contact" className="hover:underline text-2xl">{t('contact')}</NavLink>
          <NavLink to="/login" className="hover:underline text-2xl">{t('login')}</NavLink>
          <NavLink
            as="span"
            onClick={toggleLanguage}
            className={`cursor-pointer text-2xl ${i18n.language === 'es' || i18n.language === 'en' ? 'hover:underline' : ''}`}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
