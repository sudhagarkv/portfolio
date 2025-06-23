import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Master\'s in Cybersecurity and Information Assurance',
      school: 'University Of Michigan - Dearborn',
      period: 'April 2025',
      gpa: '3.97/4.0',
      distinction: 'Graduated with High Distinction',
      location: 'Dearborn, Michigan',
      color: 'from-blue-500 to-cyan-500',
      description: 'Advanced studies in threat modeling, secure cloud infrastructure, DevSecOps practices, and AI-driven security solutions. Completed hands-on projects including building secret scanning pipelines in Kubernetes and developing secure communication applications.',
      highlights: [
        'Threat Modeling & Risk Assessment',
        'Secure Cloud Infrastructure Design',
        'DevSecOps Implementation',
        'AI-Driven Security Solutions',
        'Research in Automotive Cybersecurity'
      ]
    },
    {
      degree: 'Bachelor Of Technology in Computer Science and Engineering',
      specialization: 'Cybersecurity & IoT',
      school: 'Sri Ramachandra Institute of Higher Education and Research',
      period: 'June 2023',
      gpa: '3.46/4.0',
      location: 'Chennai, India',
      color: 'from-purple-500 to-pink-500',
      description: 'Comprehensive foundation in secure coding, penetration testing, reverse engineering, and blockchain-based security applications. Co-authored conference paper on Transparent and Immutable Crowdfunding DApp Using Blockchain.',
      highlights: [
        'Secure Software Development',
        'Penetration Testing & Ethical Hacking',
        'Blockchain Technology & Smart Contracts',
        'IoT Security Frameworks',
        'Published Research Work'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic excellence in cybersecurity and computer science with hands-on research experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 lg:w-1/3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`glass p-6 rounded-xl border-l-4 border-gradient-to-b ${edu.color}`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-white mr-4`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-white font-semibold">GPA: {edu.gpa}</span>
                      </div>
                      {edu.distinction && (
                        <div className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white text-sm rounded-full inline-block`}>
                          {edu.distinction}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-8 rounded-xl hover-glow h-full"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <p className="text-lg text-blue-400 font-semibold mb-3">
                        Specialization: {edu.specialization}
                      </p>
                    )}
                    <p className="text-xl text-purple-400 font-semibold mb-4">
                      {edu.school}
                    </p>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Areas of Study:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`}></div>
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;