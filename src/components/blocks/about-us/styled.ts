import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import Subtitle from '../../ui/subtitle/subtitle';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import SliderNav from '../../ui/slider-nav/slider-nav';

const StyledAboutUs = styled.div`
  padding: 63px 0 0;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 103px 0 50px;
  }

  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    padding: 170px 0 415px;
    position: relative;
  }
`;

const StyledInner = styled.div`
  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    display: grid;
    grid-template-columns: 410px 1fr;
    gap: 186px;
  }
`;

const AboutTextContainer = styled.div`
  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const AboutTitle = styled(Title)`
  margin-bottom: 15px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    margin-bottom: 25px;
  }
`;

const AboutSubtitle = styled(Subtitle)`
  margin-bottom: 22px;

  br {
    display: none;
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 49%;
    text-align: start;
    margin: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    width: auto;

    br {
      display: block;
    }
  }
`;

const SwiperContainer = styled.div`
  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    position: absolute;
    top: 170px;
    left: 0;
    right: 0;
    padding-left: calc(50% - 240px);
  }
`;

const StyledSwiper = styled(Swiper)`
  padding: 0 10px;
  cursor: grab;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 0 20px;
    margin-bottom: 26px;
  }

  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    margin: 0;
  }
`;

const StyledSliderNav = styled(SliderNav)`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }

  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    padding: 0;
    position: absolute;
    bottom: 89px;
    left: 20px;
    justify-content: flex-start;
    gap: 5px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    left: calc(50% - 740px);
  }
`;

export {
  StyledAboutUs,
  StyledInner,
  AboutTextContainer,
  AboutTitle,
  AboutSubtitle,
  SwiperContainer,
  StyledSwiper,
  StyledSliderNav,
};
