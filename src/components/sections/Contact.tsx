import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail, Send } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const Contact = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  // Animation variants for the links
  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="section-title text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out to me for any inquiries or opportunities.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Me</h3>
            <ContactForm />
          </motion.div>

          <div className="flex flex-col justify-between">
            <motion.div
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 md:p-8 mb-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Mail className="mr-3 text-blue-600 dark:text-blue-400" size={20} />,
                    href: 'mailto:saidulalom525@gmail.com',
                    text: 'saidulalom525@gmail.com',
                  },
                  {
                    icon: <Linkedin className="mr-3 text-blue-600 dark:text-blue-400" size={20} />,
                    href: 'https://www.linkedin.com/in/saidulalom/',
                    text: 'linkedin.com/in/saidulalom',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  {
                    icon: <GitHub className="mr-3 text-blue-600 dark:text-blue-400" size={20} />,
                    href: 'https://github.com/SaidulAlom',
                    text: 'github.com/SaidulAlom',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                ].map((link, index) => (
                  <motion.p
                    key={link.text}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={linkVariants}
                  >
                    {link.icon}
                    <a
                      href={link.href}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      target={link.target}
                      rel={link.rel}
                    >
                      {link.text}
                    </a>
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-blue-600 dark:bg-blue-700 rounded-xl shadow-md p-6 md:p-8 text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
              <p className="mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <motion.a
                href="mailto:saidulalom525@gmail.com"
                className="inline-flex items-center bg-white text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="mr-2" size={18} />
                Send a Message
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;