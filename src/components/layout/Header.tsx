import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open or animating
  useEffect(() => {
    if (isMenuOpen || isAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen, isAnimating]);

  const toggleMenu = () => {
    setIsAnimating(true);
    setIsMenuOpen(!isMenuOpen);
    setTimeout(() => setIsAnimating(false), 500); // Match animation duration
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300"
          >
            Saidul Alom
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun size={20} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun size={20} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced Slide Animation */}
        <div className={`fixed inset-0 z-40 ${isMenuOpen || isAnimating ? 'block' : 'hidden'}`}>
          {/* Overlay with fade animation */}
          <div 
            className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={toggleMenu}
          />
          
          {/* Menu Content with smooth slide animation */}
          <div 
            className={`absolute top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 h-full flex flex-col">
              <nav className="flex-1 flex flex-col space-y-6 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-lg"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              
              <button
                onClick={toggleTheme}
                className="mt-auto p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors self-start"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon size={24} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun size={24} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;