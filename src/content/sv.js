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
      "En local-first desktopbaserad tradingjournal som omvandlar importerade executions till strukturerad review-data, analys på beslutsnivå och återanvändbar beteendehistorik. Den kopplar samman trade-import, account-level executions, Trading Decisions, reviews, session reflections och Coach evidence i ett sammanhängande workflow.",

    supportingLine:
      "Målet är inte bara att registrera vad som hände, utan att bevara varför det hände, vad jag lärde mig av det och vilka mönster som bör påverka framtida tradingbeslut.",
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
        description:
          "Traditionella journaler är bra på att bevara resultat och prestationsdata, men de tappar ofta resonemanget, kontexten och lärdomarna bakom resultaten.",
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
        description:
          "Jag ville att journalen skulle bevara beslutet bakom resultatet, hur väl det genomfördes, vad jag observerade och vad som bör påverka framtida sessioner.",
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
      title: "Olika externa format blir en gemensam intern trade-modell",
      description:
        "Tradingexporter kan använda olika headers, fältnamn och format. Importflödet håller de källspecifika skillnaderna vid applikationens systemgräns så att efterföljande features kan arbeta med en konsekvent representation av en trade.",

      stepLabel: "Steg",

      sources: [
        {
          label: "Extern källa",
          name: "DeepCharts",
          description:
            "CSV-exporter från DeepCharts går genom en källspecifik importer.",
        },
        {
          label: "Extern källa",
          name: "Rithmic",
          description:
            "Rithmic-exporter använder sitt eget format och hanteras av en separat adapter.",
        },
      ],

      steps: [
        {
          title: "Identifiering av källa",
          description:
            "Journalen identifierar vilket externt format den importerade CSV-filen tillhör.",
        },
        {
          title: "Adapter",
          description:
            "En källspecifik adapter läser de fält och konventioner som används i exporten.",
        },
        {
          title: "Normalisering",
          description:
            "Värden, fältnamn och format omvandlas till en gemensam konsekvent struktur.",
        },
        {
          title: "Gemensam trade-modell",
          description:
            "Det normaliserade resultatet blir den gemensamma trade-representation som används av storage, reviews och analytics.",
        },
      ],
      closing:
        "Källspecifik logik stannar i importlagret, så att resten av applikationen kan arbeta med en konsekvent intern trade-modell oavsett den ursprungliga datakällan.",
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

      summaryDescription:
        "Journalen bevarar varje account execution för finansiell korrekthet samtidigt som relaterade executions kan grupperas till ett enda Trading Decision när de representerar samma underliggande beslut. På så sätt kan account performance och beteendeanalys använda samma importerade data utan att kopierade trades räknas felaktigt.",
    },

    copiedTradeMatching: {
      label: "Matchning av kopierade trades",

      title: "Så grupperas kopierade executions till Trading Decisions",

      description:
        "När samma trade kopieras till flera konton kan fills skilja sig något i tid, entry eller exit. Journalen försöker först matcha executions automatiskt. Om matchningen är osäker kan den bekräftas manuellt.",

      accountTrades: {
        label: "Account Trades",
        title: "Varje execution finns kvar",
        executionLabel: "execution",
      },

      automatic: {
        label: "Automatisk matchning",
        title: "Tydliga matchningar grupperas automatiskt",
        description:
          "Executions med tillräckligt liknande tid, entry och exit kan kopplas ihop utan manuell kontroll.",
      },

      manual: {
        label: "Manuell bekräftelse",
        title: "Osäkra matchningar granskas manuellt",
        description:
          "Om en matchning inte är tillräckligt säker för automatisk gruppering visas den så att jag kan bekräfta om executionerna hör ihop.",
      },

      results: {
        label: "Resultat av matchningen",
        title: "Executionerna grupperas eller hålls separata",

        single: {
          label: "Grupperat resultat",
          title: "Ett Trading Decision",
          description:
            "Executionerna tillhör samma underliggande tradingbeslut och grupperas tillsammans för review och beteendeanalys.",
        },

        multiple: {
          label: "Separat resultat",
          title: "Flera Trading Decisions",
          description:
            "Executionerna representerar separata tradingbeslut och förblir separata för review och beteendeanalys.",
        },
      },

      preserved: {
        label: "Originala Account Trades finns kvar",
        description:
          "Grupperingen tar aldrig bort eller ändrar importerade executions. Varje account trade finns kvar och används fortsatt för P&L, fills och statistik på kontonivå.",
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
      sectionLabel: "Reviewflöde",
      label: "Review-data stannar inte i den enskilda reviewn",

      description:
        "Varje reviewad trading decision lägger till strukturerad information om execution, planföljsamhet, regler, misstag och mina egna observationer. När fler beslut reviewas byggs en historik över hur jag faktiskt tradar. Återkommande misstag, styrkor och mönster i mina egna anteckningar blir lättare att identifiera, vilket ger Coach bättre underlag för att avgöra vad som förtjänar fokus härnäst.",

      tradeReviewLabel: "Reviewat beslut",
      tradeReview: "Trade Review",

      structuredReviewData: "Strukturerad review-data",
      structuredReviewDescription:
        "Varje review gör traden till strukturerad information som kan jämföras med senare beslut.",

      execution: "Execution",
      plan: "Plan",
      rules: "Regler",
      mistakes: "Misstag",
      notes: "Anteckningar",

      reviewedHistoryLabel: "Reviewad historik",
      reviewedHistory: "Beslut samlas över tid",
      reviewedHistoryDescription:
        "Enskilda reviews blir tillsammans en växande historik av reviewade trading decisions.",

      historicalEvidenceLabel: "Historisk evidence",
      historicalEvidence: "Mönster blir synliga",
      historicalEvidenceDescription:
        "Återkommande misstag, styrkor, execution-beteende och observationer kan identifieras i historiken.",

      coachLabel: "Coach",
      coach: "Vad förtjänar fokus just nu?",
      coachDescription:
        "Coach använder den samlade evidensen för att lyfta relevanta mönster, fokusområden och tidigare observationer.",
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

    metrics: {
      groups: [
        {
          label: "Performance",
          title: "Vad blev det finansiella resultatet?",
          description:
            "Mäter lönsamhet, stabilitet och hur resultatet utvecklas över tid.",
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
          title: "Hur väl genomfördes traderna?",
          description:
            "Utvärderar trade-kvalitet, excursion och hur effektivt positionerna hanterades.",
          items: ["Grade", "MFE / MAE / ETD", "Exit", "Break-even"],
        },
        {
          label: "Beteende",
          title: "Vilka beteenden påverkade resultatet?",
          description:
            "Kopplar resultaten till återkommande misstag, planföljsamhet och regeldisciplin.",
          items: ["Misstag", "Plan", "Regler", "Kostnad för regelbrott"],
        },
        {
          label: "Kontext",
          title: "Var och när uppstod resultaten?",
          description:
            "Bryter ner resultaten efter tradingkontext för att visa var prestationen förändras.",
          items: ["Strategi", "Tid", "Dag", "Konto"],
        },
      ],
    },

    perspectives: {
      label: "Två analytiska perspektiv",
      title: "Samma tradinghistorik, analyserad på två olika nivåer",
      description:
        "Account Analytics bevarar varje execution för finansiell statistik och analys på kontonivå, medan Decision Analytics grupperar kopierade executions så att beteendeanalysen speglar de faktiska tradingbeslut som togs.",

      accountLabel: "Account Analytics",
      decisionLabel: "Decision Analytics",

      accountTags: ["P&L", "Fills", "Tradingkostnader", "Kontoprestation"],

      decisionTags: ["Grades", "Misstag", "Plan", "Regler", "Review-statistik"],
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
        "Session Reviews är en av Coach viktigaste evidenskällor eftersom de komprimerar många reviewade beslut till en tydligare bild av vad som hände, vad som upprepades och vad som förtjänar uppmärksamhet härnäst. Flödet kombinerar strukturerad review-data med min egen slutliga tolkning innan resultatet blir återanvändbar evidence på sessionsnivå.",

      reviewedDecisions: {
        label: "Reviewade beslut",
        title: "Sessionen börjar med de beslut som faktiskt har reviewats",
        description:
          "Enskilda Trading Decisions bidrar med strukturerad evidence om execution quality, planföljsamhet, misstag och marknadskontext.",
      },

      suggestedDraft: {
        label: "Föreslaget session draft",
        title: "Reviewade beslut skapar en strukturerad utgångspunkt",
        description:
          "Journalen kan sammanfatta de reviewade besluten till ett föreslaget draft så att jag inte behöver rekonstruera hela sessionen manuellt.",
      },

      reflection: {
        label: "Min reflektion",
        title:
          "Jag lägger till den kontext som den strukturerade datan inte kan känna till",
        description:
          "Jag lägger till min egen session grade, vad som fungerade bra, upprepade misstag och det fokus jag vill ta med mig till nästa session.",
      },

      sessionEvidence: {
        label: "Session Review Evidence",
        title: "Sessionen blir en återanvändbar del av historiken",
        description:
          "Strukturerad data från besluten och min slutliga reflektion kombineras till en övergripande tolkning av sessionen som kan fortsätta vara användbar senare.",
      },

      coach: {
        label: "Coach",
        title: "Relevant session evidence kan påverka framtida fokus",
        description:
          "Coach kan återanvända den färdiga Session Reviewn när den avgör vilka mönster, observationer och fokusområden som förtjänar uppmärksamhet i kommande sessioner.",
      },
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

    evidence: {
      groups: [
        {
          label: "Evidence",
          title: "Vad Coach lär sig från",
          description:
            "Reviewad information ger det faktiska underlaget för beteendeanalysen.",
          items: [
            "Reviewade beslut",
            "Session Reflections",
            "Misstag",
            "Execution Quality",
            "Review Notes",
          ],
        },
        {
          label: "Mönster",
          title: "Vad som blir synligt över tid",
          description:
            "Återkommande evidence kan visa beteenden som är svåra att upptäcka från enskilda trades.",
          items: [
            "Återkommande beteenden",
            "Upprepade misstag",
            "Styrkor",
            "Nya teman",
            "Beteendemässig konsekvens",
          ],
        },
        {
          label: "Fokus",
          title: "Vad som förs tillbaka till det aktuella arbetsflödet",
          description:
            "Relevanta mönster omvandlas till praktiska fokusområden som kan påverka framtida sessioner.",
          items: [
            "Today's Focus",
            "Improvement Focus",
            "Execution Cues",
            "Träningsprioriteringar",
            "Utveckling över tid",
          ],
        },
      ],
    },

    technicalNote: {
      label: "Rule- and data-driven",
      description:
        "Coach är medvetet regel- och datadriven och presenteras inte som avancerad AI eller machine learning. Värdet kommer från strukturerad review-historik, prioritering av evidence, identifiering av återkommande mönster, recency och möjligheten att föra tillbaka mina egna tidigare observationer in i det aktuella arbetsflödet. Slutsatserna grundas därför i information som jag redan har granskat och skrivit, inte i generiska genererade råd.",
    },

    flow: {
      label: "Från review-historik till framtida fokus",
      description:
        "Trade Reviews ger evidence på beslutsnivå medan Session Reviews tillför en mer sammanfattad reflektion och kontext. De källorna bevarar mina egna observationer tillsammans med strukturerad information om execution, misstag, planföljsamhet och återkommande beteenden. Över tid kan Coach använda historiken för att lyfta fram mönster och prioritera de teman som förtjänar uppmärksamhet nu.",

      steps: [
        {
          label: "Review-källa",
          title: "Trade Reviews",
        },
        {
          label: "Review-källa",
          title: "Session Reviews",
        },
        {
          label: "Personlig kontext",
          title: "Mina observationer",
        },
        {
          label: "Samlad historik",
          title: "Samlad Evidence",
        },
        {
          label: "Mönsteridentifiering",
          title: "Återkommande mönster",
        },
        {
          label: "Aktuellt resultat",
          title: "Prioriterat fokus",
        },
      ],
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
      label: "Förberedelsen blir en del av lärandeloopen",
      description:
        "Förberedelsen är kopplad till samma lärandeprocess som execution och review. Market Bias dokumenterar den förväntade miljön, Entry Playbook definierar hur en giltig setup ska se ut och den resulterande Trading Decision kan senare granskas mot dessa förväntningar. Session Reviews och Coach kan sedan återanvända historiken i stället för att behandla förberedelsen som fristående anteckningar.",

      steps: [
        {
          stage: "Förberedelse",
          title: "Market Bias",
        },
        {
          stage: "Förberedelse",
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
          stage: "Lärande",
          title: "Coach",
        },
      ],
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
          "Journalen stödjer copy trading över flera konton, vilket innebär att ett enda tradingbeslut kan skapa flera separata executions. Utmaningen är att bevara varje individuell fill för korrekt finansiell analys samtidigt som systemet måste förstå att dessa executions kan representera endast ett underliggande beslut i review och beteendestatistik.",
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
          "När flera account executions kan tillhöra samma underliggande trade behöver journalen kunna avgöra vilka som faktiskt hör ihop. Exakt matchning räcker inte alltid eftersom kopierade executions kan skilja sig något i tid, entry price eller exit price. Matchningsprocessen kombinerar därför automatisk gruppering med manuell bekräftelse när datan är osäker.",
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
          "Journalen importerar tradingdata från flera externa källor, och exporter använder inte identiska headers, format eller konventioner. I stället för att låta resten av applikationen känna till alla källspecifika skillnader identifierar importlagret datakällan och omvandlar informationen till en gemensam intern trade-modell innan den används av analytics, reviews eller andra features.",
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
          "När journalen växte från enklare trade tracking till en större sammankopplad applikation blev fler features beroende av persistent data. Storage blev därför ett arkitekturproblem snarare än bara ett ställe att spara värden. Datalagret separerades stegvis från feature-logiken så att applikationen kunde utvecklas mot SQLite utan att varje vy behövde känna till hur den underliggande lagringen fungerar.",
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
          "Trade Reviews och Session Reviews fångar information som fortfarande kan vara värdefull långt efter att den ursprungliga traden är avslutad. Utmaningen är därför inte bara att spara reviewn, utan att bevara tillräckligt med struktur och kontext för att tidigare misstag, observationer och slutsatser ska kunna bli användbar historisk evidence som andra delar av journalen kan återanvända senare.",
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
          "Flera features började som relativt små moduler men blev mer komplexa när nya workflows, beräkningar och databeroenden lades till. Vissa filer började till slut innehålla UI-rendering, state management, beräkningar och datatransformation samtidigt. Refactoring har därför blivit en del av utvecklingsprocessen så att applikationen kan fortsätta utvecklas utan att varje förändring blir svårare att förstå eller mer riskfylld att testa.",
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

    layers: [
      {
        number: "01",
        title: "Trading Data",
        description:
          "Råa executions kommer in i systemet från externa tradingplattformar och CSV-exporter. Lagret representerar den ursprungliga tradingdatan innan källspecifika skillnader har normaliserats.",
      },
      {
        number: "02",
        title: "Import & Normalisering",
        description:
          "Source detection och källspecifika adapters omvandlar olika externa exporter till en gemensam intern trade-modell som resten av applikationen kan använda på ett konsekvent sätt.",
      },
      {
        number: "03",
        title: "Repositories & Local Storage",
        description:
          "Repositories och storage providers separerar applikationens features från persistenslagret, medan SQLite lagrar journalens data lokalt på datorn.",
      },
      {
        number: "04",
        title: "Account Trades + Trading Decisions",
        description:
          "Samma importerade data representeras på två analytiska nivåer: individuella Account Trades för finansiell korrekthet och grupperade Trading Decisions för beteendeanalys.",
      },
      {
        number: "05",
        title: "Features & Analytics",
        description:
          "Dashboard, trades, analytics, playbooks och preparation-workflows använder den gemensamma datamodellen utan att behöva känna till hur import eller persistens är implementerad.",
      },
      {
        number: "06",
        title: "Trade Reviews",
        description:
          "Varje Trading Decision kan reviewas med execution quality, planföljsamhet, misstag, anteckningar och chart evidence, vilket skapar strukturerad historik på beslutsnivå.",
      },
      {
        number: "07",
        title: "Session Reviews",
        description:
          "Reviewade beslut kombineras till en mer övergripande reflektion över sessionen med återkommande styrkor, upprepade misstag, kontext och fokus inför nästa session.",
      },
      {
        number: "08",
        title: "Samlad Evidence",
        description:
          "Reviewade beslut, session reflections och observationer bygger tillsammans en återanvändbar historik där återkommande beteenden, styrkor och svagheter kan bli synliga över tid.",
      },
      {
        number: "09",
        title: "Trading Coach",
        description:
          "Coach använder reviewad historik och återkommande mönster för att prioritera vilka observationer, beteenden och förbättringsområden som förtjänar fokus i det aktuella arbetsflödet.",
      },
    ],

    responsibilities: [
      {
        label: "Import",
        description:
          "Ansvarar för source detection, källspecifika adapters och normalisering så att externa dataskillnader stannar vid systemgränsen.",
      },
      {
        label: "Storage",
        description:
          "Ansvarar för repositories, storage providers och lokal persistens så att features inte behöver känna till hur datan fysiskt lagras.",
      },
      {
        label: "Analytics",
        description:
          "Omvandlar lagrade Account Trades och Trading Decisions till finansiella, execution-baserade och beteendemässiga metrics.",
      },
      {
        label: "Features",
        description:
          "Bygger användarens workflows runt den gemensamma datan utan att ta över ansvar för import eller persistens.",
      },
      {
        label: "Coach",
        description:
          "Använder reviewad evidence, återkommande mönster och session context för att skapa prioriterat framtida fokus.",
      },
    ],

    closing: {
      title: "Strukturen gör applikationen enklare att ändra och felsöka",
      description:
        "När Trading Journal växte började fler delar av systemet påverka varandra. En förändring i importlogiken kunde påverka analytics, reviews eller Coach, och ändringar i lagringen kunde få konsekvenser i flera features samtidigt. Därför har applikationen stegvis delats upp i tydligare ansvarsområden för import, storage, analytics, features och Coach-logik. Det gör det enklare att förstå var ett problem uppstår, följa hur data rör sig genom systemet och ändra en del utan att behöva bygga om allt runt omkring.",
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
      "Det viktigaste för mig är inte vem som skrev varje enskild kodrad. Jag identifierade problemet, definierade vad systemet behövde göra, tog besluten kring produkt och workflows, testade resultatet i verklig användning och fortsatte förfina lösningen när implementationen inte motsvarade det avsedda beteendet. Applikationen speglar mina beslut, prioriteringar och min förståelse av problemet, med ChatGPT som coding implementation layer.",
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
        description:
          "Förfinas kontinuerligt genom verklig användning och nya workflow-krav.",
      },
      {
        label: "Plattform",
        value: "Desktop",
        description: "En lokal desktopapplikation byggd med React och Tauri.",
      },
      {
        label: "Datamodell",
        value: "Local-first",
        description:
          "Tradingdata och applikationsdata lagras lokalt på datorn.",
      },
      {
        label: "Källkod",
        value: "Privat repository",
        description:
          "Produktionskoden hålls medvetet privat medan case studyn är publik.",
      },
    ],

    realUse: {
      label: "Verklig användning",
      title: "Applikationen utvecklas utifrån faktiska workflow-problem",
      description:
        "Features testas regelbundet mot min egen importerade tradingdata och verkliga review-workflows. Det gör att problem upptäcks som är svåra att förutse i en isolerad demo, exempelvis skillnader mellan kopierade trades, kontoskillnader, ofullständig review-data, lagringskrav och interaktioner mellan analytics och beteendelogik. Problem som upptäcks genom användning blir ofta nästa utvecklingskrav.",

      points: [
        "Valideras mot importerad tradingdata",
        "Använder verkliga review-workflows i stället för isolerade demofall",
        "Synliggör edge cases genom faktisk daglig användning",
        "Problem som upptäcks i användning blir ofta nästa utvecklingskrav",
      ],
    },

    evolution: {
      label: "Löpande utveckling",
      title: "Systemet fortsätter förändras när kraven blir tydligare",
      description:
        "Journalen har utvecklats från enklare trade tracking till ett mer sammanhängande system för import, normalisering, multi-account-hantering, strukturerad review, analytics, förberedelse, session reflection och beteendeanalys. Den nuvarande utvecklingen fokuserar allt mer inte bara på nya features utan också på förbättrade workflows, minskad onödig komplexitet och refactoring av områden som har vuxit bortom sitt ursprungliga ansvar.",

      points: [
        "Omfattningen har vuxit när de sammankopplade workflowsen blivit tydligare",
        "Utvecklingen omfattar nu både nya features och förbättring av befintliga",
        "Komplexitet minskas genom iteration och refactoring",
        "Systemet fortsätter utvecklas när kraven blir mer precisa",
      ],
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
      "Jag kan gå igenom arkitekturen, dataflödet, viktiga workflows, tekniska utmaningar och de implementationsbeslut som testades och förfinades under utvecklingen.",
  },

  footer: {
    description:
      "En publik case study av en privat, aktivt utvecklad desktop trading journal.",
    owner: "Stefan Brunotte",
    project: "Ägare av MrBrunotte's Trading Journal",
    status: "React · Tauri · SQLite · Aktiv utveckling",
  },
};

export default sv;
