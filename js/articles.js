// Daily Health Tips - Article Data
// Add new articles here following the same format

const articles = [
    {
        id: 41,
        slug: "tcm-constitution-types-guide",
        title: "TCM Body Constitution Types: Discover Your 中医体质 & Personalized Health Guide",
        date: "2026-07-02",
        category: "TCM Fundamentals",
        icon: "⚖️",
        excerpt: "Discover the 9 body constitution types in Traditional Chinese Medicine. Learn how to identify your TCM constitution and get personalized diet, lifestyle, and herbal recommendations for each type — from Qi Deficiency to Blood Stasis.",
        quote: "Knowing your constitution is like having a map of your body's terrain. When you understand the landscape, you know which paths lead to health and which lead to illness.",
        quoteAuthor: "Professor Wang Qi (王琦), pioneer of TCM Constitution Theory"
    },
    {
        id: 40,
        slug: "summer-cooling-herbal-teas",
        title: "Summer Cooling Herbal Teas Guide: 8 TCM Recipes to Beat the Heat Naturally",
        date: "2026-06-30",
        category: "Nutrition",
        icon: "🍵",
        excerpt: "Discover 8 Traditional Chinese Medicine cooling herbal tea recipes to beat summer heat naturally. From chrysanthemum to sour plum, learn TCM properties, brewing methods, and the best times to drink each tea.",
        quote: "A cup of herbal tea in summer is worth more than a thousand gold coins — it cools the fire within, moistens what is dry, and restores what the sun has taken.",
        quoteAuthor: "Traditional Chinese Medicine proverb"
    },
    {
        id: 39,
        slug: "moxibustion-guide",
        title: "Moxibustion Therapy Guide: Ancient Heat Healing for Pain Relief, Immunity & Wellness",
        date: "2026-06-29",
        category: "TCM Remedies",
        icon: "🔥",
        excerpt: "Discover the ancient healing art of moxibustion — learn how this warming TCM therapy relieves pain, boosts immunity, improves circulation, and restores balance through targeted heat application at key acupoints.",
        quote: "When there is stagnation, apply moxibustion to open the channels.",
        quoteAuthor: "Traditional Chinese Medicine principle"
    },
    {
        id: 38,
        slug: "womens-summer-qi-blood-nourishment",
        title: "Women's Summer Qi & Blood Nourishment: 7 TCM Foods and Herbal Teas to Stay Energized",
        date: "2026-06-26",
        category: "Women's Health",
        icon: "🌸",
        excerpt: "Discover how to nourish Qi and Blood in summer with Traditional Chinese Medicine. Learn 7 TCM foods, herbal teas, and acupressure points specifically for women's health to stay energized, balanced, and vibrant all summer long.",
        quote: "Women are governed by Blood. When Blood is abundant, the body is nourished, the spirit is calm, and the complexion glows.",
        quoteAuthor: "Traditional Chinese Medicine principle"
    },
    {
        id: 37,
        slug: "summer-heat-cooling-foods-acupressure",
        title: "Summer Heat Relief: 6 TCM Cooling Soups and 4 Acupressure Points to Beat the Heat",
        date: "2026-06-25",
        category: "Nutrition",
        icon: "🌞",
        excerpt: "Beat summer heat with TCM cooling foods and acupressure. Learn 6 nourishing Chinese soups, 4 acupressure points, and lifestyle tips to stay cool and energized naturally this summer.",
        quote: "In summer, eat cool to clear heat, drink warm to protect the spleen, and rest in shade to preserve Yin.",
        quoteAuthor: "Traditional Chinese Medicine proverb"
    },
    {
        id: 1,
        slug: "mindful-tea-drinking",
        title: "The Art of Mindful Tea Drinking",
        date: "2026-06-13",
        category: "Daily Wellness",
        icon: "🍵",
        excerpt: "In traditional Chinese culture, tea is more than a beverage—it's a meditation practice."
    },
    {
        id: 2,
        slug: "morning-sunlight-sleep",
        title: "Morning Sunlight for Better Sleep",
        date: "2026-06-12",
        category: "Sleep Health",
        icon: "☀️",
        excerpt: "Exposing yourself to natural sunlight within 30 minutes of waking helps regulate your circadian rhythm."
    },
    {
        id: 3,
        slug: "deep-abdominal-breathing",
        title: "The Power of Deep Abdominal Breathing",
        date: "2026-06-11",
        category: "Qigong",
        icon: "🌬️",
        excerpt: "Deep belly breathing activates the parasympathetic nervous system, reducing stress and promoting relaxation."
    },
    {
        id: 4,
        slug: "foot-soaking-healing",
        title: "Foot Soaking: A Traditional Healing Practice",
        date: "2026-06-10",
        category: "TCM Remedies",
        icon: "🦶",
        excerpt: "Soaking your feet in warm water before bed promotes circulation, relaxation, and better sleep."
    },
    {
        id: 5,
        slug: "eating-seasons-summer",
        title: "Eating with the Seasons: Summer Edition",
        date: "2026-06-09",
        category: "Nutrition",
        icon: "🥗",
        excerpt: "Summer calls for cooling foods to balance the body's internal heat. Learn what to eat this season."
    },
    {
        id: 6,
        slug: "warm-water-health-secret",
        title: "Warm Water: The Simplest Eastern Health Secret",
        date: "2026-06-14",
        category: "Daily Wellness",
        icon: "🫖",
        excerpt: "Why drinking warm water is one of the most powerful health habits in Traditional Chinese Medicine."
    },
    {
        id: 7,
        slug: "abdominal-massage-digestion",
        title: "Abdominal Massage: Ancient Chinese Digestion Remedy",
        date: "2026-06-16",
        category: "Daily Wellness",
        icon: "🤲",
        excerpt: "A simple daily massage technique that supports digestion and relieves bloating, rooted in centuries of Chinese medical practice."
    },
    {
        id: 8,
        slug: "baduanjin-eight-brocades",
        title: "Baduanjin: The Eight Brocades Qigong",
        date: "2026-06-16",
        category: "Fitness & Qigong",
        icon: "🤲",
        excerpt: "Master the ancient Eight Brocades Qigong sequence that has promoted health for over 800 years."
    },
    {
        id: 9,
        slug: "taichi-guide",
        title: "Tai Chi: Meditation in Motion",
        date: "2026-06-16",
        category: "Fitness & Qigong",
        icon: "🌊",
        excerpt: "Discover the ancient art of Tai Chi and how slow, flowing movements can transform your health."
    },
    {
        id: 10,
        slug: "daoyin-therapy-guide",
        title: "Daoyin Therapy: Guiding and Stretching",
        date: "2026-06-16",
        category: "Fitness & Qigong",
        icon: "🧘‍♂️",
        excerpt: "Explore the ancient art of Daoyin, the precursor to modern Qigong and Tai Chi."
    },
    {
        id: 11,
        slug: "morning-qigong-guide",
        title: "Morning Qigong: Start Your Day Right",
        date: "2026-06-16",
        category: "Fitness & Qigong",
        icon: "🌅",
        excerpt: "Discover traditional morning Qigong routines that boost energy and set a positive tone for your day."
    },
    {
        id: 12,
        slug: "bedtime-habits-guide",
        title: "Bedtime Habits: Wind Down for Better Sleep",
        date: "2026-06-16",
        category: "Fitness & Qigong",
        icon: "🌙",
        excerpt: "Traditional Chinese bedtime practices that promote deep, restorative sleep."
    },
    {
        id: 13,
        slug: "two-hands-hold-heavens",
        title: "Two Hands Hold the Heavens",
        date: "2026-06-16",
        category: "Baduanjin",
        icon: "🤲",
        excerpt: "Step-by-step guide to Baduanjin Movement 1 for posture improvement and Triple Burner regulation."
    },
    {
        id: 14,
        slug: "drawing-the-bow",
        title: "Drawing the Bow",
        date: "2026-06-16",
        category: "Baduanjin",
        icon: "🏹",
        excerpt: "Step-by-step guide to Baduanjin Movement 2 for leg strength and lung health."
    },
    {
        id: 15,
        slug: "separating-heaven-earth",
        title: "Separating Heaven and Earth",
        date: "2026-06-16",
        category: "Baduanjin",
        icon: "🦅",
        excerpt: "Step-by-step guide to Baduanjin Movement 3 for digestion and spleen health."
    },
    {
        id: 16,
        slug: "wise-owl-gazes-behind",
        title: "Wise Owl Gazes Behind",
        date: "2026-06-16",
        category: "Baduanjin",
        icon: "🧘",
        excerpt: "Step-by-step guide to Baduanjin Movement 4 for neck and spine health."
    },
    {
        id: 17,
        slug: "cloud-hands",
        title: "Cloud Hands",
        date: "2026-06-16",
        category: "Tai Chi",
        icon: "☁️",
        excerpt: "Step-by-step guide to the iconic Tai Chi movement for relaxation, coordination, and inner calm."
    },
    {
        id: 18,
        slug: "white-crane-spreads-wings",
        title: "White Crane Spreads Wings",
        date: "2026-06-16",
        category: "Tai Chi",
        icon: "🦢",
        excerpt: "Step-by-step guide to the elegant Tai Chi balance movement for posture and breathing."
    },
    {
        id: 19,
        slug: "five-animal-frolics",
        title: "Five Animal Frolics",
        date: "2026-06-16",
        category: "Daoyin",
        icon: "🦌",
        excerpt: "Learn the ancient Wu Qin Xi exercise set mimicking tiger, deer, bear, monkey, and crane movements."
    },
    {
        id: 20,
        slug: "six-healing-sounds",
        title: "Six Healing Sounds",
        date: "2026-06-16",
        category: "Qigong",
        icon: "🌬️",
        excerpt: "Learn the ancient Liu Zi Jue practice using six specific sounds to cleanse and heal internal organs."
    },
    {
        id: 21,
        slug: "foot-massage-meridian-tapping",
        title: "Foot Massage & Meridian Tapping",
        date: "2026-06-16",
        category: "Bedtime Practice",
        icon: "💆",
        excerpt: "Traditional Chinese foot massage and meridian tapping techniques for better sleep and relaxation."
    },
    {
        id: 22,
        slug: "meal-plan-monday",
        title: "Monday Meal Plan: Grounding Day",
        date: "2026-06-15",
        category: "Weekly Meal Plan",
        icon: "🌅",
        excerpt: "Spleen & stomach nourishing meals with ginger congee, steamed vegetables, and miso soup."
    },
    {
        id: 23,
        slug: "meal-plan-tuesday",
        title: "Tuesday Meal Plan: Nourishing Day",
        date: "2026-06-17",
        category: "Weekly Meal Plan",
        icon: "💧",
        excerpt: "Kidney & liver nourishing meals with black sesame porridge, grilled salmon, and bone broth."
    },
    {
        id: 24,
        slug: "meal-plan-wednesday",
        title: "Wednesday Meal Plan: Cleansing Day",
        date: "2026-06-17",
        category: "Weekly Meal Plan",
        icon: "🍃",
        excerpt: "Liver detox meals with green smoothie, bitter greens salad, and steamed fish."
    },
    {
        id: 25,
        slug: "meal-plan-thursday",
        title: "Thursday Meal Plan: Energizing Day",
        date: "2026-06-18",
        category: "Weekly Meal Plan",
        icon: "☀️",
        excerpt: "Heart-nourishing meals with berry oatmeal, grilled vegetable wrap, and tomato soup."
    },
    {
        id: 26,
        slug: "meal-plan-friday",
        title: "Friday Meal Plan: Harmonizing Day",
        date: "2026-06-19",
        category: "Weekly Meal Plan",
        icon: "🌸",
        excerpt: "Balanced five-flavor meals with avocado toast, grain bowl, and tofu stir-fry."
    },
    {
        id: 27,
        slug: "meal-plan-saturday",
        title: "Saturday Meal Plan: Warming Day",
        date: "2026-06-20",
        category: "Weekly Meal Plan",
        icon: "🍂",
        excerpt: "Yang-supporting meals with cinnamon oatmeal, root vegetable stew, and ginger noodle soup."
    },
    {
        id: 28,
        slug: "acupressure-headache-relief",
        title: "Acupressure for Headache Relief: 5 Points That Work",
        date: "2026-06-16",
        category: "Daily Wellness",
        icon: "💆",
        excerpt: "Stop reaching for painkillers. These five acupressure points can relieve headaches in minutes."
    },
    {
        id: 29,
        slug: "eye-health-traditional-methods",
        title: "Eye Health: Traditional Chinese Methods to Protect Your Vision",
        date: "2026-06-17",
        category: "Daily Wellness",
        icon: "👁️",
        excerpt: "Discover ancient Chinese techniques to relieve eye strain and protect your vision in the digital age."
    },
    {
        id: 30,
        slug: "boost-immune-system-naturally",
        title: "How to Boost Your Immune System Naturally: Ancient Eastern Wisdom That Works",
        date: "2026-06-18",
        category: "Daily Wellness",
        icon: "🛡️",
        excerpt: "Discover time-tested Traditional Chinese Medicine strategies to strengthen your immune system naturally — from immune-boosting foods to acupressure and qigong."
    },
    {
        id: 31,
        slug: "gua-sha-guide",
        title: "Gua Sha: Ancient Chinese Scraping Technique for Pain Relief",
        date: "2026-06-19",
        category: "Daily Wellness",
        icon: "🪨",
        excerpt: "Learn how to do Gua Sha at home for pain relief and better circulation. This ancient Chinese scraping technique uses simple tools to release muscle tension, reduce inflammation, and promote healing.",
        quote: "When the qi and blood flow smoothly, the body is at peace. When they stagnate, disease takes root.",
        quoteAuthor: "Traditional Chinese Medicine principle"
    },
    {
        id: 32,
        slug: "ear-acupressure-guide",
        title: "Ear Acupressure: 8 Key Points for Natural Pain Relief and Wellness",
        date: "2026-06-21",
        category: "Daily Wellness",
        icon: "👂",
        excerpt: "Discover ear acupressure (Auriculotherapy), a powerful TCM technique for natural pain relief, stress reduction, and overall wellness. Learn 8 key ear points you can press at home.",
        quote: "The ear is a window to the entire body. When you heal the ear, you heal the whole.",
        quoteAuthor: "Traditional Chinese Medicine principle"
    },
    {
        id: 33,
        slug: "spring-health-diet-guide",
        title: "Spring Health Diet: TCM Foods to Nourish Your Liver and Boost Energy",
        date: "2026-06-21",
        category: "Nutrition",
        icon: "🌿",
        excerpt: "Discover Traditional Chinese Medicine spring health diet principles. Learn what to eat in spring to nourish your liver, boost energy, and support seasonal wellness with recipes and food recommendations.",
        quote: "In spring, eat green to nourish the liver, move your body to smooth the Qi, and wake early to embrace the rising energy of nature.",
        quoteAuthor: "Traditional Chinese Medicine proverb"
    },
    {
        id: 34,
        slug: "summer-dampness-removal",
        title: "Summer Dampness Removal: TCM Foods and Tips to Detox Your Body",
        date: "2026-06-21",
        category: "Nutrition",
        icon: "💧",
        excerpt: "Learn how to remove dampness from your body in summer using Traditional Chinese Medicine. Discover foods, teas, and lifestyle practices that eliminate summer dampness and boost energy.",
        quote: "To remove dampness, warm the spleen. To warm the spleen, eat warm, cook your food, and avoid the cold.",
        quoteAuthor: "Traditional Chinese Medicine principle"
    },
    {
        id: 35,
        slug: "postpartum-recovery-guide",
        title: "Postpartum Recovery Guide: Traditional Chinese Zuo Yue Zi Wisdom for New Mothers",
        date: "2026-06-22",
        category: "Women's Health",
        icon: "👶",
        excerpt: "Traditional Chinese postpartum recovery guide (Zuo Yue Zi). Learn ancient wisdom for new mothers: warming foods, rest practices, herbal baths, and gentle exercises for postpartum healing.",
        quote: "A month of careful recovery ensures a lifetime of health. A month of neglect creates a lifetime of illness.",
        quoteAuthor: "Traditional Chinese Medicine proverb"
    },
    {
        id: 36,
        slug: "menstrual-pain-relief-tcm",
        title: "Menstrual Pain Relief with TCM: 5 Acupressure Points and Warming Remedies",
        date: "2026-06-23",
        category: "Women's Health",
        icon: "🌸",
        excerpt: "Discover how to relieve menstrual pain naturally with Traditional Chinese Medicine. Learn 5 powerful acupressure points, warming remedies, and herbal teas for period cramp relief.",
        quote: "When the Qi and blood flow smoothly, there is no pain. When they stagnate, pain arises.",
        quoteAuthor: "Traditional Chinese Medicine principle"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = articles;
}
