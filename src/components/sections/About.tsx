import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { useEffect, useState } from 'react';
import image from './IMG-20250406-WA0104.jpg';
import Resume from './Saidul Resume (2).pdf';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-20 relative bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in">
            About Me
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <div className="p-8 md:p-12">
              <div className={`flex flex-col md:flex-row gap-12 mb-12 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Image Column */}
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src={image}
                    alt="Saidul Alom"
                    className="w-64 h-80 object-cover border-4 border-blue-600 dark:border-blue-400 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  />
                </div>
                {/* Text Column */}
                <div className="md:w-2/3">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Saidul Alom</span> — a Full Stack Web Developer with a passion for building high-performance web applications using the latest tools and technologies including <span className="font-semibold">Next.js, React, Node.js, Express, MongoDB, TypeScript, and Tailwind CSS</span>.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    I combine frontend precision with powerful backend logic, and I often integrate AI tools like ChatGPT and Framer AI to accelerate development, improve UX, and ship faster.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    I’m currently pursuing my B.Tech in Computer Science and Engineering at <span className="font-semibold">Dhemaji Engineering College</span> (Graduating 2025). I’ve completed a Full Stack Web Development course at <span className="font-semibold">NIELIT</span> and gained real-world experience during my internship at <span className="font-semibold">IOCL Digboi</span>, where I contributed to internal web tools and backend logic.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Whether it's building an e-commerce store, a dynamic job portal, a portfolio, or an admin dashboard, I take pride in delivering scalable, responsive, and client-focused solutions. I'm open to freelance, remote, and collaborative international opportunities. Let’s build something great together!
                  </p>
                </div>
              </div>

              {/* Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className={`bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                  <div className="flex items-center mb-4">
                    <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Education</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    B.Tech in Computer Science<br />
                    Dhemaji Engineering College<br />
                    2021 - 2025
                  </p>
                </div>
                <div className={`bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0 translate-y-10'}`}>
                  <div className="flex items-center mb-4">
                    <Code className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Certification</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    Full Stack Web Development<br />
                    NIELIT<br />
                    2023
                  </p>
                </div>
                <div className={`bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0 translate-y-10'}`}>
                  <div className="flex items-center mb-4">
                    <Briefcase className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Experience</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    Web Development Intern<br />
                    IOCL Digboi<br />
                    2023
                  </p>
                </div>
              </div>

              {/* Resume Button */}
              <div className="mt-12 flex justify-center">
                <a
                  href={Resume}
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My CV (PDF)
                </a>
              </div>

              {/* CTA */}
              <p className="text-center mt-10 text-lg text-gray-800 dark:text-gray-200">
                Ready to build something awesome together?{' '}
                <a href="#contact" className="text-blue-600 dark:text-blue-400 font-semibold underline">Let’s connect</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
