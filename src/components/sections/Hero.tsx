import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from './profile-img.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 pb-12 sm:pt-20 sm:pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Photo Column */}
          <div className="flex justify-center md:justify-end">
            <img
              src={Image}
              alt="Saidul Alom Profile"
              className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] object-cover border-4 border-blue-600 dark:border-blue-400 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Details Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Saidul Alom</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-full sm:max-w-2xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Full Stack Developer (MERN Stack) | Passionate about building responsive, modern web apps using Next.js, Tailwind CSS, and Node.js.
            </p>
            <p className="text-sm sm:text-base md:text-lg max-w-full sm:max-w-2xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Currently pursuing B.Tech in Computer Science at Dhemaji Engineering College (2025 Graduate). Completed Full Stack Web Development at NIELIT and interned at IOCL Digboi. Driven by a love for coding, problem-solving, and crafting AI-integrated web solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-primary text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 text-center transition-transform duration-300 hover:scale-105 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-secondary text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 text-center transition-transform duration-300 hover:scale-105 bg-gray-200 text-gray-900 rounded-lg shadow-md hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center animate-bounce p-2 sm:p-3 rounded-full border-2 border-blue-600 dark:border-blue-400"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="text-blue-600 dark:text-blue-400" size={20} sm:size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;