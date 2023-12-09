import { useState, useEffect } from 'react';
import {
  StyledPartners,
  PartnersInner,
  StyledSwiper,
  SlideContainer,
  SliderImage,
  PartnersList,
  StyledCrosshair,
} from './styled';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Wrapper from '../../layout/wrapper/wrapper';
import Partner1 from '../../../assets/partner-1.png';
import Partner2 from '../../../assets/partner-2.png';

const breakpoints = {
  464: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1100: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1600: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

interface Ipartners {
  image: string;
}

const partners: Ipartners[] = [
  {
    image: `${Partner1}`,
  },
  {
    image: `${Partner2}`,
  },
  {
    image: `${Partner1}`,
  },
  {
    image: `${Partner1}`,
  },
  {
    image: `${Partner1}`,
  },
  {
    image: `${Partner2}`,
  },
  {
    image: `${Partner1}`,
  },
  {
    image: `${Partner1}`,
  },
];

interface IPartners {
  id?: string;
}

const Partners: React.FC<IPartners> = ({ id }) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.matchMedia('(min-width: 1600px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1600px)');

    const handleMediaChange = (evt: MediaQueryListEvent) => {
      setIsDesktop(evt.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  if (isDesktop) {
    return (
      <StyledPartners id={id}>
        <Wrapper>
          <PartnersInner>
            <PartnersList>
              {partners &&
                partners.length &&
                partners.map((item, index) => {
                  return (
                    <li key={index}>
                      <SliderImage src={item.image} />
                    </li>
                  );
                })}
            </PartnersList>
            <StyledCrosshair />
          </PartnersInner>
        </Wrapper>
      </StyledPartners>
    );
  } else {
    return (
      <StyledPartners id={id}>
        <StyledSwiper
          spaceBetween={5}
          slidesPerView={'auto'}
          breakpoints={breakpoints}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
        >
          {partners &&
            partners.length &&
            partners.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <SlideContainer>
                    <SliderImage src={item.image} />
                  </SlideContainer>
                </SwiperSlide>
              );
            })}
        </StyledSwiper>
      </StyledPartners>
    );
  }
};

export default Partners;
