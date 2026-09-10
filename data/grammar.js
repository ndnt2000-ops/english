const GRAMMAR_DATA = [
  // ==========================================
  // A1 GRAMMAR (Foundations)
  // ==========================================
  {
    id: 1, level: "A1", topic: "Present Simple", type: "multiple_choice",
    title: "Present Simple - 'To Be'",
    instruction: "Choose the correct form of the verb 'to be'.",
    question: "They ___ students at the international academy.",
    options: ["am", "is", "are", "be"],
    answer: 2,
    explanation: "With the plural pronoun 'they', the correct present form of 'to be' is 'are'."
  },
  {
    id: 2, level: "A1", topic: "Present Simple", type: "fill_blank",
    title: "Third-Person Singular (-s/-es)",
    instruction: "Fill in the blank with the correct form of the verb.",
    question: "My brother ___ (watch) documentary films every evening.",
    answer: "watches",
    hint: "Verbs ending in -ch add -es for he/she/it.",
    explanation: "For verbs ending in -ch, -sh, -ss, -x, or -o, add '-es' in the third-person singular (watches, washes, goes)."
  },
  {
    id: 3, level: "A1", topic: "Articles", type: "multiple_choice",
    title: "Indefinite Articles: A vs An",
    instruction: "Choose the correct article for the sentence.",
    question: "She ordered ___ iced tea and ___ apple tart.",
    options: ["a / a", "an / a", "a / an", "an / an"],
    answer: 2,
    explanation: "Use 'a' before consonant sounds ('a tea') and 'an' before vowel sounds ('an apple')."
  },
  {
    id: 4, level: "A1", topic: "Prepositions of Place", type: "multiple_choice",
    title: "Prepositions: In, On, At",
    instruction: "Select the accurate preposition of location.",
    question: "The keys are ___ the kitchen table.",
    options: ["in", "on", "at", "underneath of"],
    answer: 1,
    explanation: "We use 'on' for surfaces: on the table, on the wall, on the floor."
  },
  {
    id: 5, level: "A1", topic: "Modals: Ability", type: "fill_blank",
    title: "Can / Can't for Ability",
    instruction: "Fill in with 'can' or 'cannot'.",
    question: "He is bilingual, so he ___ (can) speak both English and Vietnamese fluently.",
    answer: "can",
    hint: "Use the affirmative modal for ability.",
    explanation: "'Can' expresses ability in the present without changing form for different subjects."
  },
  {
    id: 6, level: "A1", topic: "Present Continuous", type: "multiple_choice",
    title: "Present Continuous for Actions Right Now",
    instruction: "Choose the correct verb form for an action happening at this moment.",
    question: "Listen! The baby ___ in the nursery.",
    options: ["cries", "is crying", "are crying", "cry"],
    answer: 1,
    explanation: "The command 'Listen!' signals an action happening right now, which requires Present Continuous: 'is crying'."
  },
  {
    id: 7, level: "A1", topic: "Questions with Do/Does", type: "fill_blank",
    title: "Present Simple Questions with Do / Does",
    instruction: "Complete the question with 'Do' or 'Does'.",
    question: "___ (Do/Does) your sister live in downtown Da Nang?",
    answer: "Does",
    hint: "Use 'Does' for singular third-person subjects (he, she, your sister).",
    explanation: "Third-person singular subjects (your sister = she) take 'Does' in present simple questions."
  },
  {
    id: 8, level: "A1", topic: "Pronouns", type: "multiple_choice",
    title: "Subject vs Object Pronouns",
    instruction: "Select the correct pronoun to complete the sentence.",
    question: "Our teacher gave ___ extra time to finish the homework.",
    options: ["we", "us", "our", "ours"],
    answer: 1,
    explanation: "After a verb ('gave'), we use the object pronoun 'us', not the subject pronoun 'we'."
  },

  // ==========================================
  // A2 GRAMMAR (Elementary Extensions)
  // ==========================================
  {
    id: 9, level: "A2", topic: "Past Simple", type: "multiple_choice",
    title: "Irregular Past Tense",
    instruction: "Choose the correct past simple form.",
    question: "Last weekend, we ___ a long letter to our grandparents.",
    options: ["writed", "wrote", "written", "writing"],
    answer: 1,
    explanation: "'Write' is irregular: write → wrote → written. Never use 'writed'."
  },
  {
    id: 10, level: "A2", topic: "Comparatives & Superlatives", type: "fill_blank",
    title: "Comparative Adjectives",
    instruction: "Fill in the comparative form of the adjective.",
    question: "Traveling by train is ___ (comfortable) than taking a budget bus.",
    answer: "more comfortable",
    hint: "For multi-syllable adjectives, use more + adjective.",
    explanation: "Adjectives of 3 or more syllables form comparatives using 'more + adjective'."
  },
  {
    id: 11, level: "A2", topic: "Past Continuous", type: "multiple_choice",
    title: "Past Continuous Interrupted Action",
    instruction: "Choose the correct combination of tenses.",
    question: "While I ___ to music, the delivery courier ___ on the door.",
    options: [
      "was listening / knocked",
      "listened / was knocking",
      "were listening / knock",
      "am listening / knocked"
    ],
    answer: 0,
    explanation: "Use Past Continuous (was listening) for the background activity and Past Simple (knocked) for the sudden interruption."
  },
  {
    id: 12, level: "A2", topic: "Prepositions of Time", type: "multiple_choice",
    title: "Time Expressions: At, On, In",
    instruction: "Select the appropriate preposition for dates.",
    question: "The regional technology conference begins ___ Monday morning.",
    options: ["in", "at", "on", "by"],
    answer: 2,
    explanation: "Use 'on' with days and dates: on Monday, on July 4th, on Friday morning."
  },
  {
    id: 13, level: "A2", topic: "Future with Going To", type: "fill_blank",
    title: "Future Plans with 'Be Going To'",
    instruction: "Fill in the blank with the correct form of 'be going to buy'.",
    question: "She has saved enough money, so she ___ (buy) a new laptop next month.",
    answer: "is going to buy",
    hint: "Subject is 'she', so use 'is going to + base verb'.",
    explanation: "We use 'be going to' for planned intentions and decisions made before speaking."
  },
  {
    id: 14, level: "A2", topic: "Quantifiers", type: "multiple_choice",
    title: "Countable vs Uncountable: Much vs Many",
    instruction: "Choose the correct quantifier for the sentence.",
    question: "How ___ luggage do you need to check in at the airport counter?",
    options: ["many", "much", "few", "any"],
    answer: 1,
    explanation: "'Luggage' is an uncountable noun in English, so we use 'How much', not 'How many'."
  },
  {
    id: 15, level: "A2", topic: "Modals of Obligation", type: "fill_blank",
    title: "Have to / Has to for Rules",
    instruction: "Fill in with 'have to' or 'has to'.",
    question: "Every passenger ___ (have to) fasten their seatbelt during takeoff.",
    answer: "has to",
    hint: "'Every passenger' is singular third-person.",
    explanation: "'Every passenger' takes the singular form 'has to'."
  },
  {
    id: 16, level: "A2", topic: "Adverbs of Frequency", type: "multiple_choice",
    title: "Word Order of Adverbs of Frequency",
    instruction: "Select the grammatically correct sentence order.",
    question: "Which sentence has the correct adverb placement?",
    options: [
      "He arrives always on time for morning meetings.",
      "Always he arrives on time for morning meetings.",
      "He always arrives on time for morning meetings.",
      "He arrives on time always for morning meetings."
    ],
    answer: 2,
    explanation: "Adverbs of frequency (always, often, never) normally go before main verbs: 'He always arrives'."
  },

  // ==========================================
  // B1 GRAMMAR (Intermediate Transition)
  // ==========================================
  {
    id: 17, level: "B1", topic: "Present Perfect", type: "multiple_choice",
    title: "Present Perfect vs Past Simple",
    instruction: "Choose the correct tense based on time markers.",
    question: "I ___ in this apartment for three years, and I still love living here.",
    options: ["lived", "have lived", "am living", "was living"],
    answer: 1,
    explanation: "Use Present Perfect (have lived) with 'for' when the action started in the past and continues into the present."
  },
  {
    id: 18, level: "B1", topic: "Conditionals", type: "fill_blank",
    title: "First Conditional (Real Possibility)",
    instruction: "Fill in the correct verb form in the result clause.",
    question: "If it rains tomorrow, we ___ (cancel) the outdoor barbecue.",
    answer: "will cancel",
    hint: "Structure: If + Present Simple, will + base verb.",
    explanation: "First conditional uses Present Simple in the if-clause and 'will + base verb' in the main clause."
  },
  {
    id: 19, level: "B1", topic: "Conditionals", type: "fill_blank",
    title: "Second Conditional (Hypothetical Scenario)",
    instruction: "Fill in the correct conditional verb form.",
    question: "If I ___ (have) more free time, I would learn how to play the cello.",
    answer: "had",
    hint: "Use the past simple in the if-clause for hypothetical conditions.",
    explanation: "Second conditional uses 'If + Past Simple, would + base verb' for imaginary or unreal present situations."
  },
  {
    id: 20, level: "B1", topic: "Passive Voice", type: "multiple_choice",
    title: "Simple Present & Past Passive",
    instruction: "Choose the correct passive voice construction.",
    question: "Millions of smartphones ___ in Asian factories every year.",
    options: ["manufacture", "are manufactured", "is manufactured", "were manufacturing"],
    answer: 1,
    explanation: "'Smartphones' is plural and the action happens regularly in the present: 'are manufactured'."
  },
  {
    id: 21, level: "B1", topic: "Relative Clauses", type: "multiple_choice",
    title: "Defining Relative Pronouns: Who vs Which vs Whose",
    instruction: "Select the appropriate relative pronoun.",
    question: "The software engineer ___ designed the database architecture received a promotion.",
    options: ["which", "who", "whom", "whose"],
    answer: 1,
    explanation: "Use 'who' as the subject pronoun referring to people ('The software engineer who designed...')."
  },
  {
    id: 22, level: "B1", topic: "Gerunds vs Infinitives", type: "multiple_choice",
    title: "Verbs Followed by Gerund (-ing)",
    instruction: "Choose the correct verb form after 'avoid'.",
    question: "To prevent burnout, she avoids ___ work emails late at night.",
    options: ["to check", "checking", "check", "checked"],
    answer: 1,
    explanation: "The verb 'avoid' is always followed by a gerund (-ing): 'avoids checking'."
  },
  {
    id: 23, level: "B1", topic: "Used To vs Be Used To", type: "fill_blank",
    title: "Habitual Past: 'Used to'",
    instruction: "Complete the sentence expressing a discontinued past habit.",
    question: "When I was in college, I ___ (use to) study until 2 AM every night.",
    answer: "used to",
    hint: "Affirmative past habit takes 'used to + infinitive'.",
    explanation: "'Used to' expresses a past state or habit that no longer occurs."
  },
  {
    id: 24, level: "B1", topic: "Modals of Deduction", type: "multiple_choice",
    title: "Modals of Present Deduction: Must vs Can't",
    instruction: "Choose the modal expressing logical certainty.",
    question: "The lights are completely off and nobody answers the bell. They ___ at home.",
    options: ["must be", "can't be", "might be", "should be"],
    answer: 1,
    explanation: "'Can't be' expresses strong negative deduction (it is logically impossible that they are at home)."
  },

  // ==========================================
  // B2 GRAMMAR (Upper-Intermediate)
  // ==========================================
  {
    id: 25, level: "B2", topic: "Conditionals", type: "multiple_choice",
    title: "Third Conditional (Past Regrets)",
    instruction: "Select the correct structure for counterfactual past events.",
    question: "If they ___ the server logs earlier, the breach ___ avoided.",
    options: [
      "checked / would be",
      "had checked / could have been",
      "would check / had been",
      "check / will have been"
    ],
    answer: 1,
    explanation: "Third conditional requires 'had + past participle' in the if-clause and 'could/would have + past participle' in the result clause."
  },
  {
    id: 26, level: "B2", topic: "Concession & Contrast", type: "multiple_choice",
    title: "Despite / In Spite Of vs Although",
    instruction: "Select the accurate concession linker.",
    question: "___ facing fierce market competition, the startup achieved profitability within 18 months.",
    options: ["Although", "Despite", "Even though", "Whereas"],
    answer: 1,
    explanation: "'Despite' and 'in spite of' are prepositions followed by a noun phrase or gerund ('facing...'). 'Although' requires a full clause."
  },
  {
    id: 27, level: "B2", topic: "Causative Verbs", type: "fill_blank",
    title: "Causative Form: Have / Get Something Done",
    instruction: "Fill in the blank with the correct causative past participle.",
    question: "We had our company cybersecurity audit ___ (conduct) by an independent firm.",
    answer: "conducted",
    hint: "Structure: have + object + past participle.",
    explanation: "The causative pattern 'have + object + past participle' indicates arranging for someone else to perform an action."
  },
  {
    id: 28, level: "B2", topic: "Wishes and Regrets", type: "multiple_choice",
    title: "Wish + Past Perfect for Past Regrets",
    instruction: "Choose the correct tense after 'I wish'.",
    question: "I wish I ___ more attention to the financial terms before signing the contract.",
    options: ["paid", "had paid", "would pay", "have paid"],
    answer: 1,
    explanation: "To express regret about a past action, use 'wish + past perfect' (had paid)."
  },
  {
    id: 29, level: "B2", topic: "Relative Clauses", type: "multiple_choice",
    title: "Non-Defining Relative Clauses",
    instruction: "Select the correct relative pronoun and punctuation rule.",
    question: "Our lead architect, ___ has worked at Google for five years, proposed the redesign.",
    options: ["that", "which", "who", "whom"],
    answer: 2,
    explanation: "In non-defining relative clauses set off by commas, use 'who' for people. 'That' is never used in non-defining clauses."
  },
  {
    id: 30, level: "B2", topic: "Future Perfect", type: "fill_blank",
    title: "Future Perfect (By the time...)",
    instruction: "Fill in the future perfect form of 'complete'.",
    question: "By next September, our engineering team ___ (complete) the microservices migration.",
    answer: "will have completed",
    hint: "Structure: will have + past participle.",
    explanation: "Future Perfect (will have completed) expresses an action that will be completed before a specified future time."
  },
  {
    id: 31, level: "B2", topic: "Mixed Conditionals", type: "multiple_choice",
    title: "Mixed Conditional (Past Action, Present Result)",
    instruction: "Choose the correct verb combination.",
    question: "If he ___ the flight yesterday, he ___ in Paris right now.",
    options: [
      "hadn't missed / would be",
      "didn't miss / was",
      "hadn't missed / would have been",
      "wouldn't miss / will be"
    ],
    answer: 0,
    explanation: "Past condition ('hadn't missed') with a present result ('would be right now') is a mixed conditional."
  },
  {
    id: 32, level: "B2", topic: "Phrasal Verbs", type: "multiple_choice",
    title: "Advanced Phrasal Verbs in Context",
    instruction: "Select the phrasal verb meaning 'to postpone or delay'.",
    question: "Due to heavy thunderstorms, the organizers decided to ___ the marathon until next month.",
    options: ["call off", "put off", "bring about", "give in"],
    answer: 1,
    explanation: "'Put off' means to postpone or delay, whereas 'call off' means to cancel entirely."
  },

  // ==========================================
  // C1 GRAMMAR (Advanced Academic & Professional)
  // ==========================================
  {
    id: 33, level: "C1", topic: "Inversion", type: "multiple_choice",
    title: "Negative Adverbial Inversion",
    instruction: "Choose the correct inverted word order.",
    question: "Seldom ___ such rapid consensus across sovereign delegations.",
    options: [
      "we have witnessed",
      "have we witnessed",
      "did we witnessed",
      "we witnessed"
    ],
    answer: 1,
    explanation: "When negative or limiting adverbs (seldom, rarely, scarcely) begin a clause, subject-auxiliary inversion is mandatory: 'Seldom have we witnessed'."
  },
  {
    id: 34, level: "C1", topic: "Subjunctive Mood", type: "fill_blank",
    title: "Present Subjunctive in Formal Mandates",
    instruction: "Fill in the base form of the verb required by the formal subjunctive.",
    question: "The board of directors insisted that the Chief Executive Officer ___ (step) down immediately.",
    answer: "step",
    hint: "The subjunctive mood uses the bare infinitive (base form) regardless of person.",
    explanation: "After verbs of demand, insistence, or proposal (insist, demand, recommend that), formal English requires the bare subjunctive: 'step', not 'steps' or 'stepped'."
  },
  {
    id: 35, level: "C1", topic: "Cleft Sentences", type: "multiple_choice",
    title: "It-Cleft for Rhetorical Focus",
    instruction: "Select the grammatically accurate cleft construction.",
    question: "___ that ultimately precipitated the company's unexpected insolvency.",
    options: [
      "It was executive complacency",
      "That executive complacency was",
      "What was executive complacency",
      "Because of executive complacency"
    ],
    answer: 0,
    explanation: "An It-cleft sentence takes the structure 'It is/was [focus] that/who [clause]': 'It was executive complacency that...'"
  },
  {
    id: 36, level: "C1", topic: "Participle Clauses", type: "multiple_choice",
    title: "Reduced Participle Clauses",
    instruction: "Choose the correct participle form to reduce the dependent clause.",
    question: "___ by soaring inflation, the central bank decided to raise benchmark interest rates.",
    options: ["Confronting", "Confronted", "Having confronted", "To confront"],
    answer: 1,
    explanation: "'Confronted by...' is a passive past-participle clause replacing 'Because it was confronted by...'."
  },
  {
    id: 37, level: "C1", topic: "Inversion", type: "fill_blank",
    title: "Under No Circumstances Inversion",
    instruction: "Complete the inverted sentence with the correct auxiliary verb.",
    question: "Under no circumstances ___ (should/will) employee credentials be shared with external contractors.",
    answer: "should",
    hint: "Use the modal 'should' expressing formal prohibition.",
    explanation: "'Under no circumstances should...' uses inverted order: prepositional negative phrase + modal + subject + verb."
  },
  {
    id: 38, level: "C1", topic: "Modal Past Deductions", type: "multiple_choice",
    title: "Past Modal Deductions: Must Have vs Should Have",
    instruction: "Choose the modal expressing logical certainty about a past event.",
    question: "The encrypted file was accessed at 3 AM using the admin key. The intruder ___ insider access.",
    options: ["must have had", "should have had", "might have had", "would have had"],
    answer: 0,
    explanation: "'Must have had' indicates strong logical deduction based on undeniable evidence in the past."
  },
  {
    id: 39, level: "C1", topic: "Fronting & Emphasis", type: "multiple_choice",
    title: "Adjective Fronting with As / Though",
    instruction: "Select the correct concessive fronted structure.",
    question: "___ the theoretical proof may seem, its practical implementation is surprisingly straightforward.",
    options: [
      "Complex as",
      "Although complex",
      "Despite complex",
      "However complex"
    ],
    answer: 0,
    explanation: "The fronting pattern 'Adjective + as/though + subject + verb' expresses concession: 'Complex as the proof may seem...'."
  },

  // ==========================================
  // C2 GRAMMAR (Mastery & Sophistication)
  // ==========================================
  {
    id: 40, level: "C2", topic: "Inverted Conditionals", type: "multiple_choice",
    title: "Inverted Conditional: 'Had it not been for'",
    instruction: "Choose the correct literary inverted conditional.",
    question: "___ timely fiscal intervention, the banking sector would have suffered catastrophic collapse.",
    options: [
      "Had it not been for",
      "Were it not been for",
      "If it wasn't for",
      "Should it not be for"
    ],
    answer: 0,
    explanation: "'Had it not been for [noun]' is the formal inversion of 'If it had not been for', indicating a past counterfactual condition."
  },
  {
    id: 41, level: "C2", topic: "Inverted Conditionals", type: "fill_blank",
    title: "Hypothetical Inversion with 'Were we to'",
    instruction: "Fill in the initial inverted auxiliary for this formal conditional.",
    question: "___ (Were/Had) we to compromise on data security, our institutional reputation would be permanently forfeited.",
    answer: "Were",
    hint: "Use 'Were + subject + to-infinitive' for formal hypothetical conditionals.",
    explanation: "'Were we to compromise...' is the formal literary inversion of 'If we were to compromise...'."
  },
  {
    id: 42, level: "C2", topic: "Locative Inversion", type: "multiple_choice",
    title: "Full Inversion after Prepositional Phrases",
    instruction: "Select the sentence exhibiting grammatically valid full locative inversion.",
    question: "Which of the following demonstrates correct literary locative inversion?",
    options: [
      "At the summit of the mountain stood an ancient stone sanctuary.",
      "At the summit of the mountain an ancient stone sanctuary stood.",
      "At the summit of the mountain did stand an ancient stone sanctuary.",
      "At the summit of the mountain was standing an ancient stone sanctuary."
    ],
    answer: 0,
    explanation: "When a locative prepositional phrase is fronted, the main verb precedes the full subject without an auxiliary: 'At the summit stood an ancient sanctuary'."
  },
  {
    id: 43, level: "C2", topic: "Subjunctive Idioms", type: "multiple_choice",
    title: "Fixed Subjunctive Formulas: 'Be that as it may'",
    instruction: "Choose the formal subjunctive phrase expressing concession.",
    question: "The economic forecast is undeniably bleak; ___, we must remain steadfast in our long-term investments.",
    options: [
      "be that as it may",
      "as it may be",
      "being that as it is",
      "may it be so"
    ],
    answer: 0,
    explanation: "'Be that as it may' is an archaic subjunctive formula meaning 'nevertheless' or 'regardless of that truth'."
  },
  {
    id: 44, level: "C2", topic: "Litotes & Double Negatives", type: "multiple_choice",
    title: "Rhetorical Litotes (Understatement)",
    instruction: "Select the sentence employing litotes to convey deliberate, nuanced affirmation.",
    question: "Which phrasing correctly uses litotes for sophisticated rhetorical understatement?",
    options: [
      "The ambassador's intervention was not without merit.",
      "The ambassador was very completely right.",
      "The ambassador did not say anything good.",
      "Without merit the ambassador spoke."
    ],
    answer: 0,
    explanation: "'Not without merit' is a classic litotes (negating the contrary) to express subtle, measured approbation."
  },
  {
    id: 45, level: "C2", topic: "Negative Polarity", type: "fill_blank",
    title: "No Sooner ... Than Correlation",
    instruction: "Fill in the required conjunction correlating with 'No sooner'.",
    question: "No sooner had the sovereign treaty been ratified ___ violent civil unrest erupted along the border.",
    answer: "than",
    hint: "'No sooner' always pairs with 'than' (not 'when').",
    explanation: "'No sooner had [subject] [participle] than...' is a strict correlative inversion pair. ('Hardly/Scarcely' pairs with 'when')."
  },
  {
    id: 46, level: "C2", topic: "Syntactic Parallelism", type: "multiple_choice",
    title: "Correlative Conjunctions: Not Only ... But Also",
    instruction: "Choose the option with flawless structural parallelism.",
    question: "Which sentence maintains rigorous syntactic parallelism?",
    options: [
      "The treaty not only curtailed ballistic proliferation but also stabilized multilateral diplomacy.",
      "The treaty curtailed not only ballistic proliferation but also it stabilized multilateral diplomacy.",
      "Not only the treaty curtailed ballistic proliferation but stabilized diplomacy.",
      "The treaty not only was curtailing ballistic proliferation but also diplomacy."
    ],
    answer: 0,
    explanation: "Parallelism requires the elements following 'not only' and 'but also' to share identical grammatical structure (verb phrase + noun phrase)."
  },
  {
    id: 47, level: "C2", topic: "Hedging & Academic Stance", type: "multiple_choice",
    title: "Epistemic Hedging in Academic Discourse",
    instruction: "Select the sentence demonstrating appropriate academic hedging and neutrality.",
    question: "How should a scholar frame an empirical correlation without claiming premature causality?",
    options: [
      "The data unequivocally proves that poverty causes crime.",
      "The empirical evidence suggests a tentative correlation that warrants further longitudinal investigation.",
      "There is no doubt whatsoever that this trend will continue forever.",
      "Anyone who analyzes the numbers must agree with our conclusion."
    ],
    answer: 1,
    explanation: "Academic discourse utilizes epistemic hedges ('suggests a tentative correlation', 'warrants further investigation') to avoid unsubstantiated dogmatic assertions."
  }
];
