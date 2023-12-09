import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogoRout = styled(Link)`
  width: 37px;
  height: 35px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 62px;
    height: 62px;
  }
`;

const StyledLogoLink = styled.a`
  width: 37px;
  height: 35px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 62px;
    height: 62px;
  }
`;

export { StyledLogoRout, StyledLogoLink };
