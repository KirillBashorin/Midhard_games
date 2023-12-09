import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  /* top: 10px;
  left: 0;
  right: 0; */
  top: 0;
  left: -10px;
  right: -10px;
  z-index: 1;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    top: 20px;
    left: 0;
    right: 0;
    position: absolute;
  }
`;

const HeaderInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 46px;
  background-color: ${(props) => props.theme.primaryDark};
  /* border-radius: ${(props) => props.theme.borderRadiusBig}; */
  padding: 0 14px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    height: 74px;
    border-radius: ${(props) => props.theme.borderRadiusBig};
  }
`;

const HeaderMenu = styled.div<{
  $isMenuOpened: boolean;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: -1;
  top: ${(props) => (props.$isMenuOpened ? '-10px' : '-700px')};
  left: -10px;
  right: -10px;
  padding: 165px 10px;
  background-color: ${(props) => props.theme.primary};
  transition: all 0.4s;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    top: ${(props) => (props.$isMenuOpened ? '-20px' : '-700px')};
    left: -20px;
    right: -20px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    top: ${(props) => (props.$isMenuOpened ? '-20px' : '-1050px')};
    padding: 220px 80px;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export { StyledHeader, HeaderInner, HeaderMenu };
