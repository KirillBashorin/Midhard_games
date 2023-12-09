import { useState, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';
import {
  StyledTabButtons,
  TabButton,
  SliderContainer,
  StyledSwiper,
  SliderImage,
  SlideTitle,
  SliderDescription,
  StyledSliderNav,
  SliderDescriptionTitle,
  SliderDescriptionSubtitle,
  SliderDescriptionLink,
} from './styled';
import { TitleSize } from '../../ui/title/title';
import 'swiper/css/scrollbar';

interface IContent {
  title: string;
  image: string;
  description: string;
  link: string;
}

interface ITabButton {
  id: number;
  title: string;
  content: IContent[];
}

interface ITabButtonsProps {
  tabs: ITabButton[];
}

const breakpoints = {
  464: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 10,
    scrollbar: { dragSize: 228 },
  },
  1330: {
    slidesPerView: 3,
    spaceBetween: 20,
    scrollbar: { dragSize: 228 },
  },
  1600: {
    slidesPerView: 3,
    spaceBetween: 20,
    scrollbar: { dragSize: 228 },
  },
};

const Tabs: React.FC<ITabButtonsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activetab = tabs[activeTabIndex].content;
  const swiperRef = useRef<Swiper | null>(null);

  const handlerNextButton = () => {
    swiperRef.current ? swiperRef.current.slideNext() : null;
  };

  const handlerPrevButton = () => {
    swiperRef.current ? swiperRef.current.slidePrev() : null;
  };

  return (
    <div>
      <StyledTabButtons>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            return item.id === 3 ? (
              <li key={item.id}>
                <TabButton link={'https://promo-games.com/'} target={'_blank'}>
                  {item.title}
                </TabButton>
              </li>
            ) : (
              <li key={item.id}>
                <TabButton
                  {...(index === activeTabIndex
                    ? { selected: true }
                    : { onClick: () => setActiveTabIndex(index) })}
                >
                  {item.title}
                </TabButton>
              </li>
            );
          })}
      </StyledTabButtons>
      <SliderContainer>
        <StyledSwiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={breakpoints}
          modules={[Scrollbar, Navigation]}
          scrollbar={{ draggable: true, dragSize: 76 }}
        >
          {activetab &&
            activetab.length &&
            activetab.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <SliderDescription>
                    <SliderDescriptionTitle size={TitleSize.SMALL} as={'h3'}>
                      {item.title}
                    </SliderDescriptionTitle>
                    <SliderDescriptionSubtitle>
                      {item.description}
                    </SliderDescriptionSubtitle>
                    {item.link ? (
                      <SliderDescriptionLink link={item.link} target={'_blank'}>
                        Play
                      </SliderDescriptionLink>
                    ) : null}
                  </SliderDescription>
                  <div>
                    <SliderImage src={item.image} alt={item.title} />
                    <SlideTitle>{item.title}</SlideTitle>
                  </div>
                </SwiperSlide>
              );
            })}
        </StyledSwiper>
        <StyledSliderNav
          onNextClick={handlerNextButton}
          onPrevClick={handlerPrevButton}
        />
      </SliderContainer>
    </div>
  );
};

export default Tabs;
