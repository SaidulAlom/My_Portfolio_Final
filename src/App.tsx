import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './config/emailjs';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Header />
        <main className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;