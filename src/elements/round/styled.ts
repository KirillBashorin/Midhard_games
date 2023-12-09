import styled, { css } from 'styled-components';
import RoundImage from '../../assets/round.svg?react';

interface IRoundContainer {
  $isBottom?: boolean;
}

const RoundContainer = styled.div<IRoundContainer>`
  position: absolute;
  display: inline-flex;
  width: 100%;
  height: auto;
  left: 0;
  ${(props) =>
    props.$isBottom
      ? css`
          top: 100%;
          margin-top: -1px;
          transform: rotate(180deg);
        `
      : css`
          bottom: 100%;
          margin-bottom: -1px;
        `}
`;

const StyledRoundImage = styled(RoundImage)``;

export { RoundContainer, StyledRoundImage };
