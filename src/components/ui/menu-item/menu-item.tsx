import { useContext } from 'react';
import { MenuLink } from './styled';
import { HeaderContext } from '../../../contexts/header-context';

interface IMenuItem {
  children: string;
  link: string;
  onClick?: () => void;
}

const MenuItem: React.FC<IMenuItem> = ({ children, link, onClick }) => {
  const headerContext = useContext(HeaderContext);

  if (headerContext) {
    const { isHeader } = headerContext;

    return (
      <li>
        <MenuLink link={link} isHeader={isHeader} onClick={onClick}>
          {children}
        </MenuLink>
      </li>
    );
  } else {
    return (
      <li>
        <MenuLink link={link} onClick={onClick}>
          {children}
        </MenuLink>
      </li>
    );
  }
};

export default MenuItem;
