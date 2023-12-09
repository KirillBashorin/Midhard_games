import { useRef } from 'react';
import {
  StyledAboutUs,
  StyledInner,
  AboutTextContainer,
  AboutTitle,
  AboutSubtitle,
  SwiperContainer,
  StyledSwiper,
  StyledSliderNav,
} from './styled.ts';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import PersonCard from '../../ui/person-card/person-card';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper';
import IlyaPhoto from '../../../assets/Бойцов Илья 1.png';
import AndreyPhoto from '../../../assets/Белоусов Андрей 1.png';
import DmitryPhoto from '../../../assets/Дмитрий_Журавлев-removebg.png';
import { useTranslation } from 'react-i18next';

interface IPersons {
  name: string;
  image: string;
  text: string;
  linkedin: string;
}

const breakpoints = {
  464: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1100: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1600: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

interface IServices {
  id?: string;
}

const AboutUs: React.FC<IServices> = ({ id }) => {
  const swiperRef = useRef<Swiper | null>(null);
  const handlerNextButton = () => {
    swiperRef.current ? swiperRef.current.slideNext() : null;
  };
  const handlerPrevButton = () => {
    swiperRef.current ? swiperRef.current.slidePrev() : null;
  };
  const { t } = useTranslation();

  const persons: IPersons[] = [
    {
      name: t('main.about_us.persons.0.name'),
      image: IlyaPhoto,
      text: 'Founder, СЕО',
      linkedin: 'https://www.linkedin.com/in/ilya-boytsov/',
    },
    {
      name: t('main.about_us.persons.1.name'),
      image: AndreyPhoto,
      text: 'Co-founder, CTO',
      linkedin: 'https://www.linkedin.com/in/formatcvt/',
    },
    {
      name: t('main.about_us.persons.2.name'),
      image: DmitryPhoto,
      text: 'СМО',
      linkedin: 'https://www.linkedin.com/in/dmitriy-zhuravlev-875503228/ ',
    },
  ];

  return (
    <StyledAboutUs id={id}>
      <Wrapper>
        <StyledInner>
          <AboutTextContainer>
            <AboutTitle size={TitleSize.MEDIUM} as={'h2'} $isDark={true}>
              {t('main.about_us.title')}
            </AboutTitle>
            <AboutSubtitle $isDark={true}>
              {t('main.about_us.subtitle')}
            </AboutSubtitle>
          </AboutTextContainer>
        </StyledInner>
      </Wrapper>
      <SwiperContainer>
        <StyledSwiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={breakpoints}
          modules={[Navigation]}
        >
          {persons &&
            persons.length &&
            persons.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PersonCard person={item}></PersonCard>
                </SwiperSlide>
              );
            })}
        </StyledSwiper>
        <StyledSliderNav
          onNextClick={handlerNextButton}
          onPrevClick={handlerPrevButton}
        />
      </SwiperContainer>
    </StyledAboutUs>
  );
};

export default AboutUs;
