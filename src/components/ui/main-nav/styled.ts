import styled, { css } from 'styled-components';
import Ul from '../../../elements/ul';

const StyledMainNav = styled(Ul)<{ $isHeader: boolean }>`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    ${(props) =>
      props.$isHeader
        ? null
        : css`
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
          `}
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    ${(props) =>
      props.$isHeader
        ? css`
            width: fit-content;
            margin: 0;
            gap: 40px;
            align-items: flex-start;
          `
        : css`
            padding: 40px 0;
          `}
  }
`;

export { StyledMainNav };
