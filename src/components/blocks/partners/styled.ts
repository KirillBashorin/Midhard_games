import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import Image from '../../../elements/image';
import Ul from '../../../elements/ul';
import Crosshair from '../../../assets/crosshair.svg';

const StyledPartners = styled.div`
  padding: 35px 0 40px;
  /* height: 300px; */

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 100px 0 90px;
    /* height: 174px; */
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 75px 0 72px;
    /* height: auto; */
  }
`;

const PartnersInner = styled.div`
  position: relative;
`;

const StyledSwiper = styled(Swiper)`
  cursor: grab;

  .swiper-slide {
    width: fit-content !important;
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    left: -20px;
    right: -20px;
  }
`;

const SlideContainer = styled.div`
  display: inline-block;
`;

const SliderImage = styled(Image)`
  height: 300px;
  width: auto;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    height: 230px;
  }
`;

const PartnersList = styled(Ul)`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 20px;

  li:first-child {
    margin-left: 504px;
  }
`;

const StyledCrosshair = styled.div`
  position: absolute;
  display: none;
  background-image: url(${Crosshair});
  background-size: contain;
  background-position: center;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    display: block;
    width: 74px;
    height: 74px;
    top: -21px;
    left: 0;
  }
`;

export {
  StyledPartners,
  PartnersInner,
  StyledSwiper,
  SlideContainer,
  SliderImage,
  PartnersList,
  StyledCrosshair,
};
