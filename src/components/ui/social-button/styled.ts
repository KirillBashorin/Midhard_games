import styled from 'styled-components';
import Button from '../button/button';

interface IStyledSocialButton {
  $beforeContent?: string;
}

const StyledSocialBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.violet};
  transition: all 0.2s;
`;

const StyledSocialButton = styled(Button)<IStyledSocialButton>`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  transition: all 0.2s;

  &:hover {
    ${StyledSocialBg} {
      background-color: ${(props) => props.theme.green};
    }

    background-color: transparent;
    svg path {
      transition: all 0.2s;
      fill: black;
    }
  }
`;

export { StyledSocialButton, StyledSocialBg };
