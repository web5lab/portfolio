import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Cpu, Fingerprint, Network, Shield, Workflow } from 'lucide-react';

const achievements = [
  {
    icon: <Shield className="w-8 h-8 text-emerald-400" />,
    title: "Security Audits",
    count: "50+",
    description: "Smart contracts audited & secured"
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    title: "DApps Developed",
    count: "30+",
    description: "Decentralized applications launched"
  },
  {
    icon: <Network className="w-8 h-8 text-purple-400" />,
    title: "Blockchain Networks",
    count: "8",
    description: "Different networks integrated"
  },
  {
    icon: <Cpu className="w-8 h-8 text-red-400" />,
    title: "Gas Optimization",
    count: "40%",
    description: "Average gas cost reduction"
  }
];

const Achievements = () => {
  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Animated tech background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#232323_25%,transparent_25%),linear-gradient(-45deg,#232323_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#232323_75%),linear-gradient(-45deg,transparent_75%,#232323_75%)] bg-[length:20px_20px] animate-[gradient_20s_linear_infinite]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Shiva's Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pioneering blockchain solutions with a track record of successful implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all"
            >
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{achievement.count}</h3>
              <h4 className="text-lg font-semibold text-gray-300 mb-2">{achievement.title}</h4>
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;