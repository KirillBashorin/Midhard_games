import { useState } from 'react';
import {
  StyledHero,
  HeroInner,
  StyledSpan,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  HeroImageWrapper,
  HeroImage,
  StyledCrosshair,
} from './styled';
import Wrapper from '../../layout/wrapper/wrapper';
import { TitleSize } from '../../ui/title/title';
import HeroPictrue from '../../../assets/hero-picture.jpg';
import Popup from '../../ui/popup/popup';
import CallbackForm from '../../ui/callback-form/callback-form';
import OutsideClickHandler from 'react-outside-click-handler';
import { useTranslation } from 'react-i18next';

interface IHero {
  id: string;
  activeLanguage: string;
}

const Hero: React.FC<IHero> = ({ id, activeLanguage }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const handlerTogglePopup = () => {
    setIsPopupOpened(!isPopupOpened);
  };
  const { t } = useTranslation();

  return (
    <StyledHero id={id}>
      <Wrapper>
        <HeroInner>
          <HeroTitle size={TitleSize.BIG} as={'h1'} $isDark={true}>
            {t('main.hero.title.first_part')}
            <StyledSpan>{t('main.hero.title.second_part')}</StyledSpan>
            {t('main.hero.title.third_part')}
          </HeroTitle>
          <HeroSubtitle $isDark={true}>{t('main.hero.subtitle')}</HeroSubtitle>
          <HeroButton onClick={handlerTogglePopup} isLightBg={true}>
            {t('main.hero.button')}
          </HeroButton>
          <HeroImageWrapper>
            <HeroImage src={HeroPictrue} />
          </HeroImageWrapper>
          <StyledCrosshair />
        </HeroInner>
      </Wrapper>
      <OutsideClickHandler onOutsideClick={() => setIsPopupOpened(false)}>
        <Popup
          $isPopupOpened={isPopupOpened}
          handlePopupToggle={handlerTogglePopup}
        >
          <CallbackForm
            $isAlertInPopup={false}
            closePopupContainer={handlerTogglePopup}
            activeLanguage={activeLanguage}
          />
        </Popup>
      </OutsideClickHandler>
    </StyledHero>
  );
};

export default Hero;
