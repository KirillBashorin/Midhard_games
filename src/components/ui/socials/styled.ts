import { useContext } from 'react';
import styled, { css } from 'styled-components';
import SocialButton from '../../ui/social-button/social-button';
import { HeaderContext } from '../../../contexts/header-context';

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${() => {
    const context = useContext(HeaderContext);
    if (context && context.isHeader) {
      return css`
        @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
          flex-direction: column;
        }
      `;
    }
  }};
`;

interface IStyledSocialButton {
  $beforeContent: string;
}

const StyledSocialButton = styled(SocialButton)<IStyledSocialButton>`
  position: relative;
  padding: 0;
  border: none;

  &:before {
    display: none;
    content: ${(props) =>
      (props.$beforeContent as string) ? `'${props.$beforeContent}'` : null};
    padding-top: 5px;
    transition: all 0.2s;
  }

  ${() => {
    const context = useContext(HeaderContext);
    if (context && context.isHeader) {
      return css`
        @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
          display: flex;
          align-items: center;

          &:before {
            display: block;
            color: ${(props) => props.theme.basicWhite};
            font-size: 34px;
            font-weight: 700;
            line-height: 90%;
            position: absolute;
            top: 0;
            left: -200px;
            text-transform: uppercase;
            transition: all 0.2s;
          }

          &:hover:before {
            color: ${(props) => props.theme.green};
          }
        }
      `;
    } else {
      return css`
        @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
          flex-grow: 1;
          padding: 8px 40px;
          border: 1px solid ${(props) => props.theme.violet};
          border-radius: 36px;
          background-color: transparent;
          height: 56px;
        }
      `;
    }
  }};
`;

export { StyledSocialButton, SocialsContainer };
