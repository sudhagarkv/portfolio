import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Cpu } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Mobile Developer',
      company: 'The KeelWorks Foundation, Oak Harbor, WA, USA',
      period: 'June 2025 – November 2025',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      responsibilities: [
        'Developed and deployed a content-sharing app in Java + JavaScript with Google Sign-In and payments, growing the user community by 18%.',
        'Built a scalable backend on PostgreSQL + AWS; reduced content load times by 23% via query tuning and caching.',
        'Automated releases with Docker + GitLab CI/CD, shortening release cycles by 10% and improving deployment reliability.'
      ]
    },
    {
      title: 'Teaching Assistant',
      company: 'Sri Ramachandra Institute of Higher Education and Research, Chennai, India',
      period: 'February 2023 – June 2023',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      responsibilities: [
        'Guided 80+ students through hands-on labs: vulnerability scanning, traffic analysis, and secure system configurations using Wireshark and Linux.',
        'Delivered reverse engineering workshops with JADX and Apktool, improving student skills in mobile app security analysis.',
        'Provided one-on-one mentoring, debugging lab setups, and resolving IT troubleshooting issues to improve student lab completion rates.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Youth India Foundation, Bhubaneswar, India',
      period: 'January 2021 – June 2021',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      responsibilities: [
        'Developed and deployed a secure, responsive website with React.js and Next.js, hosted on AWS Amplify, improving site performance and uptime reliability by 8%.',
        'Automated deployment pipelines with Terraform and GitHub Actions, enabling scalable CI/CD workflows and reducing manual setup time.',
        'Collaborated with a small team to design clean UI components, implement SEO-friendly pages, and ensure cross-browser compatibility.'
        ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building secure solutions and mentoring the next generation of IT and cybersecurity professionals
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {experience.icon}
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 glass p-8 rounded-xl hover-glow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-blue-400 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    <div className={`px-4 py-2 bg-gradient-to-r ${experience.color} text-white rounded-lg font-semibold text-sm mt-2 sm:mt-0`}>
                      {experience.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: respIndex * 0.1 }}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`}></div>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
