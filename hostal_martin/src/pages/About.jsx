import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
      <div className="relative">
    </div>
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center" 
        >
          <h1 className="text-4xl font-bold text-green-800 mb-4">{t('about')}</h1>
          <p className="text-2xl text-gray-700">{t('aboutWelcome')}</p>
        </motion.div>

        {/* Misión y Visión */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            {t('missionVisionTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            
            {/* Misión con imagen de fondo */}
            <div
              className="relative p-6 rounded-xl shadow-md overflow-hidden text-center text-white h-full flex flex-col justify-between"
              style={{
                backgroundImage: "url('/images/martin2.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

              <div className="relative z-10 flex flex-col justify-center h-full">
                <h3 className="text-3xl font-bold mb-4 drop-shadow-md">{t('missionTitle')}</h3>
                <p className="text-2xl leading-relaxed drop-shadow-md text-justify">{t('missionText')}</p>
              </div>
            </div>

            {/* Visión con imagen de fondo */}
            <div
              className="relative p-6 rounded-xl shadow-md overflow-hidden text-center text-white h-full flex flex-col justify-between"
              style={{
                backgroundImage: "url('/images/pajaro.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

              <div className="relative z-10 flex flex-col justify-center h-full">
                <h3 className="text-3xl font-bold mb-4 drop-shadow-md">{t('visionTitle')}</h3>
                <p className="text-2xl leading-relaxed drop-shadow-md text-justify">{t('visionText')}</p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Historia */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-green-700 mb-4">{t('history')}</h2>
          <p className="text-gray-700 text-2xl leading-relaxed">{t('historyText')}</p>
        </motion.div>

        {/* Entorno */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-green-700 mb-6">{t('ourEnvironment')}</h2>
          <p className="text-gray-700 text-2xl leading-relaxed mb-6">{t('environmentText')}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/images/espacio1.jpg" alt="Plantas" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src="/images/espacio2.jpg" alt="Paisaje cafetero" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src="/images/espacio3.jpg" alt="Hostal relajante" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
          </div>
        </motion.div>

        {/* Nuestro Espacio + Galería */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16" 
        >
          <h2 className="text-3xl font-semibold text-green-700 mb-4">{t('ourSpace')}</h2>
          <p className="text-gray-700 text-2xl leading-relaxed mb-6">{t('ourSpaceText')}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/images/naturaleza1.jpg" alt="Plantas" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src="/images/naturaleza2.jpg" alt="Paisaje cafetero" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src="/images/naturaleza3.jpg" alt="Hostal relajante" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
