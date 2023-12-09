import styled from 'styled-components';
import Button from '../../ui/button/button';
import P from '../../../elements/p';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AlertText = styled(P)`
  color: ${(props) => props.theme.basicWhite};
  font-size: 26px;
  line-height: 100%;
  margin-bottom: 20px;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: none;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    gap: 10px;
  }
`;

const Privacy = styled(P)`
  color: ${(props) => props.theme.textPrimary};
  font-size: 14px;
  line-height: 110%;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const PrivacyLink = styled(Button)`
  font-size: inherit;
  line-height: inherit;
  color: ${(props) => props.theme.basicWhite};
  padding: 0;
  background-color: transparent;
  border: none;

  &:hover {
    color: ${(props) => props.theme.green};
    background-color: inherit;
  }
`;

export { StyledForm, AlertText, StyledFieldset, Privacy, PrivacyLink };
