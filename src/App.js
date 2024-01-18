import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Om from './components/Om';
import Music from './components/Music';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const omRef = useRef(null);
  const musicRef = useRef(null);

  const scrollToSection = (ref) => {
    const offsetTop = ref.current.offsetTop;
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
      top: offsetTop - headerHeight,
      behavior: 'smooth'
    });
  };  

  return (
    <>
      <GlobalStyles />
      <Header onMusicClick={() => scrollToSection(musicRef)} onOmClick={() => scrollToSection(omRef)} />
      <div ref={musicRef} className="section"><Music /></div>
      <div ref={omRef} className="section"><Om /></div>
      <Footer />
    </>
  );
};

export default App;
