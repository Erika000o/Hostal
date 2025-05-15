import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-green-700 bg-gray-800 text-white py-10 px-4 border-t-4 border-t-[#030a06] shadow-inner">
      {/* Íconos centrados */}
      <div className="flex justify-center flex-wrap gap-8 mb-8">
        <a
          href="https://www.facebook.com/profile.php?id=61571920404498&locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/Facebook.png" alt={t('facebook')} className="w-16 h-16" />
          <span className="mt-2 text-sm">{t('Facebook')}</span>
        </a>
        <a
          href="https://www.instagram.com/casamartinpescador590?utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/Instagram.png" alt={t('instagram')} className="w-16 h-16" />
          <span className="mt-2 text-sm">{t('Instagram')}</span>
        </a>
        <a
          href="https://wa.me/message/257OK2VEIYLJK1?src=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/WhatsApp.png" alt={t('whatsapp')} className="w-16 h-16" />
          <span className="mt-2 text-sm">{t('Whatsapp')}</span>
        </a>
        <a
          href="https://g.page/r/CYKoK1MhLj1tEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('shareExperience')}
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/Reseñas.png" alt={t('shareExperience')} className="w-16 h-16" />
          <span className="mt-2 text-sm">{t('Comparte tu experiencia')}</span>
        </a>
      </div>

      {/* Información centrada en dos columnas */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
          {/* Columna izquierda */}
          <div className="space-y-2 max-w-md">
            <p>CR 13 # 10-62 Caicedonia, Valle del Cauca - Colombia</p>
            <p>Director General: Iván Giraldo</p>
          </div>

          {/* Columna derecha */}
          <div className="space-y-2 max-w-md">
            <p>
              <a
                href="mailto:casamartinpescador590@gmail.com"
                className="underline hover:text-green-400"
              >
                casamartinpescador590@gmail.com
              </a>
            </p>
            <p>Derechos reservados – Universidad del Valle</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
