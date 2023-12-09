import styled from 'styled-components';
import { Title } from '../../ui/title/title';
import P from '../../../elements/p';

const StyledPrivacy = styled.div`
  padding: 128px 0 75px;
  box-sizing: border-box;
  text-align: start;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 164px 0 150px;
  }

  @media screen and (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 176px 380px 319px;
  }
`;

const PrivacyTitle = styled(Title)`
  text-align: start;
`;

const PrivacySubTitle = styled(Title)`
  color: ${(primary) => primary.theme.primary};
  text-align: start;
  margin-bottom: 15px;
`;

const PrivacyText = styled(P)`
  color: ${(props) => props.theme.privacyText};
  font-size: 20px;
  line-height: 130%;
  padding: 20px 0;
  margin-bottom: 20px;

  @media screen and (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 20px 105px 0 0;
  }
`;

export { StyledPrivacy, PrivacyTitle, PrivacySubTitle, PrivacyText };
