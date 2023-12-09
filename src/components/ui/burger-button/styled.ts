import styled from 'styled-components';
import Button from '../button/button';

const StyledBurgerButton = styled(Button)<{ isChecked: boolean }>`
  color: ${(props) =>
    props.isChecked ? props.theme.basicWhite : props.theme.primary};
  text-transform: uppercase;
  background-color: ${(props) =>
    props.isChecked ? props.theme.violet : props.theme.green};
  padding: 0;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isChecked ? props.theme.violet : props.theme.green};
  }

  svg path {
    fill: ${(props) => (props.isChecked ? props.theme.basicWhite : null)};
    stroke: ${(props) => (props.isChecked ? props.theme.basicWhite : null)};
  }

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    border: 1px solid ${(props) => props.theme.basicWhite};
    padding: 8px 10px;
    font-size: ${(props) => props.theme.defaultFontSizeDesktop};
    line-height: ${(props) => props.theme.defaultLineHeightDesktop};

    &:hover {
      color: ${(props) =>
        props.isChecked ? props.theme.primary : props.theme.basicWhite};
      background-color: ${(props) =>
        props.isChecked ? props.theme.green : props.theme.violet};
      border-color: ${(props) => props.theme.basicWhite};
    }
  }
`;

export { StyledBurgerButton };
