import styled from 'styled-components';
import Button from '../button/button';

const StyledLangToggler = styled.div`
  width: fit-content;
  margin-left: auto;
`;

interface ILangButton {
  isActive?: boolean;
  onClick: (language: string) => void;
}

const LangButton = styled(Button)<ILangButton>`
  color: ${(props) =>
    props.isActive ? props.theme.green : props.theme.basicWhite};
  font-size: 16px;
  line-height: 110%;
  padding: 0;
  background-color: transparent;
  border: none;

  &:hover {
    background: none;
    color: ${(props) =>
      props.isActive ? props.theme.green : props.theme.basicWhite};
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: ${(props) => props.theme.defaultFontSizeDesktop};
    line-height: ${(props) => props.theme.defaultLineHeightDesktop};
  }
`;

const Separator = styled.span`
  color: ${(props) => props.theme.basicWhite};
  font-size: 16px;
  line-height: 110%;
`;

export { StyledLangToggler, LangButton, Separator };
