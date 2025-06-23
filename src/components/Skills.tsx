import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Cloud, Cpu, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['JavaScript', 'Python', 'Java', 'HTML/CSS', 'Solidity', 'Go']
    },
    {
      title: 'Databases & Frameworks',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['MySQL', 'PostgreSQL', 'Node.js', 'React.js', 'Spring Boot', 'Flask']
    },
    {
      title: 'Cybersecurity Tools',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      skills: ['Wireshark', 'Metasploit', 'Burp Suite', 'Truffle Hog', 'Endpoint Security', 'Vulnerability Management']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
    },
    {
      title: 'Development Tools',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-yellow-500 to-red-500',
      skills: ['Git', 'Linux', 'Reverse Engineering', 'Jadx-Gui', 'Microsoft Office', 'HIPAA']
    },
    {
      title: 'Emerging Technologies',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      skills: ['Web3', 'Blockchain', 'AI/ML', 'IoT Security', 'Security Policies', 'Threat Modeling']
    }
  ];

  const certifications = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'CompTIA Network+',
      issuer: 'CompTIA',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Certified in Cybersecurity',
      issuer: 'ISC2',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across cybersecurity, software development, and emerging technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl hover-glow"
            >
              <div className="flex items-center mb-4">
                <div className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-2 bg-gradient-to-r ${category.color} text-white text-sm rounded-full font-medium shadow-lg`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glass p-6 rounded-xl hover-glow"
              >
                <div className={`w-full h-1 bg-gradient-to-r ${cert.color} rounded-full mb-4`}></div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-400">
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;