import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/images/logoMartin.jpg" alt="Hostal Martín Pescador" className="h-12" />
        <nav className="space-x-4">
          <NavLink to="/" className="hover:underline">Inicio</NavLink>
          <NavLink
              as="span"
              onClick={toggleLanguage}
              className={`cursor-pointer ${i18n.language === 'es' || i18n.language === 'en' ? 'hover:underline' : ''}`}
              >
              {i18n.language === 'es' ? 'EN' : 'ES'}
          </NavLink>

          <NavLink to="/about" className="hover:underline">{t('about')}</NavLink>
          <NavLink to="/rooms" className="hover:underline">{t('rooms')}</NavLink>
          <NavLink to="/reservations" className="hover:underline">{t('reservations')}</NavLink>
          <NavLink to="/contact" className="hover:underline">{t('contact')}</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;