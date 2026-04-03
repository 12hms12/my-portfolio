import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MarioBackground from './components/MarioBackground';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <>
      <MarioBackground isDarkMode={isDarkMode} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
