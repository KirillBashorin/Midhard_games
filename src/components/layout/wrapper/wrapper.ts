import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 320px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.indentMobile};
  max-width: ${(props) => props.theme.desktopWidth};

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 0 ${(props) => props.theme.indentTablet};
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 0 ${(props) => props.theme.indentDesktop};
  }
`;

export default Wrapper;
