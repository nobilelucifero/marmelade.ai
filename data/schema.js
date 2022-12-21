export const initialData = {
  industry: null,
  style: null,
  personality: null,
  verbosity: null,
  emoji: null,
};

export const formContent = {
  v: 1,
  prompts: [
    {
      name: "industry",
      text: "Choose your industry",
      prompt_type: "text",
      answers: ["VC", "FinTech", "Creator economy", "Web3", "Sustainability"],
      answers_type: "tags",
      theme: {
        bg: "bg-pink-500",
      },
    },
    {
      name: "style",
      text: "Style",
      prompt_type: "text",
      answers: ["Neutral", "Sarcastic", "Optimistic", "Funny", "Pessimistic"],
      answers_type: "single_choice",
      theme: {
        bg: "bg-pink-500",
      },
    },
    {
      name: "personality",
      text: "Personality",
      prompt_type: "text",
      answers: [
        "Professional",
        "Medieval bard",
        "6 year old",
        "tech-insider",
        "Gen Z",
        "Boomer",
      ],
      answers_type: "single_choice",
      theme: {
        bg: "bg-pink-500",
      },
    },
    {
      name: "verbosity",
      text: "Verbosity",
      prompt_type: "text",
      answers: ["Brief", "Standard", "Detailed"],
      answers_type: "single_choice",
      theme: {
        bg: "bg-pink-500",
      },
    },
    {
      name: "emoji",
      text: "Emoji level",
      prompt_type: "text",
      answers: ["None thanks", "Some 👌", "Make it rain 🌧🌧🌧"],
      answers_type: "single_choice",
      theme: {
        bg: "bg-pink-500",
      },
    },
  ],
};
