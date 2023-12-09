import styled from 'styled-components';

interface IStyledButton {
  $isLightBg?: boolean;
}

const StyledButton = styled.a<IStyledButton>`
  font-family: 'Futura PT', 'Arial', sans-serif;
  color: ${(props) => props.theme.basicWhite};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 100%;
  font-weight: 450;
  letter-spacing: -0.4px;
  line-height: 100%;
  text-decoration: none;
  border-radius: 100px;
  background-color: ${(props) => props.theme.violet};
  padding: 23px 50px;
  border: 2px solid ${(props) => props.theme.violet};
  transition: all 200ms;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.$isLightBg ? props.theme.violet : props.theme.basicWhite};
    border-color: ${(props) =>
      props.$isLightBg ? 'inherit' : props.theme.green};
    background-color: transparent;
  }

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 16px;
    border: 4px solid transparent;
  }
`;

export default StyledButton;
