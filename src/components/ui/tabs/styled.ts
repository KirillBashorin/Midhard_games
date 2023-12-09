import styled from 'styled-components';
import Ul from '../../../elements/ul';
import Button from '../button/button';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import Image from '../../../elements/image';
import P from '../../../elements/p';
import SliderNav from '../slider-nav/slider-nav';
import { Title } from '../title/title';
import Subtitle from '../subtitle/subtitle';

const StyledTabButtons = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 25px;
  background-color: ${(props) => props.theme.textAlt};
  border: 2px solid ${(props) => props.theme.basicWhite};
  padding: 10px 28px;
  margin-bottom: 25px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    display: flex;
    border-radius: ${(props) => props.theme.borderRadiusBig};
    width: fit-content;
    padding: 0;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;

interface ITabButton {
  selected: boolean;
}

const TabButton = styled(Button)<ITabButton>`
  font-size: 16px;
  background-color: ${(props) =>
    props.selected ? props.theme.violet : 'transparent'};
  border: none;
  padding: 14px 5px;
  text-transform: uppercase;
  line-height: 110%;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.violet};
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 20px;
    border-radius: ${(props) => props.theme.borderRadiusBig};
    padding: 28px;
  }
`;

const SliderContainer = styled.div`
  margin: 0 -${(props) => props.theme.indentMobile};

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin: 0;
  }
`;

const StyledSwiper = styled(Swiper)`
  padding: 0 10px;
  cursor: grab;
`;

const SliderImage = styled(Image)`
  border-radius: 24px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    border-radius: ${(props) => props.theme.borderRadiusBig};
  }
`;

const SliderDescription = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: ${(props) => props.theme.borderRadiusBig};
  background-color: ${(props) => props.theme.transparent};
  padding: 30px;
  opacity: 0;
  transition: all 0.2s;

  &:hover {
    opacity: 100;
  }

  &:hover + div {
    opacity: 0;
    transition: all 0.2s;
  }
`;

const SlideTitle = styled(P)`
  position: absolute;
  bottom: 30px;
  left: 20px;
  right: 20px;
  color: ${(props) => props.theme.basicWhite};
  background-color: ${(props) => props.theme.violet};
  border-radius: 136px;
  padding: 10px 20px;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 700;
  line-height: 90%;
  text-transform: uppercase;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 34px;
  }
`;

const SliderDescriptionTitle = styled(Title)`
  margin-bottom: 20px;
  text-align: start;
`;

const SliderDescriptionSubtitle = styled(Subtitle)`
  text-align: start;
  margin-bottom: auto;
`;

const SliderDescriptionLink = styled(Button)`
  box-sizing: border-box;
  width: 72px;
  height: 72px;
  padding: 0;
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.primary};
  border: none;
  line-height: 110%;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.violet};
    color: ${(props) => props.theme.basicWhite};
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 85px;
    height: 85px;
  }

  @media screen and (min-width: ${(props) => props.theme.macWidth}) {
    width: 132px;
    height: 132px;
  }
`;

const StyledSliderNav = styled(SliderNav)`
  display: none;
  position: absolute;
  top: calc(50% + 48px);
  transform: translateY(-50%);
  width: 1552px;
  left: 0;
  right: 0;
  margin: 0 auto;

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    display: flex;
    justify-content: space-between;
  }
`;

export {
  StyledTabButtons,
  TabButton,
  SliderContainer,
  StyledSwiper,
  SliderImage,
  SlideTitle,
  SliderDescription,
  SliderDescriptionTitle,
  SliderDescriptionSubtitle,
  SliderDescriptionLink,
  StyledSliderNav,
};
