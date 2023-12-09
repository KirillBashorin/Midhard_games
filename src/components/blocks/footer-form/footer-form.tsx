import {
  FooterTextContainer,
  FooterTitle,
  FooterSubtitle,
  FooterFormContainer,
  StyledCrosshair,
} from './styled';
import { TitleSize } from '../.././ui/title/title';
import CallbackForm from '../../ui/callback-form/callback-form';
import { useTranslation } from 'react-i18next';

interface IFooterform {
  activeLanguage: string;
}

const FooterForm: React.FC<IFooterform> = ({ activeLanguage }) => {
  const { t } = useTranslation();

  return (
    <>
      <FooterTextContainer>
        <FooterTitle size={TitleSize.MEDIUM} as={'h2'}>
          {t('footer.form.title')}
        </FooterTitle>
        <StyledCrosshair />
        <FooterSubtitle>{t('footer.form.subtitle')}</FooterSubtitle>
      </FooterTextContainer>
      <FooterFormContainer>
        <CallbackForm $isAlertInPopup={true} activeLanguage={activeLanguage} />
      </FooterFormContainer>
    </>
  );
};

export default FooterForm;
