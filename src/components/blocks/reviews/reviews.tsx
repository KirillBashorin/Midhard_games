import { useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import {
  StyledReviews,
  ReviewsTitle,
  StyledEnerguIco,
  StyledSwiper,
  StyledSliderNav,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import Review from '../../ui/review/review';
import ReviewPhoto from '../../../assets/review-photo.png';

interface Ireviews {
  id: number;
  rating: number;
  text: string;
  image: string;
  name: string;
  name_description: string;
}

const reviews: Ireviews[] = [
  {
    id: 0,
    rating: 5,
    text: 'Midhard Games — это надёжные партнёры в разработке игр. Мы уже несколько раз сотрудничали с ними, и ребята всегда предоставляли качественные услуги. Их экспертиза в игровой индустрии очевидна, и мы с радостью будем обращаться снова и советовать всем нашим знакомым. Спасибо, Midhard Games',
    image: `${ReviewPhoto}`,
    name: 'Александр Терентьев',
    name_description: 'Владелец EA',
  },
  {
    id: 1,
    rating: 5,
    text: 'Midhard Games — это надёжные партнёры в разработке игр. Мы уже несколько раз сотрудничали с ними, и ребята всегда предоставляли качественные услуги. Их экспертиза в игровой индустрии очевидна, и мы с радостью будем обращаться снова и советовать всем нашим знакомым. Спасибо, Midhard Games',
    image: `${ReviewPhoto}`,
    name: 'Александр Терентьев',
    name_description: 'Владелец EA',
  },
  {
    id: 2,
    rating: 5,
    text: 'Midhard Games — это надёжные партнёры в разработке игр. Мы уже несколько раз сотрудничали с ними, и ребята всегда предоставляли качественные услуги. Их экспертиза в игровой индустрии очевидна, и мы с радостью будем обращаться снова и советовать всем нашим знакомым. Спасибо, Midhard Games',
    image: `${ReviewPhoto}`,
    name: 'Александр Терентьев',
    name_description: 'Владелец EA',
  },
  {
    id: 3,
    rating: 5,
    text: 'Midhard Games — это надёжные партнёры в разработке игр. Мы уже несколько раз сотрудничали с ними, и ребята всегда предоставляли качественные услуги. Их экспертиза в игровой индустрии очевидна, и мы с радостью будем обращаться снова и советовать всем нашим знакомым. Спасибо, Midhard Games',
    image: `${ReviewPhoto}`,
    name: 'Александр Терентьев',
    name_description: 'Владелец EA',
  },
  {
    id: 4,
    rating: 5,
    text: 'Midhard Games — это надёжные партнёры в разработке игр. Мы уже несколько раз сотрудничали с ними, и ребята всегда предоставляли качественные услуги. Их экспертиза в игровой индустрии очевидна, и мы с радостью будем обращаться снова и советовать всем нашим знакомым. Спасибо, Midhard Games',
    image: `${ReviewPhoto}`,
    name: 'Александр Терентьев',
    name_description: 'Владелец EA',
  },
  {
    id: 5,
    rating: 5,
    text: 'Midhard Games — это надёжные партнёры в разработке игр. Мы уже несколько раз сотрудничали с ними, и ребята всегда предоставляли качественные услуги. Их экспертиза в игровой индустрии очевидна, и мы с радостью будем обращаться снова и советовать всем нашим знакомым. Спасибо, Midhard Games',
    image: `${ReviewPhoto}`,
    name: 'Александр Терентьев',
    name_description: 'Владелец EA',
  },
  {
    id: 6,
    rating: 5,
    text: 'Midhard Games — это надёжные партнёры в разработке игр. Мы уже несколько раз сотрудничали с ними, и ребята всегда предоставляли качественные услуги. Их экспертиза в игровой индустрии очевидна, и мы с радостью будем обращаться снова и советовать всем нашим знакомым. Спасибо, Midhard Games',
    image: `${ReviewPhoto}`,
    name: 'Александр Терентьев',
    name_description: 'Владелец EA',
  },
  {
    id: 7,
    rating: 5,
    text: 'Midhard Games — это надёжные партнёры в разработке игр. Мы уже несколько раз сотрудничали с ними, и ребята всегда предоставляли качественные услуги. Их экспертиза в игровой индустрии очевидна, и мы с радостью будем обращаться снова и советовать всем нашим знакомым. Спасибо, Midhard Games Midhard Games — это надёжные партнёры в разработке игр. Мы уже несколько раз сотрудничали с ними, и ребята всегда предоставляли качественные услуги. Их экспертиза в игровой индустрии очевидна, и мы с радостью будем обращаться снова и советовать всем нашим знакомым. Спасибо, Midhard Games',
    image: `${ReviewPhoto}`,
    name: 'Александр Терентьев',
    name_description: 'Владелец EA',
  },
];

const breakpoints = {
  464: {
    slidesPerView: 1,
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
  1800: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

interface IReviews {
  id?: string;
}

const Reviews: React.FC<IReviews> = ({ id }) => {
  const swiperRef = useRef<Swiper | null>(null);

  const handlerNextButton = () => {
    swiperRef.current ? swiperRef.current.slideNext() : null;
  };

  const handlerPrevButton = () => {
    swiperRef.current ? swiperRef.current.slidePrev() : null;
  };

  return (
    <StyledReviews id={id}>
      <Wrapper>
        <ReviewsTitle size={TitleSize.MEDIUM} as={'h2'} $isDark={true}>
          Что говорят о нас наши клиенты
          <StyledEnerguIco />
        </ReviewsTitle>
      </Wrapper>
      <StyledSwiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={breakpoints}
        modules={[Navigation]}
      >
        {reviews &&
          reviews.length &&
          reviews.map((item) => {
            return (
              <SwiperSlide key={item.id} >
                <Review content={item} />
              </SwiperSlide>
            );
          })}
      </StyledSwiper>
      <Wrapper>
        <StyledSliderNav
          onNextClick={handlerNextButton}
          onPrevClick={handlerPrevButton}
        />
      </Wrapper>
    </StyledReviews>
  );
};

export default Reviews;
