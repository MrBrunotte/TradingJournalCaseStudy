const en = {
  navigation: {
    overview: "Overview",
    system: "System",
    engineering: "Engineering",
    myRole: "My Role",
  },

  hero: {
    label: "Project Overview",
    title: "MrBrunotte's Trading Journal",
    description:
      "A desktop trading journal that turns raw trading data into structured reviews, behavioral insights and reusable knowledge.",
    supportingLine:
      "From imported executions to reviewed decisions, behavioral patterns and future trading focus.",
  },

  problem: {
    label: "The Problem",
    title: "Trading data is easy to store. Learning from it is harder.",
    description:
      "Traditional journals are good at recording results, but much of the reasoning behind those results becomes fragmented or buried over time.",

    comparison: {
      left: {
        label: "Traditional journal",
        title: "Records what happened",
        items: [
          "Profit and loss",
          "Win rate",
          "Trades",
          "Charts",
          "Performance metrics",
        ],
      },

      right: {
        label: "What I wanted to preserve",
        title: "Why it happened and what I learned",
        items: [
          "Reasoning",
          "Execution quality",
          "Mistakes",
          "Plan compliance",
          "Market observations",
          "Session reflections",
          "Future focus",
        ],
      },
    },

    highlight:
      "The journal doesn't just store what happened. It preserves what I learned from it and helps bring those lessons back when they become relevant again.",
  },

  dataModel: {
    label: "Data Model",
    title: "One decision can create multiple trades.",
    description:
      "Trading data can come from different CSV formats and copied accounts. The journal normalizes those executions while preserving the distinction between Account Trades and Trading Decisions.",
  },

  sections: {
    engineering: {
      label: "Engineering",
      title: "Engineering",
      description: "Technical challenges and architecture will be added here.",
    },

    myRole: {
      label: "My Role",
      title: "My Role",
      description: "Product ownership and AI-assisted implementation.",
    },
  },
};

export default en;
