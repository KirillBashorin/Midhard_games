import styled from 'styled-components';
import BorderDashHorizontal from '../../../assets/border-dashed-horizontal.svg';
import MainNav from '../../ui/main-nav/main-nav';
import P from '../../../elements/p';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
  position: relative;
  background-color: ${(props) => props.theme.primary};
  padding: 78px 0 15px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 108px 0 20px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 0 0 20px;
    &:before {
      bottom: 99.3%;
    }
  }
`;

const FooterSocials = styled.div`
  max-width: 722px;
  margin: 0 auto;
  padding: 0 0 80px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding-bottom: 60px;
  }
`;

const Separator = styled.div`
  height: 1px;
  background-image: url(${BorderDashHorizontal});
`;

const FooterNav = styled(MainNav)`
  padding: 41px 0 39px;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 5px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    flex-direction: row;
    justify-content: space-between;
    background-color: ${(props) => props.theme.basicWhite};
    padding: 35px;
    border-radius: 36px;
  }
`;

const DevolpedBy = styled(P)`
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.basicWhite};
  border-radius: 36px;
  padding: 15px 50px;
  text-align: center;
  font-size: 20px;
  line-height: 90%;
  letter-spacing: -0.6px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 0;
    background-color: transparent;
  }
`;

const DevelopedByLogo = styled.a`
  color: ${(props) => props.theme.violet};
  text-decoration: none;
  font-weight: 700;
`;

const FooterPrivacy = styled(Link)`
  font-size: 16px;
  line-height: 120%;
  color: ${(props) => props.theme.textPrimary};
  text-decoration: none;
  text-align: center;
  padding: 15px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 0;
    order: -1;
  }
`;

export {
  StyledFooter,
  FooterSocials,
  Separator,
  FooterNav,
  FooterBottom,
  DevolpedBy,
  DevelopedByLogo,
  FooterPrivacy,
};
