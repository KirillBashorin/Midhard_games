import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import EnergyIco from '../../../assets/energy-violet.svg?react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import SliderNav from '../../ui/slider-nav/slider-nav';

const StyledReviews = styled.div`
  padding: 40px 0 62px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 40px 0 142px;
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 65px 0 188px;
  }
`;

const ReviewsTitle = styled(Title)`
  position: relative;
  margin-bottom: 26px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 501px;
    text-align: start;
    margin-bottom: 37px;
  }
`;

const StyledEnerguIco = styled(EnergyIco)`
  position: relative;
  bottom: -26px;
  width: 40px;
  height: 50px;
  margin-top: -50px;

  path {
    fill: ${(props) => props.theme.violet};
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    bottom: -11px;
    width: 70px;
    height: 88px;
    margin-top: -88px;
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    bottom: -16px;
  }
`;

const StyledSwiper = styled(Swiper)`
  padding: 0 10px;
  cursor: grab;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin-bottom: 25px;
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin-bottom: 35px;
  }
`;

const StyledSliderNav = styled(SliderNav)`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    display: flex;
    justify-content: space-between;
  }
`;

export {
  StyledReviews,
  ReviewsTitle,
  StyledEnerguIco,
  StyledSwiper,
  StyledSliderNav,
};
