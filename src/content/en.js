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
      "A local-first desktop trading journal built to turn imported executions into structured review data, decision-level analytics and reusable behavioral history. It connects trade imports, account-level executions, Trading Decisions, reviews, session reflections and Coach evidence into one continuous workflow.",

    supportingLine:
      "The goal is not only to record what happened, but to preserve why it happened, what I learned from it and which patterns should influence future trading decisions.",
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
        description:
          "Traditional journals are good at preserving results and performance data, but they often lose the reasoning, context and lessons behind those results.",
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
        description:
          "I wanted the journal to preserve the decision behind the result, how well it was executed, what I observed and what should influence future sessions.",
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
      title: "Different external formats become one internal trade model",
      description:
        "Trading exports can use different headers, field names and formatting. The import pipeline keeps those source-specific differences at the boundary of the application so downstream features can work with one consistent representation of a trade.",

      stepLabel: "Step",

      sources: [
        {
          label: "External Source",
          name: "DeepCharts",
          description:
            "CSV exports from DeepCharts enter through a source-specific importer.",
        },
        {
          label: "External Source",
          name: "Rithmic",
          description:
            "Rithmic exports use their own format and are handled by a separate adapter.",
        },
      ],

      steps: [
        {
          title: "Source Detection",
          description:
            "The journal identifies which external format the imported CSV belongs to.",
        },
        {
          title: "Adapter",
          description:
            "A source-specific adapter reads the fields and conventions used by that export.",
        },
        {
          title: "Normalization",
          description:
            "Values, field names and formats are converted into one consistent structure.",
        },
        {
          title: "Common Trade Model",
          description:
            "The normalized result becomes the shared trade representation used by storage, reviews and analytics.",
        },
      ],

      closing:
        "Source-specific logic stays inside the import layer, so the rest of the application can work with one consistent internal trade model regardless of the original data source.",
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

      summaryDescription:
        "The journal preserves every account execution for financial accuracy, while also grouping related executions into a single Trading Decision when they represent the same underlying action. This allows account performance and behavioral analysis to use the same imported data without counting copied trades incorrectly.",
    },

    copiedTradeMatching: {
      label: "Copied Trade Matching",

      title: "How copied executions are grouped into Trading Decisions",

      description:
        "When the same trade is copied across several accounts, fills can differ slightly in timestamp, entry or exit. The journal first tries to match executions automatically. If the match is uncertain, it can be confirmed manually.",

      accountTrades: {
        label: "Account Trades",
        title: "Every execution remains stored",
        executionLabel: "execution",
      },

      automatic: {
        label: "Automatic Match",
        title: "Clear matches are grouped automatically",
        description:
          "Executions with sufficiently similar time, entry and exit data can be linked without manual review.",
      },

      manual: {
        label: "Manual Confirmation",
        title: "Uncertain matches are reviewed manually",
        description:
          "If a match is not reliable enough for automatic grouping, it is surfaced so I can confirm whether the executions belong together.",
      },

      results: {
        label: "Matching Result",
        title: "The executions are either grouped or kept separate",

        single: {
          label: "Grouped Result",
          title: "One Trading Decision",
          description:
            "The executions belong to the same underlying trading decision and are grouped together for review and behavioral analysis.",
        },

        multiple: {
          label: "Separate Result",
          title: "Multiple Trading Decisions",
          description:
            "The executions represent separate trading decisions and remain separate for review and behavioral analysis.",
        },
      },

      preserved: {
        label: "Original Account Trades Remain Stored",
        description:
          "Grouping never removes or modifies the imported executions. Every account trade remains stored and continues to be used for account-level P&L, fills and statistics.",
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
      sectionLabel: "Review Flow",
      label: "Review data doesn't stop at the review",

      description:
        "Each reviewed decision adds structured evidence about execution, plan compliance, rule adherence, mistakes and my own observations. As more decisions are reviewed, the journal builds a history of how I actually trade. Repeated mistakes, recurring strengths and patterns in my own notes become easier to identify, giving the Coach stronger evidence for deciding what deserves attention next.",

      tradeReviewLabel: "Reviewed Decision",
      tradeReview: "Trade Review",

      structuredReviewData: "Structured Review Data",
      structuredReviewDescription:
        "Each review turns the trade into structured information that can be compared with later decisions.",

      execution: "Execution",
      plan: "Plan",
      rules: "Rules",
      mistakes: "Mistakes",
      notes: "Notes",

      reviewedHistoryLabel: "Reviewed History",
      reviewedHistory: "Decisions accumulate over time",
      reviewedHistoryDescription:
        "Individual reviews become a growing history of reviewed trading decisions.",

      historicalEvidenceLabel: "Historical Evidence",
      historicalEvidence: "Patterns become visible",
      historicalEvidenceDescription:
        "Repeated mistakes, strengths, execution behavior and observations can be identified across the history.",

      coachLabel: "Coach",
      coach: "What deserves attention now?",
      coachDescription:
        "The Coach uses the accumulated evidence to surface relevant patterns, focus areas and previous observations.",
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

    metrics: {
      groups: [
        {
          label: "Performance",
          title: "What was the financial outcome?",
          description:
            "Measures profitability, consistency and how results develop over time.",
          items: [
            "P&L",
            "Profit Factor",
            "Expectancy",
            "Win Rate",
            "Equity Curve",
          ],
        },
        {
          label: "Execution",
          title: "How well were trades executed?",
          description:
            "Evaluates trade quality, excursion and how effectively positions were managed.",
          items: ["Grade", "MFE / MAE / ETD", "Exit", "Break-even"],
        },
        {
          label: "Behavior",
          title: "What behaviors affected the result?",
          description:
            "Connects outcomes to recurring mistakes, plan compliance and rule adherence.",
          items: ["Mistakes", "Plan", "Rules", "Rule Violation Cost"],
        },
        {
          label: "Context",
          title: "Where and when did performance occur?",
          description:
            "Breaks results down by trading context to reveal where performance changes.",
          items: ["Strategy", "Time", "Day", "Account"],
        },
      ],
    },

    perspectives: {
      label: "Two analytical perspectives",
      title: "The same trading history, analyzed at two different levels",
      description:
        "Account Analytics preserves every execution for financial and account-level statistics, while Decision Analytics groups copied executions so behavioral analysis reflects the actual trading decisions that were made.",

      accountLabel: "Account Analytics",
      decisionLabel: "Decision Analytics",

      accountTags: ["P&L", "Fills", "Trading Costs", "Account Performance"],

      decisionTags: [
        "Grades",
        "Mistakes",
        "Plan",
        "Rules",
        "Review Statistics",
      ],
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
        "Session Reviews are one of the Coach's most important evidence sources because they condense many reviewed decisions into a clearer picture of what happened, what repeated and what deserves attention next. The flow combines structured review data with my own final interpretation before the result becomes reusable session-level evidence.",

      reviewedDecisions: {
        label: "Reviewed Decisions",
        title:
          "The session starts with the decisions that were actually reviewed",
        description:
          "Individual Trading Decisions contribute structured evidence about execution quality, plan compliance, mistakes and market context.",
      },

      suggestedDraft: {
        label: "Suggested Session Draft",
        title: "Reviewed decisions create a structured starting point",
        description:
          "The journal can summarize the reviewed decisions into a suggested draft so I do not have to reconstruct the entire session manually.",
      },

      reflection: {
        label: "My Reflection",
        title: "I add the context the structured data cannot know",
        description:
          "I add my own session grade, what went well, repeated mistakes and the focus I want to carry into the next session.",
      },

      sessionEvidence: {
        label: "Session Review Evidence",
        title: "The session becomes a reusable piece of history",
        description:
          "Structured decision data and my final reflection are combined into a higher-level interpretation of the session that can remain useful later.",
      },

      coach: {
        label: "Coach",
        title: "Relevant session evidence can influence future focus",
        description:
          "The Coach can reuse the completed Session Review when deciding which patterns, observations and focus areas deserve attention in future sessions.",
      },
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

    evidence: {
      groups: [
        {
          label: "Evidence",
          title: "What the Coach learns from",
          description:
            "Reviewed information provides the factual basis for the behavioral analysis.",
          items: [
            "Reviewed Decisions",
            "Session Reflections",
            "Mistakes",
            "Execution Quality",
            "Review Notes",
          ],
        },
        {
          label: "Patterns",
          title: "What becomes visible over time",
          description:
            "Repeated evidence can reveal behaviors that are difficult to see from individual trades alone.",
          items: [
            "Recurring Behaviors",
            "Repeated Mistakes",
            "Strengths",
            "Recent Themes",
            "Behavioral Consistency",
          ],
        },
        {
          label: "Focus",
          title: "What returns to the current workflow",
          description:
            "Relevant patterns are turned into practical focus areas that can influence future sessions.",
          items: [
            "Today's Focus",
            "Improvement Focus",
            "Execution Cues",
            "Training Priorities",
            "Progress Over Time",
          ],
        },
      ],
    },

    technicalNote: {
      label: "Rule- and data-driven",
      description:
        "The Coach is intentionally rule- and data-driven rather than presented as advanced AI or machine learning. Its value comes from structured review history, evidence prioritization, recurring-pattern detection, recency and the ability to bring my own earlier observations back into the current workflow. The conclusions are therefore grounded in information I have already reviewed and written, rather than generic generated advice.",
    },

    flow: {
      label: "From review history to future focus",
      description:
        "Trade Reviews provide decision-level evidence, while Session Reviews add higher-level reflection and context. Those sources preserve my own observations together with structured information about execution, mistakes, plan compliance and repeated behavior. Over time, the Coach can use that history to surface recurring patterns and prioritize the themes that deserve attention now.",

      steps: [
        {
          label: "Review Source",
          title: "Trade Reviews",
        },
        {
          label: "Review Source",
          title: "Session Reviews",
        },
        {
          label: "Personal Context",
          title: "My Observations",
        },
        {
          label: "Accumulated History",
          title: "Accumulated Evidence",
        },
        {
          label: "Pattern Detection",
          title: "Recurring Patterns",
        },
        {
          label: "Current Output",
          title: "Prioritized Focus",
        },
      ],
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
      label: "Preparation becomes part of the learning loop",
      description:
        "Preparation is connected to the same learning process as execution and review. Market Bias documents the expected environment, the Entry Playbook defines what a valid setup should look like, and the resulting Trading Decision can later be reviewed against those expectations. Session Reviews and the Coach can then reuse that history instead of treating preparation as disconnected notes.",

      steps: [
        {
          stage: "Preparation",
          title: "Market Bias",
        },
        {
          stage: "Preparation",
          title: "Entry Playbook",
        },
        {
          stage: "Execution",
          title: "Trading Decision",
        },
        {
          stage: "Review",
          title: "Trade Review",
        },
        {
          stage: "Review",
          title: "Session Review",
        },
        {
          stage: "Learning",
          title: "Coach",
        },
      ],
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
          "The journal supports copy trading across several accounts, which means one trading decision can produce multiple separate executions. The challenge is to preserve every account-level fill for financial accuracy while also recognizing that those executions may represent only one underlying decision for behavioral review and statistics.",
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
          "Once several account executions may represent the same underlying trade, the journal needs a reliable way to decide which ones belong together. Exact matching is not always sufficient because copied executions can differ slightly in time, entry price or exit price. The matching process therefore combines automatic grouping with manual confirmation when the data is ambiguous.",
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
          "The journal imports trading data from more than one external source, and those exports do not use identical headers, formats or conventions. Instead of forcing the rest of the application to understand every source-specific difference, the import layer identifies the source and converts the incoming data into one consistent internal trade model before it reaches analytics, reviews or other features.",
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
          "As the journal grew from simpler trade tracking into a larger connected application, more features began depending on persistent data. Storage therefore became an architectural concern rather than just a place to save values. The data layer was gradually separated from feature logic so the application could move toward SQLite without every screen needing to know how the underlying storage works.",
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
          "Trade Reviews and Session Reviews capture information that can still be valuable long after the original trade has finished. The challenge is therefore not only saving those reviews, but preserving enough structure and context for earlier mistakes, observations and conclusions to become useful historical evidence that other parts of the journal can reuse later.",
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
          "Several features started as relatively small modules but became more complex as new workflows, calculations and data dependencies were added. Some files eventually contained UI rendering, state management, calculations and transformation logic at the same time. Refactoring has therefore become part of the development process so the application can keep evolving without every change becoming harder to understand or riskier to test.",
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

    layers: [
      {
        number: "01",
        title: "Trading Data",
        description:
          "Raw executions enter the system from external trading platforms and CSV exports. This layer represents the original trading data before source-specific differences have been normalized.",
      },
      {
        number: "02",
        title: "Import & Normalization",
        description:
          "Source detection and format-specific adapters convert different external exports into one consistent internal trade model that the rest of the application can safely use.",
      },
      {
        number: "03",
        title: "Repositories & Local Storage",
        description:
          "Repositories and storage providers separate application features from the persistence layer, while SQLite stores the journal data locally on the desktop.",
      },
      {
        number: "04",
        title: "Account Trades + Trading Decisions",
        description:
          "The same imported data is represented at two analytical levels: individual Account Trades for financial accuracy and grouped Trading Decisions for behavioral analysis.",
      },
      {
        number: "05",
        title: "Features & Analytics",
        description:
          "Dashboard views, trade lists, analytics, playbooks and preparation workflows consume the shared data model without needing to know how imports or persistence are implemented.",
      },
      {
        number: "06",
        title: "Trade Reviews",
        description:
          "Each Trading Decision can be reviewed with execution quality, plan compliance, mistakes, notes and chart evidence, creating structured decision-level history.",
      },
      {
        number: "07",
        title: "Session Reviews",
        description:
          "Reviewed decisions are combined into a broader session-level reflection that captures recurring strengths, repeated mistakes, context and next-session focus.",
      },
      {
        number: "08",
        title: "Accumulated Evidence",
        description:
          "Reviewed decisions, session reflections and observations build a reusable history from which recurring behaviors, strengths and weaknesses can become visible over time.",
      },
      {
        number: "09",
        title: "Trading Coach",
        description:
          "The Coach uses reviewed history and recurring patterns to prioritize which observations, behaviors and improvement areas deserve attention in the current workflow.",
      },
    ],

    responsibilities: [
      {
        label: "Import",
        description:
          "Owns source detection, format-specific adapters and normalization so external data differences stay at the system boundary.",
      },
      {
        label: "Storage",
        description:
          "Owns repositories, storage providers and local persistence so features do not need to know how data is physically stored.",
      },
      {
        label: "Analytics",
        description:
          "Transforms stored Account Trades and Trading Decisions into financial, execution and behavioral metrics.",
      },
      {
        label: "Features",
        description:
          "Builds the user-facing workflows around shared data without taking ownership of import or persistence concerns.",
      },
      {
        label: "Coach",
        description:
          "Consumes reviewed evidence, recurring patterns and session context to produce prioritized future focus.",
      },
    ],

    closing: {
      title: "The structure makes the application easier to change and debug",
      description:
        "As the Trading Journal grew, more parts of the system began to affect one another. A change in import logic could influence analytics, reviews or Coach behavior, while storage changes could have consequences across several features. The application has therefore been separated incrementally into clearer responsibilities for import, storage, analytics, features and Coach logic. This makes it easier to understand where a problem originates, trace how data moves through the system and change one area without having to rework everything around it.",
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
      "What matters most to me is not who typed each line of code. I identified the problem, defined what the system needed to do, made the product and workflow decisions, tested the result against real use and kept refining it when the implementation did not match the intended behavior. The application reflects my decisions, priorities and understanding of the problem, with ChatGPT used as the coding implementation layer.",
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
        description:
          "Continuously refined through real use and new workflow requirements.",
      },
      {
        label: "Platform",
        value: "Desktop",
        description: "A local desktop application built with React and Tauri.",
      },
      {
        label: "Data model",
        value: "Local-first",
        description:
          "Trading data and application state are stored locally on the machine.",
      },
      {
        label: "Source",
        value: "Private repository",
        description:
          "Production source code is intentionally kept private while the case study remains public.",
      },
    ],

    realUse: {
      label: "Real-world use",
      title: "The application evolves from actual workflow problems",
      description:
        "Features are regularly tested against my own imported trading data and real review workflows. That exposes cases that are difficult to anticipate in an isolated demo, including mismatched copied trades, account differences, incomplete review data, storage requirements and interactions between analytics and behavioral logic. Problems discovered through use often become the next development requirement.",

      points: [
        "Validated against imported trading data",
        "Uses real review workflows rather than isolated demo cases",
        "Reveals edge cases through actual day-to-day use",
        "Problems discovered in use often become the next development requirement",
      ],
    },

    evolution: {
      label: "Ongoing development",
      title:
        "The system continues to change as the requirements become clearer",
      description:
        "The journal has evolved from simpler trade tracking into a more connected system covering import, normalization, multi-account handling, structured review, analytics, preparation, session reflection and behavioral analysis. Current development increasingly focuses not only on adding functionality, but also on improving workflows, reducing unnecessary complexity and refactoring areas that have grown beyond their original responsibilities.",

      points: [
        "The scope has expanded as connected workflows became clearer",
        "Development now includes both new functionality and refinement",
        "Complexity is reduced through iteration and refactoring",
        "The system continues to evolve as requirements become more precise",
      ],
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
      "I can discuss the architecture, data flow, key workflows, technical challenges and the implementation decisions that were tested and refined during development.",
  },

  footer: {
    description:
      "A public case study of a private, actively developed desktop trading journal.",
    owner: "Stefan Brunotte",
    project: "Owner of MrBrunotte's Trading Journal",
    status: "React · Tauri · SQLite · Active Development",
  },
};

export default en;
