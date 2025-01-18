import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Database, Globe2, Code2, Cpu } from 'lucide-react';
import BlockchainGlobe from './BlockchainGlobe';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      
      {/* Blockchain Globe */}
      <BlockchainGlobe />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Cpu className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Shiva
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Blockchain Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Specializing in Ethereum, Solana, and cross-chain development with expertise in Rust and smart contracts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          {[
            {
              icon: <Bitcoin className="w-12 h-12 text-blue-400" />,
              title: "Multi-Chain Expert",
              description: "Ethereum & Solana development"
            },
            {
              icon: <Database className="w-12 h-12 text-purple-400" />,
              title: "Smart Contracts",
              description: "Solidity & Rust implementation"
            },
            {
              icon: <Globe2 className="w-12 h-12 text-cyan-400" />,
              title: "Full Stack",
              description: "End-to-end blockchain solutions"
            },
            {
              icon: <Code2 className="w-12 h-12 text-emerald-400" />,
              title: "DeFi & NFTs",
              description: "Decentralized applications"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;