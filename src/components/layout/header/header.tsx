import { useState, useEffect } from 'react';
import { StyledHeader, HeaderInner, HeaderMenu } from './styled';
import Wrapper from '../wrapper/wrapper';
import Logo from '../../ui/logo/logo';
import BurgerButton from '../../ui/burger-button/burger-button';
import LangToggler from '../../ui/lang-toggler/lang-toggler';
import { HeaderContextProvider } from '../../../contexts/header-context';
import MainNav from '../../ui/main-nav/main-nav';
import Socials from '../../ui/socials/socials';
import OutsideClickHandler from 'react-outside-click-handler';

interface Iheader {
  activeLanguage: string;
  handleLangToggler: (language: string) => void;
}

const Header: React.FC<Iheader> = ({ handleLangToggler, activeLanguage }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    const body = document.querySelector('body');

    if (isMenuOpened) {
      body ? (body.style.overflow = 'hidden') : null;
    } else {
      body ? (body.style.overflow = 'visible') : null;
    }

    return () => {
      body ? (body.style.overflow = 'visible') : null;
    };
  }, [isMenuOpened]);

  return (
    <StyledHeader>
      <Wrapper>
        <OutsideClickHandler onOutsideClick={closeMenu}>
          <HeaderInner>
            <Logo activeLanguage={activeLanguage} />
            <LangToggler
              handleLangToggler={handleLangToggler}
              activeLanguage={activeLanguage}
            />
            <BurgerButton onClick={toggleMenu} />
            <HeaderContextProvider>
              <HeaderMenu $isMenuOpened={isMenuOpened}>
                <MainNav onClick={closeMenu} activeLanguage={activeLanguage} />
                <Socials />
              </HeaderMenu>
            </HeaderContextProvider>
          </HeaderInner>
        </OutsideClickHandler>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
