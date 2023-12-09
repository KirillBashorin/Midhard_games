import { createContext, ReactNode } from 'react';

interface MenuContextType {
  isHeader: boolean;
}

const HeaderContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

const HeaderContextProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const isHeader: boolean = true;

  return (
    <HeaderContext.Provider value={{ isHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};
export { HeaderContext, HeaderContextProvider };
