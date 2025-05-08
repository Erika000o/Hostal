import { useTranslation } from 'react-i18next';
import Gallery from '../components/Gallery';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';
import { VelocityScroll } from '../components/ui/VelocityScroll';

const habitaciones = [
  {
    id: 1,
    quote: "standardRoomQuote",
    name: "standardRoomName",
    designation: "standardRoomDesignation",
    src: "/images/habitacion1.png",
  },
  {
    id: 2,
    quote: "premiumSuiteQuote",
    name: "premiumSuiteName",
    designation: "premiumSuiteDesignation",
    src: "/images/habitacion2.png",
  },
  {
    id: 3,
    quote: "singleRoomQuote",
    name: "singleRoomName",
    designation: "singleRoomDesignation",
    src: "/images/habitacionbaño.jpg",
  },
  {
    id: 4,
    quote: "familyRoomQuote",
    name: "familyRoomName",
    designation: "familyRoomDesignation",
    src: "/images/habitacion.png",
  },
];

function Home() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 relative">
      <h1 className="mb-4">
        <span className="font-['Pacifico'] text-4xl">{t('homeTitle')}</span>
        <br />
        <span className="font-['Raleway'] font-medium text-2xl">--{t('homeSubtitle')}--</span>
      </h1>
      <p className="mb-4">{t('homeDescription')}</p>

      <div className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('ourRooms')}</h2>
        <AnimatedTestimonials
          testimonials={habitaciones.map(room => ({
            ...room,
            quote: t(room.quote),
            name: t(room.name),
            designation: t(room.designation),
          }))}
          autoplay={true}
        />
      </div>

      <div className="my-12">
        <VelocityScroll className="text-center">
          {t('bookNow')}
        </VelocityScroll>
      </div>

      <Gallery />
    </div>
  );
}

export default Home;