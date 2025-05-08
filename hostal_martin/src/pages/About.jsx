import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{t('about')}</h1>
        <p className="mb-4">{t('aboutWelcome')}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('history')}</h2>
        <p className="mb-4">{t('historyText')}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('ourEnvironment')}</h2>
        <p className="mb-4">{t('environmentText')}</p>
      </div>
    </div>
  );
}

export default About;