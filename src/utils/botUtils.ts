import {
  generalResponses,
  technicalResponses,
  experienceResponses,
  skillsResponses,
  projectResponses,
  personalityResponses
} from '../data/botResponses';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export const findBestResponse = (input: string): string => {
  const normalizedInput = input.toLowerCase();
  
  // Combine all response categories
  const allResponses = [
    ...generalResponses,
    ...technicalResponses,
    ...experienceResponses,
    ...skillsResponses,
    ...projectResponses,
    ...personalityResponses
  ];

  // Find the best matching response based on keyword matches
  let bestMatch = {
    response: "I'm not sure about that, but I'd be happy to tell you about Shiva's blockchain expertise! 🤔",
    matchCount: 0
  };

  allResponses.forEach(responseObj => {
    const matchCount = responseObj.keywords.reduce((count, keyword) => {
      return normalizedInput.includes(keyword.toLowerCase()) ? count + 1 : count;
    }, 0);

    if (matchCount > bestMatch.matchCount) {
      bestMatch = {
        response: responseObj.response,
        matchCount
      };
    }
  });

  return bestMatch.response;
};

export const formatTimestamp = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
};