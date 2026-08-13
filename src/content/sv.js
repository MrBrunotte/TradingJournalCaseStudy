const sv = {
  navigation: {
    overview: "Översikt",
    system: "System",
    engineering: "Teknik",
    myRole: "Min roll",
  },

  hero: {
    label: "Projektöversikt",
    title: "MrBrunotte's Trading Journal",
    description:
      "En desktopbaserad tradingjournal som omvandlar rå handelsdata till strukturerade reviews, beteendeinsikter och återanvändbar kunskap.",
    supportingLine:
      "Från importerade executions till granskade beslut, beteendemönster och framtida tradingfokus.",
  },

  problem: {
    label: "Problemet",
    title: "Tradingdata är lätt att lagra. Det är svårare att lära sig av den.",
    description:
      "Traditionella tradingjournaler är bra på att registrera resultat, men mycket av resonemanget bakom resultaten blir fragmenterat eller försvinner i historiken över tid.",

    comparison: {
      left: {
        label: "Traditionell journal",
        title: "Registrerar vad som hände",
        items: [
          "Vinst och förlust",
          "Win rate",
          "Trades",
          "Charts",
          "Resultatmått",
        ],
      },

      right: {
        label: "Det jag ville bevara",
        title: "Varför det hände och vad jag lärde mig",
        items: [
          "Resonemang",
          "Execution quality",
          "Misstag",
          "Planföljsamhet",
          "Marknadsobservationer",
          "Session reflections",
          "Framtida fokus",
        ],
      },
    },

    highlight:
      "Journalen lagrar inte bara vad som hände. Den bevarar vad jag lärde mig och hjälper mig att återanvända de lärdomarna när de blir relevanta igen.",
  },

  dataModel: {
    label: "Datamodell",
    title: "Ett beslut kan skapa flera trades.",
    description:
      "Tradingdata kan komma från olika CSV-format och kopierade konton. Journalen normaliserar dessa executions samtidigt som den skiljer mellan Account Trades och Trading Decisions.",
  },

  sections: {
    engineering: {
      label: "Teknik",
      title: "Teknik",
      description:
        "Tekniska utmaningar och arkitektur kommer att läggas till här.",
    },

    myRole: {
      label: "Min roll",
      title: "Min roll",
      description: "Produktägarskap och AI-assisterad implementation.",
    },
  },
};

export default sv;
