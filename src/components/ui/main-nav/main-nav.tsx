import { useContext } from 'react';
import { StyledMainNav } from './styled';
import MenuItem from '../menu-item/menu-item';
import { HeaderContext } from '../../../contexts/header-context';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface ImenuItems {
  title: string;
  link: string;
}

interface IMainNav {
  activeLanguage: string;
  className?: string;
  onClick?: () => void;
}

const MainNav: React.FC<IMainNav> = ({
  activeLanguage,
  className,
  onClick,
}) => {
  const headerContext = useContext(HeaderContext);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/en';
  const isEn = activeLanguage === 'en';
  const { t } = useTranslation();
  const menuItems: ImenuItems[] = [
    {
      title: t('header.items.0'),
      link: isHomePage ? '#our-works' : isEn ? '/en#our-works' : '/#our-works',
    },
    {
      title: t('header.items.1'),
      link: isHomePage ? '#services' : isEn ? '/en#services' : '/#services',
    },
    {
      title: t('header.items.2'),
      link: isHomePage ? '#about-us' : isEn ? '/en#about-us' : '/#about-us',
    },
    // {
    //   title: t('header.items.3'),
    // link: isHomePage ? '#partners' : isEn ? '/en#partners' : '/#partners',
    // },
    // {
    //   title: t('header.items.4'),
    // link: isHomePage ? '#reviews' : isEn ? '/en#reviews' : '/#reviews',
    // },
    {
      title: t('header.items.5'),
      link: isHomePage ? '#contacts' : isEn ? '/en#contacts' : '/#contacts',
    },
    {
      title: 'contact@midhard.com',
      link: 'mailto:contact@midhard.com',
    },
  ];

  if (headerContext) {
    const { isHeader } = headerContext;

    return (
      <StyledMainNav className={className} $isHeader={isHeader}>
        {menuItems &&
          menuItems.length &&
          menuItems.map((item, index) => {
            return (
              <MenuItem link={item.link} key={index} onClick={onClick}>
                {item.title}
              </MenuItem>
            );
          })}
      </StyledMainNav>
    );
  } else {
    return (
      <StyledMainNav className={className}>
        {menuItems &&
          menuItems.length &&
          menuItems.map((item, index) => {
            return (
              <MenuItem link={item.link} key={index}>
                {item.title}
              </MenuItem>
            );
          })}
      </StyledMainNav>
    );
  }
};

export default MainNav;
