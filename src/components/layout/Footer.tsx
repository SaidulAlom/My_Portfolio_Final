import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
              © {currentYear} Saidul Alom. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-700 dark:text-gray-300 flex items-center">
              Made with <Heart className="mx-1 text-red-500" size={16} /> by Saidul Alom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;