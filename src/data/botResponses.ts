interface BotResponse {
  keywords: string[];
  response: string;
}

export const generalResponses: BotResponse[] = [
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    response: "Hello! I'm Shiva's AI assistant. How can I help you today? 🤖✨"
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    response: "Goodbye! Feel free to chat again anytime! 👋"
  },
  {
    keywords: ["thanks", "thank you", "thx"],
    response: "You're welcome! Always happy to help! 😊"
  }
];

export const technicalResponses: BotResponse[] = [
  {
    keywords: ["blockchain", "web3", "crypto"],
    response: "I'd love to tell you about Shiva's blockchain expertise! He's proficient in Ethereum, Solana, and cross-chain development. What specific aspect interests you? 🔗"
  },
  {
    keywords: ["ethereum", "solidity", "smart contract"],
    response: "Shiva has extensive experience with Ethereum development, including smart contract creation, security audits, and DApp development. He's audited over 50 smart contracts! 🛡️"
  },
  {
    keywords: ["solana", "rust"],
    response: "Shiva is an expert Solana developer with deep knowledge of Rust programming. He's built multiple high-performance DApps on Solana! 🚀"
  }
];

export const experienceResponses: BotResponse[] = [
  {
    keywords: ["experience", "work", "history", "background"],
    response: "Shiva's journey is fascinating! He started as a freelancer, then worked at JNC Techlab, followed by Metaversity, and is now at Decrypt. Want to know more about any specific role? 💼"
  },
  {
    keywords: ["decrypt", "current"],
    response: "At Decrypt, Shiva is leading blockchain development initiatives and implementing cutting-edge smart contract solutions! 🌟"
  },
  {
    keywords: ["metaversity"],
    response: "During his time at Metaversity (2023-Jun 2024), Shiva developed and maintained blockchain infrastructure and DApps! 🏗️"
  }
];

export const skillsResponses: BotResponse[] = [
  {
    keywords: ["skills", "technologies", "tech stack"],
    response: "Shiva is skilled in multiple technologies! His stack includes React, Node.js, Rust, Go, Python, and various blockchain platforms. Which technology would you like to know more about? 💻"
  },
  {
    keywords: ["frontend", "react", "web"],
    response: "On the frontend, Shiva is an expert in React and Next.js, creating beautiful and responsive web applications! ✨"
  },
  {
    keywords: ["backend", "node", "server"],
    response: "Shiva's backend expertise includes Node.js, GraphQL, and REST APIs. He's built scalable server architectures for blockchain applications! 🔧"
  }
];

export const projectResponses: BotResponse[] = [
  {
    keywords: ["projects", "portfolio", "work"],
    response: "Shiva has worked on amazing projects! From DeFi platforms to NFT marketplaces. Would you like to hear about a specific project? 🎨"
  },
  {
    keywords: ["defi", "exchange"],
    response: "One of Shiva's notable projects is a DeFi exchange platform with automated market making capabilities! 📈"
  },
  {
    keywords: ["nft", "marketplace"],
    response: "Shiva built a comprehensive NFT marketplace supporting multiple token standards and IPFS integration! 🖼️"
  }
];

export const personalityResponses: BotResponse[] = [
  {
    keywords: ["who", "what are you", "your name"],
    response: "I'm Shiva's AI assistant! I help visitors learn about his work and expertise in blockchain development! 🤖"
  },
  {
    keywords: ["fun", "joke", "funny"],
    response: "Why did the blockchain developer go broke? Because he lost his private keys! 😄"
  },
  {
    keywords: ["help", "assist", "support"],
    response: "I can tell you about Shiva's experience, projects, skills, or anything else you'd like to know! Just ask! 💡"
  }
];