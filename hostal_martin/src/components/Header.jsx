import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-green-600 text-white p-3">

      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">{/*aqui va centrados */}
          <img src="/images/logoMartin.jpg" alt="Hostal Martín Pescador" className="h-28 rounded-xl"/>
          <h1 className="mb-0">
            <span className="font-['Pacifico'] text-4xl text-black">{t('homeTitle')}</span>
            <br />
            <span className="font-['Raleway'] font-medium text-2xl text-black">--{t('homeSubtitle')}--</span>{/*aqui va el nombre */}
          </h1>
        </div>

        <div className="relative">
          <img
            src="/images/flor.jpg"
            alt="Decoración"
            className="absolute top-40 right-66 w-32 h-992 object-cover rounded-xl shadow-lg m-1"
          />
        </div>
        <nav className="space-x-5">
          <NavLink to="/" className="hover:underline text-2xl">Inicio</NavLink>
          <NavLink
              as="span"
              onClick={toggleLanguage}
              className={`cursor-pointer text-2xl ${i18n.language === 'es' || i18n.language === 'en' ? 'hover:underline' : ''}`}
              >
              {i18n.language === 'es' ? 'EN' : 'ES'}
          </NavLink>

          <NavLink to="/about" className="hover:underline text-2xl">{t('about')}</NavLink>
          <NavLink to="/rooms" className="hover:underline text-2xl">{t('rooms')}</NavLink>
          <NavLink to="/reservations" className="hover:underline text-2xl">{t('reservations')}</NavLink>
          <NavLink to="/contact" className="hover:underline text-2xl">{t('contact')}</NavLink>
          <NavLink to="login" className="hover:underline text-2xl">{t('login')}</NavLink>
        </nav>
      </div>
      
    </header>
  );
}

export default Header;