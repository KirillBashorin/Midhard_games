import styled, { css } from 'styled-components';
import Button from '../button/button';
import CloseIco from '../../../assets/plus.svg?react';

interface IPopup {
  $isPopupOpened: boolean;
}

const StyledPopup = styled.div<IPopup>`
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  position: fixed;
  padding: 100px 10px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.primaryDark};
  width: 300px;
  opacity: 0;
  transition: opacity 0.2s;
  top: 100%;
  ${(props) =>
    props.$isPopupOpened
      ? css`
          top: 60px;
          right: 0;
          left: 0;
          margin: 0 auto;
          opacity: 100;

          @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
            top: 50%;
            right: 50%;
            left: auto;
            transform: translate(50%, -50%);
          }
        `
      : null}

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 528px;
    padding: 100px;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px;

  &:hover {
    background-color: ${(props) => props.theme.green};

    svg path {
      stroke: ${(props) => props.theme.primary};
      transition: all 0.2s;
    }
  }
`;

const StyledCloseIco = styled(CloseIco)`
  transform: rotate(45deg);
  width: 24px;
  height: 24px;
`;

export { StyledPopup, CloseButton, StyledCloseIco };
