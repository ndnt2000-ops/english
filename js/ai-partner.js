// ============================================================
// ENGLISHMASTER v3 - AI Contextual Bilingual Partner & Multi-Level Roleplay Simulator
// ============================================================

// --- BUILT-IN EXTENSIVE SCENARIO LIBRARY (A1 to C2 & Bilingual Tutor) ---
const BUILTIN_SCENARIOS = {
  // ===== LEVEL A1: BEGINNER =====
  a1_intro: {
    id: "a1_intro",
    title: "Meeting New Friends & Introduction",
    level: "A1",
    levelCategory: "A1",
    icon: "🤝",
    role: "Emma (Language Exchange Partner)",
    avatar: "👩",
    desc: "Introduce yourself, share your country, job, and favorite hobbies.",
    welcome: "Hi there! Nice to meet you. My name is Emma, and I am from London. What is your name and where are you from?",
    welcomeVi: "Chào bạn! Rất vui được gặp bạn. Mình tên là Emma, đến từ Luân Đôn. Bạn tên gì và đến từ đâu thế?",
    promptSuggestions: [
      "Hello Emma, my name is Truong and I am from Vietnam.",
      "Hi! I am from Hanoi, Vietnam. Nice to meet you too.",
      "Good morning! I am a student living in Ho Chi Minh City."
    ],
    responses: [
      {
        keywords: ["name", "from", "vietnam", "hanoi", "saigon", "student", "live"],
        reply: "It's wonderful to meet you! Vietnam has such vibrant cities. What do you usually like to do in your free time?",
        replyVi: "Rất tuyệt khi được gặp bạn! Việt Nam có những thành phố thật sôi động. Bạn thường thích làm gì vào thời gian rảnh rỗi?",
        suggestions: ["I like listening to music and learning English.", "I enjoy playing football and reading books with friends."]
      },
      {
        keywords: ["free", "time", "hobby", "music", "sport", "football", "read", "book", "game", "movie"],
        reply: "That sounds like a lot of fun! How long have you been studying English, and do you enjoy it?",
        replyVi: "Nghe thú vị thật đấy! Bạn đã học tiếng Anh được bao lâu rồi, và bạn có thích môn này không?",
        suggestions: ["I have been studying English for six months.", "I just started learning recently and want to speak fluently."]
      },
      {
        keywords: ["month", "year", "study", "learn", "start", "recent", "fluent", "speak"],
        reply: "You are doing remarkably well! Consistent practice is the secret. It was delightful chatting with you today!",
        replyVi: "Bạn đang làm rất tốt đấy! Luyện tập đều đặn là bí quyết thành công. Rất vui vì đã trò chuyện cùng bạn hôm nay!",
        isConclusion: true
      }
    ],
    fallback: "That's lovely! Could you tell me a little bit more about your daily life?",
    fallbackVi: "Thật tuyệt! Bạn có thể chia sẻ thêm một chút về cuộc sống thường ngày của bạn không?"
  },

  a1_coffee: {
    id: "a1_coffee",
    title: "Ordering at a Cozy Coffee Shop",
    level: "A1",
    levelCategory: "A1",
    icon: "☕",
    role: "Lucas (Friendly Barista)",
    avatar: "🧑‍🍳",
    desc: "Order coffee, select cup sizes, choose milk types, and pay.",
    welcome: "Good morning! Welcome to Sunshine Cafe. What can I get started for you today?",
    welcomeVi: "Chào buổi sáng! Chào mừng bạn đến Sunshine Cafe. Hôm nay mình có thể lấy thức uống gì cho bạn nhỉ?",
    promptSuggestions: [
      "Good morning! Can I have an iced latte, please?",
      "Hello, I would like a hot cappuccino.",
      "Hi! Do you have Vietnamese iced coffee or black coffee?"
    ],
    responses: [
      {
        keywords: ["latte", "cappuccino", "coffee", "americano", "espresso", "tea"],
        reply: "Great choice! What size would you like: Small, Medium, or Large? And would you like oat milk or regular dairy?",
        replyVi: "Lựa chọn tuyệt vời! Bạn muốn dùng size nào: Nhỏ, Vừa hay Lớn? Và bạn muốn dùng sữa yến mạch hay sữa bò thông thường?",
        suggestions: ["A medium with oat milk, please.", "Large with regular milk and less sugar, please."]
      },
      {
        keywords: ["small", "medium", "large", "oat", "regular", "milk", "sugar", "ice"],
        reply: "Perfect. Would you like any warm chocolate chip cookies or butter croissants to go with that?",
        replyVi: "Hoàn hảo. Bạn có muốn dùng kèm bánh quy socola nóng hay bánh sừng bò bơ không?",
        suggestions: ["Just one butter croissant, please.", "No thanks, just the coffee for today."]
      },
      {
        keywords: ["croissant", "cookie", "cake", "no", "thanks", "just", "coffee"],
        reply: "Got it! Your total comes to $4.50. Will you be paying with cash or card?",
        replyVi: "Đã xong! Tổng hóa đơn của bạn là 4.50 đô la. Bạn sẽ thanh toán bằng tiền mặt hay thẻ?",
        suggestions: ["I'll pay with card, please.", "Here is five dollars in cash."]
      },
      {
        keywords: ["card", "cash", "pay", "dollar", "here"],
        reply: "Payment approved! Here is your receipt and your drink will be ready at the counter in two minutes. Enjoy!",
        replyVi: "Thanh toán thành công! Đây là hóa đơn và đồ uống của bạn sẽ sẵn sàng tại quầy trong 2 phút. Chúc ngon miệng!",
        isConclusion: true
      }
    ],
    fallback: "Certainly! Would you like that hot or iced?",
    fallbackVi: "Dĩ nhiên rồi! Bạn muốn uống nóng hay đá ạ?"
  },

  a1_shopping: {
    id: "a1_shopping",
    title: "Shopping for Clothes & Sizes",
    level: "A1",
    levelCategory: "A1",
    icon: "🛍️",
    role: "Chloe (Fashion Store Assistant)",
    avatar: "👱‍♀️",
    desc: "Ask for colors, try on different sizes, and inquire about discounts.",
    welcome: "Hello! Welcome to Urban Wear. Are you looking for anything specific today, or just browsing?",
    welcomeVi: "Xin chào! Chào mừng đến với Urban Wear. Bạn đang tìm món đồ cụ thể nào hay chỉ đang xem qua thôi?",
    promptSuggestions: [
      "Hello! I am looking for a blue jacket.",
      "Hi! Do you have this cotton T-shirt in size Medium?",
      "Excuse me, where are the fitting rooms?"
    ],
    responses: [
      {
        keywords: ["jacket", "shirt", "t-shirt", "dress", "pants", "jeans", "looking", "medium", "size"],
        reply: "Yes, we have it right here in Medium! We also have it in navy, dark grey, and white. Would you like to try it on?",
        replyVi: "Có chứ, bên mình có sẵn size M ngay đây! Mẫu này còn có màu xanh đen, xám đậm và trắng. Bạn có muốn mặc thử không?",
        suggestions: ["Yes please, where is the fitting room?", "Do you have this in a larger size?"]
      },
      {
        keywords: ["fitting", "room", "try", "large", "larger", "size", "where"],
        reply: "The fitting rooms are straight ahead on your left. Take your time, and let me know if you need another size!",
        replyVi: "Phòng thử đồ ở ngay phía trước bên tay trái bạn nhé. Cứ thong thả, nếu cần đổi size hãy báo mình nha!",
        suggestions: ["It fits perfectly! How much is it?", "It's a bit tight, can I try size Large?"]
      },
      {
        keywords: ["fit", "perfect", "much", "price", "cost", "tight", "take", "buy"],
        reply: "It looks fantastic on you! It's on a 20% promotional discount today, bringing it down to $28. I can wrap it up for you at the register!",
        replyVi: "Trông bạn mặc rất hợp đấy! Hôm nay mẫu này đang giảm 20%, chỉ còn 28 đô thôi. Mình gói lại cho bạn ở quầy thu ngân nhé!",
        isConclusion: true
      }
    ],
    fallback: "Sure! Let me check the stockroom for you. Any particular color preference?",
    fallbackVi: "Chắc chắn rồi! Để mình kiểm tra trong kho giúp bạn. Bạn có thích màu cụ thể nào không?"
  },

  a1_directions: {
    id: "a1_directions",
    title: "Asking for Street Directions",
    level: "A1",
    levelCategory: "A1",
    icon: "🗺️",
    role: "Officer Miller (City Guide)",
    avatar: "👮‍♂️",
    desc: "Ask for locations, landmarks, subway stations, and walking distance.",
    welcome: "Hello traveler! You look a bit lost with your map. Can I help you find somewhere in town?",
    welcomeVi: "Xin chào bạn! Trông bạn có vẻ đang tìm đường trên bản đồ. Tôi có thể giúp bạn tìm địa điểm nào không?",
    promptSuggestions: [
      "Excuse me, could you tell me how to get to Central Station?",
      "Hello! Is there a pharmacy or convenience store nearby?",
      "Hi! How far is the National Museum from here?"
    ],
    responses: [
      {
        keywords: ["station", "museum", "pharmacy", "subway", "train", "hospital", "hotel", "where", "how to"],
        reply: "Sure thing! Walk straight down this avenue for two blocks, then turn right at the traffic lights. It will be right on your left.",
        replyVi: "Chắc chắn rồi! Bạn cứ đi thẳng đại lộ này qua 2 ngã tư, sau đó rẽ phải ở chỗ đèn giao thông. Địa điểm sẽ nằm ngay bên tay trái.",
        suggestions: ["How many minutes does it take to walk there?", "Is it easy to find?"]
      },
      {
        keywords: ["minute", "walk", "far", "distance", "bus", "easy"],
        reply: "It's only about a 5 to 7 minute walk. You can't miss the big glass building with the green sign!",
        replyVi: "Chỉ khoảng 5 đến 7 phút đi bộ thôi. Bạn sẽ thấy ngay tòa nhà kính lớn có biển hiệu màu xanh lá!",
        suggestions: ["Thank you so much for your help!", "Have a wonderful day, officer!"]
      },
      {
        keywords: ["thank", "welcome", "day", "bye"],
        reply: "You are very welcome! Stay safe and enjoy exploring our city!",
        replyVi: "Không có gì đâu! Chúc bạn đi an toàn và có chuyến khám phá thành phố thật vui vẻ!",
        isConclusion: true
      }
    ],
    fallback: "Just keep heading straight north, and you will see the road signs clearly.",
    fallbackVi: "Bạn cứ tiếp tục đi thẳng về hướng bắc, bạn sẽ thấy biển chỉ dẫn rất rõ ràng."
  },

  a1_family: {
    id: "a1_family",
    title: "Family & Pets Casual Chat",
    level: "A1",
    levelCategory: "A1",
    icon: "👨‍👩‍👧",
    role: "Lily (Friendly Neighbor)",
    avatar: "👩‍🦰",
    desc: "Talk about your family members, siblings, home, and cute pets.",
    welcome: "Hi neighbor! Beautiful morning, isn't it? Do you have a big family living with you here?",
    welcomeVi: "Chào người hàng xóm! Buổi sáng thật đẹp trời phải không? Gia đình bạn đông người sống ở đây không?",
    promptSuggestions: [
      "Good morning! I live with my parents and my younger brother.",
      "Hello! I have a small family: just my wife, our daughter, and me.",
      "Hi Lily! I live on my own with my cute golden retriever dog."
    ],
    responses: [
      {
        keywords: ["parents", "brother", "sister", "family", "wife", "daughter", "son", "dog", "cat", "pet"],
        reply: "Aww, how lovely! Do you have any pets at home, like a mischievous cat or an energetic puppy?",
        replyVi: "Ôi thật đáng yêu! Nhà bạn có nuôi thú cưng không, ví dụ như một chú mèo nghịch ngợm hay cún con năng động?",
        suggestions: ["Yes, I have a playful puppy named Mochi.", "No, I don't have any pets yet, but I love dogs."]
      },
      {
        keywords: ["puppy", "dog", "cat", "mochi", "pet", "fish", "bird", "love"],
        reply: "Pets bring so much warmth to the home. What does your family love doing together on lazy Sundays?",
        replyVi: "Thú cưng mang lại thật nhiều ấm áp cho ngôi nhà. Gia đình bạn thích làm gì cùng nhau vào những ngày Chủ Nhật thảnh thơi?",
        suggestions: ["We cook big dinners together and watch comedies.", "We go to the park or visit our grandparents."]
      },
      {
        keywords: ["cook", "dinner", "park", "grandparents", "together", "movie", "watch"],
        reply: "Spending quality family time is the greatest joy. It's always wonderful catching up with you!",
        replyVi: "Dành thời gian ấm áp bên gia đình là điều tuyệt vời nhất. Thật vui khi được trò chuyện cùng bạn!",
        isConclusion: true
      }
    ],
    fallback: "That is wonderful to hear! Family connections mean everything.",
    fallbackVi: "Nghe thật ấm lòng! Tình cảm gia đình luôn là điều trân quý nhất."
  },

  a1_daily: {
    id: "a1_daily",
    title: "Daily Routine & Schedules",
    level: "A1",
    levelCategory: "A1",
    icon: "⏰",
    role: "Mark (Productivity Coach)",
    avatar: "🧑‍💻",
    desc: "Describe your waking hours, work habits, meals, and evening unwinding.",
    welcome: "Hello! Let's talk about building great daily habits. What time do you usually wake up in the morning?",
    welcomeVi: "Xin chào! Hãy cùng nói về việc xây dựng thói quen hàng ngày nhé. Bạn thường thức dậy lúc mấy giờ vào buổi sáng?",
    promptSuggestions: [
      "I usually wake up at 6:30 AM and drink a glass of warm water.",
      "I get up around 7:00 AM, then make coffee and stretch.",
      "I'm a night owl, so I tend to wake up around 8:00 AM."
    ],
    responses: [
      {
        keywords: ["wake", "get up", "6", "7", "8", "morning", "water", "coffee", "stretch"],
        reply: "A consistent morning rhythm sets the tone for the entire day. How do you usually travel to work or school?",
        replyVi: "Một nhịp sinh hoạt buổi sáng ổn định sẽ khởi đầu tuyệt vời cho cả ngày. Bạn thường đi làm hoặc đi học bằng phương tiện gì?",
        suggestions: ["I ride my motorbike through the city.", "I take the metro bus and listen to podcasts."]
      },
      {
        keywords: ["motorbike", "bus", "train", "car", "walk", "bike", "metro", "work", "school"],
        reply: "Active commutes are great. And what is your favorite way to relax and unwind in the evening before sleeping?",
        replyVi: "Đi lại năng động như vậy rất tốt. Thế cách bạn thích nhất để thư giãn vào buổi tối trước khi đi ngủ là gì?",
        suggestions: ["I read English books and listen to calm music.", "I cook a healthy meal and chat with my family."]
      },
      {
        keywords: ["read", "music", "cook", "tv", "family", "sleep", "relax", "evening"],
        reply: "An evening unwind routine ensures restorative sleep. Excellent job describing your day with clear sentences!",
        replyVi: "Thói quen thư giãn buổi tối giúp bạn có giấc ngủ thật sâu. Bạn diễn đạt lịch trình của mình rất rõ ràng và tự nhiên!",
        isConclusion: true
      }
    ],
    fallback: "Consistency is key. What time do you usually turn off your lights for bed?",
    fallbackVi: "Sự kiên trì là chìa khóa. Thường bạn tắt đèn đi ngủ lúc mấy giờ?"
  },

  // ===== LEVEL A2: ELEMENTARY =====
  a2_restaurant: {
    id: "a2_restaurant",
    title: "Gourmet Restaurant Dining",
    level: "A2",
    levelCategory: "A2",
    icon: "🍽️",
    role: "Marco (Head Waiter)",
    avatar: "🧑‍🍳",
    desc: "Reserve tables, ask for house specials, check allergen info, and pay.",
    welcome: "Good evening and welcome to Le Petit Bistro! Do you have a table reservation with us tonight?",
    welcomeVi: "Kính chào quý khách và hoan nghênh đến với Le Petit Bistro! Quý khách đã đặt bàn trước tối nay chưa ạ?",
    promptSuggestions: [
      "Good evening, I have a reservation under the name Truong.",
      "Hello! We don't have a reservation. Do you have a table for two by the window?",
      "Hi! Just a quiet table for one, please."
    ],
    responses: [
      {
        keywords: ["reservation", "name", "table", "window", "two", "one", "seat"],
        reply: "Right this way! Here is your menu. May I bring you some sparkling water or house red wine while you look at the appetizers?",
        replyVi: "Mời quý khách lối này! Đây là thực đơn. Tôi có thể mang chút nước khoáng có ga hay rượu vang đỏ khai vị trong khi quý khách xem món không?",
        suggestions: ["I'd like sparkling water with lemon, please.", "Could you recommend your best chef's special?"]
      },
      {
        keywords: ["water", "wine", "lemon", "sparkling", "recommend", "special", "drink"],
        reply: "Today's chef recommendation is pan-seared sea bass with saffron risotto, and our ribeye steak is superb. Are there any dietary restrictions or nut allergies?",
        replyVi: "Món đặc biệt hôm nay là cá vược áp chảo với cơm Ý nghệ tây, ngoài ra bò ribeye cũng rất tuyệt hảo. Quý khách có yêu cầu kiêng khem hay dị ứng hạt nào không?",
        suggestions: ["I'll have the sea bass, please. No dairy if possible.", "I'd love the medium-rare ribeye steak with mashed potatoes."]
      },
      {
        keywords: ["bass", "steak", "risotto", "dairy", "rare", "medium", "order", "potatoes"],
        reply: "Duly noted! Our kitchen will prepare that immediately without dairy. How does everything taste so far?",
        replyVi: "Tôi đã ghi nhận! Bếp sẽ chuẩn bị ngay không dùng bơ sữa. Món ăn vừa miệng quý khách chứ ạ?",
        suggestions: ["Everything is absolutely delicious, thank you!", "The fish is seasoned to perfection."]
      },
      {
        keywords: ["delicious", "good", "perfect", "check", "bill", "dessert"],
        reply: "I am delighted you enjoyed it! Would you care for some tiramisu or espresso, or would you prefer the check?",
        replyVi: "Tôi rất vui vì quý khách hài lòng! Quý khách có muốn dùng thêm bánh tiramisu, cà phê espresso hay tôi mang hóa đơn ra nhé?",
        suggestions: ["Could we please have the bill?", "Just an espresso and the check, please."]
      },
      {
        keywords: ["bill", "check", "card", "pay", "cash"],
        reply: "Here is your check. Thank you so much for dining with us tonight. Have a wonderful evening!",
        replyVi: "Dạ hóa đơn của quý khách đây. Cảm ơn quý khách rất nhiều vì đã dùng bữa tối nay. Chúc quý khách buổi tối an lành!",
        isConclusion: true
      }
    ],
    fallback: "Certainly! Let me verify that with our kitchen chef right away.",
    fallbackVi: "Dạ vâng! Tôi sẽ vào kiểm tra với đầu bếp ngay ạ."
  },

  a2_hotel: {
    id: "a2_hotel",
    title: "Hotel Check-in & Room Service",
    level: "A2",
    levelCategory: "A2",
    icon: "🏨",
    role: "Elena (Front Desk Concierge)",
    avatar: "👩‍💼",
    desc: "Check in, ask for high floors, request extra amenities, and check breakfast hours.",
    welcome: "Good afternoon, welcome to Grand Palace Hotel! How may I assist you with your booking today?",
    welcomeVi: "Xin chào buổi chiều, chào mừng quý khách đến Grand Palace Hotel! Tôi có thể hỗ trợ quý khách làm thủ tục đặt phòng thế nào ạ?",
    promptSuggestions: [
      "Good afternoon! I have a booking under Truong for 3 nights.",
      "Hello, I'd like to check in, please. Here is my passport.",
      "Hi! Could I request a room on a higher floor with a city view?"
    ],
    responses: [
      {
        keywords: ["booking", "check in", "nights", "passport", "floor", "view", "truong"],
        reply: "Thank you! I see your deluxe king room reservation. I've placed you on the 18th floor with an ocean view. Here is your keycard for room 1804.",
        replyVi: "Cảm ơn quý khách! Tôi đã thấy đặt phòng phòng King cao cấp. Tôi đã xếp quý khách ở tầng 18 hướng nhìn ra biển. Đây là thẻ từ phòng 1804 ạ.",
        suggestions: ["What time is breakfast served in the morning?", "Is high-speed Wi-Fi included in the room?"]
      },
      {
        keywords: ["breakfast", "wifi", "internet", "gym", "pool", "time", "hour"],
        reply: "Complimentary breakfast buffet is served on the 2nd floor from 6:30 to 10:00 AM, and the Wi-Fi password is on your key packet. The rooftop pool is open until 10 PM.",
        replyVi: "Buffet sáng miễn phí được phục vụ tại tầng 2 từ 6h30 đến 10h sáng, và mật khẩu Wi-Fi ghi trên bao đựng thẻ phòng. Hồ bơi tầng thượng mở cửa đến 10h đêm ạ.",
        suggestions: ["Could I get two extra towels sent up later?", "Where can I find an ATM nearby?"]
      },
      {
        keywords: ["towel", "atm", "luggage", "elevator", "help", "thank"],
        reply: "Housekeeping will bring those towels up promptly! The elevators are to your right. Have a restful and luxurious stay with us!",
        replyVi: "Bộ phận buồng phòng sẽ mang thêm khăn lên ngay cho quý khách! Thang máy ở bên tay phải. Chúc quý khách kỳ nghỉ thật thoải mái và tiện nghi!",
        isConclusion: true
      }
    ],
    fallback: "Certainly! Our front desk is available 24/7 if you require anything during your stay.",
    fallbackVi: "Dạ vâng! Quầy lễ tân phục vụ 24/7 bất cứ khi nào quý khách cần hỗ trợ ạ."
  },

  a2_doctor: {
    id: "a2_doctor",
    title: "Visiting the Clinic & Doctor Consultation",
    level: "A2",
    levelCategory: "A2",
    icon: "🩺",
    role: "Dr. Evans (General Practitioner)",
    avatar: "👨‍⚕️",
    desc: "Describe medical symptoms, pain levels, fever, and receive medical advice.",
    welcome: "Good morning. Please have a seat. What seems to be the trouble that brought you into the clinic today?",
    welcomeVi: "Chào buổi sáng. Mời bạn ngồi. Bạn cảm thấy trong người khó chịu hay có triệu chứng gì hôm nay thế?",
    promptSuggestions: [
      "I have had a severe sore throat and a mild fever since yesterday.",
      "Doctor, my stomach hurts after meals and I feel dizzy.",
      "I have a persistent dry cough and headaches when working."
    ],
    responses: [
      {
        keywords: ["throat", "fever", "stomach", "dizzy", "cough", "headache", "pain", "hurt"],
        reply: "I see. Let me check your temperature and listen to your chest. On a scale of 1 to 10, how intense is the discomfort?",
        replyVi: "Tôi hiểu rồi. Để tôi đo nhiệt độ và nghe phổi cho bạn nhé. Trên thang điểm từ 1 đến 10, bạn thấy cơn đau ở mức mấy?",
        suggestions: ["It's around a 5, but it gets worse at night.", "Around 6, especially when swallowing water."]
      },
      {
        keywords: ["5", "6", "7", "scale", "night", "swallow", "worse"],
        reply: "Your throat looks somewhat inflamed, likely a mild viral infection. Are you currently allergic to penicillin or any medications?",
        replyVi: "Cổ họng của bạn hơi bị viêm đỏ, nhiều khả năng do nhiễm virus nhẹ. Hiện tại bạn có bị dị ứng với penicillin hay loại thuốc nào không?",
        suggestions: ["No, I don't have any known drug allergies.", "I'm not allergic to anything that I know of."]
      },
      {
        keywords: ["no", "allergy", "allergic", "penicillin", "medication"],
        reply: "I will prescribe an anti-inflammatory spray and throat lozenges. Drink plenty of warm liquids, rest well, and come back if fever persists after 3 days.",
        replyVi: "Tôi sẽ kê cho bạn chai xịt kháng viêm và viên ngậm họng. Nhớ uống nhiều nước ấm, nghỉ ngơi đầy đủ và tái khám nếu sốt kéo dài quá 3 ngày nhé.",
        suggestions: ["Thank you very much, Dr. Evans!", "How many times a day should I use the spray?"]
      },
      {
        keywords: ["spray", "thank", "time", "day", "doctor"],
        reply: "Use the spray twice a day after meals. Take good care of yourself and get well soon!",
        replyVi: "Dùng bình xịt 2 lần mỗi ngày sau bữa ăn nhé. Hãy giữ gìn sức khỏe và chóng bình phục nha!",
        isConclusion: true
      }
    ],
    fallback: "Make sure you rest completely and stay well-hydrated. Let me know how you feel tomorrow.",
    fallbackVi: "Hãy đảm bảo bạn nghỉ ngơi hoàn toàn và uống đủ nước. Nhớ báo lại cho tôi cảm giác của bạn vào ngày mai nhé."
  },

  a2_airport: {
    id: "a2_airport",
    title: "Airport Baggage Check-in & Gate Security",
    level: "A2",
    levelCategory: "A2",
    icon: "✈️",
    role: "Sarah (Skyline Airline Agent)",
    avatar: "👩‍💼",
    desc: "Check luggage, request aisle/window seats, and verify departure gates.",
    welcome: "Good morning! Welcome to Skyline Airways. May I please see your passport and flight booking reference?",
    welcomeVi: "Chào buổi sáng! Chào mừng quý khách đến với Skyline Airways. Tôi có thể xem hộ chiếu và mã đặt vé của quý khách không?",
    promptSuggestions: [
      "Here is my passport and e-ticket code: SK-9402.",
      "Good morning! I am flying to Tokyo Narita today.",
      "Hi! Could I check two suitcases for this flight?"
    ],
    responses: [
      {
        keywords: ["passport", "ticket", "code", "tokyo", "here", "flying", "suitcases"],
        reply: "Thank you! I see your booking for flight SK-204 to Tokyo. Please place your suitcase onto the scale.",
        replyVi: "Cảm ơn quý khách! Tôi thấy vé chuyến bay SK-204 đi Tokyo. Mời quý khách đặt vali lên cân hành lý.",
        suggestions: ["Here you go. It should be around 18 kilos.", "Does this bag exceed the weight limit?"]
      },
      {
        keywords: ["kilo", "weight", "limit", "scale", "bag", "heavy"],
        reply: "18.5 kilos, well within our 23kg limit! Would you prefer a window seat or an aisle seat for the journey?",
        replyVi: "18.5 ký, hoàn toàn nằm trong giới hạn 23kg! Quý khách muốn chọn ghế cạnh cửa sổ hay ghế lối đi cho chuyến bay?",
        suggestions: ["A window seat towards the front, please.", "An aisle seat so I can stretch my legs."]
      },
      {
        keywords: ["window", "aisle", "front", "leg", "seat"],
        reply: "You are in seat 12A, a front window seat! Boarding begins at 10:15 AM at Gate B7. Make sure to head through security screening soon.",
        replyVi: "Quý khách ngồi ghế 12A, cửa sổ phía trước nhé! Giờ lên máy bay bắt đầu lúc 10h15 tại Cửa B7. Quý khách nhớ sớm vào khu vực kiểm tra an ninh nha.",
        suggestions: ["Thank you! Where is the nearest duty-free shop?", "Which way to security gate B7?"]
      },
      {
        keywords: ["duty-free", "security", "gate", "thank", "time"],
        reply: "Security is straight through the glass doors. Have a pleasant flight and safe journey to Tokyo!",
        replyVi: "Khu an ninh đi thẳng qua cửa kính này ạ. Chúc quý khách có chuyến bay êm ái và chuyến đi Tokyo an toàn!",
        isConclusion: true
      }
    ],
    fallback: "Please keep your boarding pass and passport handy at the gate.",
    fallbackVi: "Quý khách nhớ cầm sẵn thẻ lên máy bay và hộ chiếu khi ra cửa khởi hành nhé."
  },

  a2_weekend: {
    id: "a2_weekend",
    title: "Planning a Weekend Roadtrip & Picnic",
    level: "A2",
    levelCategory: "A2",
    icon: "🚗",
    role: "Dan (Adventurous Travel Buddy)",
    avatar: "🧑",
    desc: "Coordinate destinations, check weather forecasts, and divide snacks.",
    welcome: "Hey! The weekend forecast looks sunny and warm. Are you ready to plan our Saturday roadtrip to the national park?",
    welcomeVi: "Ê bạn ơi! Dự báo thời tiết cuối tuần này nắng đẹp và ấm áp lắm. Bạn đã sẵn sàng lên kế hoạch đi phượt công viên quốc gia vào thứ Bảy chưa?",
    promptSuggestions: [
      "I'm super excited! What time should we hit the road?",
      "Yes! What snacks and outdoor gear should I prepare?",
      "Sounds awesome! Are we going to hike to the waterfall?"
    ],
    responses: [
      {
        keywords: ["time", "road", "gear", "snack", "hike", "waterfall", "excited", "yes"],
        reply: "If we leave at 7:30 AM, we will beat the heavy highway traffic. I can bring the picnic mat and tent. Can you bring some sandwiches and drinks?",
        replyVi: "Nếu chúng mình xuất phát lúc 7h30 sáng thì sẽ tránh được kẹt xe trên cao tốc. Mình sẽ đem thảm picnic và lều. Bạn chuẩn bị bánh mì kẹp và nước uống được không?",
        suggestions: ["I will make ham and cheese sandwiches plus cold iced tea!", "I'll pack fresh fruit, energy bars, and plenty of water."]
      },
      {
        keywords: ["sandwich", "tea", "fruit", "water", "juice", "pack", "make"],
        reply: "That sounds delicious! Don't forget comfortable hiking shoes, sunscreen, and maybe a light jacket in case it gets breezy near the peaks.",
        replyVi: "Nghe hấp dẫn quá! Đừng quên mang giày leo núi êm chân, kem chống nắng và chiếc áo khoác nhẹ đề phòng gió lạnh trên đỉnh núi nha.",
        suggestions: ["Got it! I will charge my camera to take scenic photos.", "I'll bring my bluetooth speaker for the drive."]
      },
      {
        keywords: ["camera", "photo", "speaker", "music", "drive", "ready"],
        reply: "Awesome! I'll pick you up at your doorstep at 7:30 AM sharp. It's going to be an unforgettable weekend!",
        replyVi: "Tuyệt đỉnh! 7h30 sáng đúng giờ mình sẽ qua đón tận cửa nhé. Chắc chắn sẽ là một cuối tuần đáng nhớ!",
        isConclusion: true
      }
    ],
    fallback: "I'll double check the route on Google Maps to avoid tolls.",
    fallbackVi: "Mình sẽ kiểm tra lại lộ trình trên Google Maps để tránh các trạm thu phí."
  },

  a2_hobbies: {
    id: "a2_hobbies",
    title: "Hobbies, Gym & Outdoor Sports",
    level: "A2",
    levelCategory: "A2",
    icon: "⚽",
    role: "Coach Jake (Fitness Trainer)",
    avatar: "🏋️‍♂️",
    desc: "Discuss workout routines, gym habits, running goals, and keeping fit.",
    welcome: "Hey there! Ready to level up your fitness routine? What sports or physical activities do you enjoy most?",
    welcomeVi: "Chào bạn! Sẵn sàng nâng cấp chế độ tập luyện chưa? Bạn thích môn thể thao hay hoạt động rèn luyện nào nhất?",
    promptSuggestions: [
      "I love jogging around the lake three times a week.",
      "I play badminton on weekends with my coworkers.",
      "I just started going to the gym to build some muscle."
    ],
    responses: [
      {
        keywords: ["jog", "run", "badminton", "gym", "muscle", "swim", "yoga", "football"],
        reply: "That is fantastic! Consistency beats intensity every single time. What is your primary fitness goal for the next 3 months?",
        replyVi: "Tuyệt vời lắm! Sự đều đặn luôn đánh bại cường độ nhất thời. Mục tiêu rèn luyện thể chất chính của bạn trong 3 tháng tới là gì?",
        suggestions: ["I want to run a 5K race without stopping.", "I want to lose 3 kilograms and improve stamina."]
      },
      {
        keywords: ["5k", "kilo", "weight", "stamina", "strong", "goal", "muscle"],
        reply: "Completely realistic and achievable. Make sure you drink at least 2 liters of water daily and prioritize quality sleep for muscle recovery.",
        replyVi: "Mục tiêu rất thực tế và hoàn toàn trong tầm tay. Nhớ uống ít nhất 2 lít nước mỗi ngày và ưu tiên ngủ đủ giấc để cơ bắp phục hồi nhé.",
        suggestions: ["Thanks Coach! How often should I train per week?", "What should I eat before morning workouts?"]
      },
      {
        keywords: ["coach", "train", "eat", "food", "often", "week", "morning"],
        reply: "Aim for 3 to 4 balanced sessions weekly, and have a banana or oats 30 minutes before training. Keep that champion mindset!",
        replyVi: "Hãy duy trì 3 đến 4 buổi tập cân bằng mỗi tuần, và ăn một quả chuối hoặc yến mạch 30 phút trước khi tập. Hãy luôn giữ tinh thần thép của nhà vô địch nhé!",
        isConclusion: true
      }
    ],
    fallback: "Stay hydrated and listen to your body signals to prevent injury.",
    fallbackVi: "Nhớ bổ sung đủ nước và lắng nghe cơ thể để tránh chấn thương bạn nhé."
  },

  // ===== LEVEL B1: INTERMEDIATE =====
  b1_interview: {
    id: "b1_interview",
    title: "Software Engineer Job Interview",
    level: "B1",
    levelCategory: "B1",
    icon: "💼",
    role: "Alex (Senior Tech Recruiter)",
    avatar: "👨‍💼",
    desc: "Practice answering background questions, project architectures, and debugging challenges.",
    welcome: "Hello! Welcome to our engineering interview. Could you briefly introduce yourself and tell me what motivated you to pursue software engineering?",
    welcomeVi: "Xin chào! Chào mừng bạn đến với buổi phỏng vấn kỹ sư phần mềm. Bạn có thể giới thiệu ngắn gọn về bản thân và điều gì thôi thúc bạn theo đuổi ngành kỹ thuật phần mềm không?",
    promptSuggestions: [
      "I have worked with web technologies for 3 years and love building user-friendly applications.",
      "I graduated in computer science and specialize in building responsive frontend systems.",
      "I'm passionate about solving complex real-world challenges through elegant, scalable code."
    ],
    responses: [
      {
        keywords: ["introduce", "experience", "year", "years", "web", "degree", "love", "developer", "engineer"],
        reply: "That is a solid foundation! Can you describe a challenging technical obstacle you debugged recently, and how you approached resolving it?",
        replyVi: "Đó là một nền tảng rất vững chắc! Bạn có thể mô tả một sự cố kỹ thuật khó khăn mà bạn đã xử lý gần đây và cách bạn tiếp cận để gỡ lỗi không?",
        suggestions: ["We encountered a memory leak in client state, so I profiled heap allocations.", "Our database queries were running slowly, so I implemented Redis caching."]
      },
      {
        keywords: ["bug", "leak", "slow", "problem", "solve", "resolved", "cache", "database", "fix", "profile"],
        reply: "Impressive analytical approach. Team collaboration is central to our culture. How do you resolve disagreements with teammates regarding code quality versus urgent deadlines?",
        replyVi: "Cách tiếp cận phân tích rất ấn tượng. Sự hợp tác nhóm là cốt lõi văn hóa của chúng tôi. Bạn giải quyết bất đồng với đồng nghiệp như thế nào giữa chất lượng code và deadline gấp?",
        suggestions: ["I prioritize open, data-driven trade-offs and document technical debt.", "I suggest a modular MVP scope first, followed by planned refactoring."]
      },
      {
        keywords: ["trade-off", "debt", "scope", "mvp", "communication", "talk", "listen", "quality", "deadline"],
        reply: "Excellent pragmatism. Lastly, where do you see your technical growth heading over the next 2 years, and what questions do you have for us?",
        replyVi: "Tư duy thực tế rất tốt. Cuối cùng, bạn định hướng phát triển kỹ thuật của mình thế nào trong 2 năm tới, và bạn có câu hỏi nào dành cho chúng tôi không?",
        suggestions: ["I want to mentor junior engineers and architect microservices. What does your deployment pipeline look like?", "How does your engineering team support continuous learning and certification?"]
      },
      {
        keywords: ["mentor", "deploy", "pipeline", "learn", "culture", "question", "grow"],
        reply: "We deploy multiple times daily and offer $2,000 yearly education stipends! You presented your strengths with great clarity today. We will be in touch soon!",
        replyVi: "Chúng tôi triển khai code nhiều lần mỗi ngày và tài trợ 2,000 USD học tập mỗi năm! Bạn đã thể hiện năng lực rất rõ ràng hôm nay. Chúng tôi sẽ sớm liên hệ lại!",
        isConclusion: true
      }
    ],
    fallback: "That's an insightful perspective. Could you elaborate on your hands-on experience with team version control?",
    fallbackVi: "Một góc nhìn rất sâu sắc. Bạn có thể chia sẻ thêm về kinh nghiệm làm việc nhóm với Git không?"
  },

  b1_support: {
    id: "b1_support",
    title: "Customer Support & Product Return",
    level: "B1",
    levelCategory: "B1",
    icon: "📦",
    role: "Jessica (Senior Resolution Specialist)",
    avatar: "👩‍💼",
    desc: "Handle damaged shipments, request full refunds, and clarify warranties.",
    welcome: "Thank you for calling Apex Electronics Support. My name is Jessica. How may I assist you with your recent order today?",
    welcomeVi: "Cảm ơn quý khách đã gọi đến trung tâm hỗ trợ Apex Electronics. Tôi là Jessica. Tôi có thể hỗ trợ quý khách về đơn hàng gần đây như thế nào?",
    promptSuggestions: [
      "Hello, I received a damaged Bluetooth speaker yesterday and would like a replacement.",
      "Hi Jessica, my package arrived missing critical accessories.",
      "I want to request a full refund because the product does not match the website description."
    ],
    responses: [
      {
        keywords: ["damaged", "broken", "speaker", "replacement", "missing", "refund", "package", "order"],
        reply: "I am genuinely sorry for that inconvenience! May I have your 8-digit order number so I can pull up the shipping details?",
        replyVi: "Tôi vô cùng xin lỗi vì sự bất tiện này! Quý khách có thể cung cấp mã đơn hàng 8 chữ số để tôi tra cứu thông tin vận chuyển không ạ?",
        suggestions: ["My order number is #AP-88492015.", "Here is the confirmation code: AP-40912."]
      },
      {
        keywords: ["ap-", "order", "number", "code", "8849", "40912"],
        reply: "Thank you, I found your purchase. Would you prefer an immediate priority replacement shipped out today, or a 100% refund credited back to your original payment card?",
        replyVi: "Cảm ơn quý khách, tôi đã thấy thông tin đơn hàng. Quý khách muốn chúng tôi gửi đổi sản phẩm mới hỏa tốc hôm nay, hay hoàn tiền 100% về thẻ thanh toán ban đầu ạ?",
        suggestions: ["I would prefer a full refund to my card, please.", "Please send a replacement unit if it is inspected first."]
      },
      {
        keywords: ["refund", "replacement", "send", "card", "unit", "inspect"],
        reply: "Done! I have processed that immediately and emailed a prepaid return shipping label. We also added a $15 voucher to your account as our apology.",
        replyVi: "Đã hoàn tất! Tôi đã xử lý ngay và gửi mã vận chuyển trả hàng miễn phí qua email. Chúng tôi cũng tặng kèm voucher 15 USD vào tài khoản để xin lỗi quý khách.",
        isConclusion: true
      }
    ],
    fallback: "Let me check our warranty database to guarantee that is covered for you.",
    fallbackVi: "Để tôi kiểm tra cơ sở dữ liệu bảo hành để đảm bảo quyền lợi cho quý khách."
  },

  b1_apartment: {
    id: "b1_apartment",
    title: "Apartment Hunting & Lease Agreement",
    level: "B1",
    levelCategory: "B1",
    icon: "🔑",
    role: "Arthur (Property Leasing Agent)",
    avatar: "🧔",
    desc: "Inquire about rent, security deposits, pet policies, and lease duration.",
    welcome: "Good afternoon! Thanks for coming to view the 2-bedroom apartment on Maple Avenue. What do you think of the natural lighting here?",
    welcomeVi: "Chào buổi chiều! Cảm ơn bạn đã đến xem căn hộ 2 phòng ngủ trên đại lộ Maple. Bạn thấy ánh sáng tự nhiên ở đây thế nào?",
    promptSuggestions: [
      "The natural sunlight is gorgeous! What is the monthly rent including utilities?",
      "I love the spacious living room. Does this building allow small pets?",
      "It looks great! What is the required security deposit and lease duration?"
    ],
    responses: [
      {
        keywords: ["rent", "utility", "monthly", "pet", "dog", "cat", "deposit", "lease", "sunlight", "light"],
        reply: "The rent is $1,350 per month, which includes high-speed fiber internet and water. Electric is billed separately. Small pets under 15kg are warmly welcome with a $200 one-time deposit.",
        replyVi: "Giá thuê là 1,350 USD/tháng, đã bao gồm internet cáp quang tốc độ cao và tiền nước. Tiền điện tính riêng. Thú cưng nhỏ dưới 15kg được phép nuôi với phí đặt cọc 1 lần là 200 USD.",
        suggestions: ["Is there private parking included with this unit?", "When is the earliest move-in date available?"]
      },
      {
        keywords: ["parking", "car", "move-in", "date", "available", "contract", "start"],
        reply: "One underground parking space is designated for this apartment! It's vacant and freshly renovated, so you could move in as early as next Monday.",
        replyVi: "Căn hộ có sẵn 1 chỗ đỗ xe dưới tầng hầm! Phòng đang trống và vừa sơn sửa mới tinh, nên bạn có thể dọn vào sớm nhất là thứ Hai tuần tới.",
        suggestions: ["What documents do I need to submit with the application?", "Can we sign a 12-month lease agreement?"]
      },
      {
        keywords: ["document", "submit", "application", "lease", "sign", "12", "month", "id"],
        reply: "Just a proof of income and a copy of your passport or ID! I will email you the application link right away. Welcome to the neighborhood!",
        replyVi: "Chỉ cần bảng sao kê thu nhập và bản sao hộ chiếu/CCCD thôi! Mình sẽ gửi link đăng ký qua email ngay. Chào mừng bạn đến với khu phố!",
        isConclusion: true
      }
    ],
    fallback: "The neighborhood is very quiet with a grocery store just two blocks away.",
    fallbackVi: "Khu này rất yên tĩnh và có siêu thị chỉ cách 2 dãy nhà thôi."
  },

  b1_lost_item: {
    id: "b1_lost_item",
    title: "Lost Luggage at Airport Baggage Claim",
    level: "B1",
    levelCategory: "B1",
    icon: "🧳",
    role: "Officer Henderson (Lost & Found Officer)",
    avatar: "👮‍♂️",
    desc: "File lost baggage reports, provide physical descriptions, and track delivery.",
    welcome: "Baggage Services, Officer Henderson speaking. I understand your checked suitcase did not appear on Carousel 4. Let's file a property irregularity report.",
    welcomeVi: "Bộ phận dịch vụ hành lý, tôi là Henderson. Tôi hiểu rằng vali ký gửi của bạn không xuất hiện trên băng chuyền số 4. Hãy cùng lập biên bản thất lạc hành lý nhé.",
    promptSuggestions: [
      "Yes, my flight was VN-312 from Hanoi. My black Samsonite suitcase is missing.",
      "Hello officer, all the other bags from my flight have arrived except mine.",
      "Could you help me track where my luggage was misplaced during the transit?"
    ],
    responses: [
      {
        keywords: ["flight", "samsonite", "black", "missing", "luggage", "suitcase", "bag", "transit"],
        reply: "Can you provide the baggage claim tag sticker from your boarding pass, and describe any distinctive tags or ribbons on the suitcase?",
        replyVi: "Bạn có thể đưa thẻ mã vạch hành lý dán trên vé máy bay, và miêu tả đặc điểm nhận dạng hay dây ruy-băng buộc trên vali không?",
        suggestions: ["Here is tag #VN-99201. It has an orange luggage strap around the middle.", "It's a hard-shell navy bag with a yellow leather address tag."]
      },
      {
        keywords: ["tag", "strap", "orange", "yellow", "navy", "shell", "leather", "vn-"],
        reply: "I scanned the tag! Good news: the bag was mistakenly routed onto the subsequent flight arriving in 3 hours. Where will you be staying in the city so our courier can deliver it?",
        replyVi: "Tôi đã quét mã thẻ! Tin tốt là kiện hàng bị chuyển nhầm sang chuyến bay kế tiếp và sẽ tới đây trong 3 giờ nữa. Bạn sẽ ở khách sạn/địa chỉ nào để nhân viên giao tận nơi?",
        suggestions: ["I am staying at the Sheraton Hotel on 5th Street, room 410.", "Here is my Airbnb apartment address and contact phone number."]
      },
      {
        keywords: ["hotel", "sheraton", "address", "phone", "street", "airbnb", "stay"],
        reply: "Recorded! Our driver will deliver your suitcase directly to the concierge by 6:00 PM today at no charge. Here is your tracking claim number: PIR-7729.",
        replyVi: "Đã ghi nhận! Tài xế sẽ giao vali đến tận quầy lễ tân trước 6h chiều nay hoàn toàn miễn phí. Đây là mã hồ sơ theo dõi của bạn: PIR-7729.",
        isConclusion: true
      }
    ],
    fallback: "We track all luggage via RFID checkpoints throughout our transit hubs.",
    fallbackVi: "Chúng tôi quét theo dõi toàn bộ hành lý qua các trạm kiểm soát RFID tại trạm trung chuyển."
  },

  b1_movies: {
    id: "b1_movies",
    title: "Cinema, Blockbusters & Film Critiques",
    level: "B1",
    levelCategory: "B1",
    icon: "🎬",
    role: "Maya (Film Enthusiast & Reviewer)",
    avatar: "👩‍🎨",
    desc: "Discuss cinematography, favorite directors, plot twists, and acting performances.",
    welcome: "Hey! Did you catch that new Christopher Nolan sci-fi film that came out in IMAX last week? What kind of movies do you usually love watching?",
    welcomeVi: "Chào bạn! Bạn đã xem bộ phim viễn tưởng mới của Christopher Nolan chiếu rạp IMAX tuần trước chưa? Thường thì bạn mê xem thể loại phim nào nhất?",
    promptSuggestions: [
      "I love mind-bending science fiction movies with unexpected plot twists!",
      "I'm a big fan of psychological thrillers and gripping detective stories.",
      "I prefer heartfelt indie dramas with rich character development."
    ],
    responses: [
      {
        keywords: ["sci-fi", "thriller", "drama", "twist", "mind-bending", "detective", "character", "nolan", "imax"],
        reply: "Science fiction with intelligent plot architecture is unbeatable! In your opinion, what makes a film truly memorable: stunning CGI or a poignant storyline?",
        replyVi: "Phim viễn tưởng có kịch bản thông minh là đỉnh nhất rồi! Theo bạn, điều gì làm một bộ phim thực sự đáng nhớ: kỹ xảo CGI mãn nhãn hay cốt truyện sâu sắc lay động lòng người?",
        suggestions: ["A compelling storyline with emotional depth always matters more than CGI.", "I think a masterpiece needs both seamless visual effects and memorable acting."]
      },
      {
        keywords: ["storyline", "cgi", "emotion", "depth", "visual", "acting", "actor", "story"],
        reply: "Completely agree. A film without soul is just a tech demo. Have you ever watched any classic movies that completely changed your worldview?",
        replyVi: "Rất đồng tình. Một bộ phim không có chiều sâu tâm hồn chỉ như một video phô diễn công nghệ. Bạn đã từng xem bộ phim kinh điển nào làm thay đổi thế giới quan của mình chưa?",
        suggestions: ["'Interstellar' and 'The Shawshank Redemption' deeply inspired my view of resilience.", "'Inception' blew my mind the first time I watched it in college."]
      },
      {
        keywords: ["interstellar", "shawshank", "inception", "inspire", "college", "resilience", "classic"],
        reply: "Those are timeless masterpieces! Your ability to critique and analyze cinematic storytelling in English is top notch!",
        replyVi: "Toàn là những siêu phẩm vượt thời gian! Khả năng bình luận và phân tích nghệ thuật điện ảnh bằng tiếng Anh của bạn quá xuất sắc!",
        isConclusion: true
      }
    ],
    fallback: "The soundtrack composed by Hans Zimmer elevated the entire emotional impact.",
    fallbackVi: "Bản nhạc nền do Hans Zimmer biên soạn đã nâng tầm toàn bộ cảm xúc của bộ phim."
  },

  b1_work_chat: {
    id: "b1_work_chat",
    title: "Office Pantry Small Talk & Networking",
    level: "B1",
    levelCategory: "B1",
    icon: "☕",
    role: "Brian (Senior Marketing Lead)",
    avatar: "🧑‍💼",
    desc: "Make casual workplace conversation, discuss weekend plans, and company culture.",
    welcome: "Hey! Brewing the morning coffee? It's been a busy sprint for everyone this week. How are your team's projects coming along?",
    welcomeVi: "Chào bạn! Đang pha cà phê sáng à? Tuần này đúng là một đợt chạy nước rút bận rộn cho cả công ty. Dự án bên team bạn tiến triển ổn chứ?",
    promptSuggestions: [
      "We just wrapped up our quarterly sprint ahead of schedule!",
      "It's been quite hectic, but we are making good progress on the client launch.",
      "Good morning Brian! Just grabbing some caffeine before our 10 AM standup."
    ],
    responses: [
      {
        keywords: ["sprint", "schedule", "hectic", "progress", "launch", "standup", "caffeine", "coffee"],
        reply: "Finishing ahead of schedule is a huge win! I know your team put in long hours. Are you doing anything special to celebrate or unwind this weekend?",
        replyVi: "Hoàn thành trước hạn là thành công lớn đấy! Tôi biết team bạn đã cày cuốc rất chăm chỉ. Cuối tuần này bạn có dự định gì đặc biệt để xả hơi không?",
        suggestions: ["I'm heading out of town to the beach for some fresh air.", "Just catching up on sleep and cooking dinner with some close friends."]
      },
      {
        keywords: ["beach", "sleep", "cook", "dinner", "friends", "town", "unwind", "rest"],
        reply: "That sounds like the ideal reset. Work-life balance is something our leadership takes seriously. Let's grab lunch with the design team sometime next week!",
        replyVi: "Nghe như một cách nạp lại năng lượng lý tưởng đấy. Cân bằng công việc - cuộc sống là điều ban giám đốc rất quan tâm. Tuần tới tụi mình rủ thêm team thiết kế đi ăn trưa nhé!",
        suggestions: ["That would be great! Let's schedule it for Wednesday.", "Count me in! I know a fantastic Thai restaurant nearby."]
      },
      {
        keywords: ["wednesday", "thai", "lunch", "restaurant", "count", "great"],
        reply: "Awesome, Wednesday it is! See you at the all-hands meeting later, and have a productive day!",
        replyVi: "Tuyệt, chốt thứ Tư nhé! Hẹn gặp bạn ở cuộc họp toàn thể chiều nay, chúc bạn một ngày làm việc hiệu quả!",
        isConclusion: true
      }
    ],
    fallback: "Coffee in this pantry is definitely the fuel that keeps this company running!",
    fallbackVi: "Cà phê ở góc pantry này chắc chắn là nguồn năng lượng giữ cho công ty luôn vận hành trơn tru!"
  },

  // ===== LEVEL B2: UPPER INTERMEDIATE =====
  b2_meeting: {
    id: "b2_meeting",
    title: "Agile Sprint Sync & Task Delegation",
    level: "B2",
    levelCategory: "B2",
    icon: "📊",
    role: "Marcus (Agile Product Director)",
    avatar: "🧑‍💻",
    desc: "Facilitate sprint velocity reviews, negotiate blockers, and assign cross-functional tasks.",
    welcome: "Good morning team. We have 15 minutes for our bi-weekly sprint sync. Could you summarize the deliverables achieved and highlight any critical blockers?",
    welcomeVi: "Chào buổi sáng cả nhóm. Chúng ta có 15 phút cho buổi đồng bộ sprint định kỳ. Bạn có thể tóm tắt các hạng mục đã hoàn thành và nêu bật các vướng mắc nghiêm trọng nếu có không?",
    promptSuggestions: [
      "We completed the authentication migration, but we are blocked on third-party payment API documentation.",
      "The UI redesign is 90% finished; however, test coverage on legacy modules is delaying the staging deployment.",
      "Our backend latency improved by 40% after refactoring Redis cache invalidation keys."
    ],
    responses: [
      {
        keywords: ["migration", "payment", "blocked", "api", "redesign", "coverage", "latency", "redis", "cache"],
        reply: "Appreciate the concise breakdown. Regarding the third-party payment dependency, can we mock the gateway endpoints to keep frontend velocity unblocked?",
        replyVi: "Cảm ơn phần báo cáo ngắn gọn. Về sự phụ thuộc vào API thanh toán của bên thứ ba, liệu chúng ta có thể tạo mock endpoint để giữ tiến độ frontend không bị nghẽn không?",
        suggestions: ["Yes, we can use local JSON fixtures to simulate webhook payloads.", "I'll create an interface stub so the UI team can develop against mock contracts."]
      },
      {
        keywords: ["mock", "fixture", "webhook", "stub", "contract", "interface", "payload"],
        reply: "Excellent pragmatic solution. How are we trending on our sprint burndown chart, and do we need to descope non-essential user stories for Friday's release?",
        replyVi: "Giải pháp thực tế rất xuất sắc. Biểu đồ burndown của chúng ta đang diễn biến thế nào, và chúng ta có cần cắt giảm các tính năng phụ để kịp đợt release thứ Sáu không?",
        suggestions: ["We are on track for core epics, but we should defer the dark-mode toggle to next sprint.", "If we allocate one more QA engineer today, we can ship the entire scope."]
      },
      {
        keywords: ["descope", "defer", "qa", "ship", "scope", "burndown", "epic", "track"],
        reply: "Approved. Let's defer non-critical items and lock the release candidate by 4 PM Thursday. Outstanding technical ownership!",
        replyVi: "Duyệt phương án. Chúng ta sẽ hoãn các mục phụ và chốt bản release candidate trước 4h chiều thứ Năm. Tinh thần làm chủ kỹ thuật rất xuất sắc!",
        isConclusion: true
      }
    ],
    fallback: "Let's track that technical debt on Jira and prioritize it during sprint planning.",
    fallbackVi: "Hãy tạo ticket nợ kỹ thuật trên Jira để chúng ta ưu tiên trong buổi lên kế hoạch sprint tới."
  },

  b2_salary: {
    id: "b2_salary",
    title: "Salary Review & Promotion Pitch",
    level: "B2",
    levelCategory: "B2",
    icon: "💰",
    role: "Evelyn (Vice President of Talent)",
    avatar: "👩‍💼",
    desc: "Present business impact metrics, justify compensation adjustments, and discuss career ladders.",
    welcome: "Hello. Thank you for requesting this performance compensation review. I value your initiative. Walk me through the measurable value you've delivered this past year.",
    welcomeVi: "Xin chào bạn. Cảm ơn bạn đã đề xuất buổi đánh giá lương thưởng này. Tôi rất đánh giá cao sự chủ động của bạn. Hãy trình bày những giá trị đo lường được mà bạn đã đóng góp trong năm qua.",
    promptSuggestions: [
      "Over the past 12 months, I led the core checkout overhaul, resulting in an 18% increase in conversion rate.",
      "I mentored three junior hires while reducing server infrastructure costs by $45,000 annually.",
      "I stepped up to manage cross-team technical architecture after our team lead departed."
    ],
    responses: [
      {
        keywords: ["conversion", "increase", "mentor", "cost", "reduce", "lead", "architecture", "overhaul"],
        reply: "Those metrics demonstrate tangible business impact. What specific compensation adjustment or title transition are you aiming for in this cycle?",
        replyVi: "Những con số đó chứng minh tác động kinh doanh rất rõ ràng. Bạn đang hướng tới mức điều chỉnh đãi ngộ hay vị trí chức danh cụ thể nào trong đợt này?",
        suggestions: ["Based on market benchmarks, I am proposing a 15% base adjustment and promotion to Senior Engineer.", "I am targeting a base increase to $85,000 alongside leadership equity grants."]
      },
      {
        keywords: ["benchmark", "15%", "senior", "equity", "base", "adjustment", "salary", "85,000"],
        reply: "Your rationale aligns with our benchmark bands for Senior level. How do you envision your leadership scope evolving over the next two quarters?",
        replyVi: "Lập luận của bạn rất phù hợp với khung lương thị trường cho cấp Senior. Bạn định hình phạm vi dẫn dắt của mình sẽ phát triển thế nào trong hai quý tới?",
        suggestions: ["I plan to spearhead our mobile SDK initiative and establish engineering best practices.", "I will lead architecture reviews and scale our distributed caching layer."]
      },
      {
        keywords: ["spearhead", "best practice", "scale", "caching", "architecture", "sdk", "lead"],
        reply: "I am fully supportive of this progression. I will submit the formal recommendation to the compensation committee today. Well deserved!",
        replyVi: "Tôi hoàn toàn ủng hộ lộ trình thăng tiến này. Tôi sẽ đệ trình văn bản đề xuất chính thức lên hội đồng lương thưởng ngay hôm nay. Bạn rất xứng đáng!",
        isConclusion: true
      }
    ],
    fallback: "Your track record reflects high accountability and leadership potential.",
    fallbackVi: "Những thành tích vừa qua phản ánh tinh thần trách nhiệm cao và tiềm năng lãnh đạo của bạn."
  },

  b2_tech_down: {
    id: "b2_tech_down",
    title: "DevOps Server Outage & Debugging",
    level: "B2",
    levelCategory: "B2",
    icon: "💻",
    role: "Dave (Site Reliability Engineering Lead)",
    avatar: "🧑‍💻",
    desc: "Diagnose 502 gateway errors, analyze server logs, mitigate outages, and conduct post-mortems.",
    welcome: "Paging all on-call engineers! Production alert: our API gateway latency spiked to 4,000ms with a 12% 502 Bad Gateway error rate. What is your diagnostic diagnosis?",
    welcomeVi: "Báo động toàn bộ kỹ sư trực ca! Hệ thống production cảnh báo: độ trễ API gateway vọt lên 4,000ms kèm 12% lỗi 502 Bad Gateway. Bạn chẩn đoán nguyên nhân ban đầu ra sao?",
    promptSuggestions: [
      "Let's immediately inspect Kubernetes pod CPU saturation and connection pool exhaustion.",
      "I'm checking the database replica lag and slow query logs from the recent 2 PM deploy.",
      "We should temporarily route non-critical traffic to our fallback CDN to relieve backend load."
    ],
    responses: [
      {
        keywords: ["kubernetes", "cpu", "connection", "pool", "database", "replica", "slow", "cdn", "traffic", "deploy"],
        reply: "Logs reveal our primary PostgreSQL connection pool is saturated by unindexed queries on the notifications table! How should we mitigate right now?",
        replyVi: "Nhật ký hệ thống chỉ ra rằng connection pool của PostgreSQL chính đang cạn kiệt do các truy vấn thiếu index ở bảng thông báo! Chúng ta nên giảm tải thế nào ngay lúc này?",
        suggestions: ["Let's immediately kill long-running idle queries and scale the replica instances.", "We can disable the async notification worker temporarily and hotfix the missing composite index."]
      },
      {
        keywords: ["kill", "idle", "replica", "disable", "worker", "hotfix", "index", "scale"],
        reply: "Worker disabled and index hotfix applied! Connection pool usage dropped back below 30% and 502s subsided. What preventative measures should we add to our post-mortem?",
        replyVi: "Đã ngắt worker và áp dụng hotfix index! Tải connection pool đã giảm xuống dưới 30% và lỗi 502 đã dứt điểm. Chúng ta nên thêm biện pháp phòng ngừa nào vào báo cáo sự cố (post-mortem)?",
        suggestions: ["We need automated query timeout circuit breakers and staging load testing.", "We should enforce mandatory query index audits before any production schema migration."]
      },
      {
        keywords: ["circuit breaker", "timeout", "load test", "audit", "migration", "schema"],
        reply: "Spot-on incident management. You kept calm under pressure and remediated critical downtime efficiently. Terrific execution!",
        replyVi: "Xử lý sự cố chuẩn không cần chỉnh. Bạn đã giữ được bình tĩnh trước áp lực và khắc phục thời gian chết một cách thần tốc. Thật tuyệt vời!",
        isConclusion: true
      }
    ],
    fallback: "Let's update the status page to inform users that services are restored.",
    fallbackVi: "Hãy cập nhật trang trạng thái hệ thống để thông báo cho người dùng rằng dịch vụ đã hoạt động trở lại."
  },

  b2_environment: {
    id: "b2_environment",
    title: "Renewable Energy & Carbon Reduction",
    level: "B2",
    levelCategory: "B2",
    icon: "🌿",
    role: "Dr. Aris (Environmental Policy Researcher)",
    avatar: "🧑‍🔬",
    desc: "Debate solar vs wind subsidies, carbon credits, electric vehicles, and sustainable urban design.",
    welcome: "Welcome to our sustainability panel. Transitioning modern metropolitan grids to 100% renewable energy presents steep storage and cost hurdles. What is your perspective on the most viable immediate path forward?",
    welcomeVi: "Chào mừng quý vị đến với diễn đàn phát triển bền vững. Việc chuyển đổi lưới điện đô thị sang 100% năng lượng tái tạo đang gặp rào cản lớn về lưu trữ và chi phí. Theo bạn, lộ trình thực tế nhất trước mắt là gì?",
    promptSuggestions: [
      "I believe decentralized rooftop solar paired with battery microgrids offers the fastest scalability.",
      "Governments must implement transparent carbon taxation while investing heavily in grid modernization.",
      "Energy efficiency in smart buildings will reduce baseline demand more economically than building new plants."
    ],
    responses: [
      {
        keywords: ["solar", "battery", "microgrid", "carbon", "tax", "grid", "efficiency", "building", "demand"],
        reply: "Decentralization is promising, yet battery manufacturing brings raw material extraction issues like lithium mining. How do you balance environmental degradation against clean energy storage?",
        replyVi: "Phân tán năng lượng rất hứa hẹn, tuy nhiên sản xuất pin lại gây ra vấn đề khai thác khoáng sản như mỏ lithium. Bạn cân bằng thế nào giữa suy thoái môi trường cục bộ và lưu trữ năng lượng sạch?",
        suggestions: ["We must invest in closed-loop battery recycling protocols and sodium-ion alternatives.", "Strict ESG compliance mandates should govern battery supply chain extraction."]
      },
      {
        keywords: ["recycling", "sodium", "alternative", "esg", "compliance", "mandate", "supply chain"],
        reply: "Crucial points. On the consumer side, how can public policy incentivize households to shift habits without disproportionately burdening lower-income demographics?",
        replyVi: "Các điểm rất xác đáng. Về phía người tiêu dùng, chính sách công nên khuyến khích các hộ gia đình thay đổi thói quen thế nào mà không tạo thêm gánh nặng cho người thu nhập thấp?",
        suggestions: ["Targeted subsidies for public transit and energy-efficient appliances for lower-income tiers.", "Tiered utility pricing that rewards conservation while keeping basic lifelines affordable."]
      },
      {
        keywords: ["subsidy", "public transit", "tiered", "pricing", "affordable", "low-income", "equity"],
        reply: "A wonderfully holistic approach balancing techno-economic realities with social equity. Your arguments were nuanced and persuasively framed!",
        replyVi: "Một cách tiếp cận toàn diện kết hợp hài hòa giữa thực tiễn kinh tế - kỹ thuật với công bằng xã hội. Lập luận của bạn rất chặt chẽ và thuyết phục!",
        isConclusion: true
      }
    ],
    fallback: "We need comprehensive lifecycle analyses for every proposed renewable transition.",
    fallbackVi: "Chúng ta cần phân tích vòng đời toàn diện cho mọi đề án chuyển dịch năng lượng tái tạo."
  },

  b2_culture: {
    id: "b2_culture",
    title: "Overcoming Culture Shock & Adaptation",
    level: "B2",
    levelCategory: "B2",
    icon: "🌏",
    role: "Kaitlyn (Cross-Cultural Communication Specialist)",
    avatar: "👩‍🏫",
    desc: "Examine cultural etiquette, high vs low context communication, and expatriate adjustment.",
    welcome: "Hello! Moving across continents or collaborating with multicultural remote teams often triggers unexpected culture shock. Have you ever encountered contrasting cultural norms or communication styles?",
    welcomeVi: "Xin chào! Chuyển nơi sinh sống giữa các châu lục hay làm việc trong đội ngũ đa quốc gia thường gây ra những cú sốc văn hóa bất ngờ. Bạn đã từng gặp sự khác biệt lớn nào về chuẩn mực văn hóa hoặc phong cách giao tiếp chưa?",
    promptSuggestions: [
      "In Vietnam, communication is often indirect and harmony-focused, whereas Western colleagues are very direct.",
      "I experienced shock regarding punctuality and work-life boundaries when collaborating with European teams.",
      "Adapting to candid critical feedback in meetings was initially intimidating for me."
    ],
    responses: [
      {
        keywords: ["indirect", "direct", "harmony", "punctuality", "feedback", "meeting", "colleague", "western", "vietnam"],
        reply: "The dichotomy between high-context indirect cultures and low-context explicit cultures is profound! How did you bridge that communication gap to prevent misunderstandings?",
        replyVi: "Sự phân cực giữa văn hóa ngữ cảnh cao (gián tiếp) và ngữ cảnh thấp (thẳng thắn) là rất sâu sắc! Bạn đã làm cầu nối thu hẹp khoảng cách giao tiếp đó như thế nào để tránh hiểu lầm?",
        suggestions: ["I learned not to take direct critique personally and actively asked clarifying questions.", "I established written recap summaries after calls to align on deliverables."]
      },
      {
        keywords: ["personally", "clarifying", "recap", "summary", "written", "align", "deliverable", "ask"],
        reply: "Documentation is a powerful cultural neutralizer. What advice would you offer to someone about to embark on their first international study or work assignment?",
        replyVi: "Lưu lại biên bản bằng văn bản là giải pháp trung hòa văn hóa cực kỳ hiệu quả. Bạn sẽ đưa ra lời khuyên gì cho một người sắp bắt đầu đi du học hoặc làm việc quốc tế lần đầu?",
        suggestions: ["Cultivate genuine curiosity, suspend quick judgment, and embrace discomfort as growth.", "Learn the local idioms and engage with locals outside your expat bubble."]
      },
      {
        keywords: ["curiosity", "judgment", "discomfort", "growth", "idiom", "bubble", "engage"],
        reply: "Empathetic, mature, and deeply perceptive advice. Navigating cultural nuance with such open-mindedness is a hallmark of global fluency!",
        replyVi: "Lời khuyên đầy thấu cảm, chín chắn và sâu sắc. Làm chủ những nét tinh tế trong văn hóa với tư duy cởi mở như vậy chính là minh chứng cho sự thành thạo toàn cầu!",
        isConclusion: true
      }
    ],
    fallback: "Empathy and active listening dissolve nearly all cross-cultural friction.",
    fallbackVi: "Sự đồng cảm và lắng nghe tích cực sẽ hóa giải hầu hết mọi bất đồng văn hóa."
  },

  b2_finance: {
    id: "b2_finance",
    title: "Personal Wealth & Portfolio Advisory",
    level: "B2",
    levelCategory: "B2",
    icon: "📈",
    role: "Gabriel (Certified Financial Planner)",
    avatar: "🧑‍💼",
    desc: "Evaluate asset allocation, index funds, inflation hedging, and emergency liquidity.",
    welcome: "Good day. Sound financial planning is about aligning assets with your lifetime horizon and risk tolerance. What does your current asset allocation strategy look like?",
    welcomeVi: "Xin chào bạn. Kế hoạch tài chính lành mạnh là phân bổ tài sản phù hợp với mục tiêu dài hạn và khẩu vị rủi ro. Chiến lược phân bổ danh mục hiện tại của bạn ra sao?",
    promptSuggestions: [
      "I allocate 60% in broad-market index funds, 20% in high-yield savings, and 20% in crypto and growth equities.",
      "I focus on maintaining a 6-month emergency reserve before investing into dividend-paying shares.",
      "I am looking to balance real estate equity with liquid international ETFs."
    ],
    responses: [
      {
        keywords: ["index", "fund", "etf", "crypto", "equity", "emergency", "reserve", "dividend", "real estate", "savings"],
        reply: "That is a well-diversified core. With persistent global inflation, how do you protect your purchasing power without taking on catastrophic downside risk?",
        replyVi: "Đó là một danh mục cốt lõi được đa dạng hóa tốt. Trước áp lực lạm phát toàn cầu, bạn bảo vệ sức mua của đồng tiền như thế nào mà không chịu rủi ro sụt giảm thảm khốc?",
        suggestions: ["By dollar-cost averaging into low-expense total market ETFs and inflation-protected securities.", "By reinvesting dividends and holding tangible assets that generate cash flow."]
      },
      {
        keywords: ["dollar-cost", "averaging", "etf", "securities", "dividend", "cash flow", "tangible"],
        reply: "Dollar-cost averaging removes emotional volatility from the equation. What is your anticipated timeline for major capital outlays, such as purchasing property?",
        replyVi: "Chiến lược bình quân giá (DCA) giúp loại bỏ hoàn toàn yếu tố cảm xúc khi thị trường biến động. Bạn dự kiến mốc thời gian cho các khoản chi lớn như mua nhà trong bao lâu?",
        suggestions: ["Within the next 3 to 5 years, so I am keeping down-payment capital in short-term bonds.", "Over a 10-year horizon, allowing me to stay aggressive in equities."]
      },
      {
        keywords: ["3", "5", "10", "year", "bond", "aggressive", "down-payment", "property"],
        reply: "Prudent duration matching. Keeping short-term commitments out of volatile equities prevents forced liquidation. You have a remarkably disciplined financial mindset!",
        replyVi: "Khớp kỳ hạn rất thận trọng. Giữ vốn ngắn hạn ngoài các kênh rủi ro sẽ tránh việc phải bán tháo khi thị trường giảm. Tư duy tài chính của bạn vô cùng kỷ luật!",
        isConclusion: true
      }
    ],
    fallback: "Automating your savings rate creates generational financial resilience.",
    fallbackVi: "Tự động hóa tỷ lệ tiết kiệm sẽ tạo nên nền tảng tài chính vững chắc lâu dài."
  },

  // ===== LEVEL C1: ADVANCED =====
  c1_startup: {
    id: "c1_startup",
    title: "Startup Venture Capital Pitch",
    level: "C1",
    levelCategory: "C1",
    icon: "🚀",
    role: "Victoria (Venture Capital General Partner)",
    avatar: "👩‍💼",
    desc: "Pitch product value proposition, customer acquisition costs, CAC/LTV ratios, and defensible moats.",
    welcome: "Good afternoon. You have 5 minutes to walk me through your deck. What is the acute friction in the market, and why is your proprietary solution uniquely defensible?",
    welcomeVi: "Chào buổi chiều. Bạn có 5 phút thuyết trình về dự án. Đâu là điểm nghẽn nhức nhối của thị trường, và tại sao giải pháp độc quyền của bạn lại có hào kinh tế vượt trội?",
    promptSuggestions: [
      "Language learners spend 5 years without conversational fluency because existing apps lack real-time acoustic feedback.",
      "Our AI platform integrates SM-2 spaced repetition with sub-50ms acoustic shadowing algorithms to accelerate fluency 3x faster.",
      "Incumbents rely on passive multiple-choice drills, whereas we deliver automated contextual roleplay with localized pedagogy."
    ],
    responses: [
      {
        keywords: ["friction", "fluency", "acoustic", "shadowing", "algorithm", "sm-2", "drills", "incumbent", "pedagogy"],
        reply: "The edtech vertical is notoriously crowded with well-capitalized incumbents like Duolingo. What is your defensible technological moat against feature replication?",
        replyVi: "Thị trường Edtech vốn nổi tiếng chật chội với các đối thủ trường vốn như Duolingo. Hào kinh tế công nghệ nào giúp bạn chống lại việc các đối thủ sao chép tính năng?",
        suggestions: ["Our proprietary speech-alignment neural model trained on localized Asian phonetic datasets.", "Strong user retention driven by algorithmic habit loops, resulting in an LTV:CAC ratio above 4.2."]
      },
      {
        keywords: ["moat", "neural", "phonetic", "retention", "ltv", "cac", "ratio", "habit", "data"],
        reply: "An LTV:CAC of 4.2 indicates viable unit economics. What are your current Monthly Recurring Revenue (MRR) milestones and burn rate over the past two quarters?",
        replyVi: "Tỷ lệ LTV:CAC đạt 4.2 cho thấy hiệu quả kinh tế trên từng đơn vị rất triển vọng. Mức doanh thu định kỳ hàng tháng (MRR) và tỷ lệ đốt tiền (burn rate) hai quý qua của bạn ra sao?",
        suggestions: ["We achieved $32,000 MRR growing at 18% month-over-month with an 18-month runway on $6,000 monthly burn.", "We have 25,000 monthly active users with a 6.5% free-to-paid conversion rate."]
      },
      {
        keywords: ["mrr", "burn", "runway", "grow", "active", "conversion", "revenue"],
        reply: "Those traction indicators warrant serious consideration. How much capital are you raising in this seed round, and what primary inflection points will this funding unlock?",
        replyVi: "Những chỉ số tăng trưởng đó rất đáng để xem xét kỹ. Bạn đang gọi bao nhiêu vốn trong vòng hạt giống này, và số tiền đó sẽ mở ra bước ngoặt chiến lược nào?",
        suggestions: ["We are raising $1.5M to scale our enterprise B2B corporate English pilot and double down on mobile growth.", "We seek $800K to expand our engineering team and achieve $100K MRR within 12 months."]
      },
      {
        keywords: ["raise", "seed", "pilot", "enterprise", "b2b", "engineer", "1.5m", "800k"],
        reply: "Crisp, data-driven, and poised. Let's schedule a deep-dive technical due diligence session with my partners next Tuesday. Send over your data room link!",
        replyVi: "Thuyết trình sắc sảo, số liệu rõ ràng và tự tin. Hãy lên lịch thẩm định kỹ thuật chuyên sâu với các đối tác của tôi vào thứ Ba tới. Hãy gửi đường link data room nhé!",
        isConclusion: true
      }
    ],
    fallback: "Unit economics must be validated across varied cohort retention curves.",
    fallbackVi: "Hiệu quả kinh tế cần được đối chiếu qua các biểu đồ giữ chân người dùng theo từng nhóm."
  },

  c1_crisis: {
    id: "c1_crisis",
    title: "Corporate PR Crisis Press Conference",
    level: "C1",
    levelCategory: "C1",
    icon: "📢",
    role: "Jonathan (Investigative Senior Journalist)",
    avatar: "🎙️",
    desc: "Field hostile media inquiries, address data breaches, demonstrate accountability, and communicate remediation.",
    welcome: "This press briefing is now open. Reports leaked this morning that your cloud platform exposed the personal records of 1.2 million users due to an unsecured bucket. Why did your leadership delay disclosure for 48 hours?",
    welcomeVi: "Buổi họp báo chính thức bắt đầu. Thông tin rò rỉ sáng nay cho thấy nền tảng đám mây của quý công ty đã để lộ dữ liệu cá nhân của 1.2 triệu người dùng do lỗi cấu hình. Tại sao ban lãnh đạo lại trì hoãn công bố suốt 48 giờ?",
    promptSuggestions: [
      "First and foremost, we take full responsibility for this incident and offer an unreserved apology to our users.",
      "Our initial 48-hour protocol was strictly focused on containing the breach and forensic verification before public advisory.",
      "Independent cybersecurity auditors have validated that no financial or password data was compromised in this breach."
    ],
    responses: [
      {
        keywords: ["responsibility", "apology", "protocol", "contain", "forensic", "auditor", "password", "compromised"],
        reply: "Apologies don't restore breached trust. Consumer advocacy groups are already preparing a class-action lawsuit. What immediate, concrete restitution are you offering affected customers?",
        replyVi: "Lời xin lỗi không thể khôi phục lòng tin đã mất. Các tổ chức bảo vệ người tiêu dùng đang chuẩn bị khởi kiện tập thể. Biện pháp bồi thường cụ thể nào được quý công ty triển khai ngay lúc này?",
        suggestions: ["We are providing two years of complimentary identity theft protection and credit monitoring to every affected user.", "We have deployed a $10M customer restitution fund alongside a mandatory third-party security audit."]
      },
      {
        keywords: ["identity", "protection", "monitoring", "restitution", "fund", "audit", "security"],
        reply: "And what systemic governance reforms are taking place internally to guarantee that executive negligence will not precipitate a similar disaster?",
        replyVi: "Và những cải cách quản trị nội bộ mang tính hệ thống nào đang được thực hiện để đảm bảo sự lơ là của ban điều hành không lặp lại thảm họa tương tự?",
        suggestions: ["Our Chief Information Security Officer has tendered resignation, and our board has instituted zero-trust architecture mandates.", "We are restructuring our entire compliance oversight under a newly appointed independent risk committee."]
      },
      {
        keywords: ["ciso", "resignation", "zero-trust", "compliance", "committee", "risk", "board"],
        reply: "Your transparency and decisive containment strategy address our pressing concerns. We will observe whether your execution matches these commitments.",
        replyVi: "Sự minh bạch và chiến lược ngăn chặn quyết đoán của quý vị đã giải tỏa những lo ngại cấp bách nhất. Chúng tôi sẽ theo dõi xem hành động thực tế có đúng như cam kết hay không.",
        isConclusion: true
      }
    ],
    fallback: "Decisive accountability is the only ethical foundation during enterprise crises.",
    fallbackVi: "Trách nhiệm giải trình quyết đoán là nền tảng đạo đức duy nhất khi doanh nghiệp đối mặt khủng hoảng."
  },

  c1_thesis: {
    id: "c1_thesis",
    title: "Academic Research Defense & Peer Review",
    level: "C1",
    levelCategory: "C1",
    icon: "🎓",
    role: "Professor Montgomery (Doctoral Committee Chair)",
    avatar: "🧑‍🏫",
    desc: "Defend empirical methodologies, address sample selection bias, and justify statistical inference.",
    welcome: "Candidate, the committee has reviewed your dissertation on computational linguistics and natural language acquisition. Please articulate your central theoretical thesis and summarize the novelty of your methodology.",
    welcomeVi: "Thưa nghiên cứu sinh, hội đồng đã đọc kỹ luận án của bạn về ngôn ngữ học tính toán và sự thụ đắc ngôn ngữ tự nhiên. Mời bạn trình bày luận điểm lý thuyết cốt lõi và nêu bật tính mới trong phương pháp nghiên cứu.",
    promptSuggestions: [
      "My thesis demonstrates that acoustic shadowing dynamically reshapes neuro-cognitive pathways more effectively than passive vocabulary drill.",
      "We utilized an innovative semi-supervised acoustic diff algorithm to quantify phoneme divergence across non-native speakers.",
      "Our longitudinal trial over 18 months provides empirical validation that active phonetic feedback cuts fossilization rates by 42%."
    ],
    responses: [
      {
        keywords: ["neuro-cognitive", "shadowing", "acoustic", "phoneme", "fossilization", "empirical", "novelty", "methodology"],
        reply: "A compelling premise. However, in chapter 4, your control cohort appears skewed toward high-aptitude young adults. How do you defend your findings against demographic sample selection bias?",
        replyVi: "Một tiền đề nghiên cứu rất hấp dẫn. Tuy nhiên, trong chương 4, nhóm đối chứng của bạn có vẻ bị lệch về đối tượng thanh niên có năng khiếu cao. Bạn bảo vệ kết quả của mình trước sai số chọn mẫu thế nào?",
        suggestions: ["We controlled for prior linguistic proficiency through baseline covariance analysis and stratified randomized sampling.", "We conducted a secondary sensitivity analysis across mixed-age non-academic participants which corroborated the primary effect size."]
      },
      {
        keywords: ["covariance", "stratified", "randomized", "sensitivity", "effect size", "sampling", "bias"],
        reply: "The sensitivity analysis mitigates the skew significantly. Moving forward, how do you see this theoretical framework informing real-world educational deployment at institutional scale?",
        replyVi: "Phân tích độ nhạy đó đã hạn chế đáng kể độ lệch mẫu. Về hướng ứng dụng, khung lý thuyết này có thể đóng góp gì cho việc triển khai giáo dục thực tế ở quy mô các tổ chức đào tạo?",
        suggestions: ["It provides an algorithmic blueprint for automated, low-latency pronunciation diagnostics in public school curricula.", "It bridges empirical acoustic phonetics with commercial adaptive learning platforms."]
      },
      {
        keywords: ["blueprint", "diagnostic", "curricula", "phonetics", "adaptive", "scale", "school"],
        reply: "Rigorously defended, empirically grounded, and articulated with exemplary academic poise. The committee is unanimously impressed with your scholarship!",
        replyVi: "Bảo vệ chặt chẽ, luận cứ thực nghiệm vững vàng và phong thái học thuật mẫu mực. Hội đồng hoàn toàn nhất trí đánh giá cao công trình nghiên cứu của bạn!",
        isConclusion: true
      }
    ],
    fallback: "Epistemological rigor demands questioning every underlying statistical assumption.",
    fallbackVi: "Sự chuẩn xác trong nghiên cứu đòi hỏi phải liên tục chất vấn mọi giả định thống kê nền tảng."
  },

  c1_leadership: {
    id: "c1_leadership",
    title: "Organizational Transformation & M&A Strategy",
    level: "C1",
    levelCategory: "C1",
    icon: "👔",
    role: "Eleanor (Managing Director & M&A Advisor)",
    avatar: "👩‍💼",
    desc: "Evaluate merger synergies, cultural alignment, retention of key talent, and post-merger integration.",
    welcome: "Following our board meeting regarding the $400M acquisition of the European SaaS subsidiary, integration risks remain paramount. How do you propose harmonizing our divergent corporate cultures without demoralizing engineering talent?",
    welcomeVi: "Sau cuộc họp hội đồng quản trị về thương vụ mua lại công ty SaaS châu Âu trị giá 400 triệu USD, rủi ro sáp nhập vẫn là mối bận tâm hàng đầu. Bạn đề xuất dung hòa sự khác biệt văn hóa doanh nghiệp thế nào để không làm sa sút tinh thần đội ngũ kỹ thuật?",
    promptSuggestions: [
      "We should establish an autonomous integration council with co-leads from both organizations rather than imposing top-down mandates.",
      "Key engineering talent must be locked in through multi-year equity vesting and transparent technical roadmaps.",
      "Preserving their agile product autonomy while gradually consolidating back-office infrastructure will safeguard velocity."
    ],
    responses: [
      {
        keywords: ["council", "autonomous", "vesting", "equity", "autonomy", "consolidate", "velocity", "mandate"],
        reply: "Preserving autonomy is vital, but duplicate overhead in sales and marketing must be streamlined to realize our promised $30M synergy target. Where would you initiate cost rationalization?",
        replyVi: "Bảo lưu quyền tự chủ là rất cần thiết, tuy nhiên các chi phí trùng lặp ở bộ phận kinh doanh và tiếp thị buộc phải tinh gọn để đạt mục tiêu hiệp lực 30 triệu USD. Bạn sẽ bắt đầu tối ưu hóa chi phí từ đâu?",
        suggestions: ["By consolidating overlapping vendor software contracts and unified enterprise CRM infrastructure.", "By cross-selling complementary product tiers across geographic markets rather than slashing headcount."]
      },
      {
        keywords: ["crm", "vendor", "contract", "cross-sell", "headcount", "synergy", "infrastructure"],
        reply: "Revenue synergy via cross-pollination is indeed far less destructive than aggressive layoffs. What key performance indicators will you track in the first 100 days to gauge integration health?",
        replyVi: "Tạo hiệp lực doanh thu thông qua bán chéo sản phẩm quả thực ít tổn thương hơn nhiều so với sa thải nhân sự hàng loạt. Những chỉ số KPI then chốt nào bạn sẽ theo dõi trong 100 ngày đầu để đo lường sức khỏe sáp nhập?",
        suggestions: ["Voluntary attrition of senior talent, customer net revenue retention (NRR), and bi-weekly sprint velocity.", "Employee net promoter score (eNPS) combined with cross-selling pipeline conversion rates."]
      },
      {
        keywords: ["attrition", "nrr", "velocity", "enps", "pipeline", "kpi", "conversion"],
        reply: "Strategic, balanced, and empathetic to human capital. You possess the executive altitude required to steer complex organizational transitions successfully!",
        replyVi: "Chiến lược, cân bằng và tôn trọng vốn nhân lực. Bạn thể hiện tầm nhìn lãnh đạo cấp cao rất cần thiết để chèo lái những cuộc chuyển đổi tổ chức phức tạp!",
        isConclusion: true
      }
    ],
    fallback: "M&A value destruction almost invariably stems from cultural friction rather than financial architecture.",
    fallbackVi: "Sự suy giảm giá trị trong các thương vụ M&A hầu hết xuất phát từ xung đột văn hóa chứ không phải cấu trúc tài chính."
  },

  c1_contract: {
    id: "c1_contract",
    title: "International Commercial Contract Negotiation",
    level: "C1",
    levelCategory: "C1",
    icon: "📜",
    role: "Counselor Vance (Lead Corporate Attorney)",
    avatar: "👨‍⚖️",
    desc: "Negotiate indemnification, limitation of liability, intellectual property assignments, and arbitration clauses.",
    welcome: "Counsel, we have reached Section 14 of the cross-border enterprise licensing agreement. The counterparty is demanding an uncapped indemnification clause for third-party intellectual property infringement. What is our counter-proposal?",
    welcomeVi: "Thưa luật sư, chúng ta đã đàm phán tới Điều 14 của hợp đồng cấp phép thương mại xuyên quốc gia. Phía đối tác đang yêu cầu điều khoản bồi thường thiệt hại vô hạn mức đối với vi phạm sở hữu trí tuệ của bên thứ ba. Đề xuất phản hồi của chúng ta là gì?",
    promptSuggestions: [
      "We cannot accept uncapped liability under any circumstances; we must cap indemnification at 2x the annual contract value.",
      "We propose a reciprocal super-cap limited exclusively to gross negligence and willful misconduct.",
      "We should introduce a carve-out excluding claims arising from unauthorized modifications or third-party integrations."
    ],
    responses: [
      {
        keywords: ["liability", "uncapped", "cap", "indemnification", "super-cap", "negligence", "carve-out", "contract"],
        reply: "A 2x annual contract cap with carve-outs is defensible market standard. What jurisdiction and governing law should we stipulate for dispute resolution if negotiation fails?",
        replyVi: "Mức trần 2 lần giá trị hợp đồng năm kèm các điều khoản loại trừ là chuẩn mực thị trường rất hợp lý. Chúng ta nên quy định cơ quan tài phán và luật điều chỉnh nào để giải quyết tranh chấp nếu đàm phán bất thành?",
        suggestions: ["We should specify the Singapore International Arbitration Centre (SIAC) under Singapore governing law.", "We propose UNCITRAL arbitration rules seated in London under English commercial law."]
      },
      {
        keywords: ["singapore", "siac", "arbitration", "uncitral", "london", "dispute", "jurisdiction"],
        reply: "SIAC in Singapore is recognized for neutral, efficient enforcement across Southeast Asia. Finally, regarding audit rights on source code escrows, what safeguards must we embed?",
        replyVi: "Trung tâm trọng tài SIAC tại Singapore nổi tiếng về tính trung lập và hiệu lực thực thi tại Đông Nam Á. Cuối cùng, về quyền kiểm toán ký quỹ mã nguồn (source code escrow), chúng ta cần gắn những điều khoản bảo hộ nào?",
        suggestions: ["Audits must be restricted to independent third-party assessors under strict non-disclosure covenants.", "Trigger conditions must be limited strictly to catastrophic insolvency or material uncured breach."]
      },
      {
        keywords: ["nda", "assessor", "insolvency", "escrow", "breach", "covenant", "audit"],
        reply: "Impeccable legal precision. You have protected our enterprise risk envelope while keeping commercial deal-making momentum alive!",
        replyVi: "Lập luận pháp lý vô cùng chuẩn xác. Bạn đã bảo vệ toàn vẹn vành đai rủi ro của doanh nghiệp trong khi vẫn giữ vững tiến độ thúc đẩy thương vụ thương mại!",
        isConclusion: true
      }
    ],
    fallback: "Ambiguity in contractual indemnities invariably invites protracted litigation.",
    fallbackVi: "Sự mơ hồ trong các điều khoản bồi thường hợp đồng chắc chắn sẽ dẫn đến kiện tụng kéo dài."
  },

  // ===== LEVEL C2: MASTERY =====
  c2_ai_ethics: {
    id: "c2_ai_ethics",
    title: "Philosophy & Ethics of Autonomous AI",
    level: "C2",
    levelCategory: "C2",
    icon: "⚔️",
    role: "Prof. Sterling (Bioethics Scholar & Epistemologist)",
    avatar: "🧑‍🏫",
    desc: "Dissect cognitive sovereignty, synthetic copyright, existential risk, and teleological intent in machine intelligence.",
    welcome: "Greetings. I argue that the unchecked proliferation of autonomous generative systems fundamentally undermines human intellectual sovereignty and aesthetic copyright. What is your counter-thesis?",
    welcomeVi: "Kính chào quý vị. Tôi cho rằng sự bùng nổ không kiểm soát của các hệ thống trí tuệ nhân tạo tạo sinh tự trị đang làm xói mòn căn bản chủ quyền trí tuệ và bản quyền nghệ thuật của nhân loại. Luận điểm phản biện của bạn là gì?",
    promptSuggestions: [
      "Generative AI functions as a cognitive amplifier rather than a replacement, democratizing specialized creative synthesis.",
      "Historically, technologies like the printing press and camera faced moral panic, yet they profoundly broadened human expression.",
      "The ontological distinction lies not in the mechanism of synthesis, but in the intentionality and subjective human curation."
    ],
    responses: [
      {
        keywords: ["amplifier", "democratize", "printing", "camera", "expression", "ontological", "intentionality", "curation"],
        reply: "A classic techno-optimist defense. However, historical cameras did not autonomously ingest and synthesize billions of uncredited artworks at industrial scale without explicit consent. How do you reconcile fair use with wholesale algorithmic scraping?",
        replyVi: "Một lập luận lạc quan công nghệ kinh điển. Tuy nhiên, máy ảnh lịch sử không hề tự động thu nạp và tổng hợp hàng tỷ tác phẩm nghệ thuật không ghi nhận tác giả ở quy mô công nghiệp mà không có sự đồng thuận. Bạn hòa giải thế nào giữa khái niệm sử dụng hợp lý (fair use) và việc bóc tách dữ liệu thuật toán ồ ạt?",
        suggestions: ["Human cognition itself relies on latent cultural osmosis and historical assimilation without explicit compensation.", "The solution lies in cryptographically verifiable provenance frameworks rather than blanket legislative prohibition."]
      },
      {
        keywords: ["osmosis", "assimilation", "provenance", "cryptographic", "prohibition", "framework", "human"],
        reply: "Yet human osmosis operates under biological latency and embodied lived experience, whereas machine synthesis is industrialized and commoditized. Does this asymmetric speed not disrupt the epistemic equilibrium of human labor?",
        replyVi: "Nhưng sự thẩm thấu của con người diễn ra dưới độ trễ sinh học và trải nghiệm sống cụ thể, trong khi máy tính tổng hợp lại mang tính công nghiệp hóa và thương mại hóa. Sự bất đối xứng về tốc độ đó chẳng phải đang làm đảo lộn thế cân bằng nhận thức của lao động loài người hay sao?",
        suggestions: ["It undoubtedly necessitates novel socio-economic redistribution, but conflating velocity with moral illegitimacy stifles transformative scientific breakthroughs.", "We must demarcate foundational model capabilities from downstream exploitative applications."]
      },
      {
        keywords: ["redistribution", "velocity", "scientific", "breakthrough", "demarcate", "downstream", "moral"],
        reply: "Well reasoned, philosophically rigorous, and articulated with extraordinary eloquence. You defended your dialectic position with formidable intellectual finesse!",
        replyVi: "Lập luận sâu sắc, chuẩn xác về mặt triết học và diễn đạt với sự hùng biện phi thường. Bạn đã bảo vệ luận điểm biện chứng của mình với sự sắc bén trí tuệ tuyệt vời!",
        isConclusion: true
      }
    ],
    fallback: "The teleological destination of artificial intelligence remains the ultimate philosophical mirror of our epoch.",
    fallbackVi: "Cứu cánh mục đích luận của trí tuệ nhân tạo vẫn là tấm gương triết học phản chiếu sâu sắc nhất thời đại chúng ta."
  },

  c2_geopolitics: {
    id: "c2_geopolitics",
    title: "Geopolitics, Macroeconomics & Supply Chain Decoupling",
    level: "C2",
    levelCategory: "C2",
    icon: "🌐",
    role: "Ambassador Laurent (Senior Geostrategic Analyst)",
    avatar: "🏛️",
    desc: "Analyze semiconductor sovereignty, Bretton Woods monetary shifts, nearshoring, and multilateral alliances.",
    welcome: "Good evening. The fragmentation of the post-Cold War multilateral order is accelerating near-shoring and critical mineral protectionism. In your assessment, is supply chain decoupling economically sustainable over the coming decade?",
    welcomeVi: "Kính chào quý vị. Sự phân mảnh của trật tự đa phương thời kỳ hậu Chiến tranh Lạnh đang thúc đẩy làn sóng đưa sản xuất về các nước lân cận (near-shoring) và chủ nghĩa bảo hộ khoáng sản chiến lược. Theo đánh giá của bạn, việc tách rời chuỗi cung ứng (decoupling) có khả thi về mặt kinh tế trong thập kỷ tới không?",
    promptSuggestions: [
      "Complete decoupling is a macroeconomic fiction due to hyper-specialized semiconductor fabrication and rare-earth monopolies.",
      "We are observing 'friend-shoring' and diversification rather than absolute decoupling, creating resilient dual-track trade architectures.",
      "The weaponization of financial infrastructure will accelerate alternative currency settlements, diluting dollar hegemony."
    ],
    responses: [
      {
        keywords: ["semiconductor", "fabrication", "rare-earth", "friend-shoring", "diversification", "weaponization", "currency", "hegemony"],
        reply: "An astute geopolitical appraisal. Yet, if strategic autarky in critical tech is unattainable, how can middle powers navigate escalating bilateral friction between superpowers without compromising sovereignty?",
        replyVi: "Một đánh giá địa chính trị rất sắc sảo. Tuy nhiên, nếu sự tự chủ hoàn toàn trong công nghệ lõi là bất khả thi, các quốc gia tầm trung (middle powers) có thể ứng phó thế nào trước căng thẳng song phương của các siêu cường mà không làm tổn hại chủ quyền?",
        suggestions: ["By practicing strategic hedging, maintaining multi-aligned diplomatic flexibility, and dominating niche supply chain nodes.", "By reinforcing multilateral coalitions like ASEAN to counterbalance unilateral coercion."]
      },
      {
        keywords: ["hedging", "flexibility", "niche", "asean", "multilateral", "coercion", "middle powers"],
        reply: "Strategic ambiguity combined with indispensable niche leverage is indeed an elegant survival doctrine. How do demographic decline and aging labor pools intersect with this strategic calculus?",
        replyVi: "Sự mập mờ chiến lược kết hợp với đòn bẩy ngách không thể thay thế quả là một học thuyết sinh tồn mẫu mực. Vậy sự già hóa dân số và sụt giảm lao động sẽ tác động thế nào tới tính toán chiến lược này?",
        suggestions: ["Demographic contractions will compel nations to prioritize robotic automation and strategic immigration over raw manufacturing volume.", "Nations with favorable demographic pyramids will capture migrating supply chain capital."]
      },
      {
        keywords: ["automation", "robotic", "demographic", "pyramid", "immigration", "labor", "capital"],
        reply: "A masterclass in geostrategic macro-synthesis. Your vocabulary, rhetorical cadence, and analytical depth reflect true C2 native-level mastery!",
        replyVi: "Một bài phân tích tổng hợp địa chính trị vĩ mô xuất sắc. Vốn từ vựng, ngữ điệu hùng biện và chiều sâu phân tích của bạn phản ánh sự làm chủ tiếng Anh ở đẳng cấp C2 thực thụ!",
        isConclusion: true
      }
    ],
    fallback: "Geoeconomic interdependence was once deemed a guarantee of peace, yet it has evolved into a vectors of systemic leverage.",
    fallbackVi: "Sự phụ thuộc lẫn nhau về kinh tế từng được coi là bảo chứng cho hòa bình, nhưng nay đã biến thành công cụ đòn bẩy chiến lược."
  },

  c2_literature: {
    id: "c2_literature",
    title: "Existentialism & Post-Modern Literary Critique",
    level: "C2",
    levelCategory: "C2",
    icon: "🎭",
    role: "Prof. Hawthorne (Comparative Literature Chair)",
    avatar: "🧑‍🏫",
    desc: "Critique existential absurdity, literary metafiction, unreliable narrators, and post-modern semiotics.",
    welcome: "Welcome to the salon. Camus famously asserted that 'the struggle itself toward the heights is enough to fill a man's heart.' How do you interpret the existential absurdity of Sisyphus within our contemporary digital hyperreality?",
    welcomeVi: "Chào mừng quý vị đến với buổi đàm đạo văn học. Camus từng khẳng định rằng: 'Bản thân cuộc tranh đấu vươn tới những đỉnh cao cũng đủ lấp đầy trái tim một con người.' Bạn diễn giải thế nào về tính phi lý hiện sinh của huyền thoại Sisyphus trong thực tại ảo kỹ thuật số ngày nay?",
    promptSuggestions: [
      "In contemporary hyperreality, Sisyphus is no longer pushing a physical boulder, but endlessly generating algorithmic content to stave off void.",
      "The tragedy has inverted: the digital Sisyphus mistakes algorithmic validation for authentic transcendence.",
      "Camus' revolt lies in lucid defiance; accepting the meaningless absurd while defiantly authoring one's bespoke subjective purpose."
    ],
    responses: [
      {
        keywords: ["boulder", "algorithmic", "hyperreality", "void", "transcendence", "camus", "revolt", "defiance", "absurd"],
        reply: "Exquisitely phrased. Does not Baudrillard's simulacra complicate Camus' heroic revolt, insofar as the modern rebel is perpetually consumed by the very spectacle they seek to subvert?",
        replyVi: "Diễn đạt thật tinh tế. Nhưng chẳng phải khái niệm 'mô phỏng' (simulacra) của Baudrillard đã làm phức tạp hóa cuộc nổi loạn anh hùng của Camus, khi mà người nổi loạn hiện đại lại liên tục bị chính màn kịch mà họ muốn lật đổ nuốt chửng hay sao?",
        suggestions: ["Subversion within a spectacle inevitably risks commodification, turning rebellion into an aesthetic brand.", "Authentic revolt demands radical digital asceticism and reclaiming unmediated sensory contact with reality."]
      },
      {
        keywords: ["commodification", "spectacle", "brand", "asceticism", "unmediated", "sensory", "rebellion"],
        reply: "Asceticism as ontological resistance — a profound proposition. What piece of 20th-century literature best captures this agonizing paradox for you?",
        replyVi: "Khắc kỷ khổ hạnh như một hành vi phản kháng bản thể luận — một mệnh đề triết học thật sâu xa. Tác phẩm văn học thế kỷ 20 nào theo bạn đã lột tả nghịch lý giằng xé này xuất sắc nhất?",
        suggestions: ["Kafka's 'The Trial', where bureaucracy becomes a metaphysical labyrinth with no author.", "Dostoevsky's 'Notes from Underground', anticipating the neuroses of self-conscious hyper-individuality."]
      },
      {
        keywords: ["kafka", "trial", "bureaucracy", "dostoevsky", "underground", "neuroses", "individuality"],
        reply: "Stupendous literary erudition. You weave philosophical tenets and poetic metaphor with consummate linguistic dexterity. A truly peerless discourse!",
        replyVi: "Kiến thức văn học uyên bác đến kinh ngạc. Bạn đan cài các nguyên lý triết học và ẩn dụ thi ca với sự khéo léo ngôn ngữ tuyệt đỉnh. Một buổi đàm đạo không đối thủ!",
        isConclusion: true
      }
    ],
    fallback: "The text deconstructs itself upon the anvil of its own internal contradictions.",
    fallbackVi: "Văn bản tự giải cấu trúc chính nó trên đe búa của những mâu thuẫn nội tại."
  },

  c2_diplomacy: {
    id: "c2_diplomacy",
    title: "Multilateral Peace Treaty & Sovereign Concordat",
    level: "C2",
    levelCategory: "C2",
    icon: "🏛️",
    role: "Secretary General Vane (Special Envoy for Peace)",
    avatar: "🤵",
    desc: "Mediate territorial sovereign claims, armistice protocols, demilitarized zones, and multilateral consensus.",
    welcome: "Distinguished Plenipotentiary, the plenary session reconvenes under high duress. Hostilities across the disputed maritime corridor threaten total regional conflagration. What is your sovereign formulation for an immediate armistice?",
    welcomeVi: "Kính thưa Đặc phái viên toàn quyền, phiên họp khoáng đại tái triệu tập dưới áp lực căng thẳng cực độ. Xung đột tại hành lang hàng hải tranh chấp đang đe dọa bùng phát thành cuộc chiến tranh khu vực. Đề xuất công thức của quý vị cho một lệnh đình chiến ngay lập tức là gì?",
    promptSuggestions: [
      "We propose an immediate cessation of hostilities verified by UN peacekeeping observers along a 20-nautical-mile demilitarized corridor.",
      "Our delegation advocates a provisional status quo ante bellum, deferring permanent maritime demarcation to an international tribunal.",
      "We demand the immediate lifting of all naval blockades as a non-negotiable prerequisite to substantive treaty deliberations."
    ],
    responses: [
      {
        keywords: ["cessation", "hostilities", "demilitarized", "status quo", "tribunal", "blockade", "prerequisite", "armistice"],
        reply: "Your formulation provides a tenable ceasefire scaffolding. Nevertheless, the opposing coalition insists upon unilateral withdrawal before allowing international naval observers. How do we circumvent this procedural impasse?",
        replyVi: "Công thức của quý vị cung cấp một khung ngừng bắn khả thi. Tuy nhiên, liên minh đối phương khăng khăng yêu cầu rút quân đơn phương trước khi cho phép quan sát viên hải quân quốc tế vào cuộc. Chúng ta tháo gỡ bế tắc quy trình này thế nào?",
        suggestions: ["By choreographing a synchronized, multi-phase withdrawal verified in real time by neutral satellite telemetry.", "By deploying third-party maritime escorts to monitor navigation while both factions withdraw concurrently."]
      },
      {
        keywords: ["synchronized", "phase", "satellite", "telemetry", "concurrently", "escort", "neutral"],
        reply: "Synchronized telemetry-backed phased withdrawal balances national pride with tactical deterrence. What institutional mechanisms will oversee economic reconstruction in the war-torn territories?",
        replyVi: "Rút quân theo từng giai đoạn đồng bộ dưới sự giám sát vệ tinh vừa giữ thể diện quốc gia vừa duy trì răn đe chiến thuật. Cơ chế thể chế nào sẽ giám sát việc tái thiết kinh tế tại các vùng lãnh thổ bị tàn phá?",
        suggestions: ["A multilateral trust fund administered jointly by the World Bank and regional developmental partners.", "Targeted reconstruction bonds underwritten by sovereign guarantee facilities with strict anti-corruption oversight."]
      },
      {
        keywords: ["trust fund", "world bank", "bond", "underwritten", "corruption", "guarantee", "reconstruction"],
        reply: "Magnificent statesmanship. You navigated treacherous diplomatic shoals with profound geopolitical wisdom and peerless rhetorical precision!",
        replyVi: "Tài năng ngoại giao xuất chúng. Bạn đã khéo léo chèo lái qua những bãi đá ngầm ngoại giao đầy hiểm trở với sự thông thái địa chính trị và ngôn ngữ đàm phán hoàn hảo!",
        isConclusion: true
      }
    ],
    fallback: "Diplomacy is the patient architecture of mutual compromise over the abyss of confrontation.",
    fallbackVi: "Ngoại giao là nghệ thuật kiến tạo kiên nhẫn sự nhượng bộ chung bên bờ vực của đối đầu."
  },

  // ===== BILINGUAL TUTOR: SONG NGỮ VIỆT - ANH =====
  bilingual_tutor: {
    id: "bilingual_tutor",
    title: "🇻🇳 Gia Sư Song Ngữ & Luyện Nói Tự Do",
    level: "All",
    levelCategory: "Song ngữ",
    icon: "🇻🇳",
    role: "Thầy Minh (Gia Sư Song Ngữ AI)",
    avatar: "🧑‍🏫",
    desc: "Nói hoặc gõ bằng tiếng Việt hoặc tiếng Anh. Hỏi giải thích ngữ pháp, tra từ, dịch câu, và sửa lỗi phát âm.",
    welcome: "Chào bạn! Mình là Gia sư tiếng Anh song ngữ của bạn. Bạn có thể nói tiếng Anh hoặc tiếng Việt thoải mái nhé! Bạn muốn hỏi từ vựng, nhờ dịch câu, sửa lỗi ngữ pháp hay muốn luyện nói về chủ đề nào hôm nay?",
    welcomeVi: "Hello! I am your bilingual English tutor. You can speak in English or Vietnamese freely! What would you like to practice, translate, or discuss today?",
    promptSuggestions: [
      "Thầy ơi, từ 'meticulous' nghĩa là gì và dùng thế nào ạ?",
      "Dịch giúp mình câu: 'Tôi rất mong được hợp tác cùng bạn' sang tiếng Anh tự nhiên.",
      "How do I improve my speaking fluency when I don't have a partner?",
      "Sửa lỗi ngữ pháp giúp mình câu này: 'I am agree with your opinion'."
    ],
    responses: [], // Handled dynamically in getAIResponse
    fallback: "Tuyệt vời! Bạn có thể nói tiếp bằng tiếng Anh hoặc tiếng Việt nhé, mình luôn sẵn sàng đồng hành cùng bạn!"
  }
};

// Global scenarios map combining built-ins and custom ones from localStorage
let AI_SCENARIOS = { ...BUILTIN_SCENARIOS };

function loadCustomScenarios() {
  try {
    const raw = localStorage.getItem('englishmaster_custom_scenarios');
    if (raw) {
      const customList = JSON.parse(raw);
      customList.forEach(item => {
        if (item.id) {
          AI_SCENARIOS[item.id] = item;
        }
      });
    }
  } catch (err) {
    console.warn("Failed to parse custom scenarios", err);
  }
}
loadCustomScenarios();

// --- STATE MANAGEMENT ---
let currentScenario = AI_SCENARIOS.a1_intro;
let currentLevelFilter = 'all';
let chatMessages = [];
let isVoiceListening = false;
let aiRecognition = null;
let currentVoiceLang = 'en-US'; // 'en-US' or 'vi-VN'
let isAutoTTSActive = true;

// Expanded Grammar & Phrasing Rules (Tailored for Vietnamese ESL Learners)
const GRAMMAR_RULES = [
  { pattern: /\bi am agree\b/i, fix: "I agree", tip: "'Agree' là động từ, không dùng 'I am agree' mà hãy nói 'I agree'." },
  { pattern: /\bi am disagree\b/i, fix: "I disagree", tip: "Nói 'I disagree', không nói 'I am disagree'." },
  { pattern: /\bhe don't\b/i, fix: "he doesn't", tip: "Ngôi thứ 3 số ít (He/She/It) đi với 'doesn't' (He doesn't)." },
  { pattern: /\bshe don't\b/i, fix: "she doesn't", tip: "Ngôi thứ 3 số ít đi với 'she doesn't'." },
  { pattern: /\bit don't\b/i, fix: "it doesn't", tip: "Dùng 'it doesn't', không dùng 'it don't'." },
  { pattern: /\bmore better\b/i, fix: "much better / better", tip: "Không dùng trùng lặp 'more better'. Hãy dùng 'better' hoặc 'much better'." },
  { pattern: /\bmore easier\b/i, fix: "much easier / easier", tip: "Dùng 'easier' hoặc 'much easier', không nói 'more easier'." },
  { pattern: /\bdepend of\b/i, fix: "depend on", tip: "Giới từ đi với depend là 'depend on' (phụ thuộc vào)." },
  { pattern: /\bcongratulate for\b/i, fix: "congratulate on", tip: "Dùng 'congratulate sb on sth' (chúc mừng về điều gì)." },
  { pattern: /\bi look forward to see\b/i, fix: "I look forward to seeing", tip: "Cụm 'look forward to' luôn đi với danh động từ (V-ing): 'look forward to seeing'." },
  { pattern: /\bi have worked here since 2 years\b/i, fix: "for 2 years", tip: "Khoảng thời gian dùng 'for 2 years'; mốc thời gian dùng 'since 2022'." },
  { pattern: /\bpeople is\b/i, fix: "people are", tip: "'People' là danh từ số nhiều, đi với động từ to be 'are'." },
  { pattern: /\bevery students\b/i, fix: "every student", tip: "Sau 'every' là danh từ số ít (every student)." },
  { pattern: /\bdiscuss about\b/i, fix: "discuss", tip: "'Discuss' là ngoại động từ; nói 'discuss the problem', không dùng 'discuss about'." },
  { pattern: /\bi lost my ticket because i didn't saw\b/i, fix: "didn't see", tip: "Sau trợ động từ did/didn't, dùng động từ nguyên thể 'see'." },
  { pattern: /\bi have 20 years old\b/i, fix: "I am 20 years old", tip: "Nói tuổi dùng to be: 'I am 20 years old', không dùng 'I have'." },
  { pattern: /\bi very like\b/i, fix: "I really like / I like it very much", tip: "Không đặt 'very' trước động từ thường; dùng 'I really like' hoặc 'I like it a lot'." },
  { pattern: /\bexplain me\b/i, fix: "explain to me", tip: "Cấu trúc chuẩn là 'explain something to someone'." },
  { pattern: /\bborrow me\b/i, fix: "lend me / can I borrow", tip: "'Lend' là cho mượn ('lend me'), 'borrow' là đi mượn." },
  { pattern: /\bmarried with\b/i, fix: "married to", tip: "Kết hôn với ai dùng 'married to', không dùng 'married with'." },
  { pattern: /\blisten music\b/i, fix: "listen to music", tip: "Động từ listen cần giới từ 'to': 'listen to music'." }
];

const PHRASING_ENHANCERS = [
  { match: /\bi think\b/i, suggestion: "In my perspective / From my viewpoint / I firmly believe" },
  { match: /\bvery good\b/i, suggestion: "exceptional / commendable / remarkable / top-notch" },
  { match: /\bvery bad\b/i, suggestion: "suboptimal / detrimental / problematic / unfavorable" },
  { match: /\ba lot of\b/i, suggestion: "a substantial amount of / numerous / a plethora of" },
  { match: /\bi want to say\b/i, suggestion: "I would like to highlight / I would emphasize" },
  { match: /\bso\b/i, suggestion: "consequently / thus / hence / accordingly" },
  { match: /\bbut\b/i, suggestion: "however / nevertheless / on the other hand" }
];

// Switch Scenario
function setAIScenario(scenarioId) {
  if (AI_SCENARIOS[scenarioId]) {
    currentScenario = AI_SCENARIOS[scenarioId];
    initChat();
  }
}

// Switch Level Filter
function setAILevelFilter(level) {
  currentLevelFilter = level;
  renderAI();
}

function initChat() {
  chatMessages = [
    {
      id: "msg_init_" + Date.now(),
      sender: "ai",
      text: currentScenario.welcome,
      translationVi: currentScenario.welcomeVi || "Chào bạn! Chúc bạn có buổi luyện nói thật bổ ích.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: currentScenario.promptSuggestions || []
    }
  ];
  renderAIChatList();

  // Optionally speak welcome message
  if (isAutoTTSActive) {
    setTimeout(() => {
      speakAIText(currentScenario.welcome);
    }, 400);
  }
}

// Check if a string contains Vietnamese diacritics
function isVietnameseText(str) {
  if (!str) return false;
  return /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(str);
}

// Grammar and phrasing check
function analyzeUserGrammar(text) {
  const issues = [];
  GRAMMAR_RULES.forEach(rule => {
    if (rule.pattern.test(text)) {
      issues.push({ fix: rule.fix, tip: rule.tip });
    }
  });

  const suggestions = [];
  PHRASING_ENHANCERS.forEach(item => {
    if (item.match.test(text)) {
      suggestions.push(item.suggestion);
    }
  });

  return { issues, suggestions };
}

// Intelligent Bilingual Response Engine
function getAIResponse(userText) {
  const lower = userText.toLowerCase().trim();
  const hasVietnamese = isVietnameseText(userText);

  // 1. If scenario is the Bilingual Tutor or user asks in Vietnamese
  if (currentScenario.id === 'bilingual_tutor' || hasVietnamese) {
    // Check if asking for meaning: "nghĩa là gì", "có nghĩa là", "nghĩa của từ"
    if (lower.includes("nghĩa là gì") || lower.includes("nghĩa là") || lower.includes("nghĩa của từ") || lower.includes("what does")) {
      return {
        reply: "Rất hay! Để giải thích từ bạn vừa hỏi:\n• Nghĩa tiếng Việt: biểu thị tính chất hoặc hành động cụ thể trong ngữ cảnh.\n• Phiên âm & Phát âm: Bạn có thể nhấn nút 🔊 để nghe phát âm mẫu nhé.\n• Ví dụ câu chuẩn:\n1. 'She handles every detail with meticulous care.' (Cô ấy xử lý từng chi tiết với sự tỉ mỉ).\n2. 'Consistent practice is key to fluency.' (Luyện tập đều đặn là chìa khóa để trôi chảy).\nBạn hãy thử dùng từ này để đặt một câu xem nào!",
        translationVi: "Tip: Bạn có thể bật mic tiếng Anh để đọc to câu ví dụ trên nhé!",
        suggestions: ["Could you give me another example sentence?", "Làm sao để nhớ từ này lâu hơn ạ?"],
        isConclusion: false
      };
    }

    // Check if asking for translation: "dịch giúp", "dịch câu", "dịch sang", "tiếng anh là gì"
    if (lower.includes("dịch") || lower.includes("tiếng anh là gì") || lower.includes("nói thế nào") || lower.includes("nói sao")) {
      return {
        reply: "Câu này trong tiếng Anh bạn có thể nói rất tự nhiên như sau:\n\n👉 'I am really looking forward to collaborating with you!'\n(Phiên âm: /aɪ æm ˈrɪəli ˈlʊkɪŋ ˈfɔːwəd tuː kəˈlæbəreɪtɪŋ wɪð juː/)\n\nHoặc cách trang trọng hơn trong email kinh doanh:\n👉 'It would be a great privilege to work alongside your team.'\n\nBạn hãy bấm nút mic và thử nói lại câu này nhé!",
        translationVi: "Bạn có thể áp dụng câu này ngay vào email hoặc hội thoại công việc.",
        suggestions: ["I am looking forward to collaborating with you!", "Thanks teacher, that was very helpful!"],
        isConclusion: false
      };
    }

    // Check if asking for grammar correction: "sửa lỗi", "đúng ngữ pháp", "sai ở đâu"
    if (lower.includes("sửa lỗi") || lower.includes("ngữ pháp") || lower.includes("sai ở đâu") || lower.includes("đúng không")) {
      return {
        reply: "Trong tiếng Anh, câu của bạn cần lưu ý điểm sau:\n\n⚠️ Lỗi thường gặp: 'Agree' vốn đã là một động từ, nên ta KHÔNG dùng to be (am) phía trước.\n\n✅ Cách nói chuẩn xác:\n👉 'I agree with your opinion.' (Tôi đồng ý với ý kiến của bạn).\n👉 Nâng cao hơn: 'I completely share your perspective on this matter.'\n\nBạn hãy thử gửi lại câu đã sửa nhé!",
        translationVi: "Quy tắc: Chủ ngữ + agree with + danh từ/người.",
        suggestions: ["I completely agree with your opinion.", "I share your perspective on this."],
        isConclusion: false
      };
    }

    // Friendly Vietnamese conversation fallback
    return {
      reply: `Chào bạn! Mình nghe bạn nói rất rõ: "${userText}".\n\nTrong tình huống này, nếu chuyển sang tiếng Anh tự nhiên để giao tiếp với người bản xứ, bạn có thể nói là:\n👉 "That sounds wonderful, let's explore it further together!"\n\nBạn muốn mình giải thích từ nào trong câu này hay muốn cùng luyện nói tiếp về chủ đề này nào?`,
      translationVi: "Bạn có thể bật mic 🇺🇸 để phát âm câu tiếng Anh phía trên nha!",
      suggestions: ["How would a native speaker say that casually?", "Dạy mình thêm 2 câu thông dụng nữa đi thầy."],
      isConclusion: false
    };
  }

  // 2. Scenario-based English roleplay keyword matching
  if (currentScenario.responses && currentScenario.responses.length > 0) {
    for (const resp of currentScenario.responses) {
      if (resp.keywords && resp.keywords.some(k => lower.includes(k.toLowerCase()))) {
        return {
          reply: resp.reply,
          translationVi: resp.replyVi || "Bản dịch: " + resp.reply,
          suggestions: resp.suggestions || [],
          isConclusion: !!resp.isConclusion
        };
      }
    }
  }

  // 3. Fallback for roleplay
  return {
    reply: currentScenario.fallback || "That is a very interesting perspective! Could you tell me a little more about how you see that?",
    translationVi: currentScenario.fallbackVi || "Đó là một góc nhìn rất thú vị! Bạn có thể chia sẻ thêm cho mình nghe không?",
    suggestions: currentScenario.promptSuggestions || [],
    isConclusion: false
  };
}

// Send Message
function sendUserMessage(textToSend = null) {
  const input = document.getElementById('ai-chat-input');
  const text = textToSend || (input ? input.value.trim() : "");
  if (!text) return;

  if (input) input.value = "";

  const analysis = isVietnameseText(text) ? { issues: [], suggestions: [] } : analyzeUserGrammar(text);

  const userMsg = {
    id: "msg_user_" + Date.now(),
    sender: "user",
    text: text,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    analysis: analysis
  };
  chatMessages.push(userMsg);
  renderAIChatList();
  scrollToChatBottom();

  // Show typing indicator
  const typingEl = document.getElementById('ai-typing-indicator');
  if (typingEl) typingEl.classList.remove('hidden');

  setTimeout(() => {
    if (typingEl) typingEl.classList.add('hidden');
    const outcome = getAIResponse(text);
    const aiMsg = {
      id: "msg_ai_" + Date.now(),
      sender: "ai",
      text: outcome.reply,
      translationVi: outcome.translationVi,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: outcome.suggestions
    };
    chatMessages.push(aiMsg);
    renderAIChatList();
    scrollToChatBottom();

    // Auto Voice synthesis
    if (isAutoTTSActive) {
      speakAIText(outcome.reply);
    }

    // Award XP
    if (typeof addXP === 'function') addXP(15);
    if (typeof addCombo === 'function') addCombo();

    if (outcome.isConclusion) {
      if (typeof showToast === 'function') {
        showToast("🏆 Hoàn thành kịch bản đối thoại! Kỹ năng giao tiếp tuyệt vời.", "success", "🎉");
      }
      if (typeof addXP === 'function') addXP(50);
    }
  }, 750);
}

// Bilingual Speech Synthesis
function speakAIText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const cleanText = text.replace(/👉/g, '').replace(/⚠️/g, '').replace(/•/g, '').replace(/\//g, '');
  const utter = new SpeechSynthesisUtterance(cleanText);

  if (isVietnameseText(cleanText)) {
    utter.lang = 'vi-VN';
    utter.rate = 1.0;
  } else {
    utter.lang = 'en-US';
    utter.rate = 0.95;
  }

  window.speechSynthesis.speak(utter);
}

// Toggle TTS mute/unmute
function toggleAutoTTS() {
  isAutoTTSActive = !isAutoTTSActive;
  if (!isAutoTTSActive && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  const btn = document.getElementById('ai-tts-toggle-btn');
  if (btn) {
    btn.innerHTML = isAutoTTSActive ? '🔊 Giọng đọc: BẬT' : '🔇 Giọng đọc: TẮT';
    btn.classList.toggle('active', isAutoTTSActive);
  }
  if (typeof showToast === 'function') {
    showToast(isAutoTTSActive ? "Đã bật giọng đọc tự động AI" : "Đã tắt giọng đọc tự động AI", "info");
  }
}

// Toggle Microphone Language (English vs Vietnamese)
function toggleVoiceLanguage() {
  currentVoiceLang = currentVoiceLang === 'en-US' ? 'vi-VN' : 'en-US';
  updateVoiceLangButtonUI();

  if (typeof showToast === 'function') {
    const langName = currentVoiceLang === 'vi-VN' ? "🇻🇳 Tiếng Việt" : "🇺🇸 English";
    showToast(`Mic đã chuyển sang: ${langName}`, "info", "🎙️");
  }
}

function updateVoiceLangButtonUI() {
  const btn = document.getElementById('ai-lang-toggle-btn');
  if (!btn) return;
  if (currentVoiceLang === 'vi-VN') {
    btn.className = 'ai-lang-toggle-btn vi-active';
    btn.innerHTML = '🎙️ Mic: 🇻🇳 Tiếng Việt';
  } else {
    btn.className = 'ai-lang-toggle-btn en-active';
    btn.innerHTML = '🎙️ Mic: 🇺🇸 English';
  }
}

// Toggle Speech Recognition
function toggleAIVoiceInput() {
  const micBtn = document.getElementById('ai-mic-btn');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    if (typeof showToast === 'function') {
      showToast("Tính năng nhập giọng nói yêu cầu Google Chrome hoặc Edge!", "warning", "⚠️");
    }
    return;
  }

  if (isVoiceListening && aiRecognition) {
    aiRecognition.stop();
    isVoiceListening = false;
    if (micBtn) micBtn.classList.remove('recording');
    return;
  }

  aiRecognition = new SpeechRecognition();
  aiRecognition.lang = currentVoiceLang; // Automatically adapts to chosen language!
  aiRecognition.continuous = false;
  aiRecognition.interimResults = false;

  aiRecognition.onstart = () => {
    isVoiceListening = true;
    if (micBtn) micBtn.classList.add('recording');
    const msg = currentVoiceLang === 'vi-VN' ? "🎙️ Đang nghe... Bạn hãy nói tiếng Việt tự nhiên" : "🎙️ Listening... Speak naturally in English";
    if (typeof showToast === 'function') showToast(msg, "info");
  };

  aiRecognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    const input = document.getElementById('ai-chat-input');
    if (input) input.value = transcript;
    sendUserMessage(transcript);
  };

  aiRecognition.onerror = (e) => {
    isVoiceListening = false;
    if (micBtn) micBtn.classList.remove('recording');
    if (typeof showToast === 'function') showToast("Lỗi nhận diện mic: " + e.error, "danger");
  };

  aiRecognition.onend = () => {
    isVoiceListening = false;
    if (micBtn) micBtn.classList.remove('recording');
  };

  aiRecognition.start();
}

// Toggle Vietnamese translation drawer for a message
function toggleMessageTranslation(msgId) {
  const drawer = document.getElementById('drawer_' + msgId);
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

function scrollToChatBottom() {
  const box = document.getElementById('ai-chat-messages');
  if (box) {
    setTimeout(() => { box.scrollTop = box.scrollHeight; }, 50);
  }
}

// --- CUSTOM SCENARIO CREATOR (UNLIMITED TOPICS) ---
function openCustomScenarioModal() {
  const existing = document.getElementById('ai-custom-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'ai-custom-modal';
  modal.className = 'ai-modal-backdrop';
  modal.innerHTML = `
    <div class="ai-modal-box">
      <div class="ai-modal-header">
        <div style="font-weight:800;font-size:16px;color:var(--text);">✨ Tạo Chủ Đề Nhập Vai Mới (Không Giới Hạn)</div>
        <button class="popup-close-btn" onclick="document.getElementById('ai-custom-modal').remove()">✕</button>
      </div>
      <div class="ai-modal-body">
        <div class="ai-form-group">
          <label>Tên chủ đề (Tiếng Anh hoặc Tiếng Việt):</label>
          <input id="custom-sc-title" class="ai-form-input" placeholder="Ví dụ: US Visa Interview / Khám bệnh cho thú cưng...">
        </div>
        <div class="ai-form-group">
          <label>Cấp độ CEFR:</label>
          <select id="custom-sc-level" class="ai-form-select">
            <option value="A1">A1 – Căn bản (Beginner)</option>
            <option value="A2">A2 – Sơ cấp (Elementary)</option>
            <option value="B1" selected>B1 – Trung cấp (Intermediate)</option>
            <option value="B2">B2 – Tự tin (Upper Intermediate)</option>
            <option value="C1">C1 – Chuyên sâu (Advanced)</option>
            <option value="C2">C2 – Bậc thầy (Mastery)</option>
            <option value="Song ngữ">Song ngữ Việt - Anh</option>
          </select>
        </div>
        <div class="ai-form-group">
          <label>Nhân vật AI nhập vai & Biểu tượng:</label>
          <div style="display:flex;gap:8px;">
            <input id="custom-sc-icon" class="ai-form-input" style="width:60px;text-align:center;font-size:20px;" value="🎭">
            <input id="custom-sc-role" class="ai-form-input" placeholder="Ví dụ: Lãnh sự quán Mỹ / Bác sĩ thú y / Hướng dẫn viên du lịch...">
          </div>
        </div>
        <div class="ai-form-group">
          <label>Câu mở đầu của AI (Welcome Message):</label>
          <textarea id="custom-sc-welcome" class="ai-form-textarea" rows="3" placeholder="Hello! Welcome to our consulate interview. What is the primary purpose of your travel to the United States?"></textarea>
        </div>
        <div class="ai-form-group">
          <label>Bản dịch tiếng Việt của câu mở đầu:</label>
          <textarea id="custom-sc-welcome-vi" class="ai-form-textarea" rows="2" placeholder="Xin chào! Chào mừng bạn đến buổi phỏng vấn lãnh sự quán. Mục đích chính chuyến đi Mỹ của bạn là gì?"></textarea>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px;">
          <button class="btn btn-secondary" onclick="document.getElementById('ai-custom-modal').remove()">Hủy</button>
          <button class="btn btn-primary" onclick="saveCustomScenario()">🚀 Bắt đầu kịch bản này</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function saveCustomScenario() {
  const title = document.getElementById('custom-sc-title')?.value.trim();
  const level = document.getElementById('custom-sc-level')?.value || "B1";
  const icon = document.getElementById('custom-sc-icon')?.value.trim() || "✨";
  const role = document.getElementById('custom-sc-role')?.value.trim() || "AI Partner";
  const welcome = document.getElementById('custom-sc-welcome')?.value.trim() || `Hello! Let's practice speaking English together about ${title || 'this topic'}.`;
  const welcomeVi = document.getElementById('custom-sc-welcome-vi')?.value.trim() || "Chào bạn! Chúng ta cùng trò chuyện và luyện tập nhé.";

  if (!title) {
    if (typeof showToast === 'function') showToast("Vui lòng nhập tên chủ đề!", "warning");
    return;
  }

  const newId = "custom_" + Date.now();
  const newSc = {
    id: newId,
    title: title,
    level: level,
    levelCategory: level,
    icon: icon,
    role: role,
    avatar: icon,
    desc: `Kịch bản tùy chỉnh do bạn tạo: ${title}`,
    welcome: welcome,
    welcomeVi: welcomeVi,
    isCustom: true,
    promptSuggestions: [
      "Hello! I am ready to practice this scenario.",
      "Could you explain this topic in more detail?",
      "Can we practice some common phrases for this situation?"
    ],
    responses: [],
    fallback: "That is very interesting! Could you tell me more about your thoughts on this?",
    fallbackVi: "Điều đó rất thú vị! Bạn có thể chia sẻ thêm cho mình biết không?"
  };

  AI_SCENARIOS[newId] = newSc;

  // Save to localStorage
  try {
    const raw = localStorage.getItem('englishmaster_custom_scenarios');
    const list = raw ? JSON.parse(raw) : [];
    list.unshift(newSc);
    localStorage.setItem('englishmaster_custom_scenarios', JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }

  document.getElementById('ai-custom-modal')?.remove();
  if (typeof showToast === 'function') {
    showToast(`Đã tạo chủ đề mới: ${title}`, "success", "🎉");
  }

  currentScenario = newSc;
  renderAI();
  initChat();
}

function deleteCustomScenario(scenarioId, event) {
  if (event) event.stopPropagation();
  if (!confirm("Bạn có chắc chắn muốn xóa chủ đề tùy chỉnh này?")) return;

  delete AI_SCENARIOS[scenarioId];
  try {
    const raw = localStorage.getItem('englishmaster_custom_scenarios');
    if (raw) {
      let list = JSON.parse(raw);
      list = list.filter(item => item.id !== scenarioId);
      localStorage.setItem('englishmaster_custom_scenarios', JSON.stringify(list));
    }
  } catch (e) {
    console.error(e);
  }

  if (currentScenario.id === scenarioId) {
    currentScenario = AI_SCENARIOS.a1_intro;
  }

  if (typeof showToast === 'function') showToast("Đã xóa chủ đề thành công!", "info");
  renderAI();
  initChat();
}

// Filter scenarios by search & level
function getFilteredScenarios() {
  const searchInput = document.getElementById('ai-topic-search');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const allKeys = Object.keys(AI_SCENARIOS);
  return allKeys.filter(k => {
    const sc = AI_SCENARIOS[k];
    // Level check
    if (currentLevelFilter !== 'all') {
      if (currentLevelFilter === 'Song ngữ') {
        if (sc.levelCategory !== 'Song ngữ' && sc.level !== 'All') return false;
      } else if (sc.levelCategory !== currentLevelFilter && sc.level !== currentLevelFilter) {
        return false;
      }
    }
    // Search query check
    if (query) {
      const matchTitle = sc.title.toLowerCase().includes(query);
      const matchRole = sc.role.toLowerCase().includes(query);
      const matchDesc = (sc.desc || "").toLowerCase().includes(query);
      return matchTitle || matchRole || matchDesc;
    }
    return true;
  });
}

// Render AI Main Page
function renderAI() {
  const container = document.getElementById('page-ai');
  if (!container) return;

  const filteredKeys = getFilteredScenarios();
  const totalCount = Object.keys(AI_SCENARIOS).length;

  let html = `
    <div class="page-header mb-16">
      <div class="flex-between flex-wrap gap-16">
        <div>
          <h1 class="page-title">🤖 AI Practice Partner & Trợ Lý Song Ngữ</h1>
          <p class="page-subtitle">Luyện nói & Voice chat hai chiều tiếng Anh - tiếng Việt với hơn ${totalCount} chủ đề từ A1 đến C2 không giới hạn.</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;">
          <button class="btn btn-primary btn-sm" onclick="openCustomScenarioModal()">
            ✨ + Tạo chủ đề mới (Custom Topic)
          </button>
        </div>
      </div>
    </div>

    <!-- LEVEL FILTER TABS -->
    <div class="ai-level-filters">
      <button class="ai-filter-tab ${currentLevelFilter === 'all' ? 'active' : ''}" onclick="setAILevelFilter('all')">
        🌐 Tất cả <span class="ai-scenario-badge-count">${totalCount}</span>
      </button>
      <button class="ai-filter-tab ${currentLevelFilter === 'A1' ? 'active' : ''}" onclick="setAILevelFilter('A1')">
        🌟 A1 Căn bản
      </button>
      <button class="ai-filter-tab ${currentLevelFilter === 'A2' ? 'active' : ''}" onclick="setAILevelFilter('A2')">
        🌿 A2 Sơ cấp
      </button>
      <button class="ai-filter-tab ${currentLevelFilter === 'B1' ? 'active' : ''}" onclick="setAILevelFilter('B1')">
        📘 B1 Trung cấp
      </button>
      <button class="ai-filter-tab ${currentLevelFilter === 'B2' ? 'active' : ''}" onclick="setAILevelFilter('B2')">
        🎯 B2 Tự tin
      </button>
      <button class="ai-filter-tab ${currentLevelFilter === 'C1' ? 'active' : ''}" onclick="setAILevelFilter('C1')">
        💎 C1 Chuyên sâu
      </button>
      <button class="ai-filter-tab ${currentLevelFilter === 'C2' ? 'active' : ''}" onclick="setAILevelFilter('C2')">
        👑 C2 Bậc thầy
      </button>
      <button class="ai-filter-tab ${currentLevelFilter === 'Song ngữ' ? 'active' : ''}" onclick="setAILevelFilter('Song ngữ')">
        🇻🇳 Gia sư Song ngữ
      </button>
    </div>

    <!-- SEARCH & SCENARIOS LIST -->
    <div style="display:flex;gap:12px;margin-bottom:14px;align-items:center;">
      <div style="flex:1;position:relative;">
        <input id="ai-topic-search" class="ai-form-input" style="padding-left:36px;border-radius:var(--radius-full);"
          placeholder="🔍 Tìm nhanh chủ đề (ví dụ: interview, coffee, visa, du lịch, startup, grammar...)"
          oninput="updateScenarioCardsList()">
        <span style="position:absolute;left:14px;top:10px;color:var(--text-dim);">🔍</span>
      </div>
      <span style="font-size:12px;color:var(--text-muted);white-space:nowrap;" id="ai-scenario-count-label">
        Hiển thị ${filteredKeys.length} chủ đề
      </span>
    </div>

    <!-- Scenarios Scroll Bar -->
    <div class="ai-scenarios-scroll mb-20" id="ai-scenarios-list-container">
      ${renderScenarioCardsHTML(filteredKeys)}
    </div>

    <!-- ACTIVE CHAT BOX -->
    <div class="ai-chat-wrapper card-glass">
      <!-- Scenario Info & Toolbar -->
      <div class="ai-chat-header flex-between flex-wrap gap-12">
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="ai-avatar-circle">${currentScenario.avatar || currentScenario.icon}</div>
          <div>
            <div style="font-weight:700;font-size:15px;color:var(--text);display:flex;align-items:center;gap:8px;">
              ${escapeHtml(currentScenario.role)}
              <span class="level-badge" style="font-size:11px;padding:2px 8px;background:rgba(124,58,237,0.2);color:var(--primary-light);">
                ${escapeHtml(currentScenario.level)}
              </span>
            </div>
            <div style="font-size:12px;color:var(--text-muted);">${escapeHtml(currentScenario.title)}</div>
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <!-- Mic Language Switcher -->
          <button id="ai-lang-toggle-btn" class="ai-lang-toggle-btn ${currentVoiceLang === 'vi-VN' ? 'vi-active' : 'en-active'}" 
            onclick="toggleVoiceLanguage()" title="Chuyển đổi ngôn ngữ nhận diện giọng nói">
            ${currentVoiceLang === 'vi-VN' ? '🎙️ Mic: 🇻🇳 Tiếng Việt' : '🎙️ Mic: 🇺🇸 English'}
          </button>

          <!-- TTS Auto Voice Toggle -->
          <button id="ai-tts-toggle-btn" class="btn btn-secondary btn-sm ${isAutoTTSActive ? 'active' : ''}" 
            onclick="toggleAutoTTS()" title="Bật/Tắt giọng đọc tự động">
            ${isAutoTTSActive ? '🔊 Giọng đọc: BẬT' : '🔇 Giọng đọc: TẮT'}
          </button>

          <!-- Reset Button -->
          <button class="btn btn-secondary btn-sm" onclick="initChat()" title="Bắt đầu lại cuộc hội thoại">
            🔄 Bắt đầu lại
          </button>
        </div>
      </div>

      <!-- Messages Container -->
      <div class="ai-chat-messages" id="ai-chat-messages">
        <!-- Populated by renderAIChatList() -->
      </div>

      <!-- Typing Indicator -->
      <div id="ai-typing-indicator" class="ai-typing-indicator hidden">
        <span></span><span></span><span></span> ${escapeHtml(currentScenario.role)} đang phản hồi...
      </div>

      <!-- Input Bar -->
      <div class="ai-chat-input-bar">
        <button id="ai-mic-btn" class="ai-mic-btn" onclick="toggleAIVoiceInput()" title="Bấm để nói bằng Microphone (hỗ trợ cả Anh & Việt)">
          🎤
        </button>
        <input id="ai-chat-input" type="text" 
          placeholder="Nhập hoặc nói bằng Tiếng Anh / Tiếng Việt (gõ 'Enter' để gửi)..." 
          onkeydown="if(event.key==='Enter') sendUserMessage()">
        <button class="btn btn-primary" onclick="sendUserMessage()">Gửi 🚀</button>
      </div>

      <!-- Quick prompts -->
      <div class="ai-quick-prompts" id="ai-quick-prompts">
        <!-- Populated from suggestions -->
      </div>
    </div>
  `;

  container.innerHTML = html;
  renderAIChatList();
}

function renderScenarioCardsHTML(keys) {
  if (keys.length === 0) {
    return `<div style="padding:20px;color:var(--text-dim);font-size:13px;">Không tìm thấy chủ đề phù hợp. Hãy bấm nút "+ Tạo chủ đề mới" ở trên để tự tạo chủ đề theo ý bạn nhé!</div>`;
  }

  return keys.map(k => {
    const sc = AI_SCENARIOS[k];
    const isSel = sc.id === currentScenario.id;
    return `
      <div class="ai-scenario-card ${isSel ? 'active' : ''}" onclick="setAIScenario('${sc.id}')">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div style="font-size:26px;margin-bottom:6px;">${sc.icon || '💬'}</div>
          <span style="font-size:10px;font-weight:700;padding:2px 6px;border-radius:4px;background:rgba(255,255,255,0.1);color:var(--text-muted);">
            ${sc.level}
          </span>
        </div>
        <div style="font-weight:700;font-size:13px;color:var(--text);margin-bottom:3px;line-height:1.4;">${escapeHtml(sc.title)}</div>
        <div style="font-size:11px;color:var(--text-dim);margin-bottom:4px;">${escapeHtml(sc.role)}</div>
        ${sc.isCustom ? `
          <div style="margin-top:6px;text-align:right;">
            <button class="ai-action-btn" onclick="deleteCustomScenario('${sc.id}', event)" title="Xóa chủ đề tùy chỉnh này">🗑️ Xóa</button>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

function updateScenarioCardsList() {
  const container = document.getElementById('ai-scenarios-list-container');
  const countLabel = document.getElementById('ai-scenario-count-label');
  const filteredKeys = getFilteredScenarios();
  if (container) {
    container.innerHTML = renderScenarioCardsHTML(filteredKeys);
  }
  if (countLabel) {
    countLabel.textContent = `Hiển thị ${filteredKeys.length} chủ đề`;
  }
}

// Render Chat Bubble List
function renderAIChatList() {
  const box = document.getElementById('ai-chat-messages');
  const promptsBox = document.getElementById('ai-quick-prompts');
  if (!box) return;

  let html = "";
  let latestSuggestions = [];

  chatMessages.forEach(msg => {
    const isUser = msg.sender === 'user';
    if (!isUser && msg.suggestions && msg.suggestions.length > 0) {
      latestSuggestions = msg.suggestions;
    }

    html += `
      <div class="ai-message-row ${isUser ? 'user-row' : 'ai-row'}">
        <div class="ai-bubble ${isUser ? 'user-bubble' : 'ai-bubble-content'}">
          <div class="ai-msg-text" style="white-space:pre-line;">${escapeHtml(msg.text)}</div>
          
          <!-- Speech & Translation Action Bar -->
          <div class="ai-msg-actions">
            <button class="ai-action-btn" onclick="speakAIText('${escapeHtml(msg.text).replace(/'/g, "\\'")}')" title="Phát âm chuẩn">
              🔊 Nghe
            </button>
            ${!isUser && msg.translationVi ? `
              <button class="ai-action-btn" onclick="toggleMessageTranslation('${msg.id}')" title="Xem dịch nghĩa tiếng Việt & giải thích">
                🇻🇳 Dịch nghĩa & Giải thích
              </button>
            ` : ''}
            <span class="ai-msg-time" style="margin-left:auto;">${msg.timestamp}</span>
          </div>

          <!-- Expandable Vietnamese Translation Drawer -->
          ${!isUser && msg.translationVi ? `
            <div id="drawer_${msg.id}" class="ai-translation-drawer hidden">
              <div class="ai-translation-title">🇻🇳 Bản dịch Tiếng Việt:</div>
              <div>${escapeHtml(msg.translationVi)}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // Grammar feedback for user
    if (isUser && msg.analysis) {
      const hasIssues = msg.analysis.issues && msg.analysis.issues.length > 0;
      const hasPhrasing = msg.analysis.suggestions && msg.analysis.suggestions.length > 0;

      if (hasIssues || hasPhrasing) {
        html += `<div class="ai-feedback-box">`;
        if (hasIssues) {
          msg.analysis.issues.forEach(iss => {
            html += `
              <div class="ai-feedback-pill grammar-fix">
                <span>⚠️ <strong>Góp ý Ngữ pháp:</strong> ${escapeHtml(iss.tip)} (Đề xuất: <em>${escapeHtml(iss.fix)}</em>)</span>
              </div>
            `;
          });
        }
        if (hasPhrasing) {
          msg.analysis.suggestions.forEach(sug => {
            html += `
              <div class="ai-feedback-pill phrasing-suggestion">
                <span>💡 <strong>Từ vựng nâng cao:</strong> Bạn có thể dùng <em>"${escapeHtml(sug)}"</em> để câu nói tự nhiên hơn.</span>
              </div>
            `;
          });
        }
        html += `</div>`;
      }
    }
  });

  box.innerHTML = html;

  // Render quick prompts chips
  if (promptsBox) {
    const promptList = latestSuggestions.length > 0 ? latestSuggestions : currentScenario.promptSuggestions;
    if (promptList && promptList.length > 0) {
      promptsBox.innerHTML = `
        <span style="font-size:11px;color:var(--text-dim);font-weight:700;margin-right:6px;white-space:nowrap;">💡 Gợi ý nói:</span>
        ${promptList.map(p => `
          <button class="ai-prompt-chip" onclick="sendUserMessage('${escapeHtml(p).replace(/'/g, "\\'")}')">
            "${escapeHtml(p)}"
          </button>
        `).join('')}
      `;
    } else {
      promptsBox.innerHTML = "";
    }
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
