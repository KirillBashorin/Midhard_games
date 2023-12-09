import styled from 'styled-components';

interface IInput {
  $isValid?: boolean | undefined | null;
}

const Input = styled.input<IInput>`
  font-size: 18px;
  line-height: 130%;
  padding: 23px 30px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.transparent};
  color: ${(props) =>
    props.$isValid !== undefined && props.$isValid !== null
      ? props.$isValid
        ? props.theme.basicWhite
        : props.theme.crimson
      : props.theme.basicWhite};
  border: none;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 22px 30px;
    font-size: 20px;
  }
`;

export default Input;
