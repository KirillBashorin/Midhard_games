export interface Theme {
  fontFamily: string;
  primary: string;
  background: string;
  primaryDark: string;
  overlay: string;
  textPrimary: string;
  privacyText: string;
  textAlt: string;
  textLight: string;
  transparent: string;
  basicWhite: string;
  violet: string;
  green: string;
  crimson: string;
  defaultFontSizeMobile: string;
  defaultLineHeightMobile: string;
  defaultFontSizeDesktop: string;
  defaultLineHeightDesktop: string;
  tabletWidth: string;
  macWidth: string;
  desktopWidth: string;
  indentMobile: string;
  indentTablet: string;
  indentDesktop: string;
  borderRadiusBig: string;
}

export const defaultTheme: Theme = {
  fontFamily: '"Futura PT", "Arial", sans-serif',
  primary: '#101010',
  background: '#faf4ff',
  basicWhite: '#fff',
  primaryDark: '#282828',
  overlay: 'rgba(0, 0, 0, 0.20)',
  textPrimary: '#797979',
  privacyText: '#62657A',
  textAlt: '#282828',
  textLight: '#ECECEC',
  transparent: 'rgba(255, 255, 255, 0.15)',
  violet: '#924ef6',
  green: '#cdff2c',
  crimson: '#fc382b',
  defaultFontSizeMobile: '18px',
  defaultLineHeightMobile: '130%',
  defaultFontSizeDesktop: '20px',
  defaultLineHeightDesktop: '110%',
  tabletWidth: '768px',
  macWidth: '1440px',
  desktopWidth: '1600px',
  indentMobile: '10px',
  indentTablet: '20px',
  indentDesktop: '60px',
  borderRadiusBig: '40px',
};
