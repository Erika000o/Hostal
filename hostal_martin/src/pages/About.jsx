import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
      <div className="relative">
      <img
        src="/images/heli.jpg"
        alt="Decoración"
        className="absolute top-70 -right-80 w-32 h-992 object-cover rounded-xl shadow-lg m-90"
      />
    </div>

        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-green-800 mb-4">{t('about')}</h1>
          <p className="text-lg text-gray-700">{t('aboutWelcome')}</p>
        </motion.div>

        {/* Misión y Visión */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          
        >
          
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">{t('missionVisionTitle')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Misión a la izquierda */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-center text-green-700 mb-4">{t('missionTitle')}</h3>
              <p className="text-gray-700 leading-relaxed text-center">{t('missionText')}</p>
            </div>

            {/* Visión a la derecha */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-center text-green-700 mb-4">{t('visionTitle')}</h3>
              <p className="text-gray-700 leading-relaxed text-center">{t('visionText')}</p>
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
          <h2 className="text-2xl font-semibold text-green-700 mb-4">{t('history')}</h2>
          <p className="text-gray-700 leading-relaxed">{t('historyText')}</p>
        </motion.div>

        {/* Entorno */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-6">{t('ourEnvironment')}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{t('environmentText')}</p>

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
          <h2 className="text-2xl font-semibold text-green-700 mb-4">{t('ourSpace')}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{t('ourSpaceText')}</p>

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
