import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Teaching Assistant',
      company: 'Sri Ramachandra Institute, Chennai, India',
      period: 'February 2023 - June 2023',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      responsibilities: [
        'Assisted faculty in designing and conducting hands-on Cybersecurity & IoT labs, blending theory with real-world security practices using Kali Linux, VirtualBox, and custom VM environments.',
        'Delivered live demonstrations and guided exercises on network forensics with Wireshark, vulnerability exploitation using Metasploit Framework, and web security testing with Burp Suite.',
        'Taught wireless security concepts by leading practical sessions on Wi-Fi cracking and protection techniques using Aircrack-ng and related wireless scanning tools.',
        'Introduced students to reverse engineering fundamentals through APK decompilation and static analysis using Jadx-GUI, plus explained dynamic behavior tracing with sandboxed test setups.',
        'Authored clear lab manuals and troubleshooting guides covering setup, configuration, and safe execution of offensive security tasks using Python and Bash scripts for automation.',
        'Provided real-time debugging and mentoring to help students analyze attack payloads, interpret scan outputs, and patch vulnerabilities, reinforcing secure coding practices.',
        'Updated lab scenarios each semester to reflect evolving threats and current industry best practices, improving student preparedness for real security assessments.'
      ]
    },
    {
      title: 'App Developer',
      company: 'Attri Consultancy, Gurgaon, India',
      period: 'August 2021 - January 2022',
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      responsibilities: [
        'Led the end-to-end development of a content creation and purchase mobile app for network marketing, building the frontend in React Native and backend in Java Spring Boot.',
        'Implemented Google Sign-In for secure OAuth authentication, generating access tokens used to authorize API calls for user login and subscription management.',
        'Designed multiple REST APIs and SQL database schemas in AWS RDS, handling user profiles, uploaded media (ePub, PDFs, videos), subscription purchases, and transaction records.',
        'Developed note-taking and reminders features using MongoDB for NoSQL storage and backend-triggered push notifications for scheduled cloud events.',
        'Configured secure media storage in AWS S3, delivered via CloudFront CDN with time-bound signed URLs; managed secrets with AWS Secrets Manager and DNS with Route 53.',
        'Containerized the app using Docker with multi-stage builds, published images to AWS ECR, and automated CI/CD with GitLab pipelines and Ansible SSH to deploy on AWS EC2, using Nginx, Let’s Encrypt SSL, and a load balancer for secure, scalable delivery.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Youth India Foundation, Bhubaneswar, India',
      period: 'January 2021 - June 2021',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      responsibilities: [
        'Built and deployed a static NGO website to raise awareness about events and services, using React.js, Next.js, and React MUI for responsive, modern UI components.',
        'Configured Webpack and Babel with custom plugin loaders to handle SVG, PNG, and JPEG formats efficiently for rendering gallery and media assets.',
        'Deployed development builds via Vercel for rapid preview, then migrated the production site to AWS Amplify for scalable hosting with built-in CI/CD.',
        'Integrated AWS WAF (Web Application Firewall) to protect the live site from DDoS attacks and malicious requests, enhancing trust and uptime.',
        'Automated Infrastructure as Code (IaC) by writing Terraform scripts to provision Route 53 DNS, AWS Certificate Manager, and Amplify settings; managed deployment via GitHub Actions CI/CD.',
        'Managed security configurations and monitoring for S3 buckets, domain routing, and SSL certificates, ensuring a reliable, secure, and maintainable static web presence.'
      ]
    }
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
            Building secure solutions and mentoring the next generation of cybersecurity professionals
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