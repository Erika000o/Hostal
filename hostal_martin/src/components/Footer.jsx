import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>{t('footerText')}</p>
      <a href="https://wa.me/3228803018" target="_blank" rel="noopener noreferrer" className="underline">
        {t('contactViaWhatsApp')}
      </a>
    </footer>
  );
}

export default Footer;