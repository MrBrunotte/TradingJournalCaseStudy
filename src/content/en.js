const en = {
  navigation: {
    overview: "Overview",
    dataModel: "Data Model",
    review: "Review",
    coach: "Coach",
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
      "Trading data can arrive from different CSV formats and from several copied accounts, which means the same underlying decision may appear as multiple individual executions. The journal first detects the source, normalizes the imported data into a common trade model and preserves every original Account Trade. It then separates account-level executions from Trading Decisions so financial analytics can use every fill while behavioral analytics count the underlying decision only once. This distinction prevents copied trades from inflating grades, mistakes, reviews and other behavioral statistics.",

    importPipeline: {
      label: "Import Pipeline",

      sources: [
        {
          name: "DeepCharts",
          type: "CSV source",
        },
        {
          name: "Rithmic",
          type: "CSV source",
        },
      ],

      steps: [
        "Source Detection",
        "Adapter",
        "Normalization",
        "Common Trade Model",
      ],

      stepLabel: "Step",

      description:
        "Source-specific differences stay inside the import layer so the rest of the application can work with a consistent internal trade model.",
    },

    decisionGrouping: {
      accountLabel: "Account Trades",
      accountTitle: "Every execution remains stored",
      accountExecution: "execution",

      decisionLabel: "Trading Decision",
      decisionTitle: "One underlying decision",
      decisionDescription:
        "Multiple copied executions can represent one trading decision for behavioral review.",

      financialLabel: "Financial / Account Analysis",
      financialTitle: "How did my accounts perform?",
      financialDescription:
        "Uses every underlying account execution for P&L, fills and account-level statistics.",

      behavioralLabel: "Behavioral Analysis",
      behavioralTitle: "How did I trade?",
      behavioralDescription:
        "Uses the Trading Decision once so grades, mistakes, reviews and behavioral statistics are not multiplied across copied accounts.",

      summary:
        "Same underlying trade data, viewed at two different analytical levels.",
    },

    copiedTradeMatching: {
      label: "Copied Trade Matching",
      title: "Automatic when reliable, manual when ambiguous",
      description:
        "Copied executions can differ slightly in timestamp, entry or exit because of fills. Reliable matches can be grouped automatically, while ambiguous cases can be reviewed manually.",

      likelyMatch: {
        label: "Likely Match",
        description:
          "Trade characteristics indicate that executions belong to the same decision.",
      },

      manualReview: {
        label: "Manual Review",
        description:
          "Ambiguous cases are surfaced so they can be confirmed as the same decision or kept separate.",
      },

      originalData: {
        label: "Original Data Preserved",
        description:
          "The grouping decision is stored without changing the original imported account trades.",
      },
    },
  },

  tradeReview: {
    label: "Trade Review",
    title: "Reviewing the decision, not just the result",
    description:
      "A profitable trade is not automatically a good trade, and a losing trade is not automatically a bad one. The Trade Review is designed to separate outcome from process so I can evaluate whether the entry, execution, trade management and exit were actually sound. It also preserves the reasoning and observations behind the decision so they can remain useful later instead of disappearing into old review notes.",

    quality: {
      label: "Quality & Excursion Analysis",
      title: "Execution and outcome are evaluated separately",
      description:
        "The review combines overall quality, execution and outcome with entry and exit information, Trade High and Trade Low, and excursion metrics such as MFE, MAE and ETD. These measurements help show how much opportunity existed during the trade, how much adverse movement occurred and how much unrealized profit was given back before the final exit. The purpose is to evaluate the path of the trade, not only its final P&L.",
    },

    behavioral: {
      label: "Behavioral Review & Evidence",
      title: "The decision is reviewed in context",
      description:
        "The behavioral side adds the context that pure performance metrics cannot provide. Plan compliance, rule compliance, break-even decisions, exit quality, mistakes, written review notes and chart evidence make it possible to compare what I intended to do with what I actually did. That information later becomes part of the historical evidence used elsewhere in the journal.",
    },

    flow: {
      label: "Review data doesn't stop at the review",
      description:
        "Each reviewed decision adds structured evidence about execution, plan compliance, rule adherence, mistakes and my own observations. Over time, that history can reveal recurring patterns and give the Coach stronger context for deciding what deserves attention next.",

      tradeReview: "Trade Review",
      execution: "Execution",
      plan: "Plan",
      rules: "Rules",
      mistakes: "Mistakes",
      notes: "Notes",
      historicalEvidence: "Historical Evidence",
      coach: "Coach",
    },
  },

  analytics: {
    label: "Analytics",
    title: "Finding the behavior behind the result",
    description:
      "Traditional performance metrics explain what happened financially, but they do not explain why the result occurred. I wanted the analytics layer to connect performance with the quality of the decisions behind it, including execution, plan compliance, mistakes, rule adherence and trade management.",

    primaryScreenshotTitle: "Analytics Deep Dive",

    accountAnalysis: {
      title: "What happened financially across my accounts?",
      description:
        "Account-level analytics preserve every individual execution. This is important because copied trading can create several fills from one underlying decision, and every account still has its own P&L, trading costs, fills and account-level outcome. These views answer the financial question without removing the detail created by multi-account trading.",
    },

    decisionAnalysis: {
      title: "What happened across the decisions I actually made?",
      description:
        "Behavioral analysis uses Trading Decisions rather than blindly counting every copied execution. A mistake made once should not become four mistakes simply because the trade was copied to four accounts. Grouping those executions allows grades, mistakes, plan compliance and review statistics to represent the actual decisions I made.",
    },

    secondaryLabel: "Broader Analytics Overview",
    secondaryDescription:
      "The analytics module combines traditional metrics such as P&L, Profit Factor, Expectancy, Win Rate and Equity Curve with deeper views of strategy, execution grade, mistakes, plan compliance, rule violations, exits, break-even management, MFE, MAE, ETD, time and account performance. The goal is to move from simply asking whether I made or lost money to understanding which behaviors, decisions and execution patterns were associated with those results.",

    secondaryScreenshotTitle: "Analytics Overview",
  },

  sessionReview: {
    label: "Session Review",
    title: "Moving from individual trades to the bigger picture",
    description:
      "Individual Trade Reviews explain separate decisions, but they do not always show what defined the session as a whole. The Session Review brings those decisions together so I can evaluate recurring strengths, repeated mistakes, plan compliance, market context and the overall quality of the session. It also creates a higher-level reflection that can later be reused by the Coach.",

    overview: {
      label: "Session Evidence",
      title: "Reviewed decisions become a session-level picture",
      description:
        "The session view aggregates the reviewed Trading Decisions and summarizes evidence such as grade distribution, plan compliance and market context. A suggested session draft can use that structured review data as a starting point, reducing the need to reconstruct the entire session manually while still keeping the final assessment under my control.",
    },

    reflection: {
      label: "Final Reflection",
      title: "The final interpretation remains mine",
      description:
        "The suggested draft is only a starting point. I add my own overall reflection, session grade, repeated mistakes, what went well and the focus I want to carry into the next session. This preserves both structured evidence and the personal observations that often explain why a session mattered.",
    },

    flow: {
      label: "From decisions to reusable session evidence",
      description:
        "Session Reviews are one of the Coach's most important evidence sources because they condense many reviewed decisions into a clearer statement of what happened, what repeated and what deserves attention next. That makes the session-level reflection more useful than a collection of isolated notes.",
    },
  },

  coach: {
    label: "Behavioral Coach",
    title: "Turning past observations into future focus",
    description:
      "The Coach is designed as a memory and behavioral analysis layer rather than a replacement for my own judgment. Its purpose is to reuse information that already exists in Trade Reviews, Session Reviews and my written observations, then surface the parts that continue to matter. Instead of treating every session as a fresh start, it gives the journal continuity across time.",

    screenshotTitle: "Behavioral Coach Overview",

    highlight:
      "The journal remembers what I observed, so I can keep learning from it.",

    technicalNote: {
      label: "Rule- and data-driven",
      description:
        "The Coach is intentionally rule- and data-driven rather than presented as advanced AI or machine learning. Its value comes from structured review history, evidence prioritization, recurring-pattern detection, recency and the ability to bring my own earlier observations back into the current workflow. The conclusions are therefore grounded in information I have already reviewed and written, rather than generic generated advice.",
    },

    flow: {
      label: "From review history to future focus",
      description:
        "Trade Reviews provide decision-level evidence, while Session Reviews add higher-level reflection and context. Those sources preserve my own observations together with structured information about execution, mistakes, plan compliance and repeated behavior. Over time, the Coach can use that history to surface recurring patterns and prioritize the themes that deserve attention now.",
    },
  },

  preparation: {
    label: "Preparation",
    title: "Supporting the process before the trade",
    description:
      "The journal is not only designed to analyze completed trades. It also structures the preparation that happens before the session begins and before an entry is taken. By documenting the expected setup and the market thesis in advance, the later review can compare what I believed and intended before the trade with what actually happened.",

    entryPlaybook: {
      label: "Entry Playbook",
      title: "Define the setup before judging the result",
      description:
        "The Entry Playbook is a structured visual library of the entry models I want to trade. Each model can document the expected market context, entry criteria, direction, bias, grade, category, checklist, common execution errors and chart examples. The purpose is to make the conditions for a valid entry explicit before execution instead of reconstructing the logic afterwards from the outcome.",

     features: [
  {
    title: "Entry criteria",
    description:
      "Defines the conditions that should be present before the trade is considered valid.",
  },
  {
    title: "Grade & direction",
    description:
      "Classifies setup quality and whether the model applies long, short or in both directions.",
  },
  {
    title: "Structured checklist",
    description:
      "Turns the setup into repeatable pre-trade checks that can be reviewed before execution.",
  },
  {
    title: "Common execution errors",
    description:
      "Highlights known mistakes that can weaken an otherwise valid setup or execution.",
  },
],

      primaryScreenshotTitle: "Entry Playbook Overview",

      secondaryLabel: "Structured Entry Criteria",
      secondaryDescription:
        "Checklists and common execution errors make the playbook practical rather than purely descriptive. They provide a repeatable reference for what should be present before entry and which mistakes are known to weaken the setup or execution.",

      secondaryScreenshotTitle: "Entry Playbook Checklist",
    },

    marketBias: {
      label: "Market Bias",
      title: "Documenting the thesis before the session starts",
      description:
        "Market Bias is designed to preserve the context that existed before the trading outcome was known. The workflow separates the broader weekly framework from the daily starting thesis so the journal can later compare the original expectation with the actual market behavior and the decisions taken during the session.",

      primaryScreenshotTitle: "Market Bias Overview",

      weekly: {
        label: "Weekly Bias",
        title: "The broader framework",
        description:
          "Weekly Bias is normally created at the beginning of the week and establishes the larger directional and contextual framework. It can incorporate information such as COT data, the Daily chart, Volume Profile, higher-level structure and five-minute context. This becomes the reference point for the sessions that follow.",
      },

      daily: {
        label: "Today's Bias",
        title: "The starting thesis for the trading day",
        description:
          "Before each individual trading session, I create a new Today's Bias using the Weekly Bias together with the latest market information. This records the direction, confidence, observations and invalidation conditions that define my starting thesis before the first trade is taken.",
      },

      secondaryLabel: "Before outcome is known",
      secondaryDescription:
        "Saving the daily thesis before trading begins creates a useful comparison point later. The review can distinguish between a poor market read, a reasonable thesis that failed, and an execution problem that occurred even though the original analysis was sound.",

      secondaryScreenshotTitle: "Today's Bias",
    },

    flow: {
      label: "Preparation becomes part of the review loop",
      description:
        "Preparation is connected to the same learning process as execution and review. Market Bias documents the expected environment, the Entry Playbook defines what a valid setup should look like, and the resulting Trading Decision can later be reviewed against those expectations. Session Reviews and the Coach can then reuse that history instead of treating preparation as disconnected notes.",
    },
  },

  technicalChallenges: {
    label: "Engineering Challenges",
    title: "Solving problems beyond the user interface",
    description:
      "Some of the most important work in the project happens behind the visible screens. As the journal has grown, the difficult parts have increasingly been about data integrity, system behavior, ambiguity, persistence and maintainability rather than simply adding another component. These challenges are especially important because a change in one layer can affect analytics, reviews and Coach behavior somewhere else in the application.",

    challenges: [
      {
        number: "01",
        label: "Multi-account trade grouping",
        title: "One decision, multiple executions",
        description:
          "Copy trading means that one trading decision can create several separate account executions. The system must preserve every individual fill for financial accuracy while avoiding the same decision being counted repeatedly in behavioral statistics.",
        details: [
          "Account-level P&L and fills must remain intact.",
          "Grades, mistakes and reviews should represent the underlying decision once.",
          "Grouping logic must not destroy the original imported trade data.",
        ],
        highlight:
          "The same imported data needs to support both account analysis and decision analysis without mixing their purposes.",
      },

      {
        number: "02",
        label: "Copied trade matching",
        title: "Automation with manual exception handling",
        description:
          "Executions that belong to the same copied trade are not always identical. Small differences in entry time, entry price or exit price can occur because of fills, latency or stop behavior. That makes simple exact matching insufficient.",
        details: [
          "Reliable matches can be grouped automatically.",
          "Ambiguous cases are surfaced for manual confirmation.",
          "A manual decision can confirm the same decision or keep trades separate.",
        ],
        highlight:
          "The solution uses automation where confidence is high and human verification where the data is genuinely ambiguous.",
      },

      {
        number: "03",
        label: "CSV normalization",
        title: "Different sources, one internal trade model",
        description:
          "Trading exports do not necessarily use the same headers, formats or conventions. Import logic therefore needs to identify the source and translate source-specific data into a consistent internal representation before the rest of the application can use it safely.",
        details: [
          "Source detection stays inside the import layer.",
          "Format-specific adapters handle external differences.",
          "Normalized trades feed the same downstream analytics and review workflows.",
        ],
        highlight:
          "Keeping source-specific logic at the boundary reduces the amount of importer knowledge required elsewhere in the application.",
      },

      {
        number: "04",
        label: "Persistence evolution",
        title: "From simpler storage to SQLite and repositories",
        description:
          "The persistence requirements changed as the journal became larger and more interconnected. Features that were manageable with simpler local storage eventually needed a clearer separation between application logic and the way data is physically stored.",
        details: [
          "Repositories isolate features from persistence details.",
          "Storage providers make the data layer easier to evolve.",
          "SQLite supports a more structured local-first persistence model.",
          "Backup and restore remain part of the data strategy.",
        ],
        highlight:
          "The goal was not to introduce architecture for its own sake, but to stop storage concerns from leaking into every feature.",
      },

      {
        number: "05",
        label: "Reusable review history",
        title: "Stored notes are not useful if they disappear into history",
        description:
          "Trade Reviews and Session Reviews contain more than simple notes. They combine structured fields with mistakes, execution quality, plan compliance, session conclusions and personal observations. The challenge is preserving enough context for that history to remain useful later.",
        details: [
          "Decision-level reviews create structured historical evidence.",
          "Session Reviews add higher-level context and reflection.",
          "Coach logic can reuse earlier observations when they remain relevant.",
        ],
        highlight:
          "The journal is designed so that an important observation can influence future review instead of becoming archived text that is never seen again.",
      },

      {
        number: "06",
        label: "Refactoring for maintainability",
        title: "Reducing responsibilities as complexity grows",
        description:
          "As features evolved, some larger modules accumulated UI rendering, state management, calculations, data transformation and feature-specific logic in the same files. That made changes harder to reason about and increased the risk of unintended side effects.",
        details: [
          "Large components are progressively split into focused components.",
          "Reusable calculations and transformations move into services and utilities.",
          "Feature behavior is kept working while responsibilities are extracted incrementally.",
          "Builds and manual verification are used between smaller refactoring steps.",
        ],
        highlight:
          "The refactoring approach favors small verified changes over large rewrites that would be harder to validate against existing behavior.",
      },
    ],

    closing: {
      title: "A change in one part of the system can affect several others.",
      description:
        "Import changes can affect analytics. Trade grouping can affect reviews, statistics and Coach evidence. Persistence changes can affect every feature that reads or writes data. Tracing those dependencies, reproducing problems with real data and checking for regressions has therefore become a major part of the development process.",
    },
  },

  architecture: {
    label: "Architecture",
    title: "A local-first desktop application with separated responsibilities",
    description:
      "The architecture has evolved incrementally around practical separation of responsibilities rather than around a formal architecture pattern. React handles the user interface, Tauri provides the desktop runtime and SQLite supports local persistence. Import logic, repositories, storage providers, analytics utilities, feature modules and Coach logic are separated so each part of the system can evolve without requiring every feature to know how every other layer works.",

    responsibilities: [
      {
        label: "Import",
        description:
          "Source detection, format-specific adapters and normalization keep external data differences at the system boundary.",
      },
      {
        label: "Storage",
        description:
          "Repositories and storage providers separate feature logic from the underlying persistence implementation.",
      },
      {
        label: "Analytics",
        description:
          "Selectors, utilities and analytics logic transform stored data into decision-level and account-level metrics.",
      },
      {
        label: "Features",
        description:
          "User-facing modules combine data, workflows and interaction without owning the entire persistence or import process.",
      },
      {
        label: "Coach",
        description:
          "Behavioral logic consumes reviewed evidence, patterns and session context to produce prioritized future focus.",
      },
    ],

    closing: {
      title:
        "The architecture exists to support change, not to make the project look more complex.",
      description:
        "As the journal grew, clearer boundaries became useful because imports, storage, analytics, reviews and Coach behavior increasingly depended on one another. The current structure is intended to make those dependencies easier to understand, debug and evolve while keeping the application local-first and practical for a single-user desktop workflow.",
    },
  },

  myRole: {
    label: "My Role",
    title: "Product owner, problem solver and AI-assisted developer",
    description:
      "This is my own long-term project. I created the original idea, define the product direction and decide how the workflows, data model, reviews, analytics and Coach should behave. I use ChatGPT as the coding implementation layer, while I remain responsible for defining the problem, specifying the expected behavior, testing the result, identifying incorrect behavior and deciding how the system should evolve.",

    coreStatement:
      "I own the product, requirements and decisions. ChatGPT is the coding implementation layer.",

    ownership: {
      label: "Product & project ownership",
      title: "I define what the system should do",
      description:
        "My responsibility is centered on product direction, requirements, workflow design, system behavior and validation. The project has grown from a personal trading need into a connected application with imports, reviews, analytics, preparation tools, persistence and behavioral analysis.",
      items: [
        "Original idea and product direction",
        "Requirements and expected behavior",
        "Workflow and feature interactions",
        "Data requirements and review structure",
        "Analytics and Coach behavior",
        "UX decisions and prioritization",
        "Testing with real trading data",
        "Bug reproduction and regression checking",
        "Refactoring priorities and long-term evolution",
      ],
    },

    ai: {
      label: "AI-assisted implementation",
      title: "All application code has been written with ChatGPT",
      description:
        "I do not present the project as evidence that I manually wrote the application code from scratch. ChatGPT has written the code, while I direct the implementation through requirements, expected behavior, testing, debugging and iteration. The practical challenge is making sure the generated implementation actually matches the system I intend to build.",
      items: [
        "Describe the problem and desired behavior",
        "Define edge cases and constraints",
        "Evaluate implementation approaches",
        "Apply and test generated changes",
        "Identify when behavior is incorrect",
        "Trace problems across connected features",
        "Refine requirements when assumptions are wrong",
        "Direct incremental refactoring when complexity grows",
      ],
    },

    workflow: {
      label: "Development Workflow",
      description:
        "The development process is iterative rather than a one-time prompt-and-accept workflow. A feature often begins with a real problem in my own trading process, then moves through requirement definition, implementation, testing, unexpected edge cases, debugging and refinement. As the application has become more interconnected, understanding how a change affects imports, storage, reviews, analytics and Coach behavior has become increasingly important.",
    },

    closing:
      "For me, the most important part of the project is not authorship of individual lines of code. It is that I have taken a real problem, defined the system needed to solve it and continuously developed that system into a working application with interconnected workflows, real data and increasingly complex requirements.",
  },

  currentStatus: {
    label: "Current Status",
    title: "Actively developed and used with real data",
    description:
      "The Trading Journal is not a finished demonstration project created only for a portfolio. It is an application I actively use with real trading data, and its development continues as new requirements, edge cases and workflow problems appear through actual use. That ongoing usage is also what has driven much of the complexity described throughout this case study.",

    statusItems: [
      {
        label: "Status",
        value: "Active development",
      },
      {
        label: "Platform",
        value: "Desktop",
      },
      {
        label: "Data model",
        value: "Local-first",
      },
      {
        label: "Source",
        value: "Private repository",
      },
    ],

    realUse: {
      label: "Real-world use",
      title: "The application evolves from actual workflow problems",
      description:
        "Features are regularly tested against my own imported trading data and real review workflows. That exposes cases that are difficult to anticipate in an isolated demo, including mismatched copied trades, account differences, incomplete review data, storage requirements and interactions between analytics and behavioral logic. Problems discovered through use often become the next development requirement.",
    },

    evolution: {
      label: "Ongoing development",
      title:
        "The system continues to change as the requirements become clearer",
      description:
        "The journal has evolved from simpler trade tracking into a more connected system covering import, normalization, multi-account handling, structured review, analytics, preparation, session reflection and behavioral analysis. Current development increasingly focuses not only on adding functionality, but also on improving workflows, reducing unnecessary complexity and refactoring areas that have grown beyond their original responsibilities.",
    },

    closing:
      "The project is intentionally shown as an evolving working system rather than as a finished product with every problem already solved.",
  },

  sourceCode: {
    label: "Source Code",
    title: "The application repository remains private",
    description:
      "The production source code for MrBrunotte's Trading Journal is not published as part of this portfolio. The application contains custom trading workflows, data handling, review models, behavioral logic and implementation details that I prefer to keep in a private repository. The purpose of this public case study is therefore to demonstrate the product, system thinking, technical challenges and development process without making the complete application cloneable.",

    privateRepository: {
      label: "Private application repository",
      title: "Production code is not publicly available",
      description:
        "The private repository contains the React/Tauri application, persistence layer, importers, analytics logic, review workflows, Coach logic and the other implementation details used by the working desktop application. Keeping that repository private allows me to present the project without publishing the complete product implementation.",
    },

    publicCaseStudy: {
      label: "Public case study",
      title: "Functionality and engineering decisions remain visible",
      description:
        "This separate public project documents what the application does, how the major workflows connect, which technical problems have been solved, how the architecture has evolved and what my role has been throughout the development process. Screenshots and high-level diagrams provide evidence of the working system without exposing its production source code.",
    },

    closing:
      "I can discuss the architecture, workflows, development process, technical challenges and individual implementation decisions in more detail during an interview.",
  },

  footer: {
    description:
      "A public case study of a private, actively developed desktop trading journal.",
    project: "MrBrunotte's Trading Journal",
    status: "React · Tauri · SQLite · Active Development",
  },
};

export default en;
