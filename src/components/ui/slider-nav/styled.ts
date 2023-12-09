import styled, { css } from 'styled-components';
import Button from '../button/button';

const SliderNavContainer = styled.div`
  pointer-events: none;
`;

interface ISliderNavButton {
  isNextButton?: boolean;
}

const SliderNavButton = styled(Button)<ISliderNavButton>`
  padding: 25px;
  border: 2px solid ${(props) => props.theme.basicWhite};
  pointer-events: auto;
  cursor: pointer;
  svg {
    ${(props) =>
      props.isNextButton
        ? css`
            transform: rotate(180deg);
          `
        : null}
  }

  &:hover {
    background-color: ${(props) => props.theme.green};
    border: 2px solid ${(props) => props.theme.primary};

    svg path {
      transition: all 0.2s;
      stroke: black;
    }
  }
`;

export { SliderNavContainer, SliderNavButton };
