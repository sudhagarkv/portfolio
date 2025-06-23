import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Shield, Brain, Cpu, Smartphone, Database } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const projects = {
    'fingerprint-intrusion-detection': {
      title: 'A Novel Fingerprint-Based Intrusion Detection Approach to Enhancing In-Vehicle Communication Security',
      description: 'Modern vehicles have evolved into complex cyber-physical systems with dozens of Electronic Control Units (ECUs) communicating over internal networks such as CAN bus. As connectivity grows, so does the risk of cyber-attacks targeting in-vehicle communication channels. This project, conducted under the guidance of Prof. Hafiz Malik at the University of Michigan-Dearborn, explores an innovative fingerprint-based intrusion detection approach specifically designed to secure such networks against unauthorized access and malicious manipulation.',
      longDescription: `In this research, I developed a method to capture subtle variations in ECU signal patterns, effectively creating a unique 'fingerprint' for each legitimate ECU. By continuously monitoring real-time traffic and comparing it against stored fingerprints, the system can detect anomalies indicative of spoofed or compromised ECUs. To enhance detection accuracy, I integrated neural network models trained to recognize legitimate versus manipulated signal distortions.

Using Wireshark, I performed ARP spoofing and replay attacks within a controlled lab setup to test detection capabilities. I applied statistical techniques to filter noise and extract meaningful features from raw ECU traffic. By employing time-series analysis and clustering, the system adapts to normal variations without excessive false positives.

This project strengthened my skills in automotive cybersecurity, signal processing, neural networks, and practical ethical hacking in regulated environments. Next, I aim to extend this research with firmware integrity checks and real-time cloud-based threat intelligence.`,
      technologies: ['Python', 'Neural Networks', 'Wireshark', 'Signal Processing', 'Statistical Analysis', 'Time-Series Analysis'],
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-red-500 to-orange-500',
      github: null,
      duration: '6 months',
      team: 'Group Research',
      supervisor: 'Prof. Hafiz Malik',
      university: 'University of Michigan-Dearborn',
      keyFeatures: [
        'ECU Signal Fingerprinting',
        'Real-time Anomaly Detection',
        'Neural Network Integration',
        'Statistical Noise Filtering',
        'Time-Series Analysis',
        'Attack Simulation & Testing'
      ],
      challenges: [
        'Capturing subtle signal variations in noisy automotive environments',
        'Reducing false positives while maintaining high detection accuracy',
        'Adapting to normal ECU behavior variations over time',
        'Processing real-time data streams efficiently'
      ],
      outcomes: [
        'Developed novel fingerprinting methodology for ECU identification',
        'Achieved high detection accuracy for spoofed ECUs',
        'Demonstrated effectiveness against ARP spoofing and replay attacks',
        'Gained deep expertise in automotive cybersecurity'
      ]
    },
    'secret-scanning-kubernetes': {
      title: 'Secret Scanning Infrastructure in Kubernetes (POC)',
      description: 'Security breaches due to leaked secrets in code repositories have become a major threat to modern software delivery pipelines. To tackle this, I designed and implemented a secure, scalable, and automated secret scanning infrastructure as a Proof-of-Concept (POC) during my graduate studies at the University of Michigan-Dearborn.',
      longDescription: `The architecture revolves around a Kubernetes cluster orchestrating containerized components that perform distributed secret scanning. I built a React-based frontend that allows authenticated users to submit repository URLs along with encrypted access tokens. These tokens are securely handled using Azure Key Vault, ensuring that credentials never appear in plaintext anywhere in the pipeline.

The submitted requests are passed to a Go-powered scan service via REST APIs. This microservice validates user access and publishes scan jobs to an Apache Kafka topic, enabling robust message queuing for distributed processing. A separate Go consumer service listens to this Kafka topic, dynamically provisions Kubernetes pods and persistent volumes, and spins up truffle-scanner containers that clone the specified repositories.

Inside each container, the Trufflehog tool scans for hard-coded secrets such as API keys, passwords, or cryptographic keys. The findings are parsed, filtered for false positives, and then stored securely in a PostgreSQL database. I also configured secure storage of logs and scan results to comply with privacy best practices.

This project helped me master multiple technologies, including Kubernetes orchestration, Kafka for resilient message handling, Terraform for infrastructure as code, Docker containerization, and vault-based secret management. Moreover, the solution was designed with DevSecOps in mind — seamlessly integrating with CI/CD workflows to prevent secrets from reaching production environments.`,
      technologies: ['Kubernetes', 'Go', 'React', 'Apache Kafka', 'Azure Key Vault', 'PostgreSQL', 'Terraform', 'Docker', 'Trufflehog'],
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      github: [
        'https://github.com/sudhagarkv/opss-runner',
        'https://github.com/sudhagarkv/scan-queue-processor',
        'https://github.com/sudhagarkv/scan-service'
      ],
      architectureImageHref: 'https://drive.google.com/file/d/1S8ULH258RkI47QrSbakkVkq1IX3HzrGA/view?usp=sharing',
      architectureImageSrc: 'https://i.imgur.com/rWaxAGz.jpeg',
      duration: '4 months',
      team: 'Individual Project',
      university: 'University of Michigan-Dearborn',
      keyFeatures: [
        'Kubernetes-based Microservices Architecture',
        'Azure Key Vault Integration',
        'Apache Kafka Message Queuing',
        'Dynamic Pod Provisioning',
        'Automated Secret Detection',
        'DevSecOps Pipeline Integration'
      ],
      challenges: [
        'Designing secure token handling across microservices',
        'Implementing efficient message queuing for distributed processing',
        'Managing dynamic Kubernetes resource provisioning',
        'Filtering false positives from scan results'
      ],
      outcomes: [
        'Built scalable secret scanning infrastructure',
        'Mastered Kubernetes orchestration and Go microservices',
        'Implemented secure credential management using Azure Key Vault',
        'Demonstrated DevSecOps best practices'
      ]
    },
    'diamond-price-prediction': {
      title: 'End-to-End AI-Driven Diamond Price Prediction Model with Flask API Deployment',
      description: 'Accurate pricing is crucial in the gem industry, where slight variations in features like carat, cut, or clarity can drastically affect a diamond\'s value. To address this, I developed an end-to-end diamond price prediction model powered by machine learning algorithms, wrapped in a deployable Flask API for real-time predictions.',
      longDescription: `I began with extensive data exploration, cleaning, and preprocessing of a large dataset containing diamond characteristics and historical price trends. Using Python libraries such as Pandas and Scikit-learn, I handled missing values, normalized features, and engineered new ones like depth percentage and volume, which significantly improved model performance.

To identify the best predictor, I trained and compared multiple regression models including Linear Regression, Decision Trees, K-Nearest Neighbors (KNN), and XGBoost. XGBoost emerged as the top performer, achieving high R-squared and low RMSE scores on test datasets. I performed hyperparameter tuning to further boost accuracy and prevent overfitting.

Once satisfied with the model's performance, I developed a Flask-based API to expose the prediction service via REST endpoints. Using Postman, I rigorously tested the endpoints to ensure reliable JSON response formatting and handled edge cases like invalid inputs gracefully.

This project provided a practical demonstration of deploying machine learning models in a production-ready manner, making it accessible for jewelers, online retailers, and investors to estimate diamond prices instantly based on input parameters.`,
      technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'Flask', 'REST API', 'Postman'],
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/sudhagarkv/diamond-price-model-deployment',
      duration: '4 months',
      team: 'Individual Project',
      keyFeatures: [
        'Comprehensive Data Preprocessing',
        'Multiple ML Model Comparison',
        'XGBoost Hyperparameter Tuning',
        'Flask REST API Development',
        'Real-time Price Predictions',
        'Production-Ready Deployment'
      ],
      challenges: [
        'Handling missing values and data inconsistencies',
        'Feature engineering for improved model performance',
        'Comparing and selecting optimal ML algorithms',
        'Building robust API with proper error handling'
      ],
      outcomes: [
        'Achieved high accuracy with XGBoost model',
        'Successfully deployed ML model as REST API',
        'Demonstrated end-to-end ML pipeline development',
        'Gained expertise in production ML deployment'
      ]
    },
    'speech-streaming-transcription': {
      title: 'Low Latency Speech Streaming and Transcription via FastAPI and Vosk',
      description: 'Modern applications increasingly rely on real-time speech-to-text features, but achieving low latency and robust performance at scale is a demanding task. This project demonstrates my ability to design and deploy such a system using Python microservices and modern frameworks.',
      longDescription: `I designed a WebSocket-based streaming backend using FastAPI that receives raw PCM audio data from an Android client. The server buffers, decodes, and streams audio chunks to the Vosk speech recognition engine, which returns partial and final transcripts in real-time. Handling asynchronous I/O with Python's asyncio, I ensured smooth concurrent processing of multiple sessions without blocking.

Special care was taken to address real-world challenges: the server handles dropped connections, ensures secure data flow with TLS encryption, and manages in-memory session data for fast lookups. For the Android side, I used OkHttp's WebSocket API to stream audio efficiently and handle reconnections gracefully.

The system was containerized for portability and tested under simulated high-load conditions to confirm consistent low-latency behavior and high transcription accuracy. This project shows my mastery in real-time data processing, secure communication, and scalable service deployment.

I plan to expand this work by integrating speaker diarization and multilingual transcription, turning it into a production-ready speech-to-text API for diverse industries like call centers, education, and healthcare.`,
      technologies: ['FastAPI', 'WebSockets', 'Vosk', 'Python asyncio', 'Android', 'OkHttp', 'Docker', 'TLS'],
      icon: <Smartphone className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500',
      github: 'https://github.com/sudhagarkv/Speech-Recognition-AppwithServer',
      duration: '4 months',
      team: 'Individual Project',
      keyFeatures: [
        'WebSocket-based Real-time Streaming',
        'FastAPI Asynchronous Processing',
        'Vosk Speech Recognition Integration',
        'Android Client Development',
        'TLS Encryption',
        'High-Load Testing'
      ],
      challenges: [
        'Implementing low-latency audio streaming',
        'Managing concurrent WebSocket sessions',
        'Handling connection drops and reconnections',
        'Ensuring consistent transcription accuracy'
      ],
      outcomes: [
        'Built production-ready speech-to-text system',
        'Mastered real-time WebSocket communication',
        'Achieved low-latency audio processing',
        'Demonstrated scalable microservice architecture'
      ]
    },
    'crowdfunding-dapp': {
      title: 'Transparent and Immutable Crowdfunding DApp Using Blockchain Technology',
      description: 'Crowdfunding has rapidly evolved into a cornerstone of modern fundraising for entrepreneurs, creators, and social causes. Yet, traditional platforms like Kickstarter and Indiegogo still face pressing challenges: opaque fund handling, third-party commission fees, delayed project delivery, and even fraudulent campaigns that exploit backers\' trust. My project, a Transparent and Immutable Crowdfunding DApp, tackles these issues head-on by harnessing the decentralized, tamper-resistant power of blockchain technology.',
      longDescription: `Developed as part of my undergraduate research at Sri Ramachandra Institute of Higher Education and Research, this project leverages the Ethereum blockchain, smart contracts, and a robust Proof of Authority (PoA) consensus model to build a crowdfunding solution that guarantees security, transparency, and efficiency. The entire fundraising workflow—from campaign creation to fund disbursement—is governed by immutable smart contracts, leaving no room for manipulation or backdoor changes.

Technical Architecture:
At its core, the system uses Solidity for writing smart contracts that handle critical operations like campaign initiation, funding milestones, contributor tracking, and withdrawal requests. By deploying these contracts on the Polygon PoA network, the project achieves near-instant transaction confirmations without the heavy energy consumption of Proof of Work systems, addressing both scalability and sustainability.

For the frontend, I used React.js and Next.js, creating a clean, responsive, and intuitive user interface where project owners and backers interact securely. User wallets are seamlessly integrated through MetaMask, which injects Web3.js libraries directly into the browser, enabling direct communication with the deployed contracts. This eliminates the need for centralized intermediaries altogether.

The DApp uses the Infura infrastructure for reliable and scalable interaction with Ethereum nodes without the overhead of running and maintaining private nodes. For testing and development, the Polygon Mumbai testnet was used alongside faucets to simulate real transactions, verifying that the smart contracts execute as expected in live conditions.`,
      technologies: ['Solidity', 'React.js', 'Next.js', 'Web3.js', 'MetaMask', 'Polygon', 'Infura', 'Smart Contracts'],
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-red-500',
      github: 'https://github.com/sudhagarkv/Crowdfunding-Dapp-BlockchainTechnology',
      architectureImageHref: 'https://drive.google.com/file/d/1Cnek8R4O0XfUeSdF5Xzzdkh3nteS9NnJ/view?usp=sharing',
      architectureImageSrc: 'https://i.imgur.com/4dbxzjz.jpeg',
      duration: '6 months',
      team: 'Individual Research Project',
      university: 'Sri Ramachandra Institute of Higher Education and Research',
      keyFeatures: [
        'Immutable Smart Contract Governance',
        'Polygon PoA Network Integration',
        'MetaMask Wallet Integration',
        'Transparent Fund Tracking',
        'Gas Fee Optimization',
        'Fraud Prevention Mechanisms'
      ],
      challenges: [
        'Designing secure smart contract architecture',
        'Implementing efficient gas fee optimization',
        'Ensuring seamless wallet integration',
        'Building transparent fund tracking system'
      ],
      outcomes: [
        'Built fully functional decentralized crowdfunding platform',
        'Mastered blockchain development and smart contracts',
        'Published conference paper on the research',
        'Demonstrated practical blockchain application'
      ]
    },
    'behavior-malware-detection': {
      title: 'Behavior-Based Malware Detection Using Machine Learning',
      description: 'In today\'s threat landscape, cybercriminals continually craft new variants of malware specifically designed to evade signature-based antivirus systems. This constant evolution renders traditional static detection techniques increasingly inadequate. To address this gap, I designed and implemented a behavior-based malware detection system leveraging unsupervised machine learning, during my undergraduate studies at Sri Ramachandra Institute of Higher Education and Research.',
      longDescription: `The main goal of this project was to prove that behavioral patterns—such as anomalous system calls, unusual file manipulations, or unexpected network activity—can provide a more resilient detection mechanism against zero-day malware and polymorphic threats. By focusing on how malware behaves rather than what it looks like, the system can detect previously unseen threats with higher accuracy.

Project Methodology:
I began by collecting an extensive dataset comprising both benign and malicious executables. For each sample, dynamic analysis was performed in a controlled sandbox environment to log real-time behavioral indicators. Key features extracted included system call frequency, memory usage fluctuations, file I/O operations, registry modifications, and network packet counts.

To manage this high-dimensional data effectively, I applied Uniform Manifold Approximation and Projection (UMAP) for dimensionality reduction. UMAP helped preserve the intrinsic structure of the data while making it computationally feasible to perform clustering on complex behavioral patterns.

For the unsupervised detection engine, I utilized Gaussian Mixture Models (GMM). GMMs are well-suited for probabilistic modeling of clusters, which is ideal for detecting subtle variations in behavioral traits across different malware families. By fitting the GMM to the reduced dataset, the system could effectively classify samples into distinct behavioral clusters, differentiating malicious actions from benign baseline activity.

Rigorous testing was carried out using a test set that included both common malware variants and newly modified samples to simulate zero-day conditions. The system achieved a 94% classification accuracy, demonstrating robust detection performance even when facing obfuscated or previously unseen malware samples.`,
      technologies: ['Python', 'UMAP', 'Gaussian Mixture Models', 'Scikit-learn', 'Dynamic Analysis', 'Sandbox Environment'],
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-500',
      github: null,
      duration: '5 months',
      team: 'Individual Research Project',
      university: 'Sri Ramachandra Institute of Higher Education and Research',
      keyFeatures: [
        'Dynamic Behavioral Analysis',
        'UMAP Dimensionality Reduction',
        'Gaussian Mixture Model Clustering',
        'Zero-day Malware Detection',
        '94% Classification Accuracy',
        'Sandbox-based Testing'
      ],
      challenges: [
        'Extracting meaningful behavioral features from complex malware samples',
        'Managing high-dimensional behavioral data effectively',
        'Reducing false positives while maintaining detection accuracy',
        'Handling polymorphic and metamorphic malware variants'
      ],
      outcomes: [
        'Achieved 94% accuracy in malware classification',
        'Demonstrated effectiveness against zero-day threats',
        'Built scalable behavioral analysis pipeline',
        'Gained expertise in unsupervised machine learning for cybersecurity'
      ]
    }
  };

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 glass"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </motion.button>

            <div className="flex items-center space-x-4">
              {project.github && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={Array.isArray(project.github) ? project.github[0] : project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github size={20} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}>
                {project.icon}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Project Meta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <div className="glass p-6 rounded-xl text-center">
                <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Duration</h3>
                <p className="text-gray-300">{project.duration}</p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Team</h3>
                <p className="text-gray-300">{project.team}</p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <Code className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Technologies</h3>
                <p className="text-gray-300">{project.technologies.length} Technologies</p>
              </div>
            </motion.div>

            {/* GitHub Links */}
            {project.github && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {Array.isArray(project.github) ? (
                  project.github.map((link, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      <Github size={20} />
                      <span>Repository {index + 1}</span>
                    </motion.a>
                  ))
                ) : (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                  </motion.a>
                )}
              </motion.div>
            )}
          </div>
        </section>

        {/* Architecture Image (for Crowdfunding DApp) */}
        {project.architectureImageHref && project.architectureImageSrc && (
          <section className="py-12 bg-slate-800/50">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-8">System Architecture</h2>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href={project.architectureImageHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block glass p-4 rounded-xl hover-glow"
                >
                  <img
                    src={project.architectureImageSrc}
                    alt="System Architecture Diagram"
                    className="max-w-full h-auto rounded-lg"
                  />
                  <p className="text-gray-400 mt-4">Click to view full architecture diagram</p>
                </motion.a>
              </motion.div>
            </div>
          </section>
        )}


        {/* Detailed Description */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      {project.longDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.keyFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Technical Challenges</h3>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="glass p-4 rounded-lg"
                        >
                          <p className="text-gray-300">{challenge}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Key Outcomes</h3>
                    <div className="space-y-4">
                      {project.outcomes.map((outcome, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white text-sm font-bold mt-1`}>
                            ✓
                          </div>
                          <p className="text-gray-300">{outcome}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Technologies */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-full font-medium`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm">Duration</p>
                        <p className="text-white font-semibold">{project.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Team Size</p>
                        <p className="text-white font-semibold">{project.team}</p>
                      </div>
                      {project.university && (
                        <div>
                          <p className="text-gray-400 text-sm">Institution</p>
                          <p className="text-white font-semibold">{project.university}</p>
                        </div>
                      )}
                      {project.supervisor && (
                        <div>
                          <p className="text-gray-400 text-sm">Supervisor</p>
                          <p className="text-white font-semibold">{project.supervisor}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-4">Links</h3>
                    <div className="space-y-3">
                      {project.github && (
                        <>
                          {Array.isArray(project.github) ? (
                            project.github.map((link, index) => (
                              <motion.a
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                              >
                                <Github size={16} />
                                <span>Repository {index + 1}</span>
                              </motion.a>
                            ))
                          ) : (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                            >
                              <Github size={16} />
                              <span>GitHub Repository</span>
                            </motion.a>
                          )}
                        </>
                      )}
                      {project.architectureImage && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.architectureImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                          <span>Architecture Diagram</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Projects */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-6 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              ← Back to All Projects
            </motion.button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;