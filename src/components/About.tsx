import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Cpu, GraduationCap } from 'lucide-react';

const Journey = () => {
  const experiences = [
    {
      company: "Decrypt",
      role: "Full Stack Blockchain Developer",
      period: "Jun 2024 - Present",
      description: "Leading blockchain development initiatives and smart contract implementations",
      icon: <Briefcase className="w-6 h-6 text-blue-400" />
    },
    {
      company: "Metaversity",
      role: "Blockchain Developer",
      period: "2023 - Jun 2024",
      description: "Developed and maintained blockchain infrastructure and DApps",
      icon: <Code2 className="w-6 h-6 text-purple-400" />
    },
    {
      company: "JNC Techlab",
      role: "Blockchain Developer",
      period: "October 2022 - March 2023",
      description: "Specialized in smart contract development and blockchain integration",
      icon: <Cpu className="w-6 h-6 text-green-400" />
    },
    {
      company: "Freelance",
      role: "Blockchain Developer",
      period: "Early 2022 - October 2022",
      description: "Independent blockchain development projects and consultancy",
      icon: <GraduationCap className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From freelancing to enterprise blockchain development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-700 flex items-center justify-center">
                  {exp.icon}
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-blue-400 mb-2">{exp.role}</h4>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;