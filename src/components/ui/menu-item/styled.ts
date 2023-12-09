import styled, { css } from 'styled-components';
import Button from '../button/button';
import Arrow from '../../../assets/arrow-green.svg';

interface IMenuLink {
  isHeader?: boolean;
  onClick?: () => void;
}

const MenuLink = styled(Button)<IMenuLink>`
  position: relative;
  text-transform: uppercase;
  color: ${(props) => props.theme.basicWhite};
  font-size: 16px;
  line-height: 110%;
  padding: 0;
  background-color: transparent;
  border: none;

  ${(props) =>
    props.isHeader
      ? css`
          @media screen and (min-width: ${(props) =>
              props.theme.desktopWidth}) {
            font-size: 48px;
            font-weight: 700;
            line-height: 90%;

            &:hover {
              padding-left: 63px;

              &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 63px;
                height: 43px;
                background-image: url(${Arrow});
                background-position: left center;
                background-repeat: no-repeat;
              }
            }
          }
        `
      : css``}

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.green};
  }
`;

export { MenuLink };
