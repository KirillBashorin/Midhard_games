import {
  StyledPrivacy,
  PrivacyTitle,
  PrivacySubTitle,
  PrivacyText,
} from './styled';
import { TitleSize } from '../../ui/title/title';
import Ul from '../../../elements/ul';
import Wrapper from '../../layout/wrapper/wrapper';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledPrivacy>
      <Wrapper>
        <PrivacyTitle size={TitleSize.SMALL} as={'h1'} $isDark={true}>
          {t('privacy.title')}
        </PrivacyTitle>
        <PrivacyText as={'div'}>{t('privacy.subtitle')}</PrivacyText>
        <PrivacyText as={'div'}>
          <PrivacySubTitle size={TitleSize.EXTRA_SMALL} as={'h2'}>
            {t('privacy.1')}
          </PrivacySubTitle>
          <Ul>
            <li>{t('privacy.1_1')}</li>
            <li>{t('privacy.1_2')}</li>
            <li>
              {t('privacy.1_3')}
              <Ul>
                <li>{t('privacy.1_3_1')}</li>
                <li>{t('privacy.1_3_2')}</li>
              </Ul>
            </li>
            <li>{t('privacy.1_4')}</li>
            <li>{t('privacy.1_5')}</li>
            <li>{t('privacy.1_6')}</li>
            <li>{t('privacy.1_7')}</li>
            <li>{t('privacy.1_8')}</li>
            <li>{t('privacy.1_9')}</li>
          </Ul>
        </PrivacyText>
        <PrivacyText as={'div'}>
          <PrivacySubTitle size={TitleSize.SMALL} as={'h2'}>
            {t('privacy.2')}
          </PrivacySubTitle>
          <Ul>
            <li>
              {t('privacy.2_1')}
              <Ul>
                <li>{t('privacy.2_1_1')}</li>
                <li>{t('privacy.2_1_2')}</li>
                <li>{t('privacy.2_1_3')}</li>
                <li>{t('privacy.2_1_4')}</li>
              </Ul>
            </li>
          </Ul>
        </PrivacyText>
        <PrivacyText as={'div'}>
          <PrivacySubTitle size={TitleSize.SMALL} as={'h2'}>
            {t('privacy.3')}
          </PrivacySubTitle>
          <Ul>
            <li>{t('privacy.3_1')}</li>
            <li>{t('privacy.3_2')}</li>
            <li>{t('privacy.3_3')}</li>
          </Ul>
        </PrivacyText>
        <PrivacyText as={'div'}>
          <PrivacySubTitle size={TitleSize.SMALL} as={'h2'}>
            {t('privacy.4')}
          </PrivacySubTitle>
          <Ul>
            <li>{t('privacy.4_1')}</li>
          </Ul>
        </PrivacyText>
        <PrivacyText as={'div'}>
          <PrivacySubTitle size={TitleSize.SMALL} as={'h2'}>
            {t('privacy.5')}
          </PrivacySubTitle>
          <Ul>
            <li>{t('privacy.5_1')}</li>
            <li>{t('privacy.5_2')}</li>
          </Ul>
        </PrivacyText>
      </Wrapper>
    </StyledPrivacy>
  );
};

export default Privacy;
