import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../../../elements/scroll-to-top';
import Header from '../header/header';
import Main from '../../pages/main/main';
import PrivacyPage from '../../pages/privacy/privacy';
import CallbackWidget from '../../blocks/call-back-widget/call-back-widget';
import Footer from '../footer/footer';
import i18n from '../../i18next/i18n';

const PageWrapper: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);
  const handleLangToggler = (language: string) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header
          handleLangToggler={handleLangToggler}
          activeLanguage={activeLanguage}
        />
        <Routes>
          <Route
            path={'/ru'}
            element={<Main activeLanguage={activeLanguage} />}
          />
          <Route
            path={'/'}
            element={<Main activeLanguage={activeLanguage} />}
          />
          <Route path={'/privacy'} element={<PrivacyPage />} />
          <Route path={'/privacy/ru'} element={<PrivacyPage />} />
        </Routes>
        <CallbackWidget />
        <Footer id={'contacts'} activeLanguage={activeLanguage} />
      </BrowserRouter>
    </>
  );
};

export default PageWrapper;
