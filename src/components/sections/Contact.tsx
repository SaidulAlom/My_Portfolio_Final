import { useState } from 'react';
import { Github as GitHub, Linkedin, Mail, Send } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to reach out to me for any inquiries or opportunities.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Me</h3>
            <ContactForm />
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <p className="flex items-center text-gray-700 dark:text-gray-300">
                  <Mail className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                  <a 
                    href="mailto:saidulalom525@gmail.com" 
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    saidulalom525@gmail.com
                  </a>
                </p>
                
                <p className="flex items-center text-gray-700 dark:text-gray-300">
                  <Linkedin className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                  <a 
                    href="https://www.linkedin.com/in/saidulalom/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/saidulalom
                  </a>
                </p>
                
                <p className="flex items-center text-gray-700 dark:text-gray-300">
                  <GitHub className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                  <a 
                    href="https://github.com/SaidulAlom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    github.com/SaidulAlom
                  </a>
                </p>
              </div>
            </div>
            
            <div className="bg-blue-600 dark:bg-blue-700 rounded-xl shadow-md p-6 md:p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
              <p className="mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <a 
                href="mailto:saidulalom525@gmail.com" 
                className="inline-flex items-center bg-white text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Send className="mr-2" size={18} />
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;