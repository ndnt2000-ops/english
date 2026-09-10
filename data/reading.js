const READING_DATA = [
  // ==========================================
  // A1 PASSAGES (Beginner)
  // ==========================================
  {
    id: 1, level: "A1", title: "My Daily Routine", topic: "Daily Life",
    readTime: "2 min", wordCount: 85,
    content: `My name is Tom. I wake up at 7 o'clock every morning. First, I brush my teeth and wash my face. Then, I eat breakfast with my family. I usually eat warm bread and drink fresh orange juice.

After breakfast, I go to school by bus. School starts at 8 o'clock sharp. I have English, Math, and Art classes. I have lunch at school at 12 o'clock with my friends.

After school, I go home at 4 o'clock. I do my homework and help my parents. I eat dinner at 7 o'clock. Finally, I read a short story and go to bed at 10 o'clock.`,
    questions: [
      { question: "What time does Tom wake up?", options: ["6 o'clock", "7 o'clock", "8 o'clock", "9 o'clock"], answer: 1, explanation: "The text states: 'I wake up at 7 o'clock every morning.'" },
      { question: "How does Tom go to school?", options: ["By bicycle", "On foot", "By bus", "By train"], answer: 2, explanation: "Tom goes to school by bus." },
      { question: "What does Tom drink for breakfast?", options: ["Coffee", "Fresh orange juice", "Hot chocolate", "Cold milk"], answer: 1, explanation: "He drinks fresh orange juice." },
      { question: "When does Tom go to bed?", options: ["9 o'clock", "10 o'clock", "11 o'clock", "Midnight"], answer: 1, explanation: "He goes to bed at 10 o'clock." }
    ]
  },
  {
    id: 2, level: "A1", title: "A Day at the Animal Shelter", topic: "Animals & Care",
    readTime: "2 min", wordCount: 95,
    content: `On Saturdays, Maya visits the local animal shelter. The shelter is bright and clean. There are twelve dogs and eight cats living there.

First, Maya fills the bowls with fresh water and dry food. The dogs wag their tails happily when they see her. Next, she takes a small golden puppy named Sunny for a walk in the green garden.

In the afternoon, families come to the shelter to adopt pets. Maya feels joyful when an animal finds a loving home. Taking care of animals brings her great happiness.`,
    questions: [
      { question: "When does Maya visit the animal shelter?", options: ["On Mondays", "On Saturdays", "Every evening", "On Sundays only"], answer: 1, explanation: "The text says 'On Saturdays, Maya visits the local animal shelter.'" },
      { question: "How many cats are in the shelter?", options: ["Six", "Eight", "Twelve", "Twenty"], answer: 1, explanation: "There are eight cats living there." },
      { question: "What is the name of the golden puppy?", options: ["Lucky", "Buddy", "Sunny", "Max"], answer: 2, explanation: "The puppy is named Sunny." },
      { question: "Why do families visit the shelter?", options: ["To buy food", "To adopt pets", "To take photos", "To train dogs"], answer: 1, explanation: "Families come to adopt pets." }
    ]
  },
  {
    id: 3, level: "A1", title: "My Green City Garden", topic: "Nature & Home",
    readTime: "2 min", wordCount: 90,
    content: `Anna has a small vegetable garden on her apartment balcony. Every morning, she waters her bright red tomatoes and sweet mint plants.

The sun shines warmly on the balcony until noon. Small yellow butterflies often visit the flowers. Anna's mother uses the fresh mint to make healthy green tea.

Anna loves gardening because seeing the tiny green leaves grow brings peace to her mind. She plans to plant purple eggplants next month.`,
    questions: [
      { question: "Where is Anna's garden located?", options: ["In a big park", "On her apartment balcony", "At her school", "Behind a farm"], answer: 1, explanation: "The text states she has a garden on her apartment balcony." },
      { question: "What does Anna's mother make with mint?", options: ["Tomato soup", "Mint ice cream", "Green tea", "Fresh bread"], answer: 2, explanation: "Her mother uses fresh mint to make healthy green tea." },
      { question: "What will Anna plant next month?", options: ["Purple eggplants", "Red roses", "Green apples", "Sweet corn"], answer: 0, explanation: "She plans to plant purple eggplants next month." }
    ]
  },
  {
    id: 4, level: "A1", title: "Cooking Sunday Dinner", topic: "Food & Family",
    readTime: "2 min", wordCount: 105,
    content: `Sunday is cooking day in David's house. At 10 AM, David and his father walk to the local market. They buy fresh fish, carrots, onions, and potatoes.

In the afternoon, everyone helps in the kitchen. David washes the carrots, while his sister cuts the sweet potatoes. Their mother cooks a delicious fish soup in a large metal pot.

The kitchen smells wonderful. At 6 PM, the whole family sits around the dinner table. They eat warm soup, laugh together, and share stories about their school week.`,
    questions: [
      { question: "What time do David and his father go to the market?", options: ["8 AM", "10 AM", "12 PM", "6 PM"], answer: 1, explanation: "They walk to the market at 10 AM." },
      { question: "What does David wash?", options: ["The plates", "The carrots", "The potatoes", "The fish"], answer: 1, explanation: "David washes the carrots." },
      { question: "What does the family cook for dinner?", options: ["Fried chicken", "Beef noodles", "Fish soup", "Cheese pizza"], answer: 2, explanation: "Their mother cooks a delicious fish soup." }
    ]
  },

  // ==========================================
  // A2 PASSAGES (Elementary)
  // ==========================================
  {
    id: 5, level: "A2", title: "A Weekend in London", topic: "Travel & History",
    readTime: "3 min", wordCount: 155,
    content: `Last summer, my family visited London for the first time. We flew from Hanoi and arrived at Heathrow Airport in the morning. The cool breeze was refreshing.

On our first day, we went straight to Buckingham Palace. We saw the famous Changing of the Guard ceremony, with soldiers wearing red tunics and tall bearskin hats. Afterward, we walked along the River Thames toward Tower Bridge.

On the second day, we explored the British Museum. The Egyptian galleries with ancient mummies fascinated my younger brother. In the late afternoon, we boarded the London Eye. From the glass pod, the panoramic view of Big Ben and the city skyline was breathtaking.

London seamlessly blends deep historical traditions with modern energy. We took hundreds of photos and bought souvenirs before returning home.`,
    questions: [
      { question: "Where did the family begin their journey?", options: ["London", "Hanoi", "Tokyo", "Paris"], answer: 1, explanation: "They flew from Hanoi." },
      { question: "What did they watch at Buckingham Palace?", options: ["A royal parade", "The Changing of the Guard", "A theater play", "A soccer match"], answer: 1, explanation: "They watched the Changing of the Guard ceremony." },
      { question: "What fascinated the younger brother at the museum?", options: ["Roman coins", "Ancient Egyptian mummies", "Greek statues", "Viking ships"], answer: 1, explanation: "The ancient Egyptian mummies fascinated him." },
      { question: "What is the London Eye?", options: ["A clock tower", "A royal palace", "A giant observation wheel", "A historic bridge"], answer: 2, explanation: "It is a giant observation Ferris wheel overlooking the city." }
    ]
  },
  {
    id: 6, level: "A2", title: "Coffee Culture Around the Globe", topic: "Food & Culture",
    readTime: "3 min", wordCount: 145,
    content: `Coffee is much more than a morning beverage; it represents unique social traditions worldwide.

In Italy, people drink a quick shot of rich espresso while standing at the bar counter. Drinking cappuccino after 11 a.m. is uncommon because Italians believe warm milk hinders afternoon digestion.

In Vietnam, coffee culture is relaxed and social. People sit on small roadside stools and enjoy 'cà phê sữa đá'—strong robusta coffee brewed through a metal filter over sweet condensed milk and ice. In Scandinavian countries like Sweden, taking a 'fika'—a dedicated coffee break with sweet cinnamon buns—is an essential daily ritual.

Wherever you travel, sharing a cup of coffee connects people and builds friendships across borders.`,
    questions: [
      { question: "How do Italians traditionally drink espresso?", options: ["Sitting for hours", "Standing at the bar counter", "With ice cream only", "In paper cups to go"], answer: 1, explanation: "They drink a quick shot of espresso while standing at the bar." },
      { question: "What is Swedish 'fika'?", options: ["A traditional dinner", "A coffee break with pastries", "A weekend holiday", "A coffee festival"], answer: 1, explanation: "'Fika' is a daily coffee break accompanied by sweet buns." },
      { question: "What makes Vietnamese iced coffee unique?", options: ["Instant powder", "Condensed milk with filter brew", "Added cocoa butter", "Sparkling mineral water"], answer: 1, explanation: "It uses dark robusta brewed through a filter over condensed milk and ice." }
    ]
  },
  {
    id: 7, level: "A2", title: "Bicycle-Friendly Cities of Europe", topic: "Urban Life & Transport",
    readTime: "3 min", wordCount: 160,
    content: `In cities like Amsterdam and Copenhagen, bicycles outnumber automobiles on the streets. Dedicated bike lanes painted in bright colors run parallel to main avenues, protected by concrete curbs.

Children learn traffic safety rules in primary school, and commuters ride to work in all weather conditions, even during light rain or winter snow. Many train stations feature massive multi-level parking garages designed specifically for thousands of bicycles.

Cycling keeps citizens fit and drastically cuts air pollution. City planners from around the globe frequently visit the Netherlands to study how urban infrastructure can encourage cycling while maintaining safety for pedestrians and drivers alike.`,
    questions: [
      { question: "Which cities are famous for having more bicycles than cars?", options: ["Rome and Madrid", "Amsterdam and Copenhagen", "London and Dublin", "Berlin and Vienna"], answer: 1, explanation: "Amsterdam and Copenhagen are highlighted in the text." },
      { question: "How are bike lanes protected from car traffic?", options: ["By high fences", "By concrete curbs", "By wooden gates", "By police officers"], answer: 1, explanation: "They are protected by concrete curbs." },
      { question: "What is a major environmental benefit of cycling?", options: ["Cheaper car prices", "Drastic reduction in air pollution", "Faster train speeds", "Larger highways"], answer: 1, explanation: "Cycling keeps citizens fit and drastically cuts air pollution." }
    ]
  },
  {
    id: 8, level: "A2", title: "Learning to Play the Guitar", topic: "Arts & Hobbies",
    readTime: "3 min", wordCount: 150,
    content: `When Liam was twelve, his grandfather gave him a classical acoustic guitar. At first, Liam found pressing his fingertips against the steel strings quite painful. His fingers developed calluses after two weeks of daily practice.

Liam watched instructional video lessons on the internet every afternoon. He began by memorizing fundamental open chords: C major, G major, and D minor. Strumming rhythmically to simple folk songs gave him a sense of accomplishment.

Six months later, Liam played his first complete acoustic song in front of his classmates during the school talent show. Playing music taught Liam patience, discipline, and the joy of creative expression.`,
    questions: [
      { question: "Who gave Liam his first guitar?", options: ["His music teacher", "His grandfather", "His mother", "His best friend"], answer: 1, explanation: "His grandfather gave him the classical acoustic guitar." },
      { question: "What happened to Liam's fingers after two weeks?", options: ["They developed calluses", "He broke a finger", "Nothing changed", "They became weak"], answer: 0, explanation: "His fingers developed calluses from pressing the strings." },
      { question: "What life skills did playing guitar teach Liam?", options: ["Cooking and cleaning", "Patience and discipline", "Driving safely", "Computer programming"], answer: 1, explanation: "Playing music taught him patience, discipline, and creative expression." }
    ]
  },

  // ==========================================
  // B1 PASSAGES (Intermediate)
  // ==========================================
  {
    id: 9, level: "B1", title: "The Psychology of Habit Formation", topic: "Cognitive Science",
    readTime: "4 min", wordCount: 210,
    content: `Habits are automated behavioral routines that conserve cognitive energy. Pioneering research conducted by behavioral psychologists revealed that habits follow a neurological loop with three interdependent components: the cue, the routine, and the reward.

The cue acts as a trigger that signals the brain to enter automatic pilot. This could be a specific time of day, an emotional state, or an environmental factor. Next follows the routine—the physical, mental, or emotional behavior performed. Finally, the reward satisfies the initial craving and reinforces the brain's inclination to repeat the loop in the future.

Modern habit coaches suggest that instead of attempting to extinguish an undesirable habit completely, individuals should maintain the original cue and reward while substituting a constructive routine. For example, if stress (cue) prompts unhealthy snacking (routine) to achieve calm (reward), substituting a brisk five-minute walk can provide the identical emotional release without detrimental health impacts.`,
    questions: [
      { question: "What is the primary function of habits for the brain?", options: ["To eliminate memory", "To conserve cognitive energy", "To increase heart rate", "To replace all conscious decisions"], answer: 1, explanation: "The text explains that habits automate routines to conserve cognitive energy." },
      { question: "What are the three parts of the habit loop?", options: ["Input, process, output", "Cue, routine, reward", "Desire, action, regret", "Trigger, thought, feeling"], answer: 1, explanation: "The loop consists of cue, routine, and reward." },
      { question: "What strategy is suggested for changing an unwanted habit?", options: ["Punishing oneself harshly", "Suppressing the cue completely", "Keeping the cue and reward while changing the routine", "Ignoring the cravings"], answer: 2, explanation: "Substitute the routine while maintaining the original cue and reward." }
    ]
  },
  {
    id: 10, level: "B1", title: "Electric Mobility & Smart Cities", topic: "Green Technology",
    readTime: "4 min", wordCount: 200,
    content: `Urban transportation is undergoing a monumental transition as electric vehicles (EVs) replace fossil fuel engines. Driven by falling lithium-ion battery costs and ambitious national climate pledges, automakers are investing billions into electrified fleets.

However, widespread EV adoption introduces new infrastructure demands. Cities must construct accessible fast-charging grids in residential neighborhoods and along major transit corridors. Furthermore, grid operators must ensure that the electricity powering these vehicles originates from renewable sources such as wind and solar, rather than coal-fired power plants.

Urban planners are also integrating electric buses, shared e-scooters, and autonomous micro-shuttles into centralized mobile applications. By creating interconnected, zero-emission transportation ecosystems, metropolitan areas can dramatically reduce urban noise and particulate air pollution, enhancing overall public health.`,
    questions: [
      { question: "What has accelerated the shift toward electric vehicles?", options: ["Cheaper gasoline", "Falling battery costs and climate goals", "A decline in public transit", "Free parking everywhere"], answer: 1, explanation: "Falling battery costs and ambitious national climate pledges drove the shift." },
      { question: "What infrastructure challenge do cities face with EVs?", options: ["Building accessible charging networks", "Designing larger roads", "Producing more gasoline", "Stopping public bus routes"], answer: 0, explanation: "Cities must deploy widespread, accessible fast-charging grids." },
      { question: "How can EVs truly deliver environmental benefits?", options: ["If they are faster", "If charging power comes from renewables", "If they use heavier metals", "If they cost less to paint"], answer: 1, explanation: "The electricity must come from renewable sources rather than coal plants." }
    ]
  },
  {
    id: 11, level: "B1", title: "The Art of Active Listening in Remote Work", topic: "Communication & Workplace",
    readTime: "4 min", wordCount: 215,
    content: `As hybrid and fully remote workplaces become permanent fixtures of the global economy, interpersonal communication has shifted from watercooler chats to video conferences and asynchronous chat channels. In this virtual environment, the subtle nuances of body language and physical proximity are lost. Consequently, mastering active listening has emerged as an indispensable workplace competency.

Active listening requires more than merely hearing the acoustic words of a colleague. It demands complete mental presence, conscious suspension of judgment, and deliberate confirmation of intent. Practitioners summarize key points before responding, ask clarifying open-ended questions, and validate teammates' emotional concerns.

When distributed engineering and marketing teams practice structured active listening, misunderstandings drop dramatically. Meetings become concise and purposeful, psychological safety flourishes, and team members feel valued irrespective of geographic time zones.`,
    questions: [
      { question: "Why has active listening become critical in remote work?", options: ["Video cameras are too expensive", "Physical body language cues are largely absent online", "Companies banned all emails", "Headphones damage hearing"], answer: 1, explanation: "Without physical proximity and body language, active listening bridges the gap." },
      { question: "What is an essential habit of an active listener?", options: ["Interrupting immediately", "Summarizing key points and asking clarifying questions", "Multitasking during calls", "Agreeing with everything silently"], answer: 1, explanation: "Summarizing points and asking open-ended questions confirms mutual understanding." },
      { question: "What organizational benefit results from active listening?", options: ["Higher meeting frequency", "Fewer misunderstandings and higher psychological safety", "Cheaper internet connections", "Less vacation time"], answer: 1, explanation: "It reduces misunderstandings and builds psychological safety across time zones." }
    ]
  },
  {
    id: 12, level: "B1", title: "Biodiversity in Urban Micro-Forests", topic: "Environment & Urban Ecology",
    readTime: "4 min", wordCount: 205,
    content: `Across crowded metropolises worldwide, botanists and local communities are planting 'pocket forests'—dense, biodiverse plots of native flora no larger than a tennis court. Inspired by the Japanese Miyawaki planting method, these miniature ecosystems grow up to ten times faster and absorb thirty times more carbon than conventional parks.

By planting diverse native species in multi-layered tiers—tall canopy trees, fruit shrubs, and ground-covering wildflowers—these micro-forests recreate the complex biological networks of ancient old-growth forests.

Within just two years, urban pocket forests become bustling havens for pollinators such as honeybees, songbirds, and beneficial insects. Additionally, they lower ambient air temperatures during summer heatwaves and absorb heavy rainfall, preventing flash floods in dense concrete neighborhoods.`,
    questions: [
      { question: "How large are typical urban pocket forests?", options: ["As large as an entire city", "About the size of a tennis court", "Thousands of hectares", "Only a single flower pot"], answer: 1, explanation: "Pocket forests are typically dense plots no larger than a tennis court." },
      { question: "Who originated the dense micro-forest planting technique?", options: ["Charles Darwin", "Akira Miyawaki", "Rachel Carson", "Alexander von Humboldt"], answer: 1, explanation: "The passage notes they are inspired by the Japanese Miyawaki planting method." },
      { question: "What is a major climatic benefit of micro-forests in cities?", options: ["They stop cold winter winds completely", "They lower ambient temperatures during summer heatwaves", "They eliminate all car traffic", "They produce artificial snow"], answer: 1, explanation: "They cool surrounding air during heatwaves and absorb excess stormwater." }
    ]
  },

  // ==========================================
  // B2 PASSAGES (Upper-Intermediate)
  // ==========================================
  {
    id: 13, level: "B2", title: "Artificial Intelligence in Modern Healthcare", topic: "MedTech & Ethics",
    readTime: "5 min", wordCount: 260,
    content: `The integration of deep learning algorithms into diagnostic radiology and genomics is revolutionizing clinical medicine. Machine learning models trained on millions of medical scans can now detect pulmonary nodules, diabetic retinopathy, and subtle fractures with accuracy comparable to, or exceeding, seasoned clinicians.

Beyond imaging, predictive analytics algorithms help intensive care units anticipate septic shock hours before visible symptoms manifest, granting doctors a vital window for early pharmacological intervention. Moreover, generative AI models are dramatically shortening drug discovery timelines by simulating molecular folding and predicting protein-ligand affinities in silicon.

Nonetheless, clinical AI adoption generates pressing bioethical challenges. Algorithmic bias remains a critical hazard: models trained predominantly on homogeneous demographic data frequently underperform when evaluating underrepresented populations. Furthermore, the 'black-box' nature of complex neural networks complicates clinical explainability, leaving practitioners unsure of the algorithmic rationale underpinning high-stakes therapeutic recommendations. Establishing rigorous validation standards and regulatory oversight is therefore indispensable to ensure medical algorithms remain safe, transparent, and universally equitable.`,
    questions: [
      { question: "In which area has AI diagnostic accuracy matched expert clinicians?", options: ["Surgical robotics", "Diagnostic imaging and radiology", "Psychiatric counseling", "Hospital administration"], answer: 1, explanation: "Deep learning models detect pulmonary nodules and retinopathy with clinician-level precision." },
      { question: "How does AI expedite pharmaceutical development?", options: ["By replacing lab scientists", "By simulating molecular folding in silicon", "By bypassing safety trials", "By reducing medicine prices directly"], answer: 1, explanation: "Generative AI simulates molecular folding and predicts protein affinities." },
      { question: "What risk is associated with homogeneous training datasets?", options: ["Faster model execution", "Algorithmic bias against underrepresented groups", "Excessive computing costs", "Lack of hospital hardware"], answer: 1, explanation: "Homogeneous data can result in models that underperform on minority populations." }
    ]
  },
  {
    id: 14, level: "B2", title: "Ocean Acidification & Marine Ecosystems", topic: "Ecology & Climate",
    readTime: "5 min", wordCount: 250,
    content: `While atmospheric warming captures substantial headlines, ocean acidification represents an equally catastrophic yet silent ecological consequence of anthropogenic greenhouse emissions. Earth's oceans function as an enormous carbon sink, absorbing approximately 30 percent of human-generated carbon dioxide.

When atmospheric carbon dioxide dissolves into seawater, chemical reactions yield carbonic acid, which dissociates and diminishes the concentration of carbonate ions. Marine calcifying organisms—such as coral polyps, oysters, clams, and pteropods (tiny sea snails)—depend fundamentally on carbonate ions to synthesize their calcium carbonate shells and structural skeletons.

As seawater pH declines, these protective shells become brittle, and coral reefs experience diminished calcification rates, exacerbating their vulnerability to thermal bleaching. Because coral reefs harbor over 25 percent of all marine species and shield coastlines from tempestuous storm surges, reef degradation jeopardizes global marine biodiversity, commercial fisheries, and coastal economies. Mitigating ocean acidification necessitates aggressive decarbonization alongside localized conservation of coastal mangroves and seagrass beds that naturally buffer seawater acidity.`,
    questions: [
      { question: "What percentage of human-produced CO2 is absorbed by oceans?", options: ["Roughly 10 percent", "Approximately 30 percent", "Over 70 percent", "Almost none"], answer: 1, explanation: "Oceans absorb approximately 30 percent of anthropogenic CO2." },
      { question: "Why is the reduction of carbonate ions detrimental to marine life?", options: ["It turns water toxic to fish", "Organisms cannot build shells and skeletons", "It causes underwater volcanoes", "It prevents photosynthesis in kelp"], answer: 1, explanation: "Calcifying organisms rely on carbonate ions to build shells and skeletons." },
      { question: "What natural habitats help buffer ocean acidity locally?", options: ["Sandy beaches", "Mangroves and seagrass beds", "Deep-sea trenches", "Concrete seawalls"], answer: 1, explanation: "Mangroves and seagrass beds naturally sequester carbon and buffer acidity." }
    ]
  },
  {
    id: 15, level: "B2", title: "The Circular Economy Paradigm", topic: "Economics & Sustainability",
    readTime: "5 min", wordCount: 255,
    content: `For over two centuries, industrialized civilization has operated upon a linear economic paradigm colloquially termed 'take, make, waste.' Raw minerals and fossil reserves are extracted, refined into single-use consumer goods, and ultimately discarded into landfill heaps or aquatic reservoirs. As non-renewable mineral reserves diminish and waste disposal reaches ecological tipping points, pioneering economists are advocating a transition toward the circular economy.

The circular framework is restorative by design. Products are engineered from inception for modular disassembly, upgradeability, and component interchangeability rather than planned obsolescence. At end-of-life, materials are reclaimed through closed-loop recycling systems to re-enter industrial supply chains without degrading physical purity.

Business models are concurrently shifting from physical ownership to 'product-as-a-service.' In this model, manufacturers retain legal custody of capital equipment—such as commercial aircraft turbines or enterprise lighting fixtures—incentivizing them to maximize longevity, energy efficiency, and repairability. Embracing circularity decouples economic prosperity from raw material depletion.`,
    questions: [
      { question: "What characterizes the traditional 'linear economy'?", options: ["Recycling every product", "The 'take, make, waste' extractive model", "Government price fixing", "Local farming only"], answer: 1, explanation: "The linear paradigm extracts raw materials, makes goods, and discards waste." },
      { question: "In circular design, how are consumer products engineered?", options: ["To break after one year", "For modular disassembly and easy repair", "Using toxic glues", "Without any metal parts"], answer: 1, explanation: "Products are engineered for disassembly, upgradeability, and component reuse." },
      { question: "What is the primary incentive in a 'product-as-a-service' model?", options: ["Selling replacement units quickly", "Maximizing product durability and longevity", "Avoiding customer contact", "Exporting waste to other countries"], answer: 1, explanation: "Because manufacturers retain custody, they are motivated to engineer long-lasting goods." }
    ]
  },
  {
    id: 16, level: "B2", title: "Cognitive Ergonomics & The Flow State", topic: "Neuroscience & Performance",
    readTime: "5 min", wordCount: 245,
    content: `In an era characterized by hyper-connectivity, fragmented attention has emerged as the primary impediment to intellectual accomplishment. Cognitive scientists distinguish between low-engagement multitasking—which exhausts executive cognitive bandwidth—and the 'flow state,' a term coined by psychologist Mihaly Csikszentmihalyi to describe optimal human absorption in challenging tasks.

Flow occurs when there is an exquisite equilibrium between the perceived difficulty of a challenge and the individual's subjective skills. If the challenge dwarfs ability, debilitating anxiety ensues; conversely, if skill far exceeds challenge, boredom and lethargy triumph.

Neurologically, flow triggers transient hypofrontality: the temporary downregulation of the prefrontal cortex responsible for inner criticism and self-conscious doubt. Concurrently, the brain releases a potent neurochemical cocktail of dopamine, norepinephrine, and anandamide. By designing focused work environments free from smartphone interruptions and dedicating unbroken 90-minute periods to challenging craft, knowledge workers can cultivate flow systematically.`,
    questions: [
      { question: "Who originally conceptualized the psychological 'flow state'?", options: ["Sigmund Freud", "Mihaly Csikszentmihalyi", "B.F. Skinner", "Carl Jung"], answer: 1, explanation: "The passage identifies psychologist Mihaly Csikszentmihalyi as the pioneer." },
      { question: "When does the flow state typically emerge?", options: ["When tasks are boringly simple", "When challenge and individual skill are in dynamic balance", "When working under extreme exhaustion", "Only during physical sleep"], answer: 1, explanation: "Flow occurs when challenge and personal capability are in equilibrium." },
      { question: "What is transient hypofrontality?", options: ["A permanent brain defect", "Temporary downregulation of self-conscious inner criticism", "Extreme fear response", "Loss of all memory"], answer: 1, explanation: "It is the temporary downregulation of the prefrontal cortex, reducing self-doubt." }
    ]
  },

  // ==========================================
  // C1 PASSAGES (Advanced)
  // ==========================================
  {
    id: 17, level: "C1", title: "The Epistemology of Digital Misinformation", topic: "Media Theory & Cognitive Bias",
    readTime: "6 min", wordCount: 310,
    content: `The democratization of digital publication has coincided with a profound epistemological crisis. While the internet was initially heralded as an unconstrained conduit for universal enlightenment, algorithmic curation on hyper-commercialized platforms has fractured the public sphere into polarized echo chambers.

Social algorithms engineered to maximize user engagement invariably prioritize content that elicits visceral emotional arousal—particularly indignation and tribal antagonism. Consequently, sensationalized falsehoods diffuse across social networks significantly faster and deeper than nuanced empirical truth. This phenomenon is compounded by human cognitive heuristics: confirmation bias primes users to credulously consume narratives affirming antecedent prejudices, while the 'illusory truth effect' fosters implicit belief in demonstrably fabricated assertions merely through repetitive exposure.

Remediating this crisis requires transcending simplistic technocratic censorship, which risks stifling legitimate democratic dissent. Instead, institutional resilience demands systemic interventions: algorithmic transparency mandates, verifiable provenance protocols such as cryptographic content credentials, and pedagogical reforms that inculcate adversarial digital media literacy. Citizens must be equipped to interrogate contextual provenance, deconstruct rhetorical fallacies, and discern between consensus-driven scientific methodology and manufactured epistemic doubt.`,
    questions: [
      { question: "What drives the viral propagation of misinformation on social platforms?", options: ["Complex academic citations", "Algorithmic optimization for emotional engagement", "Government directives", "Strict editorial moderation"], answer: 1, explanation: "Algorithms prioritize content that elicits strong emotional reactions and moral outrage." },
      { question: "What is the 'illusory truth effect'?", options: ["Believing that all news is true", "Believing repeated claims regardless of their veracity", "A visual hallucination caused by screens", "The human inability to read complex texts"], answer: 1, explanation: "Repeated exposure to an assertion increases subjective belief in its truthfulness." },
      { question: "Why is technocratic censorship deemed inadequate as a sole solution?", options: ["It requires too much electricity", "It risks suppressing legitimate democratic discourse", "It only works on video content", "It makes servers crash"], answer: 1, explanation: "Censorship can easily overreach and stifle legitimate dissenting voices." }
    ]
  },
  {
    id: 18, level: "C1", title: "Semiconductor Geopolitics & Silicon Sovereignty", topic: "Geopolitics & Supply Chains",
    readTime: "6 min", wordCount: 320,
    content: `The foundational architecture of contemporary geopolitical power is no longer forged in petroleum refineries, but etched upon silicon wafers measured in nanometers. Advanced microprocessors—indispensable for artificial intelligence supercomputing, aerospace telecommunications, and sovereign cryptographic defense—have become the most contested strategic commodity of the twenty-first century.

Yet the semiconductor manufacturing nexus exhibits extreme, fragile geographical concentration. While architectural design is largely dominated by American fabless firms, commercial fabrication of leading-edge sub-three-nanometer nodes is almost exclusively clustered in Taiwan and South Korea. Furthermore, the extreme ultraviolet (EUV) photolithography apparatuses required to etch these microscopic transitor topologies are fabricated by a solitary Dutch enterprise, ASML, whose machinery relies on hundreds of specialized suppliers across Germany, Japan, and the United States.

This hyper-specialized choke-point architecture has spurred major powers to pursue aggressive 'silicon sovereignty' through multi-billion-dollar industrial subsidies. However, replicating an entire semiconductor fabrication ecosystem domestically confronts formidable physical, metallurgical, and intellectual hurdles. True autarky in semiconductor supply chains remains an economic mirage; rather, strategic security hinges upon multilateral co-dependency and protecting critical maritime corridors.`,
    questions: [
      { question: "What single company manufactures commercial EUV lithography machines?", options: ["Intel", "TSMC", "ASML", "Samsung"], answer: 2, explanation: "The Dutch company ASML is the solitary manufacturer of commercial EUV photolithography tools." },
      { question: "Where is the manufacturing of leading-edge sub-3nm chips primarily concentrated?", options: ["Western Europe and Brazil", "Taiwan and South Korea", "Canada and Mexico", "Australia and India"], answer: 1, explanation: "Fabrication of leading-edge nodes is clustered predominantly in Taiwan and South Korea." },
      { question: "Why is domestic semiconductor autarky considered an 'economic mirage'?", options: ["Because silicon is too cheap to bother making", "Extreme capital intensity, specialized engineering, and global supply dependencies", "Computers will not be needed in the future", "Governments have forbidden chip investments"], answer: 1, explanation: "The sheer complexity of physical, metallurgical, and supplier networks makes complete autarky unfeasible." }
    ]
  },
  {
    id: 19, level: "C1", title: "The Tragedy of the Commons & Atmospheric Sinks", topic: "Environmental Economics & Game Theory",
    readTime: "6 min", wordCount: 315,
    content: `Garrett Hardin's foundational formulation of the 'Tragedy of the Commons' postulated that rational economic actors, acting autonomously within an open-access shared resource, inexorably precipitate systemic ruin. Each individual grazier reaps the entire marginal benefit of introducing an additional cow to common pasture, while the deleterious cost of overgrazing is diffused across the collective community.

In the twenty-first century, this game-theoretic dilemma has scaled from rural grazing lands to the planetary atmosphere. The global climate system functions as an unpriced commons for greenhouse effluent. Sovereign states face a classic collective action free-rider impediment: any unilateral national decarbonization entails immediate domestic political and economic costs, while the climatic benefits are diffused globally to carbon-intensive competitors.

Overcoming this impasse demands international institutional mechanisms grounded in Nobel laureate Elinor Ostrom's polycentric governance principles. Ostrom demonstrated that common-pool resources can avoid exhaustion through transparent monitoring, tiered sanctioning, and mutual trust rather than top-down Leviathan coercion. In contemporary climate diplomacy, this manifests as carbon border adjustment mechanisms and plurilateral climate clubs that penalize non-compliant free-riders while rewarding collective industrial transformation.`,
    questions: [
      { question: "What is the central paradox in the Tragedy of the Commons?", options: ["Private benefits are captured by the individual while degradation costs are shared by the collective", "Public resources are always managed more efficiently than private goods", "Farmers refuse to own animals", "Economic actors always prioritize public charity over self-interest"], answer: 0, explanation: "Individuals capture full private gains while dispersing systemic damage onto the whole community." },
      { question: "How does the free-rider problem manifest in climate diplomacy?", options: ["Citizens refusing to purchase airline tickets", "Nations benefiting from others' emissions cuts without undertaking costly domestic reforms", "Solar companies avoiding taxation", "Scientists withholding research findings"], answer: 1, explanation: "Free-riders enjoy the benefits of global emissions abatement while avoiding domestic sacrifices." },
      { question: "What governance model did Elinor Ostrom propose as an alternative to coercion?", options: ["Complete privatization of all natural air", "Polycentric governance based on monitoring, tiered sanctions, and mutual trust", "A global military dictatorship", "Dismantling all international trade treaties"], answer: 1, explanation: "Ostrom proved that polycentric communities can cooperatively steward shared commons through mutual trust and monitoring." }
    ]
  },

  // ==========================================
  // C2 PASSAGES (Mastery)
  // ==========================================
  {
    id: 20, level: "C2", title: "Linguistic Relativity & The Architecture of Mind", topic: "Cognitive Linguistics & Philosophy",
    readTime: "7 min", wordCount: 350,
    content: `The Sapir-Whorf hypothesis—the proposition that the structural idiosyncrasies of language delineate and predetermine the contours of human cognition—has undergone extensive empirical reevaluation within contemporary cognitive linguistics. While early nineteenth-century linguistic determinism posited an insurmountable epistemic prison wherein speakers were conceptually incarcerated within their mother tongue, modern neo-Whorfian scholarship espouses a subtle yet profound paradigm: linguistic relativity.

Empirical investigations into spatial orientation systems provide compelling substantiation. Speakers of Guugu Yimithirr, an indigenous Australian tongue employing absolute geocentric coordinates (north, south, east, west) rather than egocentric references (left, right, ahead), exhibit an extraordinary, unceasing internal navigational acuity. Their spatial memory and conceptualization of time are inextricably anchored to terrestrial orientation, obliging subconscious cognitive calculations inaccessible to speakers of egocentric linguistic systems.

Similarly, cross-linguistic examinations of grammatical gender, evidentiality markers, and color categorization demonstrate that linguistic structures habituate speakers toward particular perceptual dimensions. Obligatory linguistic categories act as attentional spotlights, compelling the mind to continuously encode evidential provenance—such as whether an assertion was directly witnessed, deduced, or hearsay. Language does not categorically preclude the apprehension of unencoded concepts; rather, it cultivates cognitive efficiencies and habitual paths of least resistance, subtly orchestrating how sensory phenomena are distilled into coherent conscious reality.`,
    questions: [
      { question: "How does modern neo-Whorfian theory differ from classical linguistic determinism?", options: ["It rejects all connection between language and thought", "It posits habitual influence on attention rather than cognitive imprisonment", "It focuses exclusively on written alphabets", "It argues language is biologically programmed without cultural variance"], answer: 1, explanation: "Modern relativity views language as shaping habitual attention and cognitive tendencies rather than absolute limits." },
      { question: "How do Guugu Yimithirr speakers reference spatial locations?", options: ["Using relative left and right terms", "Using cardinal geocentric coordinates", "By referencing ocean currents only", "Through abstract geometric angles"], answer: 1, explanation: "They rely exclusively on absolute cardinal coordinates (north, south, east, west)." },
      { question: "What metaphor describes how grammatical categories influence thought?", options: ["A soundproof chamber", "An attentional spotlight", "A cryptographic cipher", "A chemical catalyst"], answer: 1, explanation: "The passage notes that obligatory categories act as attentional spotlights." }
    ]
  },
  {
    id: 21, level: "C2", title: "Ontological Indeterminacy & The Limits of Formal Systems", topic: "Mathematical Logic & Epistemology",
    readTime: "7 min", wordCount: 360,
    content: `At the dawn of the twentieth century, the formalist program spearheaded by David Hilbert sought to establish mathematics upon an unshakeable, self-contained axiomatic bedrock. The aspiration was intoxicating: to prove that a finite set of consistent axioms could definitively adjudicate the veracity or falsehood of any mathematical proposition, achieving an omniscient, closed deductive universe.

This foundational hubris was irrevocably shattered in 1931 by Kurt Gödel's seminal Incompleteness Theorems. Gödel proved that any consistent axiomatic formulation capable of formalizing basic arithmetic is inherently incomplete; there will inevitably exist true propositions that are systematically unprovable within the parameters of that axiomatic architecture. Gödel employed a breathtaking arithmetization technique, constructing self-referential mathematical statements that essentially asserted their own unprovability, thereby establishing that truth inexorably outstrips syntactic provability.

Concurrently, Alan Turing demonstrated the uncomputability of the Halting Problem, delineating the insurmountable mechanical boundary of algorithmic decidability. These mathematical revelations fundamentally reshaped epistemology. Rather than diminishing the intellectual enterprise, formal indeterminacy emancipated human cognition from mechanistic reductionism, establishing that consciousness, creative intuition, and mathematical discovery transcend closed algorithmic deterministic architectures.`,
    questions: [
      { question: "What was David Hilbert's primary ambition for mathematics?", options: ["To replace all numbers with geometric shapes", "To construct a complete, consistent axiomatic foundation for all mathematical truth", "To prove that computers could never be built", "To merge philosophy with religious theology"], answer: 1, explanation: "Hilbert sought a complete and consistent axiomatic system capable of deciding all propositions." },
      { question: "What did Gödel's First Incompleteness Theorem demonstrate?", options: ["All mathematical systems are completely false", "In any consistent formal system, there are true statements that cannot be proven syntactically", "Arithmetic can only be calculated with physical abacuses", "Prime numbers are infinite in quantity"], answer: 1, explanation: "It showed that truth transcends provability within any sufficiently rich, consistent formal system." },
      { question: "How did Turing's Halting Problem intersect with Gödel's findings?", options: ["It demonstrated that all computers halt after ten minutes", "It established the fundamental mechanical limits of algorithmic decidability", "It proved that software engineering is impossible", "It refuted Gödel's theorems entirely"], answer: 1, explanation: "Turing's proof demarcated the inherent limits of mechanical computability and algorithmic decidability." }
    ]
  },
  {
    id: 22, level: "C2", title: "Deconstruction, Semiotics & The Elusive Signified", topic: "Post-Structuralist Philosophy & Hermeneutics",
    readTime: "7 min", wordCount: 370,
    content: `Post-structuralist thought, predominantly articulated through Jacques Derrida's deconstructive philosophy, mounted an uncompromising offensive against the foundational logocentrism of Western metaphysics—the persistent illusion that speech provides unmediated access to a transcendent, primordial essence or 'transcendental signified.'

Drawing upon Ferdinand de Saussure's structural semiotics, which demonstrated that linguistic signs are arbitrary and acquire meaning solely through relational divergence (the difference between 'cat' and 'bat'), Derrida introduced his famous neologism 'différance.' Conflating the French verbs to differ (spatial variance) and to defer (temporal delay), différance reveals that meaning is never instantaneously present in the signifier. Instead, semantic signification is caught in an infinite, recursive postponement—every signifier refers only to other signifiers along an endless chain of contextual traces.

Consequently, textuality is not an inert repository of definitive authorial intention, but a dynamic, unstable matrix of internal fissures and ideological contradictions. A deconstructive reading does not aim to destroy meaning, but to meticulously expose how a text invariably undermines its own binary hierarchies—such as reason versus emotion, nature versus culture, speech versus writing. By demonstrating that privileged terms rely parasitic upon their excluded counterparts, deconstruction unmasks the contingency of discursive authority, celebrating the inexhaustible semantic polysemy inherent in human language.`,
    questions: [
      { question: "What is 'logocentrism' as critiqued by Derrida?", options: ["The fear of written books", "The illusion of unmediated, authentic presence in speech or foundational concepts", "The belief that logic is useless in mathematics", "The worship of ancient Greek grammar"], answer: 1, explanation: "Logocentrism privileges speech as having immediate, unmediated access to truth and presence." },
      { question: "What does the term 'différance' encapsulate?", options: ["A simple spelling error", "The simultaneous differing and perpetual deferral of meaning across signifiers", "The speed of acoustic soundwaves", "The distinction between nouns and adjectives"], answer: 1, explanation: "It captures both spatial distinction and temporal postponement of absolute meaning." },
      { question: "What is the primary objective of a deconstructive reading?", options: ["To burn the physical manuscript", "To demonstrate how a text subtly deconstructs its own foundational binary oppositions", "To discover the single true meaning intended by the author", "To prove that language should be abolished"], answer: 1, explanation: "It uncovers the internal fissures and reveals how privileged hierarchies rely upon their opposites." }
    ]
  }
];
