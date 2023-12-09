import styled from 'styled-components';
import Subtitle from '../../ui/subtitle/subtitle';
import Button from '../../ui/button/button';
import { Title } from '../../ui/title/title';
import Image from '../../../elements/image';
import Crosshair from '../../../assets/crosshair.svg';

const StyledHero = styled.div`
  position: relative;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    overflow: hidden;
  }
`;

const HeroInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 95px 0 440px;
  margin-bottom: 23px;
  gap: 15px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 486px 0 144px 0;
    margin-bottom: 78px;
    align-items: flex-start;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 318px 650px 170px 0;
    margin-bottom: 210px;
  }
`;

const HeroTitle = styled(Title)`
  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 620px;
    text-align: start;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    width: 820px;
  }
`;

const StyledSpan = styled.span`
  color: ${(props) => props.theme.violet};
`;

const HeroSubtitle = styled(Subtitle)`
  white-space: pre-wrap;
  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    text-align: start;
  }
`;

const HeroButton = styled(Button)`
  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: fit-content;
  }
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  border-radius: 25px;
  height: 390px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    display: block;
    top: 0;
    left: auto;
    right: 0;
    z-index: -1;
    border-radius: 100%;
    height: 1060px;
    width: 100%;
    transform: translate(40%, -55%);
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    top: -537px;
    left: auto;
    right: -330px;
    height: 1060px;
    width: 1060px;
    transform: translate(0, 0);
  }
`;

const HeroImage = styled(Image)`
  width: auto;
  height: 390px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin-left: -400px;
    margin-top: 420px;
    height: 885px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    height: 1060px;
    margin-left: -264px;
    margin-top: 338px;
  }
`;

const StyledCrosshair = styled.div`
  position: absolute;
  top: 182px;
  left: 0;
  width: 38px;
  height: 38px;
  background-image: url(${Crosshair});
  background-size: contain;
  background-position: center;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    top: 245px;
    left: 0;
    width: 74px;
    height: 74px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    top: 144px;
    left: 0;
  }
`;

export {
  StyledHero,
  HeroInner,
  HeroTitle,
  StyledSpan,
  HeroSubtitle,
  HeroButton,
  HeroImageWrapper,
  HeroImage,
  StyledCrosshair,
};
