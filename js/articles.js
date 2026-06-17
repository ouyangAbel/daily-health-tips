// Daily Health Tips - Article Data
// Add new articles here following the same format

const articles = [
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
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = articles;
}
