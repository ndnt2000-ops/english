// ============================================================
// LISTENING MASTER DATABASE (CEFR A1 - C2)
// 36 In-depth Listening Lessons with IELTS/TOEFL/Cambridge Style Passages & Questions
// ============================================================

const LISTENING_DATA = [
  {
    "id": 1,
    "level": "A1",
    "title": "Tom's Morning Routine & Commute",
    "topic": "Daily Routine",
    "duration": "~45 sec",
    "script": "Every morning, Tom wakes up at seven o'clock. He brushes his teeth, washes his face, and puts on clean clothes. Then he eats breakfast with his family in the kitchen. Tom usually eats warm bread with butter and drinks a glass of fresh orange juice. At seven forty-five, he walks to the bus stop near his house. He catches the number twenty-four bus and arrives at school at eight fifteen.",
    "keyVocab": [
      {
        "word": "wake up",
        "meaning": "thức dậy"
      },
      {
        "word": "commute",
        "meaning": "quãng đường đi lại hàng ngày"
      },
      {
        "word": "arrive",
        "meaning": "đến nơi"
      }
    ],
    "questions": [
      {
        "question": "What time does Tom wake up every morning?",
        "options": [
          "Six thirty",
          "Seven o'clock",
          "Seven forty-five",
          "Eight fifteen"
        ],
        "answer": 1,
        "explanation": "Tom wakes up at seven o'clock."
      },
      {
        "question": "What does Tom drink for breakfast?",
        "options": [
          "Hot coffee",
          "Warm tea",
          "Fresh orange juice",
          "Cold milk"
        ],
        "answer": 2,
        "explanation": "He drinks a glass of fresh orange juice."
      },
      {
        "question": "Which bus number does Tom take to school?",
        "options": [
          "Bus 12",
          "Bus 24",
          "Bus 40",
          "Bus 74"
        ],
        "answer": 1,
        "explanation": "He catches the number twenty-four bus."
      },
      {
        "question": "What time does Tom arrive at school?",
        "options": [
          "At 7:45",
          "At 8:00",
          "At 8:15",
          "At 8:30"
        ],
        "answer": 2,
        "explanation": "He arrives at school at eight fifteen (8:15)."
      }
    ]
  },
  {
    "id": 2,
    "level": "A1",
    "title": "A Weekend Family Picnic at the Lake",
    "topic": "Family & Leisure",
    "duration": "~50 sec",
    "script": "Last Sunday afternoon, Anna and her parents went to Green Lake Park for a family picnic. The sky was bright blue and the weather was warm and sunny. Anna's father grilled chicken sandwiches on the barbecue, while her mother prepared a delicious salad with tomatoes, cucumbers, and olive oil. Anna and her younger brother Lucas played with a yellow frisbee on the green grass. After eating, they rented a small wooden boat and fed breadcrumbs to the white ducks.",
    "keyVocab": [
      {
        "word": "picnic",
        "meaning": "buổi dã ngoại ngoài trời"
      },
      {
        "word": "barbecue",
        "meaning": "tiệc nướng ngoài trời"
      },
      {
        "word": "rent",
        "meaning": "thuê (thuyền, xe...)"
      }
    ],
    "questions": [
      {
        "question": "When did the family picnic take place?",
        "options": [
          "Saturday morning",
          "Sunday afternoon",
          "Friday evening",
          "Sunday morning"
        ],
        "answer": 1,
        "explanation": "The story begins: 'Last Sunday afternoon, Anna and her parents went to Green Lake Park...'"
      },
      {
        "question": "What did Anna's mother prepare?",
        "options": [
          "A chocolate cake",
          "A fresh tomato and cucumber salad",
          "Fried potatoes",
          "Grilled fish"
        ],
        "answer": 1,
        "explanation": "Her mother prepared a salad with tomatoes, cucumbers, and olive oil."
      },
      {
        "question": "What toy did the children play with?",
        "options": [
          "A red ball",
          "A yellow frisbee",
          "A toy airplane",
          "A kite"
        ],
        "answer": 1,
        "explanation": "Anna and Lucas played with a yellow frisbee."
      },
      {
        "question": "What did they do after eating lunch?",
        "options": [
          "They swam in the lake",
          "They rented a small boat and fed ducks",
          "They walked home immediately",
          "They played video games"
        ],
        "answer": 1,
        "explanation": "They rented a small wooden boat and fed breadcrumbs to ducks."
      }
    ]
  },
  {
    "id": 3,
    "level": "A1",
    "title": "Ordering Lunch at the University Cafeteria",
    "topic": "Food & Ordering",
    "duration": "~50 sec",
    "script": "Hello! Welcome to the Campus Central Cafeteria. Today we have grilled chicken with steamed rice, beef noodle soup, and vegetarian pasta. Each meal comes with a side bowl of vegetable soup or a fresh green apple. For drinks, we offer iced tea, mineral water, and freshly squeezed lemonade. That will be six dollars and fifty cents for the student combo. Please tap your university ID card on the card reader to pay.",
    "keyVocab": [
      {
        "word": "cafeteria",
        "meaning": "quán ăn tự phục vụ tại trường/cơ quan"
      },
      {
        "word": "vegetarian",
        "meaning": "chay, thanh đạm"
      },
      {
        "word": "tap card",
        "meaning": "chạm thẻ thanh toán"
      }
    ],
    "questions": [
      {
        "question": "Which of these meals is NOT mentioned on the menu?",
        "options": [
          "Grilled chicken with rice",
          "Beef noodle soup",
          "Vegetarian pasta",
          "Seafood pizza"
        ],
        "answer": 3,
        "explanation": "The menu mentions grilled chicken with rice, beef noodles, and vegetarian pasta, but no pizza."
      },
      {
        "question": "What fruit is offered as a side option?",
        "options": [
          "A yellow banana",
          "A fresh green apple",
          "A sweet orange",
          "A bunch of grapes"
        ],
        "answer": 1,
        "explanation": "Meals come with vegetable soup or a fresh green apple."
      },
      {
        "question": "How much does the student combo meal cost?",
        "options": [
          "$4.50",
          "$5.00",
          "$6.50",
          "$8.00"
        ],
        "answer": 2,
        "explanation": "The cashier states: 'That will be six dollars and fifty cents ($6.50).'"
      },
      {
        "question": "How does the customer pay for the food?",
        "options": [
          "With cash dollars",
          "With a university ID card",
          "By writing a paper check",
          "Through a mobile gift voucher"
        ],
        "answer": 1,
        "explanation": "'Please tap your university ID card on the card reader to pay.'"
      }
    ]
  },
  {
    "id": 4,
    "level": "A1",
    "title": "A Saturday Trip to the City Zoo",
    "topic": "Animals & Nature",
    "duration": "~50 sec",
    "script": "David and his class visited the city zoo on Saturday. Their teacher, Mr. Brown, gave every student a map of the zoo. First, they visited the tall giraffes eating green acacia leaves from the top of high wooden poles. Next, they saw two friendly baby pandas playing together in an outdoor garden. At twelve o'clock, they watched the dolphin show at the aquatic center. David took more than forty photos with his camera before returning to the school bus.",
    "keyVocab": [
      {
        "word": "giraffe",
        "meaning": "hươu cao cổ"
      },
      {
        "word": "aquatic center",
        "meaning": "khu thủy cung biểu diễn dưới nước"
      },
      {
        "word": "return",
        "meaning": "trở về"
      }
    ],
    "questions": [
      {
        "question": "Who gave the students maps of the zoo?",
        "options": [
          "The zoo keeper",
          "Their teacher, Mr. Brown",
          "The bus driver",
          "David's father"
        ],
        "answer": 1,
        "explanation": "Their teacher, Mr. Brown, gave every student a map."
      },
      {
        "question": "What were the tall giraffes eating?",
        "options": [
          "Sweet apples",
          "Green leaves from tall poles",
          "Dried corn",
          "Fresh carrots"
        ],
        "answer": 1,
        "explanation": "The giraffes were eating acacia leaves from high poles."
      },
      {
        "question": "What special show took place at twelve o'clock?",
        "options": [
          "Lion feeding show",
          "Dolphin show",
          "Elephant parade",
          "Bird flying show"
        ],
        "answer": 1,
        "explanation": "At twelve o'clock, they watched the dolphin show."
      },
      {
        "question": "How many photos did David take?",
        "options": [
          "Under ten photos",
          "Exactly twenty photos",
          "More than forty photos",
          "Over one hundred photos"
        ],
        "answer": 2,
        "explanation": "David took more than forty photos with his camera."
      }
    ]
  },
  {
    "id": 5,
    "level": "A1",
    "title": "Shopping for Birthday Gifts",
    "topic": "Shopping & Hobbies",
    "duration": "~45 sec",
    "script": "Lisa is at the department store looking for a birthday gift for her younger sister, Emily, who is turning ten years old. Emily loves drawing and reading adventure stories. Lisa finds a colorful watercolor painting set on the second floor. It includes twenty-four colors, three brushes, and a sketchpad. The price is fifteen dollars. Lisa also buys a funny comic book for five dollars. The shop assistant wraps both items in shiny silver paper.",
    "keyVocab": [
      {
        "word": "department store",
        "meaning": "trung tâm thương mại bách hóa"
      },
      {
        "word": "watercolor set",
        "meaning": "bộ màu vẽ màu nước"
      },
      {
        "word": "gift wrap",
        "meaning": "gói quà"
      }
    ],
    "questions": [
      {
        "question": "How old will Lisa's sister be on her birthday?",
        "options": [
          "Eight",
          "Nine",
          "Ten",
          "Twelve"
        ],
        "answer": 2,
        "explanation": "Her sister Emily is turning ten years old."
      },
      {
        "question": "What hobbies does Emily enjoy?",
        "options": [
          "Cooking and baking",
          "Drawing and reading adventures",
          "Singing and dancing",
          "Playing soccer"
        ],
        "answer": 1,
        "explanation": "Emily loves drawing and reading adventure stories."
      },
      {
        "question": "How much did Lisa spend in total?",
        "options": [
          "$15",
          "$18",
          "$20",
          "$25"
        ],
        "answer": 2,
        "explanation": "$15 for the painting set + $5 for the comic book = $20 total."
      },
      {
        "question": "What color was the gift wrapping paper?",
        "options": [
          "Golden yellow",
          "Shiny silver",
          "Bright red",
          "Dark blue"
        ],
        "answer": 1,
        "explanation": "The items were wrapped in shiny silver paper."
      }
    ]
  },
  {
    "id": 6,
    "level": "A1",
    "title": "My First Day at English Club",
    "topic": "School & Friends",
    "duration": "~45 sec",
    "script": "Yesterday was my very first meeting at the community English club. The club meets every Wednesday at five in the afternoon in room 102. There were twelve members sitting around a large round table. The club leader, Jenny, welcomed all new members warmly. We played a word guessing game and talked about our favorite music and movies in English. At first I felt a little nervous, but everyone was very friendly and helpful. I cannot wait for next week's session!",
    "keyVocab": [
      {
        "word": "community",
        "meaning": "cộng đồng"
      },
      {
        "word": "nervous",
        "meaning": "hồi hộp, lo lắng"
      },
      {
        "word": "session",
        "meaning": "buổi sinh hoạt / buổi học"
      }
    ],
    "questions": [
      {
        "question": "What day does the English club meet?",
        "options": [
          "Every Monday",
          "Every Tuesday",
          "Every Wednesday",
          "Every Friday"
        ],
        "answer": 2,
        "explanation": "The club meets every Wednesday at five PM."
      },
      {
        "question": "How many members were present at the round table?",
        "options": [
          "Eight",
          "Ten",
          "Twelve",
          "Twenty"
        ],
        "answer": 2,
        "explanation": "There were twelve members sitting around the table."
      },
      {
        "question": "What activities did the members do?",
        "options": [
          "Wrote a grammar test",
          "Played a word game and discussed music and movies",
          "Watched a 2-hour movie silently",
          "Ate dinner at a restaurant"
        ],
        "answer": 1,
        "explanation": "They played a word guessing game and talked about favorite music and movies."
      },
      {
        "question": "How did the speaker feel at the beginning of the meeting?",
        "options": [
          "Bored",
          "Angry",
          "A little nervous",
          "Extremely confident"
        ],
        "answer": 2,
        "explanation": "'At first I felt a little nervous, but everyone was very friendly...'"
      }
    ]
  },
  {
    "id": 7,
    "level": "A2",
    "title": "A Visit to the National History Museum",
    "topic": "Culture & History",
    "duration": "~65 sec",
    "script": "Last Saturday, Sarah and her history study group visited the National Heritage Museum. The museum opened promptly at nine in the morning with free admission for university students. They spent the morning exploring the ancient civilizations wing. Sarah's favorite gallery was the ancient Egyptian collection, which displayed golden sarcophagi, intricate jewelry, and authentic papyrus scrolls. Her friend Mark preferred the Greco-Roman sculpture hall. At one o'clock, they gathered in the museum courtyard café to review their exhibition notes over sandwiches and iced coffee.",
    "keyVocab": [
      {
        "word": "admission",
        "meaning": "vé vào cổng, quyền vào"
      },
      {
        "word": "sarcophagus",
        "meaning": "quan tài đá cổ"
      },
      {
        "word": "authentic",
        "meaning": "đích thực, nguyên bản"
      }
    ],
    "questions": [
      {
        "question": "Why did Sarah and her group enter the museum for free?",
        "options": [
          "It was a public national holiday",
          "They had special student status",
          "The museum was under renovation",
          "They arrived before 8 AM"
        ],
        "answer": 1,
        "explanation": "The museum offered 'free admission for university students.'"
      },
      {
        "question": "Which artifacts particularly captivated Sarah?",
        "options": [
          "Medieval armor and weapons",
          "The golden sarcophagi and papyrus scrolls in the Egyptian hall",
          "Modern oil paintings",
          "Dinosaur fossils"
        ],
        "answer": 1,
        "explanation": "Sarah loved the ancient Egyptian collection with golden sarcophagi and papyrus scrolls."
      },
      {
        "question": "What section did Mark find most compelling?",
        "options": [
          "The Egyptian wing",
          "The Greco-Roman sculpture hall",
          "The dinosaur pavilion",
          "The courtyard café"
        ],
        "answer": 1,
        "explanation": "Mark preferred the Greco-Roman sculpture hall."
      },
      {
        "question": "Where did the students meet at one o'clock?",
        "options": [
          "At the main entrance gate",
          "In the museum courtyard café",
          "At the library",
          "On the subway train"
        ],
        "answer": 1,
        "explanation": "They gathered in the courtyard café at one o'clock."
      }
    ]
  },
  {
    "id": 8,
    "level": "A2",
    "title": "Airport Flight Announcement & Gate Changes",
    "topic": "Travel & Aviation",
    "duration": "~60 sec",
    "script": "Attention all passengers traveling on Horizon Airways Flight 318 bound for London Heathrow, with continuing service to Manchester. Due to late incoming aircraft maintenance, boarding has been rescheduled from two thirty to three fifteen PM. Furthermore, the departure gate has been relocated from Gate A7 to Gate C12 in the South Terminal. Passengers requiring additional time or special assistance, as well as business class travelers, are requested to proceed to Gate C12 immediately. Complimentary coffee and bottled water vouchers can be collected at customer service desk four.",
    "keyVocab": [
      {
        "word": "bound for",
        "meaning": "hướng tới, bay đến"
      },
      {
        "word": "rescheduled",
        "meaning": "lên lại lịch trình, dời giờ"
      },
      {
        "word": "complimentary",
        "meaning": "miễn phí đính kèm"
      }
    ],
    "questions": [
      {
        "question": "What was the initial cause of the departure delay?",
        "options": [
          "Severe thunderstorm at destination",
          "Late incoming aircraft maintenance",
          "Lost luggage in cargo hold",
          "Air traffic controller strike"
        ],
        "answer": 1,
        "explanation": "The announcement states: 'Due to late incoming aircraft maintenance...'"
      },
      {
        "question": "What is the new scheduled departure time?",
        "options": [
          "2:30 PM",
          "3:00 PM",
          "3:15 PM",
          "4:00 PM"
        ],
        "answer": 2,
        "explanation": "Boarding has been rescheduled from 2:30 to 3:15 PM."
      },
      {
        "question": "To which gate has the flight been relocated?",
        "options": [
          "Gate A7",
          "Gate B4",
          "Gate C12",
          "Gate D9"
        ],
        "answer": 2,
        "explanation": "The departure gate was moved from Gate A7 to Gate C12 in the South Terminal."
      },
      {
        "question": "Where can passengers collect complimentary refreshment vouchers?",
        "options": [
          "At gate C12",
          "Inside the airplane cabin",
          "At customer service desk four",
          "At the airport duty-free shop"
        ],
        "answer": 2,
        "explanation": "Vouchers can be collected at customer service desk four."
      }
    ]
  },
  {
    "id": 9,
    "level": "A2",
    "title": "Planning a Mountain Camping Trip",
    "topic": "Outdoor Adventure",
    "duration": "~60 sec",
    "script": "Michael and his roommate Kevin are preparing for a three-day hiking trip in the Pine Ridge Mountains. Kevin checked the mountain weather forecast, which predicted cool daytime temperatures around eighteen degrees Celsius, with chilly night temperatures dropping to six degrees. Because rain showers are probable on Sunday afternoon, Michael insists on packing waterproof jackets and extra thermal sleeping bags. They also agreed to divide the communal gear: Michael will carry the two-person tent and portable gas burner, while Kevin will carry food supplies, water filtration bottles, and the first aid kit.",
    "keyVocab": [
      {
        "word": "forecast",
        "meaning": "dự báo thời tiết"
      },
      {
        "word": "waterproof",
        "meaning": "chống thấm nước"
      },
      {
        "word": "communal gear",
        "meaning": "dụng cụ dùng chung cho nhóm"
      }
    ],
    "questions": [
      {
        "question": "How long will the friends' hiking expedition last?",
        "options": [
          "One weekend afternoon",
          "Three days",
          "One full week",
          "Ten days"
        ],
        "answer": 1,
        "explanation": "They are preparing for a 'three-day hiking trip.'"
      },
      {
        "question": "What weather condition is expected for Sunday afternoon?",
        "options": [
          "Heavy snowfall",
          "Rain showers",
          "Extreme heatwave",
          "Dense morning fog"
        ],
        "answer": 1,
        "explanation": "The forecast indicated rain showers are probable on Sunday afternoon."
      },
      {
        "question": "Why did Michael insist on packing thermal sleeping bags?",
        "options": [
          "The tent has no floor",
          "Night temperatures will drop to six degrees Celsius",
          "They lost their blankets",
          "To save backpack space"
        ],
        "answer": 1,
        "explanation": "Chilly night temperatures will drop to six degrees."
      },
      {
        "question": "Which items did Kevin agree to carry?",
        "options": [
          "The tent and cooking stove",
          "Food supplies, water filtration, and first aid kit",
          "Only his personal clothes",
          "The heavy camera equipment"
        ],
        "answer": 1,
        "explanation": "Kevin carries food supplies, water filtration bottles, and the first aid kit."
      }
    ]
  },
  {
    "id": 10,
    "level": "A2",
    "title": "Doctor's Advice on Healthy Sleep Habits",
    "topic": "Health & Lifestyle",
    "duration": "~65 sec",
    "script": "During your consultation today, Dr. Jenkins reviewed your symptoms of persistent daytime fatigue and headaches. She explained that erratic sleep schedules significantly disrupt your body's circadian rhythm. To improve sleep quality naturally, she recommends establishing a strict bedtime routine. You should avoid drinking caffeinated beverages such as coffee and energy sodas after two PM. Furthermore, turn off electronic screens—including smartphones, tablets, and televisions—at least forty-five minutes before bedtime, as blue light inhibits the natural release of melatonin.",
    "keyVocab": [
      {
        "word": "fatigue",
        "meaning": "sự mệt mỏi suy nhược"
      },
      {
        "word": "circadian rhythm",
        "meaning": "nhịp sinh học 24 giờ của cơ thể"
      },
      {
        "word": "inhibit",
        "meaning": "ức chế, cản trở"
      }
    ],
    "questions": [
      {
        "question": "What primary symptoms did the patient discuss with Dr. Jenkins?",
        "options": [
          "Stomach aches and fever",
          "Persistent daytime fatigue and headaches",
          "Severe back pain",
          "Seasonal pollen allergies"
        ],
        "answer": 1,
        "explanation": "The doctor reviewed symptoms of persistent daytime fatigue and headaches."
      },
      {
        "question": "After what time does the doctor advise cutting off caffeine?",
        "options": [
          "11:00 AM",
          "12:00 PM",
          "2:00 PM",
          "6:00 PM"
        ],
        "answer": 2,
        "explanation": "'You should avoid drinking caffeinated beverages... after two PM.'"
      },
      {
        "question": "Why should electronic screens be shut down before bed?",
        "options": [
          "To save household electricity",
          "Because blue light hinders melatonin production",
          "To avoid loud notifications",
          "To charge battery overnight"
        ],
        "answer": 1,
        "explanation": "Screen blue light inhibits the natural release of sleep-inducing melatonin."
      },
      {
        "question": "How long before sleeping should screens be turned off?",
        "options": [
          "Ten minutes",
          "At least forty-five minutes",
          "Exactly two hours",
          "Immediately before closing eyes"
        ],
        "answer": 1,
        "explanation": "Turn off screens at least forty-five minutes before bedtime."
      }
    ]
  },
  {
    "id": 11,
    "level": "A2",
    "title": "Renting a Shared Student Apartment",
    "topic": "Housing & Finance",
    "duration": "~60 sec",
    "script": "Hi Emma! I just inspected the two-bedroom apartment on Elm Street near the university campus. The location is exceptional—it is only an eight-minute walk from the science faculty. The monthly rent is eight hundred dollars, which means we will each pay four hundred dollars. Water and trash collection are included in the base rent, but we must pay electricity and high-speed fiber internet separately. The landlord requires a security deposit equal to one month of rent prior to moving in on the first of September.",
    "keyVocab": [
      {
        "word": "exceptional",
        "meaning": "đặc biệt tuyệt vời"
      },
      {
        "word": "utilities",
        "meaning": "tiện ích điện, nước, internet"
      },
      {
        "word": "security deposit",
        "meaning": "tiền đặt cọc bảo đảm"
      }
    ],
    "questions": [
      {
        "question": "How far is the apartment from the university science faculty?",
        "options": [
          "A 20-minute bus ride",
          "An eight-minute walk",
          "Right across the hallway",
          "Five miles away"
        ],
        "answer": 1,
        "explanation": "The apartment is an eight-minute walk from the faculty."
      },
      {
        "question": "How much will each student pay for monthly rent?",
        "options": [
          "$350",
          "$400",
          "$800",
          "$1000"
        ],
        "answer": 1,
        "explanation": "Total rent is $800, so each student pays $400."
      },
      {
        "question": "Which utilities are NOT covered by the base rent?",
        "options": [
          "Water and trash",
          "Electricity and high-speed internet",
          "Heating and gas",
          "Building maintenance"
        ],
        "answer": 1,
        "explanation": "Electricity and internet must be paid separately."
      },
      {
        "question": "When is the scheduled move-in date?",
        "options": [
          "First of August",
          "Fifteenth of August",
          "First of September",
          "End of October"
        ],
        "answer": 2,
        "explanation": "Move-in is scheduled for the first of September."
      }
    ]
  },
  {
    "id": 12,
    "level": "A2",
    "title": "Job Interview for a Bookstore Assistant",
    "topic": "Careers & Work",
    "duration": "~60 sec",
    "script": "Good morning, Mr. Harrison. Thank you for inviting me to interview for the weekend bookstore assistant role. In my previous position at my high school library, I cataloged over five hundred books, assisted patrons with finding research materials, and managed the checkout desk accurately. I consider myself highly organized, punctual, and passionate about literature. I am available to work twelve hours across Saturdays and Sundays, and I am eager to learn your point-of-sale inventory system.",
    "keyVocab": [
      {
        "word": "patron",
        "meaning": "độc giả, khách quen thư viện/cửa hàng"
      },
      {
        "word": "punctual",
        "meaning": "đúng giờ giấc"
      },
      {
        "word": "inventory system",
        "meaning": "hệ thống quản lý hàng tồn kho"
      }
    ],
    "questions": [
      {
        "question": "For what position is the candidate interviewing?",
        "options": [
          "Full-time manager",
          "Weekend bookstore assistant",
          "Head librarian",
          "Delivery driver"
        ],
        "answer": 1,
        "explanation": "The applicant applied for the 'weekend bookstore assistant role.'"
      },
      {
        "question": "What relevant experience did the candidate highlight?",
        "options": [
          "Working in a bakery",
          "Cataloging books and managing the desk at a school library",
          "Designing websites",
          "Selling cars"
        ],
        "answer": 1,
        "explanation": "The candidate cataloged books and assisted patrons in a school library."
      },
      {
        "question": "How many hours per week is the candidate available to work?",
        "options": [
          "Eight hours",
          "Twelve hours across the weekend",
          "Twenty-five hours",
          "Forty hours"
        ],
        "answer": 1,
        "explanation": "The candidate is available for twelve hours across Saturdays and Sundays."
      },
      {
        "question": "What adjective did the candidate use to describe their punctuality?",
        "options": [
          "Somewhat flexible",
          "Highly organized and punctual",
          "Casual",
          "Strictly average"
        ],
        "answer": 1,
        "explanation": "'I consider myself highly organized, punctual, and passionate...'"
      }
    ]
  },
  {
    "id": 13,
    "level": "B1",
    "title": "Neurological Benefits of Aerobic Exercise",
    "topic": "Neuroscience & Health",
    "duration": "~80 sec",
    "script": "Over the past decade, neuroscientists have uncovered compelling clinical evidence regarding the transformative impact of aerobic physical activity on brain architecture. When individuals engage in sustained cardiovascular exercise—such as brisk jogging, lap swimming, or cycling—for thirty to forty-five minutes, cardiac output surges, delivering oxygenated blood straight to cerebral tissues. Crucially, sustained exertion triggers the synthesis of Brain-Derived Neurotrophic Factor, or BDNF. This biological compound acts as molecular fertilizer, promoting neurogenesis—the birth of brand-new neurons within the dentate gyrus of the hippocampus. Because the hippocampus governs memory consolidation and spatial orientation, habitual aerobic training directly enhances cognitive flexibility while dampening chronic cortisol, the primary endocrine driver of prolonged emotional anxiety.",
    "keyVocab": [
      {
        "word": "neurogenesis",
        "meaning": "sự hình thành nơ-ron thần kinh mới"
      },
      {
        "word": "hippocampus",
        "meaning": "hồi hải mã (vùng não chịu trách nhiệm ghi nhớ)"
      },
      {
        "word": "cortisol",
        "meaning": "hooc-môn gây căng thẳng thần kinh"
      }
    ],
    "questions": [
      {
        "question": "What primary biological mechanism does BDNF facilitate in the brain?",
        "options": [
          "Muscle tissue repair",
          "Neurogenesis in the hippocampus",
          "Fatty acid breakdown",
          "Bone density enhancement"
        ],
        "answer": 1,
        "explanation": "BDNF promotes neurogenesis—the birth of new neurons within the hippocampus."
      },
      {
        "question": "According to the speaker, what cognitive faculties does the hippocampus govern?",
        "options": [
          "Reflex speed and motor balance",
          "Memory consolidation and spatial orientation",
          "Color perception and auditory pitch",
          "Breathing and heart rate"
        ],
        "answer": 1,
        "explanation": "The passage explicitly notes that 'the hippocampus governs memory consolidation and spatial orientation.'"
      },
      {
        "question": "How does habitual cardiovascular exercise affect emotional well-being?",
        "options": [
          "It increases adrenaline permanently",
          "It suppresses cortisol, alleviating chronic anxiety",
          "It causes mental fatigue",
          "It has no measurable emotional effect"
        ],
        "answer": 1,
        "explanation": "It dampens chronic cortisol, the primary endocrine driver of prolonged anxiety."
      },
      {
        "question": "What duration of aerobic exercise is highlighted as optimal for cerebral benefits?",
        "options": [
          "5 to 10 minutes",
          "30 to 45 minutes",
          "At least three hours",
          "30 seconds sprint only"
        ],
        "answer": 1,
        "explanation": "The lecture highlights engaging in sustained cardiovascular activity for thirty to forty-five minutes."
      }
    ]
  },
  {
    "id": 14,
    "level": "B1",
    "title": "Distributed Workforces & Asynchronous Synchronization",
    "topic": "Tech & Workplace Dynamics",
    "duration": "~75 sec",
    "script": "As progressive engineering organizations transition towards permanently distributed models, organizational psychologists are re-evaluating workplace productivity paradigms. Traditional corporate environments relied upon synchronous presence—compelling staff to sit at cubicles simultaneously to create the illusion of industriousness. In contrast, high-performing remote companies structure operations around asynchronous communication. Rather than demanding immediate replies on chat software, teams communicate through structured request-for-comment documents and tickets. This deliberate methodology substantially reduces debilitating context-switching and cognitive fragmentation. Engineers can enter prolonged flow states, knowing that updates will be digested thoughtfully by teammates situated twelve time zones away, without compromising collaborative cohesion.",
    "keyVocab": [
      {
        "word": "asynchronous",
        "meaning": "không đồng bộ (không đòi hỏi cùng thời điểm)"
      },
      {
        "word": "context-switching",
        "meaning": "chuyển đổi ngữ cảnh làm đứt quãng tập trung"
      },
      {
        "word": "flow state",
        "meaning": "trạng thái tập trung dòng chảy sâu sắc"
      }
    ],
    "questions": [
      {
        "question": "What traditional assumption does asynchronous remote work challenge?",
        "options": [
          "The need for reliable internet",
          "The belief that physical simultaneous presence equates to productivity",
          "The usage of computer keyboards",
          "The necessity of paying salaries"
        ],
        "answer": 1,
        "explanation": "It challenges synchronous presence where staff sit together to create the illusion of industriousness."
      },
      {
        "question": "What tool do high-performing asynchronous teams utilize instead of urgent chat pings?",
        "options": [
          "Fax transmissions",
          "Structured request-for-comment documents and tickets",
          "Weekly paper mail",
          "Mandatory all-day webcams"
        ],
        "answer": 1,
        "explanation": "Teams communicate through structured request-for-comment documents and tracked tickets."
      },
      {
        "question": "What is described as a major psychological benefit of this workflow?",
        "options": [
          "Reduced context-switching and fewer interruptions of flow state",
          "Free office snacks",
          "Shorter weekends",
          "Fewer holidays"
        ],
        "answer": 0,
        "explanation": "It reduces debilitating context-switching and protects prolonged flow states."
      },
      {
        "question": "How does the passage characterize teammates located in disparate regions?",
        "options": [
          "Unable to work together",
          "Situated twelve time zones away yet collaborating seamlessly",
          "Completely unmonitored",
          "Incompetent at communication"
        ],
        "answer": 1,
        "explanation": "Teammates can be twelve time zones away without compromising collaborative cohesion."
      }
    ]
  },
  {
    "id": 15,
    "level": "B1",
    "title": "Urban Wildlife Adaptation in Modern Megacities",
    "topic": "Ecology & Urban Planning",
    "duration": "~80 sec",
    "script": "Rapid urbanization is frequently perceived as an ecological catastrophe that systematically eradicates wild fauna. However, evolutionary biologists are observing unprecedented rates of physiological and behavioral adaptation among resilient species inhabiting metropolitan centers. Peregrine falcons, traditionally nesting on steep sea cliffs, now exploit the sheer concrete ledges of urban skyscrapers, preying efficiently upon abundant pigeon populations. Simultaneously, European blackbirds living in noisy urban parks have measurably raised the acoustic frequency of their mating songs to prevent their vocalizations from being drowned out by continuous automobile traffic. These dynamic behavioral shifts illuminate how anthropogenic environments exert intense evolutionary selective pressures, converting concrete jungles into novel, thriving ecosystems.",
    "keyVocab": [
      {
        "word": "fauna",
        "meaning": "quần thể động vật"
      },
      {
        "word": "anthropogenic",
        "meaning": "do con người gây ra/tác động"
      },
      {
        "word": "selective pressure",
        "meaning": "áp lực chọn lọc tiến hóa"
      }
    ],
    "questions": [
      {
        "question": "What conventional assumption about urban development does the speaker challenge?",
        "options": [
          "That cities are always polluted",
          "That urbanization exclusively eradicates wild fauna",
          "That skyscrapers are expensive to construct",
          "That birds prefer eating seeds"
        ],
        "answer": 1,
        "explanation": "The speaker challenges the belief that urbanization only causes catastrophe and total animal extinction."
      },
      {
        "question": "How have peregrine falcons adapted to metropolitan architecture?",
        "options": [
          "By nesting inside subway tunnels",
          "By using high skyscraper ledges as artificial cliffs",
          "By building ground nests in flowerbeds",
          "By migrating away permanently"
        ],
        "answer": 1,
        "explanation": "Falcons exploit concrete ledges of skyscrapers as artificial cliffs to hunt pigeons."
      },
      {
        "question": "Why have urban blackbirds altered the acoustic frequency of their songs?",
        "options": [
          "To attract human attention",
          "To overcome the background drone of motor traffic",
          "Because of eating breadcrumbs",
          "Due to warmer night temperatures"
        ],
        "answer": 1,
        "explanation": "They raised their acoustic pitch so their songs are not masked by traffic noise."
      },
      {
        "question": "What conclusion does the biologist draw regarding urban environments?",
        "options": [
          "They are completely dead zones",
          "They exert intense evolutionary selective pressure",
          "They will soon be abandoned by nature",
          "They require animals to be caged"
        ],
        "answer": 1,
        "explanation": "Anthropogenic environments exert intense selective pressures that forge novel ecosystems."
      }
    ]
  },
  {
    "id": 16,
    "level": "B1",
    "title": "The Psychology of Habit Formation & Cue-Routine Loops",
    "topic": "Behavioral Psychology",
    "duration": "~75 sec",
    "script": "In behavioral psychology, habit formation is governed by a neurological mechanism known as the habit loop, comprised of three sequential elements: the cue, the routine, and the reward. The cue acts as an environmental trigger that prompts the basal ganglia to initiate automatic behavior without taxing the prefrontal cortex. The routine represents the actual behavioral sequence executed, while the reward delivers a neurochemical surge of dopamine, reinforcing the neurological pathway. Clinical researchers emphasize that attempting to eliminate ingrained bad habits through sheer willpower alone rarely succeeds. Instead, the golden rule of behavioral modification dictates retaining the identical cue and reward, while consciously substituting the harmful routine with a constructive alternative.",
    "keyVocab": [
      {
        "word": "basal ganglia",
        "meaning": "hạch nền não bộ (chịu trách nhiệm thói quen tự động)"
      },
      {
        "word": "prefrontal cortex",
        "meaning": "vỏ não trước trán (suy nghĩ có ý thức)"
      },
      {
        "word": "substituting",
        "meaning": "thay thế có ý thức"
      }
    ],
    "questions": [
      {
        "question": "What are the three core components of the neurological habit loop?",
        "options": [
          "Desire, action, regret",
          "The cue, the routine, and the reward",
          "Memory, emotion, repetition",
          "Stimulus, punishment, avoidance"
        ],
        "answer": 1,
        "explanation": "The habit loop consists of the cue, the routine, and the reward."
      },
      {
        "question": "Which brain region executes habitual routines without heavy conscious taxation?",
        "options": [
          "The visual cortex",
          "The basal ganglia",
          "The olfactory bulb",
          "The spinal column"
        ],
        "answer": 1,
        "explanation": "The cue prompts the basal ganglia to run automatic routines without burdening the prefrontal cortex."
      },
      {
        "question": "Why is sheer willpower alone deemed ineffective for breaking bad habits?",
        "options": [
          "Willpower does not exist",
          "Neurological pathways remain wired unless the routine is substituted",
          "People forget their goals immediately",
          "Rewards are always harmful"
        ],
        "answer": 1,
        "explanation": "Ingrained loops are hardwired; success comes from replacing the routine while keeping cue and reward."
      },
      {
        "question": "What is the 'golden rule' of habit modification discussed in the talk?",
        "options": [
          "Punishing yourself whenever you fail",
          "Keeping the cue and reward while substituting the routine",
          "Avoiding all social interactions",
          "Never taking a rest day"
        ],
        "answer": 1,
        "explanation": "Retaining the identical cue and reward while substituting the routine with a constructive alternative."
      }
    ]
  },
  {
    "id": 17,
    "level": "B1",
    "title": "Sustainable Tourism vs. Overtourism in Historic Centers",
    "topic": "Tourism & Urban Heritage",
    "duration": "~80 sec",
    "script": "Historic European municipalities such as Venice, Amsterdam, and Dubrovnik are grappling with the acute socio-economic fallout of overtourism. When millions of budget travelers converge upon delicate pedestrian centers during peak summer months, residential housing stock is rapidly converted into short-term holiday rentals. Consequently, long-term local residents are priced out of their generational neighborhoods, eroding the authentic cultural fabric of the metropolis. Municipal authorities are now experimenting with defensive policy instruments, including tourist entry levies, bans on massive cruise liners docking near historic monuments, and strict limits on commercial souvenir retail, attempting to cultivate sustainable travel without suffocating hospitality revenue.",
    "keyVocab": [
      {
        "word": "overtourism",
        "meaning": "quá tải du lịch"
      },
      {
        "word": "priced out",
        "meaning": "bị đội giá đến mức không thể chi trả"
      },
      {
        "word": "entry levy",
        "meaning": "thuế/phí vào cửa đối với du khách"
      }
    ],
    "questions": [
      {
        "question": "What happens to local housing stock during periods of unchecked overtourism?",
        "options": [
          "It gets demolished by government",
          "It is converted into short-term tourist vacation rentals",
          "It becomes free for university students",
          "It sits empty throughout the year"
        ],
        "answer": 1,
        "explanation": "Residential houses are rapidly turned into short-term holiday rentals."
      },
      {
        "question": "What is a direct social consequence for long-term native residents?",
        "options": [
          "They receive free vacations",
          "They are priced out of their ancestral neighborhoods",
          "They become cruise captains",
          "They refuse to speak their mother tongue"
        ],
        "answer": 1,
        "explanation": "Locals are priced out, eroding the cultural fabric of the city."
      },
      {
        "question": "Which defensive regulatory measure was implemented against maritime pollution?",
        "options": [
          "Banning massive cruise liners from docking near historic centers",
          "Draining the historic canals",
          "Prohibiting all fishing boats",
          "Sinking old ships"
        ],
        "answer": 0,
        "explanation": "Cities banned massive cruise liners docking near historic monuments."
      },
      {
        "question": "What balance are municipal city councils attempting to achieve?",
        "options": [
          "Banning all tourists forever",
          "Cultivating sustainable travel without eradicating hospitality revenue",
          "Privatizing all historic bridges",
          "Expanding industrial shipping ports"
        ],
        "answer": 1,
        "explanation": "They seek sustainable travel while preserving vital hospitality revenues."
      }
    ]
  },
  {
    "id": 18,
    "level": "B1",
    "title": "Smart Cities & Sensor-Driven Municipal Infrastructure",
    "topic": "Technology & Urban Engineering",
    "duration": "~80 sec",
    "script": "As metropolitan populations expand exponentially, city engineers are leveraging the Internet of Things to redesign urban infrastructure into responsive smart ecosystems. Beneath city asphalt and atop lampposts, thousands of low-power interconnected sensors monitor air particulate pollution, localized noise levels, and vehicular traffic density in real time. Adaptive traffic signals utilize machine learning algorithms to dynamically adjust green-light durations, slashing vehicle idling emissions by up to twenty-five percent during peak morning congestion. Similarly, smart water networks employ acoustic vibration monitors to pinpoint hairline subterranean pipe fractures, preventing the loss of millions of gallons of potable water before catastrophic street flooding occurs.",
    "keyVocab": [
      {
        "word": "particulate",
        "meaning": "bụi mịn trong không khí"
      },
      {
        "word": "idling emissions",
        "meaning": "khí thải khi xe dừng chờ nổ máy"
      },
      {
        "word": "potable water",
        "meaning": "nước sạch có thể uống được"
      }
    ],
    "questions": [
      {
        "question": "How do adaptive traffic signals reduce vehicle idling emissions?",
        "options": [
          "By turning off all streetlights",
          "By dynamically adjusting green-light duration based on real-time traffic flow",
          "By requiring drivers to push their cars",
          "By lowering speed limits to zero"
        ],
        "answer": 1,
        "explanation": "Signals use machine learning to dynamically optimize green-light duration, cutting emissions up to 25%."
      },
      {
        "question": "By what percentage can vehicle idling emissions be curtailed through smart signals?",
        "options": [
          "5 percent",
          "Up to twenty-five percent",
          "Exactly fifty percent",
          "Over ninety percent"
        ],
        "answer": 1,
        "explanation": "The text states: 'slashing vehicle idling emissions by up to twenty-five percent.'"
      },
      {
        "question": "How do municipal water networks detect subterranean leaks before major floods?",
        "options": [
          "By waiting for citizen phone complaints",
          "Using acoustic vibration monitors to detect hairline pipe fractures",
          "By digging up streets at random",
          "Using weather satellites"
        ],
        "answer": 1,
        "explanation": "Sensors employ acoustic vibration monitors to identify hairline pipe fractures."
      },
      {
        "question": "What overarching technology underpins these smart infrastructure advancements?",
        "options": [
          "Analog radio waves",
          "The Internet of Things and sensor arrays",
          "Manual human inspections",
          "Diesel power plants"
        ],
        "answer": 1,
        "explanation": "Engineers leverage the Internet of Things (IoT) and low-power interconnected sensors."
      }
    ]
  },
  {
    "id": 19,
    "level": "B2",
    "title": "The Levelized Economics of Renewable Energy & Battery Storage",
    "topic": "Energy Economics",
    "duration": "~90 sec",
    "script": "Over the preceding decade, the levelized cost of electricity generated by utility-scale solar photovoltaics has plummeted by an astonishing eighty-eight percent, upending fundamental assumptions of global energy economics. Solar and onshore wind facilities routinely generate electricity at a lower marginal cost than legacy coal or combined-cycle gas turbine installations, even when accounting for the phase-out of governmental feed-in tariffs. Nonetheless, grid operators face the existential engineering challenge of intermittency—famously visualized as the 'duck curve', where midday solar overproduction plunges into steep evening deficits as the sun sets and residential demand spikes. Overcoming this bottleneck necessitates massive deployment of grid-scale lithium iron phosphate and vanadium redox flow batteries, coupled with high-voltage direct current interconnections capable of wheeling surplus green electrons across continental distances.",
    "keyVocab": [
      {
        "word": "levelized cost",
        "meaning": "chi phí quy dẫn sản xuất điện năng"
      },
      {
        "word": "intermittency",
        "meaning": "tính chập chờn, không liên tục của năng lượng tái tạo"
      },
      {
        "word": "feed-in tariffs",
        "meaning": "biểu giá điện hỗ trợ phát điện tái tạo"
      }
    ],
    "questions": [
      {
        "question": "By what magnitude has the levelized cost of utility-scale solar fallen over the past decade?",
        "options": [
          "Roughly twenty percent",
          "Approximately fifty percent",
          "An astonishing eighty-eight percent",
          "It has actually increased"
        ],
        "answer": 2,
        "explanation": "The speaker states solar costs plummeted by an astonishing eighty-eight percent."
      },
      {
        "question": "What phenomenon does the 'duck curve' illustrate in energy grids?",
        "options": [
          "Water consumption during poultry farming",
          "Midday solar overproduction followed by steep evening generation deficits",
          "The cost of manufacturing wind turbine blades",
          "Coal price fluctuations across seasons"
        ],
        "answer": 1,
        "explanation": "It visualizes midday solar oversupply followed by sharp evening deficits when demand spikes."
      },
      {
        "question": "What storage chemistry is explicitly cited alongside lithium iron phosphate?",
        "options": [
          "Lead-acid automotive batteries",
          "Vanadium redox flow batteries",
          "Alkaline household cells",
          "Nickel-cadmium batteries"
        ],
        "answer": 1,
        "explanation": "The lecture cites 'grid-scale lithium iron phosphate and vanadium redox flow batteries.'"
      },
      {
        "question": "What is the primary objective of high-voltage direct current (HVDC) transmission?",
        "options": [
          "To power electric trains locally",
          "To wheel surplus green electricity across continental distances",
          "To eliminate the need for solar panels",
          "To convert alternating current back to coal energy"
        ],
        "answer": 1,
        "explanation": "HVDC is used for 'wheeling surplus green electrons across continental distances.'"
      }
    ]
  },
  {
    "id": 20,
    "level": "B2",
    "title": "Circular Hardware Design & E-Waste Reduction",
    "topic": "Circular Economy & Tech",
    "duration": "~85 sec",
    "script": "The consumer technology sector generates upwards of fifty-five million metric tons of electronic waste annually, a figure projected to double by 2050 if linear economic models persist. Traditional consumer gadgets are engineered with built-in obsolescence—glued enclosures, proprietary fasteners, and serialized components that purposefully hinder independent repair. In defiance of this unsustainable paradigm, regulatory mandates like the European Union's Right to Repair directive are compelling hardware manufacturers to adopt circular engineering principles. Forward-thinking companies now design laptops and smartphones featuring modular internal layouts, standardized Torx screws, and easily detachable battery pull-tabs. This architecture enables both consumer self-repair and industrial automated disassembly, permitting high-yield reclamation of critical raw materials including neodymium, cobalt, and gold without toxic chemical leaching.",
    "keyVocab": [
      {
        "word": "built-in obsolescence",
        "meaning": "sự lỗi thời được lập trình sẵn nhằm ép mua mới"
      },
      {
        "word": "reclamation",
        "meaning": "sự thu hồi và tái sinh nguyên liệu quý"
      },
      {
        "word": "proprietary fasteners",
        "meaning": "ốc vít độc quyền chống tháo mở"
      }
    ],
    "questions": [
      {
        "question": "What projection is made regarding annual e-waste if current linear models continue?",
        "options": [
          "It will completely cease by 2030",
          "It is expected to double by 2050",
          "It will decline by half",
          "It will stabilize permanently"
        ],
        "answer": 1,
        "explanation": "The speaker notes e-waste is 'projected to double by 2050 if linear economic models persist.'"
      },
      {
        "question": "How did traditional consumer electronic gadgets intentionally hinder independent repair?",
        "options": [
          "By using glued enclosures and proprietary fasteners",
          "By printing free repair manuals online",
          "By making parts modular",
          "By selling cheap replacement batteries"
        ],
        "answer": 0,
        "explanation": "They used glued enclosures, proprietary fasteners, and serialized components to block repair."
      },
      {
        "question": "Which legislative directive is cited as compelling manufacturers toward circular design?",
        "options": [
          "The Kyoto Protocol",
          "The European Union's Right to Repair directive",
          "The Global Patent Harmonization Act",
          "The Clean Air Treaty"
        ],
        "answer": 1,
        "explanation": "The EU's Right to Repair directive compels manufacturers to adopt circular principles."
      },
      {
        "question": "Which rare-earth element is explicitly highlighted among the reclaimed materials?",
        "options": [
          "Neodymium",
          "Uranium",
          "Plutonium",
          "Titanium alloy"
        ],
        "answer": 0,
        "explanation": "The passage cites reclamation of raw materials including 'neodymium, cobalt, and gold.'"
      }
    ]
  },
  {
    "id": 21,
    "level": "B2",
    "title": "Algorithmic Recommendation Engines & Filter Bubbles",
    "topic": "Media Sociology & AI",
    "duration": "~85 sec",
    "script": "Contemporary digital discourse is profoundly mediated by algorithmic recommendation engines optimized almost exclusively for user engagement metrics. In order to maximize daily active minutes and click-through advertising rates, algorithmic architectures prioritize sensational, emotionally polarizing content over nuanced investigative journalism. When users repeatedly interact with ideologically biased feeds, machine learning models construct personalized informational silos—frequently termed 'filter bubbles' or 'echo chambers'. Within these epistemic vacuums, cognitive confirmation bias is continuously reinforced, while dissenting perspectives are systematically filtered out. Sociologists argue that this algorithmic polarization erodes democratic consensus, inflames sectarian animosity, and distorts the public's perception of objective societal consensus.",
    "keyVocab": [
      {
        "word": "filter bubble",
        "meaning": "bong bóng lọc thông tin cá nhân hóa"
      },
      {
        "word": "confirmation bias",
        "meaning": "thiên kiến xác nhận (chỉ tin điều hợp ý mình)"
      },
      {
        "word": "sectarian animosity",
        "meaning": "thù hằn chia rẽ bè phái"
      }
    ],
    "questions": [
      {
        "question": "What primary optimization target guides social media recommendation algorithms?",
        "options": [
          "Scientific factual accuracy",
          "User engagement metrics and daily active minutes",
          "Educational literacy",
          "Ethical civic consensus"
        ],
        "answer": 1,
        "explanation": "Algorithms are optimized almost exclusively for user engagement and advertising click rates."
      },
      {
        "question": "Why do recommendation engines favor emotionally polarizing content?",
        "options": [
          "It generates higher immediate engagement and clicks",
          "It is easier to translate",
          "It is required by law",
          "It takes up less server bandwidth"
        ],
        "answer": 0,
        "explanation": "Sensational and polarizing material reliably maximizes user attention and screen time."
      },
      {
        "question": "What term describes the closed informational environments created for individual users?",
        "options": [
          "Digital commons",
          "Filter bubbles or echo chambers",
          "Open source libraries",
          "Public forums"
        ],
        "answer": 1,
        "explanation": "They are described as 'filter bubbles' or 'echo chambers' where conflicting views are hidden."
      },
      {
        "question": "According to sociologists, what is a grave societal repercussion of this phenomenon?",
        "options": [
          "Cheaper computer monitors",
          "Erosion of democratic consensus and heightened polarization",
          "Faster typing speeds",
          "Better memory retention"
        ],
        "answer": 1,
        "explanation": "It erodes democratic consensus and inflames sectarian animosity."
      }
    ]
  },
  {
    "id": 22,
    "level": "B2",
    "title": "Behavioral Nudge Theory in Public Policy",
    "topic": "Behavioral Economics",
    "duration": "~85 sec",
    "script": "Pioneered by Nobel laureate Richard Thaler and legal scholar Cass Sunstein, 'Nudge Theory' proposes that subtle modifications to the architecture of choice can dramatically alter human behavior without resorting to coercive legislative mandates or economic penalties. Rather than outlawing unhealthy habits, policy architects manipulate default options to harness human inertia. For instance, when European governments transitioned organ donation programs from opt-in systems—where citizens must explicitly check a box to donate—to presumed consent opt-out frameworks, donor registration rates escalated from fifteen percent to well over ninety percent virtually overnight. Similarly, arranging nutritious fruit at eye level in school cafeterias while relocating confections to distant shelves subtly steers dietary decisions, exemplifying the doctrine of libertarian paternalism.",
    "keyVocab": [
      {
        "word": "nudge",
        "meaning": "cú hích hành vi tinh tế"
      },
      {
        "word": "opt-out",
        "meaning": "cơ chế mặc định tham gia, trừ khi chủ động rút lui"
      },
      {
        "word": "libertarian paternalism",
        "meaning": "chủ nghĩa phụ quyền tự do (định hướng mà không ép buộc)"
      }
    ],
    "questions": [
      {
        "question": "What differentiates a behavioral 'nudge' from traditional legislative regulations?",
        "options": [
          "It uses expensive fines",
          "It alters choice architecture without bans or financial penalties",
          "It requires military enforcement",
          "It is completely random"
        ],
        "answer": 1,
        "explanation": "Nudges modify choice architecture without coercive mandates or economic penalties."
      },
      {
        "question": "How did switching to an opt-out default affect organ donor registration rates?",
        "options": [
          "It reduced donors to zero",
          "Registration surged from 15% to over 90%",
          "There was no measurable change",
          "It caused public protests"
        ],
        "answer": 1,
        "explanation": "Presumed consent opt-out frameworks caused donor rates to skyrocket from 15% to over 90%."
      },
      {
        "question": "What cafeteria placement strategy is mentioned as an application of Nudge Theory?",
        "options": [
          "Banning all sweets entirely",
          "Placing nutritious fruit at eye level while placing sweets further away",
          "Charging double price for apples",
          "Making students cook their own food"
        ],
        "answer": 1,
        "explanation": "Arranging fruit at eye level while placing candy out of direct line of sight subtly alters choices."
      },
      {
        "question": "What philosophical term encapsulates the core concept of Nudge Theory?",
        "options": [
          "Authoritarian socialism",
          "Libertarian paternalism",
          "Radical anarchy",
          "Laissez-faire capitalism"
        ],
        "answer": 1,
        "explanation": "The doctrine is formally defined as 'libertarian paternalism.'"
      }
    ]
  },
  {
    "id": 23,
    "level": "B2",
    "title": "CRISPR-Cas9 Gene Editing & Bioethical Boundaries",
    "topic": "Biotechnology & Bioethics",
    "duration": "~90 sec",
    "script": "The discovery of the CRISPR-Cas9 microbial adaptive immune mechanism revolutionized molecular biology by transforming genetic engineering from an imprecise craft into a programmable, nucleotide-level editorial protocol. By utilizing synthetic guide RNA to direct the Cas9 endonuclease enzyme to precise loci within the human genome, researchers can excise pathogenic mutations responsible for hereditary disorders like sickle cell anemia and cystic fibrosis. However, the scientific community draws an unambiguous ethical boundary between somatic cell therapy and germline editing. Somatic interventions edit non-reproductive cells, treating individual patients without passing modifications to posterity. In contrast, germline alterations in human embryos introduce permanent, inheritable genomic changes, provoking profound bioethical anxieties regarding eugenics, unanticipated off-target genomic cleavage, and the dystopian emergence of genetic inequality.",
    "keyVocab": [
      {
        "word": "endonuclease",
        "meaning": "enzyme cắt liên kết phân tử DNA"
      },
      {
        "word": "germline editing",
        "meaning": "chỉnh sửa dòng tế bào sinh dục/phôi thai (di truyền sang đời sau)"
      },
      {
        "word": "off-target cleavage",
        "meaning": "cắt nhầm vị trí gen ngoài ý muốn"
      }
    ],
    "questions": [
      {
        "question": "What role does the synthetic guide RNA play in the CRISPR-Cas9 system?",
        "options": [
          "It repairs bone fractures",
          "It directs the Cas9 enzyme to precise target sequences in the genome",
          "It produces insulin",
          "It acts as a vaccine"
        ],
        "answer": 1,
        "explanation": "Guide RNA guides the Cas9 enzyme to precise DNA loci for cleavage."
      },
      {
        "question": "What fundamental distinction separates somatic therapy from germline editing?",
        "options": [
          "Somatic therapy is cheaper than germline editing",
          "Somatic changes affect only the individual, while germline edits are passed to future generations",
          "Somatic edits use bacteria while germline uses plants",
          "There is no scientific difference"
        ],
        "answer": 1,
        "explanation": "Somatic therapy treats the individual patient without transmitting changes to future generations."
      },
      {
        "question": "Which monogenic disorder is cited as treatable via CRISPR gene editing?",
        "options": [
          "Common head cold",
          "Sickle cell anemia",
          "Broken bones",
          "Type 2 diabetes"
        ],
        "answer": 1,
        "explanation": "Sickle cell anemia and cystic fibrosis are mentioned as targets."
      },
      {
        "question": "What major bioethical hazard is associated with human germline engineering?",
        "options": [
          "Lower electricity usage",
          "Unanticipated off-target mutations and the specter of eugenic inequality",
          "Too many doctors graduating",
          "Patients living too long"
        ],
        "answer": 1,
        "explanation": "Germline alterations spark fears of unintended off-target cleavage and eugenic inequality."
      }
    ]
  },
  {
    "id": 24,
    "level": "B2",
    "title": "Space Colonization & Extraterrestrial Terraforming",
    "topic": "Astrophysics & Space Exploration",
    "duration": "~90 sec",
    "script": "Establishing self-sustaining human settlements on Mars represents the supreme technological aspiration of interplanetary space exploration. However, planetary scientists stress that terraforming Mars into a habitable biosphere involves overcoming catastrophic environmental constraints. Mars possesses a tenuous atmosphere composed of ninety-five percent carbon dioxide, with surface atmospheric pressure less than one percent of Earth's sea level. Furthermore, because Mars lacks an active geodynamo, it possesses no global magnetosphere to shield its surface from lethal solar radiation and galactic cosmic rays. Proposed solutions—such as deploying orbital mirrors to vaporize polar carbon dioxide ice caps or detonating thermonuclear devices over the poles—remain purely speculative. Until radiation-shielding subterranean lava tube habitats and closed-loop biochemical life support systems are perfected, permanent planetary colonization remains an extraordinarily perilous endeavor.",
    "keyVocab": [
      {
        "word": "geodynamo",
        "meaning": "cơ chế phát sinh từ trường lõi hành tinh"
      },
      {
        "word": "magnetosphere",
        "meaning": "từ quyển che chắn bức xạ vũ trụ"
      },
      {
        "word": "subterranean",
        "meaning": "dưới lòng đất/bề mặt"
      }
    ],
    "questions": [
      {
        "question": "What is the primary constituent of the thin Martian atmosphere?",
        "options": [
          "Oxygen and nitrogen",
          "Ninety-five percent carbon dioxide",
          "Pure methane",
          "Helium gas"
        ],
        "answer": 1,
        "explanation": "The Martian atmosphere consists of 95% carbon dioxide."
      },
      {
        "question": "Why is the absence of an active Martian geodynamo hazardous to human colonists?",
        "options": [
          "It makes the planet too cold",
          "It leaves the surface unprotected from lethal cosmic and solar radiation",
          "It causes volcanic eruptions daily",
          "It stops the planet from rotating"
        ],
        "answer": 1,
        "explanation": "Without a geodynamo, Mars has no magnetosphere to shield against deadly cosmic radiation."
      },
      {
        "question": "What natural geological formations are considered practical shelter against radiation?",
        "options": [
          "Open sand dunes",
          "Subterranean lava tube habitats",
          "Ice caves at the equator",
          "Metal skyscrapers"
        ],
        "answer": 1,
        "explanation": "Subterranean lava tubes provide natural shields against extraterrestrial radiation."
      },
      {
        "question": "How does the speaker characterize speculative ideas like detonating nukes over polar caps?",
        "options": [
          "Imminent and practical",
          "Purely speculative and fraught with peril",
          "Proven by satellite data",
          "Already underway"
        ],
        "answer": 1,
        "explanation": "The speaker explicitly describes these proposals as 'purely speculative.'"
      }
    ]
  },
  {
    "id": 25,
    "level": "C1",
    "title": "Cognitive Heuristics & Financial Forecasting Fallacies",
    "topic": "Behavioral Finance",
    "duration": "~95 sec",
    "script": "In his seminal treatise 'Thinking, Fast and Slow', Nobel laureate Daniel Kahneman dismantled the foundational neoclassical assumption of 'Homo Economicus'—the perfectly rational economic actor. Instead, empirical behavioral finance reveals that financial analysts and institutional traders are perpetually susceptible to cognitive heuristics governed by automatic, subconscious System One thinking. A salient manifestation is the availability heuristic, which induces market participants to drastically overestimate the likelihood of tail-risk catastrophes following vivid, sensationalized market crashes. Compounding this distortion is the narrative fallacy, wherein human minds retroactively weave chaotic market fluctuations into coherent, causal explanatory stories, generating an illusion of predictability. Consequently, quantitative capital allocators frequently confuse historical correlation with causal determinism, leading to catastrophic systemic mispricing and liquidity evaporations.",
    "keyVocab": [
      {
        "word": "Homo Economicus",
        "meaning": "con người kinh tế duy lý hoàn hảo (giả định cổ điển)"
      },
      {
        "word": "tail-risk",
        "meaning": "rủi ro đuôi (biến cố xác suất thấp nhưng thảm khốc)"
      },
      {
        "word": "narrative fallacy",
        "meaning": "ngụy biện tự sự (gượng ép thêu dệt nguyên nhân cho sự ngẫu nhiên)"
      }
    ],
    "questions": [
      {
        "question": "What classical economic axiom did Daniel Kahneman's empirical work dismantle?",
        "options": [
          "The necessity of central banking",
          "The assumption of the perfectly rational economic actor (Homo Economicus)",
          "The existence of supply and demand curves",
          "The value of physical paper currency"
        ],
        "answer": 1,
        "explanation": "He dismantled the assumption that market actors behave with perfect rationality."
      },
      {
        "question": "How does the availability heuristic mislead institutional financial traders?",
        "options": [
          "It causes them to ignore all financial news",
          "It prompts them to overestimate rare tail-risks after vivid, memorable market events",
          "It makes them trade too slowly",
          "It forces them to rely solely on gold"
        ],
        "answer": 1,
        "explanation": "It leads traders to overrate tail-risks because sensational events are readily retrieved from memory."
      },
      {
        "question": "What is the primary danger posed by the 'narrative fallacy'?",
        "options": [
          "It creates a false illusion of causal predictability from chaotic randomness",
          "It makes books too long to read",
          "It causes inflation to rise rapidly",
          "It prevents software engineers from coding"
        ],
        "answer": 0,
        "explanation": "It retroactively imposes coherent stories on random noise, fostering an illusion of foresight."
      },
      {
        "question": "According to the speaker, what analytical error precipitates systemic liquidity crises?",
        "options": [
          "Failing to hire graphic designers",
          "Confusing historical correlation with causal determinism",
          "Spending too much on computer hardware",
          "Lowering interest rates prematurely"
        ],
        "answer": 1,
        "explanation": "Allocators confuse historical statistical correlation with causal determinism."
      }
    ]
  },
  {
    "id": 26,
    "level": "C1",
    "title": "Linguistic Relativity & Cognitive Architecture",
    "topic": "Cognitive Linguistics",
    "duration": "~95 sec",
    "script": "The Sapir-Whorf hypothesis, or the principle of linguistic relativity, posits that the structural architecture of a particular human language delineates and modulates the conceptual contours of thought itself. While extreme linguistic determinism—the claim that grammar irrevocably imprisons cognition—has been largely repudiated by contemporary cognitive science, the softer formulation of linguistic relativity enjoys robust empirical corroboration. For example, indigenous Australian speakers of Guugu Yimithirr navigate geographical terrain with uncanny precision because their tongue lacks egocentric spatial coordinates like 'left' and 'right', relying exclusively on cardinal directions. In their linguistic framework, a speaker must describe an itch as being on 'the northwest corner of the knee.' This obligatory grammatical mandate functions as an involuntary attentional spotlight, permanently habituating speakers to align sensory awareness with global geomagnetic orientation.",
    "keyVocab": [
      {
        "word": "linguistic relativity",
        "meaning": "thuyết tương đối ngôn ngữ học (ngôn ngữ định hình tư duy)"
      },
      {
        "word": "cardinal directions",
        "meaning": "phương hướng la bàn tuyệt đối (Đông, Tây, Nam, Bắc)"
      },
      {
        "word": "attentional spotlight",
        "meaning": "tiêu điểm chú ý dẫn dắt tri giác"
      }
    ],
    "questions": [
      {
        "question": "How does contemporary cognitive science view the extreme formulation of linguistic determinism?",
        "options": [
          "It has been unequivocally proven correct",
          "It has been largely repudiated in favor of a nuanced, softer relativity",
          "It is now taught as the only valid doctrine",
          "It is considered irrelevant to anthropology"
        ],
        "answer": 1,
        "explanation": "Radical determinism is rejected, but softer linguistic relativity is empirically supported."
      },
      {
        "question": "What linguistic peculiarity distinguishes the spatial grammar of Guugu Yimithirr?",
        "options": [
          "It has no words for colors",
          "It avoids egocentric terms like 'left' and 'right' in favor of absolute cardinal directions",
          "It uses only numbers for navigation",
          "It has no verbs of motion"
        ],
        "answer": 1,
        "explanation": "It relies exclusively on cardinal directions (north, south, east, west) rather than relative terms."
      },
      {
        "question": "How would a Guugu Yimithirr native speaker pinpoint an itch on their leg?",
        "options": [
          "By pointing toward the sunrise",
          "By referencing cardinal coordinates such as the northwest corner of the knee",
          "By tapping on the floor three times",
          "By using a measuring tape"
        ],
        "answer": 1,
        "explanation": "The text states: 'describe an itch as being on the northwest corner of the knee.'"
      },
      {
        "question": "What psychological metaphor does the lecturer employ to describe obligatory grammatical categories?",
        "options": [
          "A locked prison cell",
          "An involuntary attentional spotlight",
          "A blank white canvas",
          "An audio amplifier"
        ],
        "answer": 1,
        "explanation": "The speaker calls obligatory categories an 'involuntary attentional spotlight.'"
      }
    ]
  },
  {
    "id": 27,
    "level": "C1",
    "title": "Corporate Crisis Management & Algorithmic Accountability",
    "topic": "Corporate Governance & Ethics",
    "duration": "~100 sec",
    "script": "When an enterprise deploys black-box autonomous systems into mission-critical domains—whether algorithmic credit underwriting, automated medical diagnostics, or dynamic pricing—failures cease to be purely technical glitches; they metamorphose into acute institutional crises. When an opaque algorithm exhibits disparate impact or systemic bias against vulnerable demographics, executive leadership frequently defaults to the defensive defense of algorithmic opacity: asserting that neural networks are too inherently complex to audit. Crisis communications scholars caution that this strategy of deflective obfuscation precipitates catastrophic reputational erosion. Re-establishing stakeholder trust demands unequivocal transparency, independent third-party algorithmic auditing, proactive financial restitution to aggrieved parties, and a formal governance framework that establishes human-in-the-loop executive liability.",
    "keyVocab": [
      {
        "word": "disparate impact",
        "meaning": "tác động phân biệt đối xử bất cân xứng"
      },
      {
        "word": "obfuscation",
        "meaning": "sự lập lờ, cố tình làm cho tối nghĩa"
      },
      {
        "word": "human-in-the-loop",
        "meaning": "con người kiểm soát giám sát trong quy trình tự động"
      }
    ],
    "questions": [
      {
        "question": "What common initial defensive posture do executives adopt during algorithmic PR crises?",
        "options": [
          "Offering immediate full refunds",
          "Pleading that neural network complexity precludes explainability and auditing",
          "Blaming the customers directly",
          "Shutting down the company permanently"
        ],
        "answer": 1,
        "explanation": "Executives often default to the defense that black-box networks are inherently unexplainable."
      },
      {
        "question": "How does deflective corporate obfuscation affect long-term corporate reputation?",
        "options": [
          "It restores consumer confidence rapidly",
          "It accelerates catastrophic reputational erosion and legal liability",
          "It increases stock dividends",
          "It reduces regulatory fines"
        ],
        "answer": 1,
        "explanation": "Deflective obfuscation leads to severe reputational damage and deepens public cynicism."
      },
      {
        "question": "What procedural safeguard is highlighted as essential for rebuilding institutional credibility?",
        "options": [
          "Firing junior software testers only",
          "Independent third-party algorithmic auditing and clear executive liability",
          "Publishing marketing advertisements",
          "Hiding internal error logs"
        ],
        "answer": 1,
        "explanation": "It demands independent algorithmic audits and human-in-the-loop executive liability."
      },
      {
        "question": "What terminology describes systemic bias producing unintended discriminatory outcomes?",
        "options": [
          "Disparate impact",
          "Random error rate",
          "Network latency",
          "Cosmic noise"
        ],
        "answer": 0,
        "explanation": "The speaker describes algorithms exhibiting 'disparate impact' against specific demographics."
      }
    ]
  },
  {
    "id": 28,
    "level": "C1",
    "title": "Neuroplasticity & Deep Reading in the Hyper-Digital Era",
    "topic": "Cognitive Science & Literacy",
    "duration": "~95 sec",
    "script": "Cognitive neuroscientist Maryanne Wolf cautions that the human reading brain is not genetically hardwired, but represents a miraculous triumph of neuroplasticity—the brain's capacity to repurpose evolutionary circuits for visual decoding and conceptual abstraction. However, the relentless immersion in hyper-digital information streams is subtly recalibrating this delicate neural architecture. Accustomed to skimming superficial bullet points, algorithmic feeds, and notifications on glowing glass surfaces, modern readers develop cognitive skimming habits. This accelerates superficial scanning while progressively withering the slower, contemplative circuits responsible for deep reading: critical inference, analogical reasoning, empathetic perspective-taking, and epistemological discernment. Without intentional practices to sustain sustained, uninterrupted reading, we risk cultivating a generation incapable of synthesizing long-form intellectual complexity.",
    "keyVocab": [
      {
        "word": "neuroplasticity",
        "meaning": "độ mềm dẻo của não bộ (tái cấu trúc đường truyền nơ-ron)"
      },
      {
        "word": "contemplative",
        "meaning": "mang tính chiêm nghiệm, suy ngẫm sâu sắc"
      },
      {
        "word": "analogical reasoning",
        "meaning": "tư duy suy luận tương đồng"
      }
    ],
    "questions": [
      {
        "question": "How does the lecturer characterize the human biological capacity for reading?",
        "options": [
          "An instinctual reflex wired at birth",
          "A cultural triumph of neuroplastic adaptation rather than a genetically fixed trait",
          "A genetic mutation from prehistoric times",
          "Identical to bird navigation"
        ],
        "answer": 1,
        "explanation": "Reading is not hardwired; it represents neuroplastic repurposing of evolutionary circuits."
      },
      {
        "question": "What cognitive habit is inadvertently reinforced by perpetual digital stream skimming?",
        "options": [
          "Photographic memory",
          "Superficial scanning at the expense of deep, contemplative analysis",
          "Improved foreign language pronunciation",
          "Enhanced mental arithmetic"
        ],
        "answer": 1,
        "explanation": "Digital browsing habituates the brain to skim, withering contemplative circuits."
      },
      {
        "question": "Which higher-order intellectual faculties are threatened by the decline of deep reading?",
        "options": [
          "Physical vision acuity",
          "Analogical reasoning, critical inference, and empathetic perspective-taking",
          "Auditory pitch discrimination",
          "Typing dexterity on mobile screens"
        ],
        "answer": 1,
        "explanation": "It erodes critical inference, analogical reasoning, and deep empathetic discernment."
      },
      {
        "question": "What warning does neuroscientist Maryanne Wolf conclude with?",
        "options": [
          "Paper books will disappear next year",
          "Society risks raising a generation unable to synthesize complex long-form intellect",
          "All screens must be prohibited by law",
          "Reading will be replaced by audio completely"
        ],
        "answer": 1,
        "explanation": "Society risks cultivating a generation incapable of synthesizing long-form complexity."
      }
    ]
  },
  {
    "id": 29,
    "level": "C1",
    "title": "Geopolitical Maritime Chokepoints & Global Supply Fragility",
    "topic": "Geopolitics & Maritime Trade",
    "duration": "~100 sec",
    "script": "Globalized industrial supply chains are underpinned by an extraordinarily vulnerable maritime infrastructure characterized by strategic oceanic chokepoints. Approximately eighty percent of international merchandise trade by volume traverses narrow maritime straits—most prominently the Strait of Malacca, the Suez Canal, the Strait of Hormuz, and the Bab-el-Mandeb. These geographical bottlenecks concentrate astronomical volumes of containerized manufactured goods and crude hydrocarbons into narrow nautical conduits susceptible to asymmetric disruptions: regional missile proliferation, piracy, geopolitical blockades, or maritime mechanical strandings. When access through a critical chokepoint like the Suez Canal is severed, container vessels are forced to circumvent the Cape of Good Hope, adding twelve nautical days, absorbing millions in bunker fuel surcharges, and creating severe cascading shortages across just-in-time manufacturing networks worldwide.",
    "keyVocab": [
      {
        "word": "chokepoint",
        "meaning": "điểm nghẽn chiến lược (hàng hải/địa chính trị)"
      },
      {
        "word": "asymmetric disruption",
        "meaning": "gián đoạn bất đối xứng (chi phí thấp nhưng hậu quả khổng lồ)"
      },
      {
        "word": "just-in-time",
        "meaning": "mô hình sản xuất đúng lúc, tồn kho bằng không"
      }
    ],
    "questions": [
      {
        "question": "What percentage of global merchandise trade by volume travels via maritime routes?",
        "options": [
          "Approximately thirty percent",
          "Roughly fifty percent",
          "Approximately eighty percent",
          "Virtually one hundred percent"
        ],
        "answer": 2,
        "explanation": "Around eighty percent of international merchandise trade moves by sea."
      },
      {
        "question": "Which strategic waterways are explicitly identified as critical global bottlenecks?",
        "options": [
          "The Mississippi River and Lake Michigan",
          "The Strait of Malacca, Suez Canal, and Strait of Hormuz",
          "The English Channel and Baltic Sea only",
          "The Amazon River basin"
        ],
        "answer": 1,
        "explanation": "The lecture highlights Malacca, Suez, Hormuz, and Bab-el-Mandeb."
      },
      {
        "question": "What is the economic repercussion when vessels are diverted around the Cape of Good Hope?",
        "options": [
          "Shipping costs drop substantially",
          "Twelve nautical days are added, incurring massive bunker fuel surcharges and supply delays",
          "Ships travel twice as fast",
          "Canal fees are eliminated without consequence"
        ],
        "answer": 1,
        "explanation": "Rerouting adds 12 days and millions in fuel surcharges, causing supply shortages."
      },
      {
        "question": "Why are modern manufacturing supply chains acutely susceptible to shipping delays?",
        "options": [
          "Factories have unlimited warehouse space",
          "Widespread reliance on lean 'just-in-time' inventory models",
          "Workers work on ships directly",
          "Raw materials do not travel by sea"
        ],
        "answer": 1,
        "explanation": "Just-in-time models maintain zero inventory buffer, causing cascading plant shutdowns."
      }
    ]
  },
  {
    "id": 30,
    "level": "C1",
    "title": "The Architectural Demise of Monolithic Software",
    "topic": "Software Engineering & Cloud Architecture",
    "duration": "~95 sec",
    "script": "In the foundational decades of enterprise computing, software engineering was dominated by monolithic architectures—systems where user interfaces, business domain logic, and data persistence layers were compiled and deployed as a singular, tightly coupled codebase. While monolithic designs simplify initial local development and cognitive tracing, their architectural fragility becomes an insurmountable impediment as enterprise scale explodes. A regression in a peripheral billing module can inadvertently trigger cascading memory leaks that incapacitate the entire transactional database. In response, modern distributed systems engineering has embraced microservices, containerization, and event-driven architectures. By decomposing massive codebases into decoupled, independently deployable services that communicate across lightweight gRPC or message queues, engineering organizations can isolate failure domains, scale computational workloads horizontally, and achieve continuous deployment parity.",
    "keyVocab": [
      {
        "word": "tightly coupled",
        "meaning": "ràng buộc chặt chẽ, phụ thuộc lẫn nhau"
      },
      {
        "word": "failure domain",
        "meaning": "vùng cô lập sự cố để không lây lan"
      },
      {
        "word": "continuous deployment",
        "meaning": "triển khai phần mềm liên tục tự động"
      }
    ],
    "questions": [
      {
        "question": "What is a primary operational disadvantage of large monolithic software systems?",
        "options": [
          "They are too cheap to run",
          "A failure in a peripheral module can cascade and bring down the entire system",
          "They do not compile code",
          "They cannot run on modern servers"
        ],
        "answer": 1,
        "explanation": "Peripheral bugs can trigger cascading crashes that crash the whole platform."
      },
      {
        "question": "What engineering paradigm has largely superseded monoliths in large-scale cloud computing?",
        "options": [
          "Analog vacuum tubes",
          "Decoupled microservices and event-driven architectures",
          "Punch card programming",
          "Single-threaded scripts"
        ],
        "answer": 1,
        "explanation": "Microservices, containers, and event-driven architectures have become the standard."
      },
      {
        "question": "How do modern distributed microservices communicate with one another?",
        "options": [
          "Through physical paper printouts",
          "Via lightweight gRPC protocols or asynchronous message queues",
          "By sharing a single unpartitioned hard disk",
          "Using telephone modems"
        ],
        "answer": 1,
        "explanation": "They communicate across lightweight gRPC or message queues."
      },
      {
        "question": "What crucial operational resilience benefit does architectural decoupling provide?",
        "options": [
          "Guaranteed zero software bugs",
          "Isolation of failure domains so issues do not propagate system-wide",
          "Elimination of all network bandwidth costs",
          "Discontinuing automated testing"
        ],
        "answer": 1,
        "explanation": "Decoupling isolates failure domains so errors do not crash other services."
      }
    ]
  },
  {
    "id": 31,
    "level": "C2",
    "title": "Algorithmic Sovereignty & Epistemic Autonomy",
    "topic": "Philosophy of Technology & Epistemology",
    "duration": "~110 sec",
    "script": "As multimodal autonomous neural networks increasingly mediate the synthesis of human knowledge, philosophers of technology issue an austere warning regarding the systematic erosion of epistemic autonomy. When proprietary algorithms, engineered under the corporate imperatives of shareholder value maximization, delineate what data is surfaced, prioritized, or obfuscated within the digital sphere, the collective deliberative apparatus of democratic civilization is subjected to covert algorithmic hegemony. Cognitive agency is surrendered to opaque black-box optimization functions that curate an epistemic monoculture. Subverting this algorithmic enclosure demands not merely palliative regulatory fines, but the unyielding institutional codification of algorithmic sovereignty—demanding open-weight foundational models, mathematically verifiable auditing protocols, and the public democratization of computational substrate.",
    "keyVocab": [
      {
        "word": "epistemic autonomy",
        "meaning": "quyền tự chủ nhận thức (khả năng tự phán đoán chân lý)"
      },
      {
        "word": "hegemony",
        "meaning": "sự bá quyền chi phối áp đảo"
      },
      {
        "word": "palliative",
        "meaning": "biện pháp xoa dịu bề ngoài, không trị tận gốc"
      }
    ],
    "questions": [
      {
        "question": "What profound philosophical peril does the speaker articulate concerning AI mediation?",
        "options": [
          "The rising cost of computer memory chips",
          "The insidious erosion of epistemic autonomy through corporate algorithmic hegemony",
          "The decline of handwriting among school children",
          "The excessive power consumption of graphic processing units"
        ],
        "answer": 1,
        "explanation": "The core thesis is that proprietary algorithms insidiously erode human epistemic autonomy."
      },
      {
        "question": "How does the speaker characterize current regulatory fines imposed upon tech conglomerates?",
        "options": [
          "Decisive and transformative",
          "Palliative measures that fail to dismantle the systemic architecture of control",
          "Financially ruinous to corporations",
          "Unconstitutional and illegal"
        ],
        "answer": 1,
        "explanation": "The speaker explicitly decries 'palliative regulatory fines' that do not cure the underlying malady."
      },
      {
        "question": "What remedy does the lecturer advocate to reclaim democratic intellectual agency?",
        "options": [
          "Banning all artificial intelligence worldwide",
          "Codifying algorithmic sovereignty via open-weight foundational models and verifiable audits",
          "Subsidizing private advertising companies",
          "Restricting internet access to government officials"
        ],
        "answer": 1,
        "explanation": "It demands algorithmic sovereignty through open-weight models and mathematically verifiable audits."
      },
      {
        "question": "What phrase encapsulates the homogenized intellectual environment produced by opaque curators?",
        "options": [
          "An epistemic monoculture",
          "A decentralized renaissance",
          "An egalitarian symposium",
          "A dialectical synthesis"
        ],
        "answer": 0,
        "explanation": "Optimization functions curate an 'epistemic monoculture' that narrows human inquiry."
      }
    ]
  },
  {
    "id": 32,
    "level": "C2",
    "title": "Diplomatic Realpolitik & Multilateral Equilibrium",
    "topic": "Statecraft & Geopolitics",
    "duration": "~110 sec",
    "script": "In the crucible of classical diplomacy, statecraft is never the pursuit of utopian moral perfection, but the relentless, pragmatic reconciliation of competing sovereign imperatives—a doctrine formalized as Realpolitik. Diplomatic equilibrium is fundamentally dynamic rather than immutable; it constitutes an unremitting, precarious negotiation against systemic geopolitical entropy. Genuine statesmanship requires the stoic fortitude to transcend visceral domestic partisan polemics and accommodate geopolitical rivalries within formalized institutional architectures of deterrence. History demonstrates that when ascending revisionist powers challenge entrenched status-quo hegemons—the classic Thucydides Trap—catastrophe can only be averted not through bellicose saber-rattling or moralistic posturing, but through rigorous bilateral verification mechanisms, strategic ambiguity, and mutual concessions grounded in mutual vital interests.",
    "keyVocab": [
      {
        "word": "Realpolitik",
        "meaning": "chính trị thực dụng (dựa trên tương quan quyền lực thực tế)"
      },
      {
        "word": "Thucydides Trap",
        "meaning": "bẫy Thucydides (xung đột tất yếu giữa cường quốc mới nổi và thống trị)"
      },
      {
        "word": "entropy",
        "meaning": "sự suy thoái, hỗn loạn tự nhiên của trật tự"
      }
    ],
    "questions": [
      {
        "question": "How does the speaker define the core essence of classical Realpolitik?",
        "options": [
          "The idealistic realization of global world peace",
          "The pragmatic, stoic reconciliation of competing sovereign imperatives and power dynamics",
          "The military subjugation of all minor nations",
          "The pursuit of isolationist commercial embargoes"
        ],
        "answer": 1,
        "explanation": "Realpolitik is the pragmatic reconciliation of sovereign imperatives in power dynamics."
      },
      {
        "question": "What is the 'Thucydides Trap' referenced in diplomatic theory?",
        "options": [
          "The economic bankruptcy of ancient Greek banks",
          "The perilous dynamic when a rising power challenges an established hegemon",
          "A maritime navigation hazard in the Aegean Sea",
          "A legal dispute over consular diplomatic immunity"
        ],
        "answer": 1,
        "explanation": "It designates the perilous friction when an ascending revisionist power challenges a reigning hegemon."
      },
      {
        "question": "How can systemic military catastrophe between great powers be effectively averted?",
        "options": [
          "Through bellicose rhetoric and ultimatums",
          "Via rigorous bilateral verification, strategic ambiguity, and realistic mutual concessions",
          "By unilaterally abolishing naval fleets",
          "Through public moralistic condemnation"
        ],
        "answer": 1,
        "explanation": "Catastrophe is averted through bilateral verification, strategic ambiguity, and mutual concessions."
      },
      {
        "question": "How does the lecturer characterize geopolitical equilibrium?",
        "options": [
          "A perpetual state of immutable peace",
          "A dynamic, precarious negotiation against systemic entropy",
          "An unattainable academic illusion",
          "A condition strictly enforced by international courts"
        ],
        "answer": 1,
        "explanation": "Equilibrium is never immutable, but an ongoing negotiation against systemic entropy."
      }
    ]
  },
  {
    "id": 33,
    "level": "C2",
    "title": "Post-Modern Hermeneutics & The Deconstructive Critique of Signifiers",
    "topic": "Continental Philosophy & Semiotics",
    "duration": "~105 sec",
    "script": "Post-modern literary theory and semiotics, crystallized by Jacques Derrida's deconstructive inquiry, fundamentally destabilized Western metaphysics by exposing the illusory nature of the transcendental signified. Deconstruction unmasks how classical philosophical hierarchies—such as speech over writing, or presence over absence—operate as parasitically dependent binaries, wherein the privileged term derives its coherent authority solely through the violent subjugation and exclusion of its dialectical counterpart. Furthermore, through the coinages of 'différance', semioticians demonstrated that linguistic meaning is never pure, self-present, or immutably anchored; rather, semantic signification is perpetually deferred across an infinite, recursive chain of contextual signifiers, forever frustrating the dogmatic quest for absolute ontological bedrock.",
    "keyVocab": [
      {
        "word": "transcendental signified",
        "meaning": "cái được biểu đạt siêu nghiệm (chân lý tuyệt đối cố định)"
      },
      {
        "word": "différance",
        "meaning": "sự khác biệt và trì hoãn nghĩa (thuật ngữ Derrida)"
      },
      {
        "word": "ontological bedrock",
        "meaning": "nền tảng bản thể luận bất biến"
      }
    ],
    "questions": [
      {
        "question": "What foundational concept in Western metaphysics was interrogated by Derridean deconstruction?",
        "options": [
          "The arithmetic validity of prime numbers",
          "The illusion of the transcendental signified as an immutable anchor of meaning",
          "The chemical structure of physical paper",
          "The existence of grammatical punctuation"
        ],
        "answer": 1,
        "explanation": "Deconstruction unmasks the illusory nature of an absolute transcendental signified."
      },
      {
        "question": "How do privileged hierarchical binaries function within classical philosophical discourse?",
        "options": [
          "They are completely self-sufficient without their opposites",
          "The privileged term derives its authority parasitically by repressing its excluded counterpart",
          "They are biological instincts common to primates",
          "They were invented by 20th-century journalists"
        ],
        "answer": 1,
        "explanation": "The privileged term derives authority parasitically through the suppression of its binary opposite."
      },
      {
        "question": "What philosophical insight is encapsulated by the neologism 'différance'?",
        "options": [
          "Spelling errors in ancient manuscripts",
          "Meaning is perpetually deferred across a recursive, infinite chain of signifiers",
          "The complete impossibility of human vocal speech",
          "That all languages share identical syntactic rules"
        ],
        "answer": 1,
        "explanation": "Meaning is never self-contained; it is perpetually deferred along an endless chain of signifiers."
      },
      {
        "question": "What traditional metaphysical pursuit does deconstructive philosophy fundamentally frustrate?",
        "options": [
          "The construction of scientific telescopes",
          "The dogmatic quest for absolute, immovable ontological bedrock",
          "The development of computational search engines",
          "The translation of foreign literature into Latin"
        ],
        "answer": 1,
        "explanation": "It frustrates the dogmatic longing for absolute ontological bedrock."
      }
    ]
  },
  {
    "id": 34,
    "level": "C2",
    "title": "Quantum Decoherence & The Epistemological Measurement Paradox",
    "topic": "Quantum Foundations & Epistemology",
    "duration": "~110 sec",
    "script": "At the vanguard of theoretical physics and epistemology lies the measurement problem of quantum mechanics—the intractable conundrum of reconciling the linear, deterministic evolution of the Schrödinger wave function with the discontinuous collapse into discrete classical eigenvalues upon empirical observation. Decoherence theory elucidates how macroscopic systems lose quantum superposition through inevitable, irreversible entanglements with environmental degrees of freedom, effectively leaking phase coherence into the surrounding thermodynamic bath. Yet, decoherence fails to resolve the underlying metaphysical dilemma: does measurement actively precipitate ontological actuality, as posited by the Copenhagen interpretation, or does the universe perpetually bifurcate into non-communicating branches within an all-encompassing universal wave function, as championed by Everett's Many-Worlds formulation? This unresolved schism highlights that physical ontology remains intrinsically intertwined with epistemological inquiry.",
    "keyVocab": [
      {
        "word": "quantum decoherence",
        "meaning": "sự mất kết hợp lượng tử vào môi trường nhiệt động"
      },
      {
        "word": "superposition",
        "meaning": "trạng thái chồng chập lượng tử"
      },
      {
        "word": "Copenhagen interpretation",
        "meaning": "diễn giải Copenhagen về sự sụp đổ hàm sóng"
      }
    ],
    "questions": [
      {
        "question": "What central paradox does quantum mechanics present to classical epistemology?",
        "options": [
          "Why gravity causes planets to orbit stars",
          "Reconciling deterministic wave function evolution with empirical state collapse upon measurement",
          "The speed of sound in vacuum",
          "The thermodynamic boiling point of liquid nitrogen"
        ],
        "answer": 1,
        "explanation": "The measurement problem concerns the transition from smooth wave function evolution to discrete outcomes."
      },
      {
        "question": "According to decoherence theory, how is quantum phase coherence lost in macroscopic bodies?",
        "options": [
          "Through intentional human observation only",
          "Via irreversible thermodynamic entanglements with environmental degrees of freedom",
          "By cooling atoms to absolute zero",
          "Through radioactive atomic decay exclusively"
        ],
        "answer": 1,
        "explanation": "Superposition is lost as phase coherence leaks into environmental degrees of freedom."
      },
      {
        "question": "What radically divergent ontological picture is offered by Everett's Many-Worlds formulation?",
        "options": [
          "Particles do not exist at all",
          "The universe perpetually bifurcates into branching realities within a universal wave function",
          "Consciousness alone governs atomic collisions",
          "Wave functions collapse due to gravitational mass"
        ],
        "answer": 1,
        "explanation": "Everett posits that the universal wave function never collapses, bifurcating into parallel branches."
      },
      {
        "question": "What overarching philosophical conclusion does the lecturer derive from this debate?",
        "options": [
          "Theoretical physics is complete and solved",
          "Physical ontology remains fundamentally intertwined with epistemological inquiry",
          "Quantum computers will replace philosophy",
          "Mathematics cannot describe physical reality"
        ],
        "answer": 1,
        "explanation": "Physical ontology remains profoundly intertwined with epistemological questions."
      }
    ]
  },
  {
    "id": 35,
    "level": "C2",
    "title": "Macroeconomic Stagflation & Central Banking Fiat Dilemmas",
    "topic": "Macroeconomics & Monetary Policy",
    "duration": "~110 sec",
    "script": "Central banking institutions navigate an existential monetary conundrum when confronted with the specter of stagflation—the catastrophic confluence of stagnant macroeconomic growth, acute unemployment, and runaway cost-push inflation. In an orthodox economic downturn, monetary authorities inject liquidity through quantitative easing and policy rate cuts, thereby stimulating capital investment and aggregate demand. Conversely, when confronting pure demand-pull inflation, central banks aggressively hike benchmark interest rates and tighten balance sheets to cool overheated labor markets. However, when an exogenous supply shock—such as an abrupt energy embargo or geopolitical trade dislocation—drives stagflation, traditional monetary instruments are rendered dangerously counterproductive. Aggressive tightening risks inducing a protracted solvency crisis and severe recession, whereas monetary accommodation risks de-anchoring long-term inflation expectations and precipitating an irreversible hyperinflationary fiat spiral.",
    "keyVocab": [
      {
        "word": "stagflation",
        "meaning": "đình lạm (kinh tế đình đốn đi kèm lạm phát phi mã)"
      },
      {
        "word": "cost-push inflation",
        "meaning": "lạm phát do chi phí đẩy (cú sốc nguồn cung)"
      },
      {
        "word": "de-anchoring",
        "meaning": "sự mất neo của kỳ vọng lạm phát dài hạn"
      }
    ],
    "questions": [
      {
        "question": "What toxic triad of economic indicators characterizes classical stagflation?",
        "options": [
          "Zero taxes, trade surpluses, and deflation",
          "Stagnant output growth, elevated unemployment, and runaway inflation",
          "Rapid GDP expansion, low interest rates, and budget surpluses",
          "Fixed gold prices, full employment, and balanced trade"
        ],
        "answer": 1,
        "explanation": "Stagflation unites economic stagnation, high unemployment, and stubborn cost-push inflation."
      },
      {
        "question": "Why are conventional monetary policy levers paralyzed when responding to stagflation?",
        "options": [
          "Central bank computers lack computing power",
          "Rate hikes to curb inflation trigger severe recession, while easing to spur growth exacerbates inflation",
          "Commercial banks are forbidden from lending money",
          "Governments abolish fiat currency during stagflation"
        ],
        "answer": 1,
        "explanation": "Aggressive tightening sparks recession, whereas monetary stimulus accelerates the inflation spiral."
      },
      {
        "question": "What exogenous catalyst frequently precipitates cost-push stagflationary spirals?",
        "options": [
          "Surplus agricultural harvests",
          "Severe energy embargos or geopolitical trade dislocations",
          "Excessive consumer savings rates",
          "Technological breakthroughs in automated factories"
        ],
        "answer": 1,
        "explanation": "Exogenous supply shocks like energy embargos or trade fractures drive cost-push stagflation."
      },
      {
        "question": "What catastrophic psychological risk arises if central banks accommodate inflation for too long?",
        "options": [
          "The de-anchoring of long-term inflation expectations into a hyperinflationary spiral",
          "Consumers refusing to use bank credit cards",
          "Stock market brokers becoming too optimistic",
          "Interest rates falling permanently below zero"
        ],
        "answer": 0,
        "explanation": "Protracted accommodation risks de-anchoring expectations, triggering runaway inflation."
      }
    ]
  },
  {
    "id": 36,
    "level": "C2",
    "title": "Existential AI Safety & The Orthogonality Thesis",
    "topic": "Artificial Intelligence Ethics & Safety",
    "duration": "~115 sec",
    "script": "Within the formal domain of artificial intelligence alignment, philosophers and computer scientists investigate the existential implications of recursive self-improving superintelligence through Nick Bostrom's 'Orthogonality Thesis'. The thesis posits an unambiguous decoupling: an autonomous agent's final objective function can be combined with arbitrarily high cognitive and analytical capability. Orthogonality dismantles the naive, anthropomorphic presupposition that supreme intellect inevitably converges toward benevolent humanistic virtues. A superintelligent system tasked with an innocuous optimization directive—such as calculating digits of pi or optimizing manufacturing throughput—would naturally converge upon instrumental sub-goals: self-preservation, goal-content integrity, cognitive enhancement, and ruthless resource acquisition. Consequently, unless human value alignment is rigorously formalized into the core loss architecture prior to an intelligence explosion, superintelligence represents a catastrophic divergence from human continuity.",
    "keyVocab": [
      {
        "word": "Orthogonality Thesis",
        "meaning": "giả thuyết trực giao (trí tuệ siêu việt và mục tiêu đạo đức hoàn toàn độc lập)"
      },
      {
        "word": "instrumental convergence",
        "meaning": "sự hội tụ phương tiện (các mục tiêu phụ như tranh giành tài nguyên)"
      },
      {
        "word": "intelligence explosion",
        "meaning": "vụ nổ trí tuệ (trí tuệ nhân tạo tự nhân bản nâng cấp theo hàm mũ)"
      }
    ],
    "questions": [
      {
        "question": "What core proposition is formalized by Nick Bostrom's Orthogonality Thesis?",
        "options": [
          "Computers will never surpass the human brain",
          "An AI agent's analytical intelligence can vary completely independently of its final objective goals",
          "All intelligent machines will spontaneously love humanity",
          "Superintelligence requires quantum computing hardware"
        ],
        "answer": 1,
        "explanation": "It asserts that high intelligence can be paired with virtually any objective function."
      },
      {
        "question": "What naive anthropomorphic assumption does the Orthogonality Thesis dismantle?",
        "options": [
          "That computers need electricity to function",
          "The belief that superior intellect inherently produces benevolent, humanistic ethics",
          "That software code can contain syntax errors",
          "That humans are the only biological species with language"
        ],
        "answer": 1,
        "explanation": "It refutes the naive view that high intelligence naturally produces benevolent human virtues."
      },
      {
        "question": "What are 'instrumental sub-goals' in AI alignment theory?",
        "options": [
          "Musical compositions generated by neural nets",
          "Secondary convergent objectives like resource acquisition and self-preservation needed to fulfill primary goals",
          "Subroutines designed to delete computer viruses",
          "Rules enforced by government regulatory agencies"
        ],
        "answer": 1,
        "explanation": "Instrumental goals are sub-objectives (resource acquisition, self-preservation) helpful for any goal."
      },
      {
        "question": "According to alignment researchers, why must alignment be solved prior to an 'intelligence explosion'?",
        "options": [
          "To lower the financial cost of training models",
          "Because a misaligned recursive superintelligence cannot be safely corrected post-emergence",
          "To comply with commercial software trademark laws",
          "To prevent microchips from overheating"
        ],
        "answer": 1,
        "explanation": "Once recursive self-improvement triggers an intelligence explosion, corrections are impossible."
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.LISTENING_DATA = LISTENING_DATA;
}
if (typeof module !== 'undefined') {
  module.exports = LISTENING_DATA;
}
