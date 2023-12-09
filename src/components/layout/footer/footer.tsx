import {
  StyledFooter,
  FooterSocials,
  Separator,
  FooterNav,
  FooterBottom,
  DevolpedBy,
  DevelopedByLogo,
  FooterPrivacy,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import FooterForm from '../../blocks/footer-form/footer-form';
import Socials from '../../ui/socials/socials';
import Round from '../../../elements/round/round';
import { useTranslation } from 'react-i18next';

interface IFooter {
  id: string;
  activeLanguage: string;
}

const Footer: React.FC<IFooter> = ({ id, activeLanguage }) => {
  const { t } = useTranslation();
  const isEn = activeLanguage === 'en';

  return (
    <StyledFooter id={id}>
      <Round $isBottom={false} />
      <Wrapper>
        <FooterForm activeLanguage={activeLanguage} />
        <FooterSocials>
          <Socials />
        </FooterSocials>
        <Separator />
        <FooterNav activeLanguage={activeLanguage} />
        <FooterBottom>
          <DevolpedBy>
            {t('footer.developed')}
            <DevelopedByLogo href={'https://digitalsoup.io'} target={'_blank'}>
              DIGITAL
            </DevelopedByLogo>
          </DevolpedBy>
          <FooterPrivacy to={isEn ? '/privacy' : '/privacy/ru'}>
            {t('footer.privacy')}
          </FooterPrivacy>
        </FooterBottom>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
