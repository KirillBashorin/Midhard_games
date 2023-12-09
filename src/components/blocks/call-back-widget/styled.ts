import styled, { css } from 'styled-components';
import Button from '../../ui/button/button';
import PhoneIco from '../../../assets/phone-ico.svg?react';
import P from '../../../elements/p';
import Popup from '../../ui/popup/popup';

const WidgetButton = styled(Button)`
  position: fixed;
  z-index: 3;
  bottom: 20px;
  right: 20px;
  padding: 18px;
  border: 1px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.green};

  &:hover {
    background-color: ${(props) => props.theme.violet};
    border: 1px solid ${(props) => props.theme.violet};

    svg path {
      fill: ${(props) => props.theme.basicWhite};
      transition: all 0.2s;
    }
  }
`;

const StyledPhone = styled(PhoneIco)`
  width: 39px;
  height: 39px;
`;

const WidgetPopup = styled(Popup)`
  ${(props) =>
    props.$isPopupOpened
      ? css`
          top: auto;
          transform: none;
          bottom: 20px;
          right: 0;
          opacity: 100;

          @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
            right: 20px;
          }
        `
      : null}

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    width: 423px;
    padding: 60px;
  }
`;

const FormTitle = styled.h2`
  color: ${(props) => props.theme.basicWhite};
  margin: 0 auto;
  padding: 0;
  font-size: 24px;
  line-height: 100%;
  font-weight: 400;
  margin-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 26px;
    width: 352px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const BottomText = styled(P)`
  color: ${(props) => props.theme.basicWhite};
  font-size: 20px;
  line-height: 130%;
`;

const PhoneNumber = styled(Button)`
  padding: 0;
  color: ${(props) => props.theme.basicWhite};
  font-size: 20px;
  line-height: 110%;
  background-color: transparent;
  border: none;

  &:hover {
    color: ${(props) => props.theme.green};
    background-color: transparent;
  }
`;

export {
  WidgetButton,
  StyledPhone,
  WidgetPopup,
  FormTitle,
  StyledForm,
  StyledFieldset,
  BottomText,
  PhoneNumber,
};
