import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-green-700 bg-gray-800 text-white py-10 px-4 border-t-4 border-t-[#030a06] shadow-inner">
      {/* Íconos centrados */}
      <div className="flex justify-center flex-wrap gap-8 mb-8 text-2xl">
        <a
          href="https://www.facebook.com/profile.php?id=61571920404498&locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/Facebook.png" alt={t('facebook')} className="w-16 h-16" />
          <span className="mt-2 text-2xl">{t('Facebook')}</span>
        </a>
        <a
          href="https://www.instagram.com/casamartinpescador590?utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/Instagram.png" alt={t('instagram')} className="w-16 h-16" />
          <span className="mt-2 text-2xl">{t('Instagram')}</span>
        </a>
        <a
          href="https://wa.me/message/257OK2VEIYLJK1?src=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/WhatsApp.png" alt={t('whatsapp')} className="w-16 h-16" />
          <span className="mt-2 text-2xl">{t('AtenciónUsuario')}</span>
        </a>
        <a
          href="https://www.instagram.com/biora_turismo?igsh=MWMxdGttcDExNndveQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/Biora logo blanco .png" alt={t('biora')} className="w-16 h-16" />
          <span className="mt-2 text-2xl">{t('BioraAliadoTuristico')}</span>
        </a>
        <a
          href="https://g.page/r/CYKoK1MhLj1tEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('shareExperience')}
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/Reseñas.png" alt={t('shareExperience')} className="w-16 h-16" />
          <span className="mt-2 text-2xl">{t('shareExperience')}</span>
        </a>
        <a
          href="https://www.google.com/maps/place/Hostal+Mart%C3%ADn+Pescador+%22Casa+de+Descanso%22/@4.3338432,-75.8300303,17z/data=!3m1!4b1!4m12!1m5!8m4!1e2!2s114227429867748241705!3m1!1e1!3m5!1s0x8e38532cf930c153:0x6d3d2e21532ba882!8m2!3d4.3338379!4d-75.8274554!16s%2Fg%2F11vdqd32xt?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('Ubicación')}
          className="hover:opacity-80 flex flex-col items-center"
        >
          <img src="/images/ubicacion.png" alt={t('Ubicación')} className="w-16 h-16" />
          <span className="mt-2 text-2xl">{t('Location')}</span>
        </a>
      </div>

      {/* Información centrada en dos columnas */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
          {/* Columna izquierda */}
          <div className="space-y-4 max-w-md text-2xl">
            <p>CR 13 # 10-62 Caicedonia, Valle del Cauca - Colombia</p>
            <p>Director General: Iván Giraldo</p>
          </div>

          {/* Columna derecha */}
          <div className="space-y-4 max-w-md text-2xl">
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
