import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Link, Shield, Code2, Globe2, Cpu, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DeFi Exchange Platform",
      description: "A high-performance decentralized exchange platform featuring automated market making (AMM), yield farming, and cross-chain token swaps. Implemented advanced security measures and optimized gas efficiency.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832",
      tags: ["Solidity", "Web3.js", "React", "Rust"],
      features: [
        "Automated Market Making (AMM)",
        "Multi-chain token swaps",
        "Yield farming protocols",
        "Gas optimization"
      ],
      metrics: {
        tvl: "$10M+",
        users: "50K+",
        transactions: "1M+"
      },
      techStack: [
        { icon: <Code2 className="w-4 h-4" />, name: "Solidity & Rust" },
        { icon: <Database className="w-4 h-4" />, name: "IPFS" },
        { icon: <Shield className="w-4 h-4" />, name: "Security Audited" }
      ],
      link: "#"
    },
    {
      title: "NFT Marketplace",
      description: "A comprehensive NFT marketplace supporting multiple token standards, featuring lazy minting, royalty management, and cross-chain NFT bridges. Includes advanced search and filtering capabilities.",
      image: "https://images.unsplash.com/photo-1644788260650-19f7d865c0c9?auto=format&fit=crop&q=80&w=2832",
      tags: ["ERC-721", "IPFS", "Next.js", "TypeScript"],
      features: [
        "Multi-chain NFT support",
        "Lazy minting",
        "Royalty management",
        "Advanced filtering"
      ],
      metrics: {
        collections: "1K+",
        artists: "10K+",
        volume: "$5M+"
      },
      techStack: [
        { icon: <Globe2 className="w-4 h-4" />, name: "Next.js" },
        { icon: <Database className="w-4 h-4" />, name: "IPFS Storage" },
        { icon: <Code2 className="w-4 h-4" />, name: "Smart Contracts" }
      ],
      link: "#"
    },
    {
      title: "Smart Contract Vault",
      description: "A secure multi-signature wallet system with time-locks, spending limits, and advanced recovery mechanisms. Features real-time monitoring and automated security checks.",
      image: "https://images.unsplash.com/photo-1642790551116-18e150f248e5?auto=format&fit=crop&q=80&w=2832",
      tags: ["Ethereum", "Hardhat", "TypeScript", "Solidity"],
      features: [
        "Multi-signature security",
        "Time-locked transactions",
        "Automated auditing",
        "Recovery system"
      ],
      metrics: {
        secured: "$50M+",
        organizations: "100+",
        uptime: "99.99%"
      },
      techStack: [
        { icon: <Shield className="w-4 h-4" />, name: "Multi-sig" },
        { icon: <Cpu className="w-4 h-4" />, name: "Automated Audits" },
        { icon: <GitBranch className="w-4 h-4" />, name: "Version Control" }
      ],
      link: "#"
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
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the frontiers of blockchain technology through innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-400">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Performance Metrics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-bold text-blue-400">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {project.techStack.map((tech, idx) => (
                        <div key={idx} className="flex items-center text-gray-400">
                          {tech.icon}
                          <span className="ml-1 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;