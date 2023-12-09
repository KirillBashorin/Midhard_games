import { StyledSocialButton, SocialsContainer } from './styled';
import Telegram from '../../../assets/telegram.svg?react';
import Whatsapp from '../../../assets/whatsapp.svg?react';
import Linkedin from '../../../assets/linkedin.svg?react';

const Socials: React.FC = () => {
  return (
    <SocialsContainer>
      <StyledSocialButton
        link={'https://t.me/emallmark'}
        target='_blank'
        $beforeContent={'Telegram'}
      >
        <Telegram />
      </StyledSocialButton>
      <StyledSocialButton
        link={'https://wa.me/79875887842'}
        target='_blank'
        $beforeContent={'Whatsapp'}
      >
        <Whatsapp />
      </StyledSocialButton>
      <StyledSocialButton
        link={'https://www.linkedin.com/in/dmitriy-zhuravlev-875503228/'}
        target='_blank'
        $beforeContent={'Linkedin'}
      >
        <Linkedin />
      </StyledSocialButton>
    </SocialsContainer>
  );
};

export default Socials;
