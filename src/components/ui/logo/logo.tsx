import { StyledLogoRout, StyledLogoLink } from './styled';
import Image from '../../../elements/image';
import LogoImage from '../../../assets/logo.svg';
import { useLocation } from 'react-router-dom';

interface ILogo {
  activeLanguage: string;
}

const Logo: React.FC<ILogo> = ({ activeLanguage }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/ru';

  return isHomePage ? (
    <StyledLogoLink href={'#hero'}>
      <Image src={LogoImage}></Image>
    </StyledLogoLink>
  ) : (
    <StyledLogoRout to={activeLanguage === 'ru' ? '/ru' : '/'}>
      <Image src={LogoImage}></Image>
    </StyledLogoRout>
  );
};

export default Logo;
