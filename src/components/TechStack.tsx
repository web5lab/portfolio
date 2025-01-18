import React from 'react';
import { motion } from 'framer-motion';
import { 
  Binary, Box, Braces, Cloud, Code, Database, 
  Server, Globe, Cpu, Terminal, GitBranch, Settings
} from 'lucide-react';

const technologies = [
  {
    category: "Blockchain",
    items: [
      { name: "Ethereum", icon: <Binary className="w-5 h-5" />, level: 95 },
      { name: "Solana", icon: <Code className="w-5 h-5" />, level: 92 },
      { name: "Pact", icon: <Box className="w-5 h-5" />, level: 88 },
      { name: "Web3.js", icon: <Globe className="w-5 h-5" />, level: 90 }
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "Rust", icon: <Terminal className="w-5 h-5" />, level: 90 },
      { name: "Go", icon: <GitBranch className="w-5 h-5" />, level: 85 },
      { name: "Python", icon: <Settings className="w-5 h-5" />, level: 88 },
      { name: "TypeScript", icon: <Braces className="w-5 h-5" />, level: 92 }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <Code className="w-5 h-5" />, level: 95 },
      { name: "Next.js", icon: <Server className="w-5 h-5" />, level: 90 },
      { name: "Tailwind", icon: <Box className="w-5 h-5" />, level: 88 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <Server className="w-5 h-5" />, level: 92 },
      { name: "GraphQL", icon: <Database className="w-5 h-5" />, level: 85 },
      { name: "REST APIs", icon: <Cloud className="w-5 h-5" />, level: 90 }
    ]
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", icon: <Box className="w-5 h-5" />, level: 88 },
      { name: "AWS", icon: <Cloud className="w-5 h-5" />, level: 85 },
      { name: "CI/CD", icon: <Cpu className="w-5 h-5" />, level: 87 }
    ]
  }
];

const TechStack = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Full Stack Blockchain Development with comprehensive expertise across multiple domains,
            from low-level systems programming to modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{tech.category}</h3>
              <div className="space-y-6">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div className="flex items-center mb-2">
                      <span className="text-gray-300 mr-2">{item.icon}</span>
                      <span className="text-gray-300">{item.name}</span>
                      <span className="ml-auto text-gray-400">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;