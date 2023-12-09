import { createGlobalStyle } from 'styled-components';
import FuturaRegular from '../../fonts/futura_pt/FuturaPT-Book.woff';
import FuturaMedium from '../../fonts/futura_pt/FuturaPT-Medium.woff';
import FuturaBold from '../../fonts/futura_pt/FuturaPT-Bold.woff';
import Rectangle from '../../assets/rect.svg';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Futura PT';
    src: local('Futura PT'), url(${FuturaRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura PT';
    src: local('Futura PT'), url(${FuturaMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura PT';
    src: local('Futura PT'), url(${FuturaBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 60px;
  }

  html,
  body {
    margin: 0;
  }

  body {
    overflow-x: hidden;
    background-color: ${(props) => props.theme.background};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.defaultFontSizeMobile};
    line-height: ${(props) => props.theme.lineHieghtDefault};
    font-weight: 400;
    color: ${(props) => props.theme.primary};
  }

  body div#root {
    display: grid;
    min-height: 100vh;
    grid-template-rows: min-content 1fr min-content;
  }

  .swiper {
    z-index: auto;
    overflow-y: visible;
  }

  .swiper-wrapper {
    width: 10px;
    z-index: auto;
  }

  .swiper-scrollbar {
    position: static !important;
    margin-top: 20px;
    height: 10px !important;
    background-color: ${(props) => props.theme.transparent};
    height: 18px !important;
    border-radius: 4px;
  }

  .swiper-scrollbar-drag {
    border-radius: 4px;
    left: 0px;
    right: 0px;
    background-position-x: -2px;
    background-image: url(${Rectangle});
    background-color: transparent;
  }

  @media (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    body {
      font-size: ${(props) => props.theme.fontSizeDesktop};
    }
  }
`;

export default GlobalStyle;
