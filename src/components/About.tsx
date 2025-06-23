import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Brain, Award } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Expert",
      description: "Advanced threat modeling and secure architecture design"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Developer",
      description: "Building secure, scalable applications with modern tech stacks"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Enthusiast",
      description: "Leveraging AI for intelligent security solutions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "High Achiever",
      description: "3.97/4.0 Master's GPA with multiple certifications"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-blue-400 font-semibold">Sudhagar Kalyanasundaram</span> - a passionate, 
              self-driven cybersecurity and software development professional with a proven track record of turning 
              complex ideas into secure, reliable solutions. I thrive on tackling real-world challenges through 
              clean code, threat modeling, and secure architecture.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I strongly believe hard work and curiosity turn fresh graduates into industry game-changers. 
              Now I'm looking to contribute as a <span className="text-purple-400 font-semibold">Software Developer</span>, 
              <span className="text-cyan-400 font-semibold"> Cybersecurity Analyst</span>, or in any challenging IT role 
              where I can deliver measurable results and grow alongside innovative teams.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Current Focus</h3>
              <p className="text-gray-300">
                Specializing in DevSecOps practices, AI-driven security solutions, and building 
                scalable applications that prioritize security from the ground up.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-lg hover-glow"
              >
                <div className="text-blue-400 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;