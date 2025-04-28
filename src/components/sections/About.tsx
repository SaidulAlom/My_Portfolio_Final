import { Briefcase, GraduationCap, Code } from 'lucide-react';
import image from './IMG-20250406-WA0104.jpg'
import Resume from './Saidul Resume (2).pdf';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400">
                    <img
                      src={image}
                      alt="Saidul Alom"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Hello, I'm Saidul Alom — a passionate Full Stack Web Developer currently pursuing my B.Tech in Computer Science and Engineering at Dhemaji Engineering College (graduating in 2025).
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    I specialize in building fast, responsive, and modern web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    I have completed a Full Stack Web Development course at NIELIT and gained industrial experience through my internship at IOCL Digboi.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Apart from coding, I enjoy organizing events, traveling, and exploring new technologies.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I am currently focused on building AI-integrated web applications.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                    <h3 className="font-semibold text-lg">Education</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    B.Tech in Computer Science<br />
                    Dhemaji Engineering College<br />
                    2021 - 2025
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <Code className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                    <h3 className="font-semibold text-lg">Certification</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Full Stack Web Development<br />
                    NIELIT<br />
                    2023
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <Briefcase className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                    <h3 className="font-semibold text-lg">Experience</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Web Development Intern<br />
                    IOCL Digboi<br />
                    2023
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a 
                  href={Resume} 
                  className="btn-primary"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;