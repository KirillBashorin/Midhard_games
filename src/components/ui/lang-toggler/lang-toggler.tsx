import React, { useState, useEffect } from 'react';
import { StyledLangToggler, LangButton, Separator } from './styled';
import { useLocation } from 'react-router-dom';

interface ILangToggler {
  activeLanguage: string;
  handleLangToggler: (language: string) => void;
}

const LangToggler: React.FC<ILangToggler> = ({
  handleLangToggler,
  activeLanguage,
}) => {
  const location = useLocation();
  const path = location.pathname;

  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (path.endsWith('/ru') && initialLoad) {
      handleLangToggler('ru');
      setInitialLoad(false);
    }
  }, [path, activeLanguage, handleLangToggler, initialLoad]);

  const popPath = (path: string) => {
    const pathParts = path.split('/');
    const newPathRemove = pathParts.pop();
    const newPath = newPathRemove ? pathParts.join('/') : path;
    return newPath;
  };

  return (
    <StyledLangToggler>
      <LangButton
        to={
          path.endsWith('ru')
            ? path
            : path === '/'
            ? `${path}./ru`
            : `${path}/ru`
        }
        onClick={() => handleLangToggler('ru')}
        isActive={activeLanguage === 'ru'}
      >
        RU
      </LangButton>
      <Separator> / </Separator>
      <LangButton
        to={
          path.endsWith('ru')
            ? path.length === 3
              ? path.slice(0, path.length - 2)
              : popPath(path)
            : path
        }
        onClick={() => handleLangToggler('en')}
        isActive={activeLanguage === 'en'}
      >
        EN
      </LangButton>
    </StyledLangToggler>
  );
};

export default LangToggler;
