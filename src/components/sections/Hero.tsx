import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`flex flex-col items-center text-center transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Saidul Alom</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Full Stack Developer (MERN Stack) | Passionate about building responsive, modern web apps using Next.js, Tailwind CSS, and Node.js.
          </p>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Currently pursuing B.Tech in Computer Science at Dhemaji Engineering College (2025 Graduate). Completed Full Stack Web Development at NIELIT and interned at IOCL Digboi. Driven by a love for coding, problem-solving, and crafting AI-integrated web solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-secondary"
            >
              Contact Me
            </a>
          </div>
          <a
            href="#about"
            className="absolute bottom-10 animate-bounce p-2 rounded-full border-2 border-blue-600 dark:border-blue-400"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="text-blue-600 dark:text-blue-400" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
