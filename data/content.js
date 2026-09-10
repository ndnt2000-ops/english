// ============================================================
// ENGLISHMASTER v3 - SHADOWING, LISTENING, WRITING & SPEAKING
// ============================================================

// ============================================================
// SHADOWING DATA (A1 -> C2)
// ============================================================
const SHADOWING_DATA = [
  // A1
  {
    id: 1, level: "A1", title: "Greeting Someone", topic: "Daily Life", speed: 0.8,
    segments: [
      { text: "Good morning!", translation: "Chào buổi sáng!" },
      { text: "How are you today?", translation: "Hôm nay bạn có khỏe không?" },
      { text: "I am fine, thank you.", translation: "Tôi khỏe, cảm ơn bạn." },
      { text: "What is your name?", translation: "Tên bạn là gì?" },
      { text: "My name is Tom. Nice to meet you!", translation: "Tên tôi là Tom. Rất vui được gặp bạn!" },
    ]
  },
  {
    id: 2, level: "A1", title: "At the Bakery & Cafe", topic: "Shopping & Food", speed: 0.8,
    segments: [
      { text: "Hello! Can I have a croissant, please?", translation: "Xin chào! Cho tôi một bánh sừng bò được không?" },
      { text: "Would you like some coffee with that?", translation: "Bạn có muốn dùng thêm cà phê không?" },
      { text: "Yes, a warm latte with sugar, please.", translation: "Vâng, một ly latte nóng với đường, làm ơn." },
      { text: "That is four dollars and fifty cents.", translation: "Của bạn hết 4 đô la 50 xu." },
      { text: "Here you go. Have a pleasant day!", translation: "Của bạn đây. Chúc một ngày tốt lành!" },
    ]
  },
  {
    id: 3, level: "A1", title: "Buying a T-Shirt", topic: "Shopping", speed: 0.8,
    segments: [
      { text: "Excuse me, do you have this T-shirt in blue?", translation: "Xin lỗi, bạn có chiếc áo phông này màu xanh dương không?" },
      { text: "Yes, what size do you need?", translation: "Có chứ, bạn cần cỡ áo nào?" },
      { text: "I wear a size medium.", translation: "Tôi mặc cỡ vừa (size M)." },
      { text: "Here is a medium blue shirt. Would you like to try it on?", translation: "Đây là áo xanh size M. Bạn có muốn mặc thử không?" },
      { text: "Yes please! Where are the fitting rooms?", translation: "Vâng làm ơn! Phòng thử đồ ở đâu vậy?" }
    ]
  },

  // A2
  {
    id: 4, level: "A2", title: "Making Plans with Friends", topic: "Social", speed: 0.85,
    segments: [
      { text: "Are you free this weekend?", translation: "Cuối tuần này bạn có rảnh không?" },
      { text: "I think so. What do you have in mind?", translation: "Tôi nghĩ vậy. Bạn có ý định gì không?" },
      { text: "Would you like to go to the cinema?", translation: "Bạn có muốn đi xem phim không?" },
      { text: "That sounds great! What time?", translation: "Nghe có vẻ tuyệt vời! Mấy giờ?" },
      { text: "How about seven o'clock in the evening?", translation: "Khoảng bảy giờ tối thì sao?" },
      { text: "Perfect. See you then!", translation: "Hoàn hảo. Hẹn gặp lại!" },
    ]
  },
  {
    id: 5, level: "A2", title: "Hotel Reception Check-In", topic: "Travel", speed: 0.85,
    segments: [
      { text: "Good evening. I have a room reservation under Nguyen.", translation: "Chào buổi tối. Tôi có đặt phòng dưới tên Nguyen." },
      { text: "Welcome! May I have your passport, please?", translation: "Chào mừng quý khách! Cho tôi xin hộ chiếu được không ạ?" },
      { text: "Certainly. Here is my document.", translation: "Chắc chắn rồi. Đây là giấy tờ của tôi." },
      { text: "Your room is 402 on the fourth floor with a sea view.", translation: "Phòng của bạn là 402 ở tầng 4 nhìn ra biển." },
      { text: "Breakfast is served from seven to ten in the lobby.", translation: "Bữa sáng được phục vụ từ 7 đến 10 giờ tại sảnh." },
    ]
  },
  {
    id: 6, level: "A2", title: "Visiting the Clinic", topic: "Health", speed: 0.85,
    segments: [
      { text: "Good afternoon, doctor. I haven't been feeling well.", translation: "Chào bác sĩ. Mấy hôm nay tôi cảm thấy không được khỏe." },
      { text: "What symptoms are you experiencing?", translation: "Bạn đang gặp những triệu chứng gì?" },
      { text: "I have had a sore throat and a slight headache since yesterday.", translation: "Tôi bị đau họng và hơi nhức đầu từ hôm qua." },
      { text: "Let me check your temperature. Open wide, please.", translation: "Để tôi đo nhiệt độ cho bạn nhé. Mời bạn há to miệng." },
      { text: "Take this medicine twice a day and drink warm water.", translation: "Uống thuốc này hai lần mỗi ngày và uống nhiều nước ấm nhé." }
    ]
  },

  // B1
  {
    id: 7, level: "B1", title: "Talking About Career Growth", topic: "Career", speed: 0.9,
    segments: [
      { text: "I have been working as a software engineer for three years.", translation: "Tôi đã làm kỹ sư phần mềm được ba năm." },
      { text: "My job involves designing scalable microservices.", translation: "Công việc của tôi bao gồm thiết kế các vi dịch vụ có khả năng mở rộng." },
      { text: "Although debugging complex issues is challenging, I find it rewarding.", translation: "Mặc dù gỡ lỗi các vấn đề phức tạp rất thách thức, nhưng tôi thấy nó rất đáng giá." },
      { text: "I am actively building open-source projects to broaden my skill set.", translation: "Tôi đang tích cực xây dựng các dự án mã nguồn mở để mở rộng kỹ năng." },
      { text: "Continuous learning is fundamental in the rapidly evolving tech sector.", translation: "Học tập liên tục là điều cốt lõi trong ngành công nghệ phát triển nhanh chóng." },
    ]
  },
  {
    id: 8, level: "B1", title: "Sustainable Lifestyle Habits", topic: "Environment", speed: 0.9,
    segments: [
      { text: "Climate change demands conscious daily choices from all of us.", translation: "Biến đổi khí hậu đòi hỏi những lựa chọn có ý thức hàng ngày từ tất cả chúng ta." },
      { text: "Reducing single-use plastics is a straightforward first step.", translation: "Giảm rác thải nhựa dùng một lần là bước đi đầu tiên đơn giản." },
      { text: "Switching to reusable canvas bags and water flasks cuts down waste significantly.", translation: "Chuyển sang túi vải tái sử dụng và bình nước giúp giảm rác thải đáng kể." },
      { text: "Collective grassroots action creates momentum for corporate policy reform.", translation: "Hành động tập thể từ cơ sở tạo động lực cho sự cải cách chính sách của doanh nghiệp." },
    ]
  },
  {
    id: 9, level: "B1", title: "Hunting for an Apartment", topic: "Housing", speed: 0.9,
    segments: [
      { text: "Finding an affordable apartment close to the city center is quite competitive.", translation: "Tìm một căn hộ giá cả phải chăng gần trung tâm thành phố khá cạnh tranh." },
      { text: "I am looking for a two-bedroom unit with ample natural light.", translation: "Tôi đang tìm một căn hộ hai phòng ngủ có nhiều ánh sáng tự nhiên." },
      { text: "Does the monthly rent include high-speed internet and water utilities?", translation: "Tiền thuê hàng tháng đã bao gồm internet tốc độ cao và tiền nước chưa?" },
      { text: "We require a standard one-month security deposit upon signing the lease.", translation: "Chúng tôi yêu cầu đặt cọc một tháng tiền nhà khi ký hợp đồng thuê." }
    ]
  },

  // B2
  {
    id: 10, level: "B2", title: "The Startup Ecosystem", topic: "Business & Innovation", speed: 0.95,
    segments: [
      { text: "The digital economy has fundamentally dismantled traditional industry moats.", translation: "Nền kinh tế số đã phá bỏ căn bản các rào cản phòng thủ truyền thống của ngành." },
      { text: "Early-stage founders must demonstrate product-market fit before scaling.", translation: "Các nhà sáng lập giai đoạn đầu phải chứng minh sự phù hợp sản phẩm-thị trường trước khi mở rộng." },
      { text: "Customer acquisition costs must remain well below customer lifetime value.", translation: "Chi phí thu hút khách hàng phải duy trì thấp hơn nhiều so với giá trị trọn đời của khách hàng." },
      { text: "Fostering an iterative feedback loop allows products to pivot quickly.", translation: "Nuôi dưỡng một vòng phản hồi lặp đi lặp lại giúp sản phẩm chuyển hướng nhanh chóng." },
    ]
  },
  {
    id: 11, level: "B2", title: "Cognitive Ergonomics & Focus", topic: "Productivity & Health", speed: 0.95,
    segments: [
      { text: "In an attention economy, deep focus has become a scarce competitive advantage.", translation: "Trong nền kinh tế chú ý, sự tập trung sâu sắc đã trở thành lợi thế cạnh tranh khan hiếm." },
      { text: "Constant smartphone notifications fragment our cognitive bandwidth.", translation: "Các thông báo liên tục từ điện thoại thông minh chia nhỏ dung lượng nhận thức của chúng ta." },
      { text: "Cultivating dedicated ninety-minute blocks of deep work enhances intellectual output.", translation: "Rèn luyện các khối thời gian 90 phút làm việc sâu giúp nâng cao hiệu suất trí tuệ." },
      { text: "Rest is not the absence of productivity, but its biological prerequisite.", translation: "Nghỉ ngơi không phải là sự vắng bóng của năng suất, mà là tiền đề sinh học của nó." },
    ]
  },
  {
    id: 12, level: "B2", title: "Renewable Energy Transition", topic: "Energy & Climate", speed: 0.95,
    segments: [
      { text: "The transition toward decentralized solar power requires substantial grid modernization.", translation: "Quá trình chuyển dịch sang năng lượng mặt trời phân tán đòi hỏi hiện đại hóa lưới điện." },
      { text: "Utility-scale battery installations buffer the intermittency of wind generation.", translation: "Các trạm pin lưu trữ quy mô lớn giúp bù đắp tính chập chờn của điện gió." },
      { text: "Regulatory incentives must harmonize environmental mandates with economic affordability.", translation: "Các chính sách khuyến khích cần hài hòa giữa quy định môi trường và chi phí hợp lý." },
      { text: "Decarbonizing industrial manufacturing remains the ultimate frontier of climate action.", translation: "Khử cacbon trong sản xuất công nghiệp vẫn là ranh giới thách thức nhất của hành động khí hậu." }
    ]
  },

  // C1
  {
    id: 13, level: "C1", title: "Philosophy of Linguistic Relativity", topic: "Cognitive Linguistics", speed: 1.0,
    segments: [
      { text: "Language is not merely a transparent conduit for expressing antecedent thought.", translation: "Ngôn ngữ không đơn thuần là một kênh truyền đạt trong suốt để diễn đạt tư tưởng có trước." },
      { text: "Grammatical structures habituate our minds toward specific dimensions of reality.", translation: "Các cấu trúc ngữ pháp tập quán hóa tâm trí chúng ta về các khía cạnh cụ thể của thực tại." },
      { text: "Obligatory linguistic categories act as attentional spotlights during sensory perception.", translation: "Các phạm trù ngôn ngữ bắt buộc đóng vai trò như những tiêu điểm chú ý trong quá trình cảm thụ giác quan." },
      { text: "Mastering a second tongue expands the architectural perimeter of consciousness.", translation: "Thành thạo một ngôn ngữ thứ hai sẽ mở rộng vành đai kiến trúc của ý thức." },
    ]
  },
  {
    id: 14, level: "C1", title: "Corporate Crisis Resolution", topic: "Strategic Leadership", speed: 1.0,
    segments: [
      { text: "Navigating reputational crises demands unequivocal transparency and strategic composure.", translation: "Chèo lái qua các cuộc khủng hoảng danh tiếng đòi hỏi sự minh bạch tuyệt đối và bản lĩnh chiến lược." },
      { text: "Leadership must resist the reflexive impulse to conceal algorithmic vulnerabilities.", translation: "Ban lãnh đạo phải kiềm chế phản xạ che giấu các lỗ hổng thuật toán." },
      { text: "Proactive restitution to affected stakeholders re-establishes institutional credibility.", translation: "Chủ động bồi thường cho các bên liên quan bị ảnh hưởng sẽ tái lập uy tín thể chế." },
      { text: "Systemic reforms must be independently audited to validate procedural compliance.", translation: "Các cải cách mang tính hệ thống phải được kiểm toán độc lập để xác thực tính tuân thủ quy trình." }
    ]
  },

  // C2
  {
    id: 15, level: "C2", title: "Diplomatic Rhetoric & Equilibrium", topic: "Statecraft & Geopolitics", speed: 1.0,
    segments: [
      { text: "Multilateral diplomacy necessitates an unremitting reconciliation of sovereign imperatives.", translation: "Ngoại giao đa phương đòi hỏi sự dung hòa không ngừng giữa các mệnh lệnh chủ quyền." },
      { text: "Equilibrium is never an immutable state, but an ongoing negotiation against entropy.", translation: "Trạng thái cân bằng không bao giờ là bất biến, mà là một sự thương lượng liên tục chống lại hỗn loạn." },
      { text: "Statesmanship demands the fortitude to transcend ephemeral domestic partisanship.", translation: "Thuật lãnh đạo đòi hỏi bản lĩnh vượt lên trên các xung đột phe phái nội bộ ngắn hạn." },
      { text: "True authority rests not upon coercive hegemony, but upon institutional legitimacy.", translation: "Quyền uy chân chính không dựa vào sự bá quyền áp đặt, mà dựa vào tính chính danh thể chế." },
    ]
  },
  {
    id: 16, level: "C2", title: "Existentialism & Post-Modern Hermeneutics", topic: "Philosophy & Semiotics", speed: 1.0,
    segments: [
      { text: "Deconstructive inquiry unmasks how privileged binaries parasitically depend upon excluded terms.", translation: "Phê phán giải cấu trúc vạch trần cách các cặp nhị nguyên ưu tiên phụ thuộc ký sinh vào vế bị loại trừ." },
      { text: "Meaning is perpetually deferred across an inexhaustible, recursive chain of signifiers.", translation: "Ý nghĩa liên tục bị trì hoãn qua một chuỗi ký hiệu đệ quy vô tận." },
      { text: "Authentic revolt lies in lucid defiance against metaphysical and algorithmic reductionism.", translation: "Cuộc nổi dậy đích thực nằm ở sự phản kháng sáng suốt chống lại chủ nghĩa giản lược siêu hình và thuật toán." }
    ]
  }
];

// ============================================================
// LISTENING DATA (A1 -> C2 Fallback)
// ============================================================
var LISTENING_DATA = (typeof LISTENING_DATA !== 'undefined') ? LISTENING_DATA : [
  {
    id: 1, level: "A1", title: "Tom's Morning Routine", topic: "Daily Life", duration: "~45 sec",
    script: "Every morning, Tom wakes up at seven o'clock. He brushes his teeth and washes his face. Then he eats breakfast with his parents. Tom usually eats warm bread and drinks orange juice. After breakfast, he goes to school by bus. He arrives at school at eight o'clock.",
    questions: [
      { question: "What time does Tom wake up?", options: ["Six o'clock", "Seven o'clock", "Eight o'clock", "Nine o'clock"], answer: 1, explanation: "Tom wakes up at seven o'clock." },
      { question: "How does Tom travel to school?", options: ["By car", "On foot", "By bus", "By bicycle"], answer: 2, explanation: "He goes to school by bus." },
      { question: "What does Tom drink at breakfast?", options: ["Milk", "Tea", "Water", "Orange juice"], answer: 3, explanation: "Tom drinks orange juice for breakfast." },
    ]
  },
  {
    id: 2, level: "A1", title: "A Weekend Picnic", topic: "Family & Outdoors", duration: "~45 sec",
    script: "On Sunday afternoon, Anna and her family went to the city park for a picnic. The weather was sunny and clear. Anna's father grilled chicken, while her mother prepared a fresh green salad. Anna and her younger brother played catch with a red ball on the grass. They spent three relaxing hours outdoors.",
    questions: [
      { question: "When did the picnic happen?", options: ["Saturday morning", "Sunday afternoon", "Friday evening", "Monday afternoon"], answer: 1, explanation: "They went on Sunday afternoon." },
      { question: "What did the children play with?", options: ["A kite", "A red ball", "A toy car", "Board games"], answer: 1, explanation: "They played catch with a red ball." },
      { question: "What was the weather like?", options: ["Rainy and cold", "Windy and foggy", "Sunny and clear", "Cloudy and dark"], answer: 2, explanation: "The weather was sunny and clear." },
    ]
  },
  {
    id: 3, level: "A2", title: "A Visit to the National Museum", topic: "Culture & History", duration: "~60 sec",
    script: "Last Saturday, Sarah and her friends visited the national museum. The museum opened at nine in the morning. They saw many interesting exhibits about ancient history. Sarah's favorite part was the Egyptian section, where she saw real mummies and hieroglyphic inscriptions. After three hours of exploring, they walked to a quiet café near the museum for lunch.",
    questions: [
      { question: "When did Sarah visit the museum?", options: ["Friday", "Saturday", "Sunday", "Monday"], answer: 1, explanation: "They visited last Saturday." },
      { question: "What was Sarah's favorite gallery?", options: ["The Roman section", "The Egyptian section", "The Greek section", "The Asian section"], answer: 1, explanation: "Sarah's favorite was the Egyptian section." },
      { question: "Where did they go afterward?", options: ["To a bookstore", "To a café", "To the cinema", "Back to school"], answer: 1, explanation: "They walked to a café near the museum." },
    ]
  },
  {
    id: 4, level: "A2", title: "At the Airport Gate", topic: "Travel & Boarding", duration: "~55 sec",
    script: "Attention passengers on Skyline Flight 402 to Tokyo Narita. Boarding will commence in approximately ten minutes at Gate B14. We invite passengers traveling with small infants and those requiring special physical assistance to approach the podium first. Please ensure your passport and digital boarding pass are displayed on your mobile devices.",
    questions: [
      { question: "What is the destination of the flight?", options: ["Seoul", "London", "Tokyo Narita", "Singapore"], answer: 2, explanation: "The flight is heading to Tokyo Narita." },
      { question: "At which gate will the flight board?", options: ["Gate A2", "Gate B14", "Gate C8", "Gate D10"], answer: 1, explanation: "Boarding is at Gate B14." },
      { question: "Who is invited to board first?", options: ["Business travelers only", "Passengers with infants and those needing assistance", "Window seat holders", "Everyone at once"], answer: 1, explanation: "Families with infants and passengers needing assistance board first." }
    ]
  },
  {
    id: 5, level: "B1", title: "The Neurological Benefits of Physical Exercise", topic: "Health & Brain", duration: "~75 sec",
    script: "Regular cardiovascular exercise provides profound benefits for cognitive performance and mental wellness. Clinical studies indicate that engaging in at least thirty minutes of moderate aerobic activity stimulates neurogenesis—the formation of new neurons in the hippocampus, the brain region critical for memory consolidation. Additionally, physical exertion triggers the secretion of endorphins and serotonin, which naturally alleviate feelings of psychological anxiety and elevate daily mood.",
    questions: [
      { question: "How long should daily exercise be for cognitive benefit?", options: ["10 minutes", "At least 30 minutes", "Two hours", "All day"], answer: 1, explanation: "Studies recommend at least thirty minutes of moderate activity." },
      { question: "What is neurogenesis?", options: ["Muscle fatigue", "Formation of new neurons", "A heart disease", "Loss of memory"], answer: 1, explanation: "Neurogenesis refers to the birth of new neurons in the brain." },
      { question: "Which brain region is mentioned as critical for memory?", options: ["The cerebellum", "The hippocampus", "The spinal cord", "The optic nerve"], answer: 1, explanation: "The hippocampus is the region essential for memory consolidation." },
    ]
  },
  {
    id: 6, level: "B1", title: "Remote Team Collaboration", topic: "Workplace & Technology", duration: "~70 sec",
    script: "As software companies embrace distributed workforces, the dynamics of team synchronization have evolved. Rather than mandating synchronous eight-hour desk presence, progressive organizations operate around asynchronous workflows. Engineers document architectural decisions in detailed request-for-comment memos. This deliberate practice minimizes distracting context-switching and respects colleagues working across disparate time zones.",
    questions: [
      { question: "What workflow do modern distributed teams prioritize?", options: ["Mandatory 8-hour video calls", "Asynchronous workflows and documentation", "Working only on weekends", "In-person meetings every day"], answer: 1, explanation: "Teams operate around asynchronous workflows and thorough documentation." },
      { question: "How do engineers communicate major architectural proposals?", options: ["Through quick phone calls", "In written request-for-comment memos", "By sending text messages", "Through public social media"], answer: 1, explanation: "Decisions are documented in detailed memos." },
      { question: "What is a primary advantage of asynchronous collaboration?", options: ["Cheaper computers", "Reduced context-switching across time zones", "No need to write code", "More office space"], answer: 1, explanation: "It minimizes distracting context-switching and accommodates different time zones." }
    ]
  },
  {
    id: 7, level: "B2", title: "The Economics of Renewable Energy", topic: "Energy & Economics", duration: "~85 sec",
    script: "Over the past decade, the levelized cost of solar photovoltaic electricity has plummeted by more than eighty percent, disrupting legacy power generation models. Utility-scale solar and offshore wind farms are now routinely undercutting fossil fuels on price, even without government subsidies. However, integrating intermittent generation into legacy power grids requires massive investments in utility-scale lithium iron phosphate batteries and pumped hydro storage to ensure round-the-clock reliability during peak demand periods.",
    questions: [
      { question: "By how much has solar power cost dropped over the past decade?", options: ["10 percent", "Over 80 percent", "30 percent", "It has not dropped"], answer: 1, explanation: "The levelized cost of solar has plummeted by more than eighty percent." },
      { question: "What is a key challenge with renewable power sources like wind and solar?", options: ["They are too expensive", "Intermittent generation", "They produce toxic smoke", "Nobody wants them"], answer: 1, explanation: "Intermittency requires storage solutions to maintain continuous supply." },
      { question: "What technology helps stabilize the grid?", options: ["Utility-scale battery storage", "Diesel generators only", "Smaller power lines", "Increasing prices"], answer: 0, explanation: "Battery storage and pumped hydro ensure round-the-clock grid reliability." },
    ]
  },
  {
    id: 8, level: "B2", title: "Circular Economy in Consumer Electronics", topic: "Sustainability & Industry", duration: "~80 sec",
    script: "Every year, consumer electronics generate over fifty million metric tons of e-waste, squandering precious rare-earth minerals. In response, progressive electronics manufacturers are adopting modular hardware architectures. By designing smartphones and laptops with standard screw assemblies, replaceable battery modules, and easily recyclable aluminum enclosures, companies can reclaim high-purity gold, cobalt, and lithium, drastically reducing virgin mining demand.",
    questions: [
      { question: "How much e-waste is generated annually?", options: ["One million tons", "Over fifty million metric tons", "Five thousand tons", "Almost zero"], answer: 1, explanation: "Over fifty million metric tons of e-waste is produced each year." },
      { question: "What engineering design aids recycling?", options: ["Gluing all parts permanently", "Modular architectures with standardized screws and replaceable batteries", "Using heavier plastics", "Discontinuing warranties"], answer: 1, explanation: "Modular design and accessible assemblies make recycling viable." },
      { question: "Which metals are reclaimed through circular recycling?", options: ["Iron only", "Gold, cobalt, and lithium", "Mercury and lead", "Wood and stone"], answer: 1, explanation: "Recycling reclaims precious gold, cobalt, and lithium." }
    ]
  },
  {
    id: 9, level: "C1", title: "Cognitive Heuristics & Systemic Biases", topic: "Behavioral Economics", duration: "~95 sec",
    script: "Nobel laureate Daniel Kahneman demonstrated that human judgment is persistently susceptible to cognitive heuristics—subconscious shortcuts utilized by System One thinking to navigate sensory complexity. While evolutionary advantageous for immediate survival, these heuristics introduce predictable errors into statistical and financial forecasting. For instance, the availability heuristic induces people to overestimate the probability of catastrophic plane crashes relative to automobile accidents simply because plane disasters receive sensationalized, memorable media coverage.",
    questions: [
      { question: "What purpose did cognitive heuristics originally serve?", options: ["Financial accounting", "Immediate evolutionary survival", "Learning Latin", "Designing tools"], answer: 1, explanation: "Heuristics evolved as fast shortcuts for immediate survival." },
      { question: "What does the availability heuristic cause people to do?", options: ["Forget names easily", "Overestimate vivid, memorable risks", "Ignore all media", "Work faster"], answer: 1, explanation: "It causes individuals to overestimate events that are easily retrieved from memory." },
      { question: "Which thinking system relies primarily on heuristics?", options: ["System One", "System Two", "System Three", "All conscious systems"], answer: 0, explanation: "System One operates automatically and relies on intuitive heuristics." },
    ]
  },
  {
    id: 10, level: "C2", title: "Algorithmic Sovereignty & Epistemic Autonomy", topic: "Philosophy & Digital Ethics", duration: "~105 sec",
    script: "As autonomous neural architectures increasingly mediate human knowledge discovery and public discourse, philosophers warn of an insidious erosion of epistemic autonomy. When proprietary algorithms delineate what information is visible, prioritizable, or suppressed based upon optimization metrics of shareholder engagement, the public sphere is subjected to corporate algorithmic hegemony. Remedying this demands transparent auditing mechanisms and open-weight foundational models that liberate collective intellect from commercial enclosed gardens.",
    questions: [
      { question: "What philosophical concern is raised in the lecture?", options: ["Computer screens cause eye strain", "The erosion of epistemic autonomy through algorithmic mediation", "The cost of building computer chips", "The speed of fiber optic internet"], answer: 1, explanation: "The speaker warns about the erosion of epistemic autonomy by commercial algorithms." },
      { question: "What metric currently dictates algorithmic visibility on private platforms?", options: ["Peer-reviewed veracity", "Shareholder user engagement optimization", "Democratic consensus", "Random selection"], answer: 1, explanation: "Algorithms prioritize engagement to maximize shareholder returns." },
      { question: "What proposed solution is highlighted?", options: ["Banning all computers", "Transparent algorithmic auditing and open foundational models", "Government monopolization", "Ignoring digital media completely"], answer: 1, explanation: "Open models and independent auditing are recommended." },
    ]
  }
];

// ============================================================
// SPEAKING PRACTICE SENTENCES (A1 -> C2)
// ============================================================
const SPEAKING_DATA = {
  A1: [
    { text: "My name is Lan and I am from Vietnam.", topic: "Introduction" },
    { text: "I am a high school student learning English.", topic: "Introduction" },
    { text: "I wake up at seven o'clock every morning.", topic: "Daily Routine" },
    { text: "I like to eat rice, fish, and vegetables for dinner.", topic: "Food" },
    { text: "My family has four people: my parents, my sister, and me.", topic: "Family" },
    { text: "My favorite color is ocean blue.", topic: "Preferences" },
    { text: "I ride my bicycle to school every day.", topic: "Transport" },
    { text: "Today the weather is sunny and warm.", topic: "Weather" },
    { text: "Could you please help me find the library?", topic: "Courtesy" },
    { text: "I like reading books before going to bed.", topic: "Hobbies" }
  ],
  A2: [
    { text: "I usually spend my weekends visiting friends or watching movies at home.", topic: "Free Time" },
    { text: "Last summer, I traveled to Da Nang with my family and we had a wonderful time.", topic: "Travel" },
    { text: "I enjoy learning English because it connects me with people worldwide.", topic: "Learning" },
    { text: "My hometown is a peaceful coastal town with friendly people.", topic: "Places" },
    { text: "I want to become a software engineer to build helpful applications.", topic: "Ambitions" },
    { text: "Could you please tell me how to get to the nearest metro station?", topic: "Directions" },
    { text: "Eating fresh fruit and exercising regularly helps me stay energized.", topic: "Health" },
    { text: "Online courses allow people to learn at their own pace from home.", topic: "Education" },
    { text: "I would like to order a warm cappuccino with oat milk, please.", topic: "Dining" },
    { text: "We celebrated my grandmother's seventieth birthday with a home feast.", topic: "Family" }
  ],
  B1: [
    { text: "In my opinion, social media has both significant advantages and drawbacks.", topic: "Opinion" },
    { text: "I have been practicing coding and English consistently for three years.", topic: "Skills" },
    { text: "If I had more leisure time, I would definitely master a musical instrument.", topic: "Hypothetical" },
    { text: "Environmental sustainability requires collective responsibility from everyone.", topic: "Environment" },
    { text: "Effective time management helps balance demanding coursework with relaxation.", topic: "Lifestyle" },
    { text: "Technological innovation has fundamentally changed how teams collaborate remotely.", topic: "Technology" },
    { text: "Regular physical exercise improves both cardiovascular health and mental acuity.", topic: "Health" },
    { text: "Although public transit is crowded, it reduces our city's carbon footprint.", topic: "Society" },
    { text: "I am preparing for an interview with an international technology firm next Tuesday.", topic: "Career" },
    { text: "Learning from failure is an essential milestone on the path to mastery.", topic: "Personal Growth" }
  ],
  B2: [
    { text: "The integration of renewable energy into legacy electrical grids presents fascinating engineering challenges.", topic: "Engineering" },
    { text: "Critical thinking requires questioning underlying assumptions rather than merely accepting consensus narratives.", topic: "Philosophy" },
    { text: "Remote work models offer employees autonomy, yet deliberate team rituals prevent professional isolation.", topic: "Work Culture" },
    { text: "Economic indicators must measure ecological sustainability alongside standard domestic production.", topic: "Economics" },
    { text: "Machine learning algorithms reflect the demographic biases present within their historical training data.", topic: "AI & Ethics" },
    { text: "Fostering psychological safety within organizations empowers individuals to voice dissenting perspectives.", topic: "Leadership" },
    { text: "Decarbonizing industrial manufacturing demands substantial capital investment in green hydrogen technologies.", topic: "Clean Tech" },
    { text: "Cultural empathy enables global project teams to resolve interpersonal misunderstandings gracefully.", topic: "Communication" }
  ],
  C1: [
    { text: "Seldom does a nascent technological paradigm achieve such pervasive adoption with such velocity.", topic: "Innovation" },
    { text: "The subtle dichotomy between individual liberty and public epidemiological welfare requires ongoing ethical calibration.", topic: "Ethics" },
    { text: "What distinguishes exemplary leaders is their capacity to sustain strategic clarity amid geopolitical volatility.", topic: "Leadership" },
    { text: "Epistemological resilience demands that citizens cultivate adversarial literacy against algorithmic disinformation.", topic: "Digital Society" },
    { text: "Rigorous academic inquiry thrives upon dialectical confrontation rather than dogmatic consensus.", topic: "Scholarship" },
    { text: "To conflate economic growth with genuine human flourishing is to confuse means with ultimate ends.", topic: "Philosophy" }
  ],
  C2: [
    { text: "Were it not for institutional checks and balances, democratic governance would succumb to majoritarian tyranny.", topic: "Statecraft" },
    { text: "The philosopher dissected the metaphysical ambiguities inherent in linguistic determinism with surgical precision.", topic: "Philosophy" },
    { text: "True intellectual humility acknowledges that empirical certainty is an asymptote toward which science unceasingly strives.", topic: "Epistemology" },
    { text: "His persuasive rhetoric balanced razor-sharp dialectical acumen with an empathetic diplomatic cadence.", topic: "Rhetoric" },
    { text: "Ontological indeterminacy liberates human consciousness from mechanistic reductionism into boundless creative potential.", topic: "Metaphysics" }
  ]
};

// ============================================================
// WRITING PROMPTS (A1 -> C2)
// ============================================================
const WRITING_PROMPTS = [
  // A1
  {
    id: 1, level: "A1", title: "My Best Friend", topic: "People & Relationships",
    prompt: "Write about your best friend. Describe what they look like, what activities you do together, and why they are important to you.",
    minWords: 40, maxWords: 80,
    tips: ["Use simple present tense: My friend is...", "Describe appearance: He/She is tall/friendly...", "Give reasons: I like my friend because..."],
  },
  {
    id: 2, level: "A1", title: "My Typical School Day", topic: "Daily Life",
    prompt: "Describe your typical daily schedule from morning to night. What activities do you do?",
    minWords: 50, maxWords: 90,
    tips: ["Use sequence words: First, then, after that, finally", "Use present simple: I wake up, I eat, I study...", "Mention morning, afternoon, and evening."],
  },

  // A2
  {
    id: 3, level: "A2", title: "A Memorable Holiday Trip", topic: "Travel & Leisure",
    prompt: "Write about a vacation or trip you took. Where did you go, who did you go with, and what was your favorite memory?",
    minWords: 70, maxWords: 130,
    tips: ["Use past simple: We visited, we tasted, I saw...", "Describe sensory details (sights, sounds, food)", "Conclude with how the journey made you feel."],
  },
  {
    id: 4, level: "A2", title: "Healthy Daily Habits", topic: "Health & Lifestyle",
    prompt: "Explain what habits you practice to keep yourself physically fit and mentally relaxed. What foods do you enjoy and how often do you exercise?",
    minWords: 70, maxWords: 130,
    tips: ["Use frequency adverbs: always, often, sometimes", "Describe healthy foods: fruit, vegetables, clean water", "Give advice to others: You should sleep well..."],
  },

  // B1
  {
    id: 5, level: "B1", title: "Advantages & Challenges of Remote Work", topic: "Careers & Tech",
    prompt: "Discuss the benefits and drawbacks of working or studying remotely from home compared to traditional offices and schools.",
    minWords: 110, maxWords: 190,
    tips: ["Use connectors: On the one hand, on the other hand, furthermore", "Provide concrete examples from real life", "Offer a balanced conclusion."],
  },
  {
    id: 6, level: "B1", title: "The Influence of Social Media on Youth", topic: "Society & Media",
    prompt: "Examine how social media platforms impact the communication skills, mental health, and study habits of teenagers today.",
    minWords: 110, maxWords: 190,
    tips: ["Introduce the topic with current observations", "Present contrasting viewpoints on benefits vs distractions", "Conclude with advice on digital moderation."],
  },

  // B2
  {
    id: 7, level: "B2", title: "Artificial Intelligence in Everyday Life", topic: "Technology & Society",
    prompt: "To what extent does artificial intelligence enhance or endanger human creative expression? Present a reasoned argument.",
    minWords: 150, maxWords: 250,
    tips: ["State a clear thesis statement in the introduction", "Acknowledge counter-arguments and address them", "Use precise academic vocabulary."],
  },
  {
    id: 8, level: "B2", title: "Corporate Environmental Responsibility", topic: "Ecology & Business",
    prompt: "Should governments impose strict mandatory carbon penalties on corporations, or rely upon market incentives and voluntary green initiatives?",
    minWords: 150, maxWords: 250,
    tips: ["Discuss economic feasibility versus ecological urgency", "Incorporate terms like carbon taxation, ESG compliance, and subsidies", "Formulate a concrete policy recommendation."],
  },

  // C1
  {
    id: 9, level: "C1", title: "Economic Inequality & Social Mobility", topic: "Economics & Policy",
    prompt: "Critically evaluate the structural causes of wealth disparity in industrialized economies and propose policy mechanisms to foster equal opportunity.",
    minWords: 200, maxWords: 350,
    tips: ["Employ advanced discourse markers: Notwithstanding, whereas, consequently", "Engage with economic concepts: progressive taxation, human capital investment", "Maintain high-register academic neutrality."],
  },
  {
    id: 10, level: "C1", title: "Urban Planning for Climate Resilience", topic: "Urbanism & Architecture",
    prompt: "Critique the traditional automobile-centric urban design paradigm and articulate a vision for polycentric, carbon-neutral metropolises.",
    minWords: 200, maxWords: 350,
    tips: ["Analyze heat island effects, zoning regulations, and micro-transit integration", "Use elevated vocabulary: pedestrianization, multimodal transit, decarbonization", "Synthesize theoretical urban planning with actionable engineering."],
  },

  // C2
  {
    id: 11, level: "C2", title: "The Epistemic Crises of the Algorithmic Age", topic: "Philosophy & Epistemology",
    prompt: "To what extent has digital algorithmic mediation compromised human cognitive autonomy and collective truth consensus? Defend an epistemological position.",
    minWords: 280, maxWords: 450,
    tips: ["Engage deeply with philosophical concepts of autonomy, phenomenology, and rhetoric", "Demonstrate immaculate syntactic variety and nuanced subordination", "Sustain rigorous philosophical argumentation throughout."],
  },
  {
    id: 12, level: "C2", title: "Technological Determinism vs Human Agency", topic: "Philosophy of Technology",
    prompt: "Examine whether technology functions as an autonomous deterministic trajectory shaping civilization, or merely an inert instrument obedient to human sovereign volition.",
    minWords: 280, maxWords: 450,
    tips: ["Contrast Heideggerian and instrumentalist views of technology", "Explore artificial intelligence as a teleological inflection point", "Deploy consummate stylistic dexterity, dialectical nuance, and syntactic poise."],
  }
];
