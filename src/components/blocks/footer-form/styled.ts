import styled from 'styled-components';
import { Title } from '../.././ui/title/title';
import Subtitle from '../../ui/subtitle/subtitle';
import Crosshair from '../../../assets/crosshair-dark.svg';

const FooterTextContainer = styled.div`
  position: relative;
  max-width: 722px;
  margin: 0 auto;
`;

const FooterTitle = styled(Title)`
  margin-bottom: 10px;
`;

const FooterSubtitle = styled(Subtitle)`
  margin-bottom: 20px;
`;

const FooterFormContainer = styled.div`
  margin-bottom: 20px;
  max-width: 722px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    margin-bottom: 40px;
  }
`;

const StyledCrosshair = styled.div`
  position: absolute;
  bottom: calc(100% + 2px);
  right: 13px;
  width: 46px;
  height: 46px;
  background-image: url(${Crosshair});
  background-size: contain;
  background-position: center;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    top: 103px;
    bottom: auto;
    right: 24px;
    width: 74px;
    height: 74px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    top: 144px;
    left: -167px;
  }
`;

export {
  FooterTextContainer,
  FooterTitle,
  FooterSubtitle,
  FooterFormContainer,
  StyledCrosshair,
};
