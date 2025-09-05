import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/sudhagarkv',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/sudhagar-kalyanasundaram/',
      label: 'LinkedIn'
    },
    {
      icon: <Download className="w-5 h-5" />,
      href: 'https://drive.google.com/file/d/1OneHOgewhR_ghtl4sBMNlGAm2iqvDx4X/view?usp=sharing',
      label: 'Resume'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={scrollToTop}
            >
              <h3 className="text-2xl font-bold gradient-text">
                Sudhagar Kalyanasundaram
              </h3>
            </motion.div>
            <p className="text-gray-400 leading-relaxed">
              Passionate cybersecurity and software development professional 
              committed to building secure, innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Experience', 'Skills', 'Education'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05, x: 5 }}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Looking for opportunities in Software Development, 
              Cybersecurity Analysis, and challenging IT roles.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-sm flex items-center"
            >
              Code, coffee, and passion by Sudhagar Kalyanasundaram © 2025
            </motion.p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Back to Top ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;