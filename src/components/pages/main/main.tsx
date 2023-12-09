import Hero from '../../blocks/hero/hero';
import OurWorks from '../../blocks/our-works/our-works';
import Services from '../../blocks/services/services';
import AboutUs from '../../blocks/about-us/about-us';
import Features from '../../blocks/features/features';
import Partners from '../../blocks/partners/partners';
import Reviews from '../../blocks/reviews/reviews';

interface IMain {
  activeLanguage: string;
}

const Main: React.FC<IMain> = ({ activeLanguage }) => {
  return (
    <main>
      <Hero id={'hero'} activeLanguage={activeLanguage} />
      <OurWorks id={'our-works'} />
      <Services id={'services'} />
      <AboutUs id={'about-us'} />
      <Features />
      <Partners id={'partners'} />
      <Reviews id={'reviews'} />
    </main>
  );
};

export default Main;
