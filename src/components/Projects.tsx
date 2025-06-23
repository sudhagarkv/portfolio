import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Shield, Cpu, Brain, Code, Smartphone, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'fingerprint-intrusion-detection',
      title: 'Fingerprint-Based Intrusion Detection for In-Vehicle Communication',
      description: 'Novel approach to enhance automotive cybersecurity using ECU signal fingerprinting and neural networks.',
      technologies: ['Python', 'Neural Networks', 'Wireshark', 'Signal Processing'],
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-red-500 to-orange-500',
      github: null
    },
    {
      id: 'secret-scanning-kubernetes',
      title: 'Secret Scanning Infrastructure in Kubernetes',
      description: 'Scalable POC for automated secret detection in repositories using microservices architecture.',
      technologies: ['Kubernetes', 'Go', 'React', 'Kafka', 'Azure'],
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      github: ['https://github.com/sudhagarkv/opss-runner', 'https://github.com/sudhagarkv/scan-queue-processor', 'https://github.com/sudhagarkv/scan-service']
    },
    {
      id: 'diamond-price-prediction',
      title: 'AI-Driven Diamond Price Prediction Model',
      description: 'End-to-end ML model with Flask API for accurate diamond price predictions using advanced algorithms.',
      technologies: ['Python', 'XGBoost', 'Flask', 'Scikit-learn'],
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/sudhagarkv/diamond-price-model-deployment'
    },
    {
      id: 'speech-streaming-transcription',
      title: 'Low Latency Speech Streaming and Transcription',
      description: 'Real-time speech-to-text system using FastAPI, WebSockets, and Vosk for high-performance transcription.',
      technologies: ['FastAPI', 'WebSockets', 'Vosk', 'Android'],
      icon: <Smartphone className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500',
      github: 'https://github.com/sudhagarkv/diamond-price-model-deployment'
    },
    {
      id: 'crowdfunding-dapp',
      title: 'Transparent Crowdfunding DApp Using Blockchain',
      description: 'Decentralized crowdfunding platform with smart contracts ensuring transparency and immutability.',
      technologies: ['Solidity', 'React', 'Web3.js', 'Polygon'],
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-red-500',
      github: 'https://github.com/sudhagarkv/Crowdfunding-Dapp-BlockchainTechnology'
    },
    {
      id: 'behavior-malware-detection',
      title: 'Behavior-Based Malware Detection Using ML',
      description: 'Advanced malware detection system using unsupervised learning and behavioral analysis techniques.',
      technologies: ['Python', 'UMAP', 'Gaussian Mixture Models', 'Dynamic Analysis'],
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-500',
      github: null
    }
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions in cybersecurity, software development, and emerging technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              onClick={() => handleProjectClick(project.id)}
              className="glass rounded-xl overflow-hidden hover-glow cursor-pointer group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    {project.github && (
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (Array.isArray(project.github)) {
                            window.open(project.github[0], '_blank');
                          } else {
                            window.open(project.github, '_blank');
                          }
                        }}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Github size={20} />
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/sudhagarkv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;