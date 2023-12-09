import { css } from 'styled-components';
import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import Button from '../../ui/button/button';
import PlayIco from '../../../assets/play.svg?react';
import P from '../../../elements/p';
import BorderDashHorizontal from '../../../assets/border-dashed-horizontal.svg';
import BorderDashedBottomRight from '../../../assets/border-dashed-angle-bottom-right.svg';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 2px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 30px 80px 103px;

    &:nth-child(2n-1) {
      border-image: url(${BorderDashedBottomRight}) 2 fill repeat;
      border-top: none;
      border-left: none;
    }

    &:nth-child(2n-1):nth-last-child(2) {
      border-bottom: none;
    }

    &:nth-child(2n):not(:last-child) {
      border-image: url(${BorderDashHorizontal}) 2 fill repeat;
      border-top: none;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 30px 160px 90px;
  }
`;

const Icon = styled.div`
  svg {
    width: 50px;
    height: 50px;
  }

  margin-bottom: 15px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    margin-bottom: 35px;

    svg {
      width: 61px;
      height: 61px;
    }
  }
`;

const CardTitle = styled(Title)`
  margin-bottom: 20px;
  white-space: pre-line;
`;

interface ICardText {
  isCardOpened: boolean;
}

interface ICardTextWrapper {
  $openedHeight: number;
  $isCardOpened: boolean;
}

const CardTextWrapper = styled.div<ICardTextWrapper>`
  height: ${(props) =>
    props.$openedHeight && props.$isCardOpened
      ? `${props.$openedHeight}px`
      : '0'};
  overflow: hidden;
  transition: all 0.2s;
`;

const CardText = styled(P)<ICardText>`
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme.basicWhite};
  margin-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    font-size: 20px;
  }
`;

interface IMoreButton {
  isCardOpened: boolean;
}

const MoreButton = styled(Button)<IMoreButton>`
  ${(props) =>
    props.isCardOpened
      ? css`
          display: none;
        `
      : null}
  padding: 11px 15px;

  &:hover {
    background-color: ${(props) => props.theme.green};

    svg path {
      fill: ${(props) => props.theme.primary};
    }
  }
`;

const StyledPlusIco = styled(PlayIco)`
  width: 22px;
  height: 30px;
`;

export {
  StyledCard,
  Icon,
  CardTitle,
  CardTextWrapper,
  CardText,
  MoreButton,
  StyledPlusIco,
};
