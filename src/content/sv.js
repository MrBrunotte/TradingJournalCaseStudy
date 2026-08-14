const sv = {
  navigation: {
    overview: "Översikt",
    dataModel: "Datamodell",
    review: "Review",
    coach: "Coach",
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
      "Tradingdata kan komma från olika CSV-format och från flera kopierade konton, vilket innebär att samma underliggande beslut kan visas som flera individuella executions. Journalen identifierar först datakällan, normaliserar den importerade informationen till en gemensam trade-modell och bevarar varje ursprunglig Account Trade. Därefter skiljer den account-level executions från Trading Decisions så att finansiell analys kan använda varje fill medan beteendeanalysen bara räknar det underliggande beslutet en gång. Den skillnaden förhindrar att kopierade trades blåser upp grades, misstag, reviews och annan beteendestatistik.",

    importPipeline: {
      label: "Importflöde",

      sources: [
        {
          name: "DeepCharts",
          type: "CSV-källa",
        },
        {
          name: "Rithmic",
          type: "CSV-källa",
        },
      ],

      steps: [
        "Identifiering av källa",
        "Adapter",
        "Normalisering",
        "Gemensam trade-modell",
      ],

      stepLabel: "Steg",

      description:
        "Källspecifika skillnader hanteras i importlagret så att resten av applikationen kan arbeta med en konsekvent intern trade-modell.",
    },

    decisionGrouping: {
      accountLabel: "Account Trades",
      accountTitle: "Varje execution bevaras",
      accountExecution: "execution",

      decisionLabel: "Trading Decision",
      decisionTitle: "Ett underliggande beslut",
      decisionDescription:
        "Flera kopierade executions kan representera ett och samma tradingbeslut i den beteendemässiga reviewn.",

      financialLabel: "Finansiell / Account Analysis",
      financialTitle: "Hur presterade mina konton?",
      financialDescription:
        "Använder varje underliggande account execution för P&L, fills och statistik på kontonivå.",

      behavioralLabel: "Beteendeanalys",
      behavioralTitle: "Hur tradade jag?",
      behavioralDescription:
        "Använder Trading Decision en gång så att grades, misstag, reviews och beteendestatistik inte multipliceras över kopierade konton.",

      summary:
        "Samma underliggande tradingdata, analyserad på två olika nivåer.",
    },

    copiedTradeMatching: {
      label: "Matchning av kopierade trades",
      title: "Automatiskt när matchningen är säker, manuellt när den är osäker",
      description:
        "Kopierade executions kan skilja sig något i tid, entry eller exit på grund av fills. Tydliga matches kan grupperas automatiskt medan osäkra fall kan granskas manuellt.",

      likelyMatch: {
        label: "Trolig matchning",
        description:
          "Tradens egenskaper indikerar att executions tillhör samma underliggande beslut.",
      },

      manualReview: {
        label: "Manuell granskning",
        description:
          "Osäkra fall visas för manuell kontroll så att de kan bekräftas som samma beslut eller behållas separat.",
      },

      originalData: {
        label: "Originaldata bevaras",
        description:
          "Grupperingsbeslutet sparas utan att den ursprungliga importerade tradingdatan förändras.",
      },
    },
  },

  tradeReview: {
    label: "Trade Review",
    title: "Granska beslutet, inte bara resultatet",
    description:
      "En lönsam trade är inte automatiskt en bra trade, och en förlusttrade är inte automatiskt en dålig. Trade Review är utformad för att skilja resultat från process så att jag kan bedöma om entry, execution, trade management och exit faktiskt var väl genomförda. Den bevarar också resonemanget och observationerna bakom beslutet så att de kan fortsätta vara användbara senare i stället för att försvinna bland gamla review-anteckningar.",

    quality: {
      label: "Quality & Excursion Analysis",
      title: "Execution och resultat bedöms separat",
      description:
        "Reviewn kombinerar total kvalitet, execution och outcome med entry- och exitinformation, Trade High och Trade Low samt excursion-mått som MFE, MAE och ETD. Dessa mått hjälper till att visa hur stor möjlighet som fanns under traden, hur mycket negativ rörelse som uppstod och hur mycket orealiserad vinst som gavs tillbaka före den slutliga exiten. Syftet är att bedöma tradens utveckling, inte bara dess slutliga P&L.",
    },

    behavioral: {
      label: "Behavioral Review & Evidence",
      title: "Beslutet granskas i sitt sammanhang",
      description:
        "Den beteendemässiga delen lägger till den kontext som rena resultatmått inte kan ge. Planföljsamhet, regeluppföljning, break-even-beslut, exitkvalitet, misstag, skrivna review-anteckningar och chart-evidence gör det möjligt att jämföra vad jag avsåg att göra med vad jag faktiskt gjorde. Den informationen blir senare en del av den historiska evidensen som används på andra ställen i journalen.",
    },

    flow: {
      label: "Review-datan stannar inte i den enskilda reviewn",
      description:
        "Varje granskat beslut tillför strukturerad information om execution, planföljsamhet, regeluppföljning, misstag och mina egna observationer. När historiken växer kan den visa återkommande mönster och ge Coach bättre kontext för att avgöra vad som behöver uppmärksammas framåt.",

      tradeReview: "Trade Review",
      execution: "Execution",
      plan: "Plan",
      rules: "Regler",
      mistakes: "Misstag",
      notes: "Anteckningar",
      historicalEvidence: "Historisk evidence",
      coach: "Coach",
    },
  },

  analytics: {
    label: "Analytics",
    title: "Hitta beteendet bakom resultatet",
    description:
      "Traditionella resultatmått förklarar vad som hände finansiellt, men de förklarar inte varför resultatet uppstod. Jag ville att analytics-lagret skulle koppla performance till kvaliteten i besluten bakom resultatet, inklusive execution, planföljsamhet, misstag, regeluppföljning och trade management.",

    primaryScreenshotTitle: "Analytics Deep Dive",

    accountAnalysis: {
      title: "Vad hände finansiellt över mina konton?",
      description:
        "Account-level analytics bevarar varje individuell execution. Det är viktigt eftersom copy trading kan skapa flera fills från ett och samma underliggande beslut, samtidigt som varje konto fortfarande har sin egen P&L, trading costs, fills och sitt eget kontoutfall. Dessa vyer besvarar den finansiella frågan utan att ta bort den detaljnivå som multi-account trading skapar.",
    },

    decisionAnalysis: {
      title: "Vad hände över de beslut jag faktiskt tog?",
      description:
        "Beteendeanalysen använder Trading Decisions i stället för att blint räkna varje kopierad execution. Ett misstag som gjorts en gång ska inte bli fyra misstag bara för att traden kopierades till fyra konton. Genom att gruppera dessa executions kan grades, misstag, planföljsamhet och review-statistik representera de faktiska beslut jag tog.",
    },

    secondaryLabel: "Bredare Analytics Overview",
    secondaryDescription:
      "Analytics-modulen kombinerar traditionella mått som P&L, Profit Factor, Expectancy, Win Rate och Equity Curve med djupare analys av strategi, execution grade, misstag, planföljsamhet, regelbrott, exits, break-even management, MFE, MAE, ETD, tid och kontoprestanda. Målet är att gå från att bara fråga om jag tjänade eller förlorade pengar till att förstå vilka beteenden, beslut och execution-mönster som var kopplade till resultaten.",

    secondaryScreenshotTitle: "Analytics Overview",
  },

  sessionReview: {
    label: "Session Review",
    title: "Från enskilda trades till helheten",
    description:
      "Enskilda Trade Reviews förklarar separata beslut, men de visar inte alltid vad som präglade sessionen som helhet. Session Review samlar besluten så att jag kan bedöma återkommande styrkor, upprepade misstag, planföljsamhet, marknadskontext och sessionens övergripande kvalitet. Den skapar också en mer sammanfattad reflektion som senare kan återanvändas av Coach.",

    overview: {
      label: "Session Evidence",
      title: "Reviewed decisions blir en bild av hela sessionen",
      description:
        "Sessionsvyn sammanställer de granskade Trading Decisions och summerar evidence som grade distribution, planföljsamhet och marknadskontext. Ett föreslaget session draft kan använda den strukturerade review-datan som utgångspunkt, vilket minskar behovet av att manuellt rekonstruera hela sessionen samtidigt som den slutliga bedömningen fortfarande är min.",
    },

    reflection: {
      label: "Final Reflection",
      title: "Den slutliga tolkningen är fortfarande min",
      description:
        "Det föreslagna draftet är bara en utgångspunkt. Jag lägger till min egen övergripande reflektion, session grade, upprepade misstag, vad som fungerade bra och vilket fokus jag vill ta med mig till nästa session. På så sätt bevaras både strukturerad evidence och de personliga observationer som ofta förklarar varför sessionen var viktig.",
    },

    flow: {
      label: "Från beslut till återanvändbar session evidence",
      description:
        "Session Reviews är en av Coach viktigaste evidenskällor eftersom de komprimerar många granskade beslut till en tydligare bild av vad som hände, vad som upprepades och vad som förtjänar uppmärksamhet framåt. Det gör sessionreflektionen mer användbar än en samling isolerade anteckningar.",
    },
  },

  coach: {
    label: "Behavioral Coach",
    title: "Från tidigare observationer till framtida fokus",
    description:
      "Coach är utformad som ett minnes- och beteendeanalyslager snarare än som en ersättning för min egen bedömning. Syftet är att återanvända information som redan finns i Trade Reviews, Session Reviews och mina egna skrivna observationer och sedan lyfta fram det som fortfarande är relevant. I stället för att varje session börjar från noll skapar Coach kontinuitet över tid.",

    screenshotTitle: "Behavioral Coach Overview",

    highlight:
      "Journalen minns vad jag observerade, så att jag kan fortsätta lära mig av det.",

    technicalNote: {
      label: "Rule- and data-driven",
      description:
        "Coach är medvetet regel- och datadriven och presenteras inte som avancerad AI eller machine learning. Värdet kommer från strukturerad review-historik, prioritering av evidence, identifiering av återkommande mönster, recency och möjligheten att föra tillbaka mina egna tidigare observationer in i det aktuella arbetsflödet. Slutsatserna grundas därför i information som jag redan har granskat och skrivit, inte i generiska genererade råd.",
    },

    flow: {
      label: "Från review-historik till framtida fokus",
      description:
        "Trade Reviews ger evidence på beslutsnivå medan Session Reviews tillför en mer sammanfattad reflektion och kontext. De källorna bevarar mina egna observationer tillsammans med strukturerad information om execution, misstag, planföljsamhet och återkommande beteenden. Över tid kan Coach använda historiken för att lyfta fram mönster och prioritera de teman som förtjänar uppmärksamhet nu.",
    },
  },

  preparation: {
    label: "Förberedelse",
    title: "Stöd för processen före traden",
    description:
      "Journalen är inte bara utformad för att analysera avslutade trades. Den strukturerar också förberedelsen som sker innan sessionen börjar och innan en entry tas. Genom att dokumentera den förväntade setupen och marknadstesen i förväg kan den senare reviewn jämföra vad jag trodde och avsåg före traden med vad som faktiskt hände.",

    entryPlaybook: {
      label: "Entry Playbook",
      title: "Definiera setupen innan resultatet bedöms",
      description:
        "Entry Playbook är ett strukturerat visuellt bibliotek över de entry-modeller jag vill handla. Varje modell kan dokumentera förväntad marknadskontext, entry-kriterier, direction, bias, grade, category, checklist, vanliga execution errors och chart-exempel. Syftet är att göra villkoren för en giltig entry tydliga före execution i stället för att rekonstruera logiken i efterhand utifrån resultatet.",

features: [
  {
    title: "Entry-kriterier",
    description:
      "Definierar vilka villkor som bör vara uppfyllda innan traden betraktas som giltig.",
  },
  {
    title: "Grade & direction",
    description:
      "Klassificerar setupens kvalitet och om modellen gäller long, short eller i båda riktningarna.",
  },
  {
    title: "Strukturerad checklist",
    description:
      "Gör setupen till återkommande pre-trade-kontroller som kan gås igenom före execution.",
  },
  {
    title: "Vanliga execution errors",
    description:
      "Lyfter fram kända misstag som kan försvaga en annars giltig setup eller execution.",
  },
],

      primaryScreenshotTitle: "Entry Playbook Overview",

      secondaryLabel: "Strukturerade Entry-kriterier",
      secondaryDescription:
        "Checklists och vanliga execution errors gör playbooken praktisk i stället för enbart beskrivande. De ger en återanvändbar referens för vad som ska finnas före entry och vilka kända misstag som kan försämra setupen eller execution.",

      secondaryScreenshotTitle: "Entry Playbook Checklist",
    },

    marketBias: {
      label: "Market Bias",
      title: "Dokumentera tesen innan sessionen börjar",
      description:
        "Market Bias är utformad för att bevara den kontext som fanns innan tradingutfallet var känt. Arbetsflödet skiljer det bredare veckoperspektivet från den dagliga starttesen så att journalen senare kan jämföra den ursprungliga förväntningen med det faktiska marknadsbeteendet och besluten under sessionen.",

      primaryScreenshotTitle: "Market Bias Overview",

      weekly: {
        label: "Weekly Bias",
        title: "Det bredare ramverket",
        description:
          "Weekly Bias skapas normalt i början av veckan och etablerar den större riktningen och kontexten. Den kan inkludera information som COT-data, Daily chart, Volume Profile, övergripande struktur och femminuterskontext. Detta blir referenspunkten för sessionerna som följer.",
      },

      daily: {
        label: "Today's Bias",
        title: "Starttesen för tradingdagen",
        description:
          "Före varje individuell trading-session skapar jag en ny Today's Bias utifrån Weekly Bias tillsammans med den senaste marknadsinformationen. Den dokumenterar direction, confidence, observationer och invalidation conditions som definierar min starttes innan den första traden tas.",
      },

      secondaryLabel: "Innan utfallet är känt",
      secondaryDescription:
        "Genom att spara den dagliga tesen innan traden börjar skapas en användbar jämförelsepunkt för reviewn. Det blir möjligt att skilja mellan en dålig market read, en rimlig tes som inte fungerade och ett execution-problem som uppstod trots att den ursprungliga analysen var sund.",

      secondaryScreenshotTitle: "Today's Bias",
    },

    flow: {
      label: "Förberedelsen blir en del av review-loopen",
      description:
        "Förberedelsen är kopplad till samma lärandeprocess som execution och review. Market Bias dokumenterar den förväntade miljön, Entry Playbook definierar hur en giltig setup ska se ut och den resulterande Trading Decision kan senare granskas mot dessa förväntningar. Session Reviews och Coach kan sedan återanvända historiken i stället för att behandla förberedelsen som fristående anteckningar.",
    },
  },

  technicalChallenges: {
    label: "Tekniska utmaningar",
    title: "Problem som inte syns direkt i gränssnittet",
    description:
      "En del av det viktigaste arbetet i projektet sker bakom de synliga vyerna. När journalen har vuxit har de svårare delarna allt mer handlat om dataintegritet, systembeteende, osäkerhet, persistens och underhållbarhet snarare än att bara lägga till ytterligare en komponent. Det är särskilt viktigt eftersom en förändring i ett lager kan påverka analytics, reviews och Coach-beteende någon annanstans i applikationen.",

    challenges: [
      {
        number: "01",
        label: "Multi-account trade grouping",
        title: "Ett beslut, flera executions",
        description:
          "Copy trading innebär att ett och samma tradingbeslut kan skapa flera separata account executions. Systemet måste bevara varje individuell fill för finansiell korrekthet samtidigt som samma beslut inte får räknas flera gånger i beteendestatistiken.",
        details: [
          "Account-level P&L och fills måste förbli intakta.",
          "Grades, misstag och reviews ska representera det underliggande beslutet en gång.",
          "Grupperingen får inte förändra den ursprungliga importerade tradingdatan.",
        ],
        highlight:
          "Samma importerade data behöver kunna användas för både account analysis och decision analysis utan att deras syften blandas ihop.",
      },

      {
        number: "02",
        label: "Copied trade matching",
        title: "Automation med manuell hantering av undantag",
        description:
          "Executions som tillhör samma kopierade trade är inte alltid identiska. Små skillnader i entry time, entry price eller exit price kan uppstå på grund av fills, latency eller stop-beteende. Därför räcker inte enkel exakt matchning.",
        details: [
          "Tydliga matches kan grupperas automatiskt.",
          "Osäkra fall visas för manuell verifiering.",
          "Den manuella bedömningen kan bekräfta samma beslut eller hålla trades separata.",
        ],
        highlight:
          "Lösningen använder automation där säkerheten är hög och mänsklig verifiering där datan faktiskt är tvetydig.",
      },

      {
        number: "03",
        label: "CSV normalization",
        title: "Olika källor, en gemensam intern trade-modell",
        description:
          "Tradingexporter använder inte alltid samma headers, format eller konventioner. Importlagret måste därför identifiera källan och översätta den källspecifika datan till en konsekvent intern representation innan resten av applikationen kan använda den säkert.",
        details: [
          "Source detection stannar i importlagret.",
          "Källspecifika adapters hanterar externa skillnader.",
          "Normaliserade trades kan användas av samma analytics- och reviewflöden.",
        ],
        highlight:
          "Genom att hålla källspecifik logik vid systemgränsen behöver resten av applikationen inte känna till varje importerformat.",
      },

      {
        number: "04",
        label: "Persistence evolution",
        title: "Från enklare lagring till SQLite och repositories",
        description:
          "Kraven på persistens förändrades när journalen blev större och mer sammankopplad. Funktioner som fungerade med enklare lokal lagring behövde så småningom en tydligare separation mellan applikationslogik och hur datan faktiskt sparas.",
        details: [
          "Repositories separerar features från persistensdetaljer.",
          "Storage providers gör datalagret enklare att utveckla vidare.",
          "SQLite ger en mer strukturerad local-first persistensmodell.",
          "Backup och restore är fortfarande en del av datastrategin.",
        ],
        highlight:
          "Målet var inte att lägga till arkitektur för arkitekturens skull, utan att hindra storage-logik från att spridas genom varje feature.",
      },

      {
        number: "05",
        label: "Reusable review history",
        title:
          "Sparade anteckningar hjälper inte om de försvinner i historiken",
        description:
          "Trade Reviews och Session Reviews innehåller mer än vanliga anteckningar. De kombinerar strukturerade fält med misstag, execution quality, planföljsamhet, sessionsslutsatser och personliga observationer. Utmaningen är att bevara tillräcklig kontext för att historiken fortfarande ska vara användbar senare.",
        details: [
          "Decision-level reviews skapar strukturerad historisk evidence.",
          "Session Reviews tillför övergripande kontext och reflektion.",
          "Coach-logiken kan återanvända äldre observationer när de fortfarande är relevanta.",
        ],
        highlight:
          "Journalen är utformad så att en viktig observation kan påverka framtida review i stället för att bli arkiverad text som aldrig visas igen.",
      },

      {
        number: "06",
        label: "Refactoring for maintainability",
        title: "Minska ansvar när komplexiteten växer",
        description:
          "När funktionerna utvecklades samlade vissa större moduler UI-rendering, state management, beräkningar, datatransformation och feature-logik i samma filer. Det gjorde förändringar svårare att förstå och ökade risken för oväntade sidoeffekter.",
        details: [
          "Stora komponenter delas successivt upp i mer fokuserade komponenter.",
          "Återanvändbara beräkningar och transformationer flyttas till services och utilities.",
          "Befintligt beteende behålls medan ansvar extraheras stegvis.",
          "Build och manuell verifiering används mellan mindre refactoring-steg.",
        ],
        highlight:
          "Refactoring-arbetet prioriterar små verifierade förändringar framför stora omskrivningar som är svårare att kontrollera mot befintligt beteende.",
      },
    ],

    closing: {
      title: "En förändring i en del av systemet kan påverka flera andra.",
      description:
        "Importförändringar kan påverka analytics. Trade grouping kan påverka reviews, statistik och Coach evidence. Persistensförändringar kan påverka varje feature som läser eller skriver data. Att spåra dessa beroenden, återskapa problem med riktig data och kontrollera regressioner har därför blivit en viktig del av utvecklingsprocessen.",
    },
  },

  architecture: {
    label: "Arkitektur",
    title: "En local-first desktopapplikation med tydligare ansvarsområden",
    description:
      "Arkitekturen har utvecklats stegvis kring praktisk separation av ansvar snarare än kring ett formellt arkitekturmönster. React hanterar användargränssnittet, Tauri ger desktop-runtime och SQLite stödjer lokal persistens. Importlogik, repositories, storage providers, analytics utilities, feature-moduler och Coach-logik är separerade så att varje del av systemet kan utvecklas utan att varje feature behöver känna till hur alla andra lager fungerar.",

    responsibilities: [
      {
        label: "Import",
        description:
          "Source detection, källspecifika adapters och normalisering håller externa dataskillnader vid systemgränsen.",
      },
      {
        label: "Storage",
        description:
          "Repositories och storage providers separerar feature-logik från den underliggande persistensimplementationen.",
      },
      {
        label: "Analytics",
        description:
          "Selectors, utilities och analytics-logik omvandlar lagrad data till decision-level och account-level metrics.",
      },
      {
        label: "Features",
        description:
          "Användarnära moduler kombinerar data, workflows och interaction utan att själva äga hela persistens- eller importprocessen.",
      },
      {
        label: "Coach",
        description:
          "Beteendelogiken använder reviewed evidence, patterns och session context för att skapa prioriterat framtida fokus.",
      },
    ],

    closing: {
      title:
        "Arkitekturen finns för att stödja förändring, inte för att få projektet att se mer komplext ut.",
      description:
        "När journalen växte blev tydligare gränser värdefulla eftersom imports, storage, analytics, reviews och Coach-beteende i allt högre grad påverkade varandra. Den nuvarande strukturen är tänkt att göra dessa beroenden enklare att förstå, felsöka och utveckla samtidigt som applikationen förblir local-first och praktisk för ett single-user desktop workflow.",
    },
  },

  myRole: {
    label: "Min roll",
    title: "Produktägare, problemlösare och AI-assisterad utvecklare",
    description:
      "Det här är mitt eget långsiktiga projekt. Jag skapade den ursprungliga idén, definierar produktens riktning och bestämmer hur workflows, datamodell, reviews, analytics och Coach ska fungera. Jag använder ChatGPT som coding implementation layer, medan jag ansvarar för att definiera problemet, specificera förväntat beteende, testa resultatet, identifiera felaktigt beteende och bestämma hur systemet ska utvecklas.",

    coreStatement:
      "Jag äger produkten, kraven och besluten. ChatGPT är coding implementation layer.",

    ownership: {
      label: "Produkt- och projektägarskap",
      title: "Jag definierar vad systemet ska göra",
      description:
        "Mitt ansvar är centrerat kring produktriktning, krav, workflow-design, systembeteende och validering. Projektet har vuxit från ett personligt tradingbehov till en sammanhängande applikation med imports, reviews, analytics, förberedelseverktyg, persistens och beteendeanalys.",
      items: [
        "Ursprunglig idé och produktriktning",
        "Krav och förväntat beteende",
        "Workflows och feature-interaktioner",
        "Datakrav och review-struktur",
        "Analytics- och Coach-beteende",
        "UX-beslut och prioritering",
        "Testning med riktig tradingdata",
        "Återskapande av buggar och regressionstester",
        "Refactoring-prioriteringar och långsiktig utveckling",
      ],
    },

    ai: {
      label: "AI-assisterad implementation",
      title: "All applikationskod har skrivits med ChatGPT",
      description:
        "Jag presenterar inte projektet som bevis på att jag manuellt har skrivit applikationskoden från grunden. ChatGPT har skrivit koden, medan jag styr implementationen genom krav, förväntat beteende, testning, felsökning och iteration. Den praktiska utmaningen är att säkerställa att den genererade implementationen faktiskt motsvarar systemet jag vill bygga.",
      items: [
        "Beskriva problemet och önskat beteende",
        "Definiera edge cases och begränsningar",
        "Utvärdera implementationsförslag",
        "Applicera och testa genererade förändringar",
        "Identifiera när beteendet är fel",
        "Spåra problem över sammankopplade features",
        "Förfina krav när antaganden visar sig vara fel",
        "Styra stegvis refactoring när komplexiteten växer",
      ],
    },

    workflow: {
      label: "Utvecklingsflöde",
      description:
        "Utvecklingsprocessen är iterativ snarare än ett enkelt prompt-and-accept-flöde. En feature börjar ofta med ett verkligt problem i min egen tradingprocess och går sedan vidare genom kravdefinition, implementation, testning, oväntade edge cases, felsökning och förbättring. När applikationen har blivit mer sammankopplad har det blivit allt viktigare att förstå hur en förändring påverkar imports, storage, reviews, analytics och Coach-beteende.",
    },

    closing:
      "För mig är den viktigaste delen av projektet inte vem som har skrivit enskilda kodrader. Det viktiga är att jag har tagit ett verkligt problem, definierat systemet som behövs för att lösa det och kontinuerligt utvecklat systemet till en fungerande applikation med sammankopplade workflows, riktig data och allt mer komplexa krav.",
  },

  currentStatus: {
    label: "Nuvarande status",
    title: "Aktivt utvecklad och använd med riktig data",
    description:
      "Trading Journal är inte ett färdigt demonstrationsprojekt som bara har skapats för en portfolio. Det är en applikation som jag aktivt använder med riktig tradingdata, och utvecklingen fortsätter när nya krav, edge cases och workflow-problem upptäcks genom faktisk användning. Det är också den löpande användningen som har drivit mycket av den komplexitet som beskrivs i denna case study.",

    statusItems: [
      {
        label: "Status",
        value: "Aktiv utveckling",
      },
      {
        label: "Plattform",
        value: "Desktop",
      },
      {
        label: "Datamodell",
        value: "Local-first",
      },
      {
        label: "Källkod",
        value: "Privat repository",
      },
    ],

    realUse: {
      label: "Verklig användning",
      title: "Applikationen utvecklas utifrån faktiska workflow-problem",
      description:
        "Features testas regelbundet mot min egen importerade tradingdata och verkliga review-workflows. Det gör att problem upptäcks som är svåra att förutse i en isolerad demo, exempelvis skillnader mellan kopierade trades, kontoskillnader, ofullständig review-data, lagringskrav och interaktioner mellan analytics och beteendelogik. Problem som upptäcks genom användning blir ofta nästa utvecklingskrav.",
    },

    evolution: {
      label: "Löpande utveckling",
      title: "Systemet fortsätter förändras när kraven blir tydligare",
      description:
        "Journalen har utvecklats från enklare trade tracking till ett mer sammanhängande system för import, normalisering, multi-account-hantering, strukturerad review, analytics, förberedelse, session reflection och beteendeanalys. Den nuvarande utvecklingen fokuserar allt mer inte bara på nya features utan också på förbättrade workflows, minskad onödig komplexitet och refactoring av områden som har vuxit bortom sitt ursprungliga ansvar.",
    },

    closing:
      "Projektet visas medvetet som ett fungerande system under fortsatt utveckling, inte som en färdig produkt där alla problem redan är lösta.",
  },

  sourceCode: {
    label: "Källkod",
    title: "Applikationens repository förblir privat",
    description:
      "Produktionskoden för MrBrunotte's Trading Journal publiceras inte som en del av denna portfolio. Applikationen innehåller egna trading-workflows, datahantering, review-modeller, beteendelogik och implementationsdetaljer som jag vill behålla i ett privat repository. Syftet med denna publika case study är därför att visa produkten, systemtänkandet, de tekniska utmaningarna och utvecklingsprocessen utan att göra hela applikationen möjlig att klona.",

    privateRepository: {
      label: "Privat applikationsrepository",
      title: "Produktionskoden är inte offentligt tillgänglig",
      description:
        "Det privata repositoryt innehåller React/Tauri-applikationen, persistenslagret, importers, analytics-logik, review-workflows, Coach-logik och övriga implementationsdetaljer som används av den fungerande desktopapplikationen. Genom att hålla repositoryt privat kan jag visa projektet utan att publicera hela produktimplementationen.",
    },

    publicCaseStudy: {
      label: "Publik case study",
      title: "Funktionalitet och tekniska beslut är fortfarande synliga",
      description:
        "Det här separata publika projektet dokumenterar vad applikationen gör, hur de större workflow-flödena hänger ihop, vilka tekniska problem som har lösts, hur arkitekturen har utvecklats och vilken roll jag har haft i utvecklingsprocessen. Screenshots och övergripande diagram visar det fungerande systemet utan att exponera produktionskoden.",
    },

    closing:
      "Jag kan diskutera arkitektur, workflows, utvecklingsprocess, tekniska utmaningar och enskilda implementationsbeslut mer detaljerat i en intervju.",
  },

  footer: {
    description:
      "En publik case study av en privat, aktivt utvecklad desktopbaserad tradingjournal.",
    project: "MrBrunotte's Trading Journal",
    status: "React · Tauri · SQLite · Aktiv utveckling",
  },
};

export default sv;
