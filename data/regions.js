export const regions = [
  {
    id: 'tashkent',
    slug: 'tashkent',
    name: { uz: "Toshkent", ru: "Ташкент", en: "Tashkent", tr: "Taşkent", zh: "塔什干" },
    description: {
      uz: "O'zbekistonning poytaxti va eng yirik shahri. Zamonaviy metro tizimi, keng xiyobonlar va tarixiy masjidlar bilan mashhur.",
      ru: "Столица и крупнейший город Узбекистана. Известен современной системой метро, широкими бульварами и историческими мечетями.",
      en: "The capital and largest city of Uzbekistan. Famous for its modern metro system, wide boulevards, and historical mosques.",
      tr: "Özbekistan'ın başkenti ve en büyük şehri. Modern metro sistemi, geniş bulvarları ve tarihi camileriyle ünlüdür.",
      zh: "乌兹别克斯坦的首都和最大城市。以现代地铁系统、宽阔的林荫大道和历史清真寺而闻名。"
    },
    heroImage: "/images/tosh.jpg",
    thumbnail: "/images/tosh.jpg",
    coverGradient: "from-blue-900 via-indigo-800 to-purple-900",
    icon: "",
    population: "2.5 mln",
    area: "335 km²",
    climate: { uz: "Kontinental", en: "Continental", ru: "Континентальный" },
    bestSeason: { uz: "Aprel - Iyun, Sentyabr - Oktyabr", en: "April–June, Sep–Oct" },
    highlights: ["Toshkent Metro", "Xast Imom", "Chorsu Bozori", "Amir Temur Maydoni"],
    rating: 4.7,
    reviewCount: 1240,
    coordinates: { lat: 41.2995, lng: 69.2401 },
    tags: ["Poytaxt", "Zamonaviy", "Madaniyat"],
    color: "#4f46e5",
  },
  {
    id: 'andijan',
    slug: 'andijan',
    name: { uz: "Andijon", ru: "Андижан", en: "Andijan", tr: "Andican", zh: "安集延" },
    description: {
      uz: "Zahiriddin Muhammad Bobur vatani — Andijon. Farg'ona vodiysining sharqiy darvozasi bo'lgan bu shahar o'z tarixi va karvonsaroylar bilan ajralib turadi.",
      ru: "Андижан — родина Захириддина Мухаммада Бабура. Восточные ворота Ферганской долины, богатые историей и каравансараями.",
      en: "Andijan — the birthplace of Zahiriddin Muhammad Babur. The eastern gateway of Fergana Valley, rich in history and caravanserais.",
      tr: "Andican — Zahiriüddin Muhammed Babur'un doğduğu yer. Fergana Vadisi'nin doğu kapısı, tarihi ve kervansaraylarıyla zengin.",
      zh: "安集延——扎希尔丁·穆罕默德·巴布尔的故乡。费尔干纳盆地的东部门户，历史悠久，商队驿站众多。"
    },
    heroImage: "/images/andi.jpg",
    thumbnail: "/images/andi.jpg",
    coverGradient: "from-rose-900 via-pink-800 to-red-900",
    icon: "🏺",
    population: "450 ming",
    area: "260 km²",
    climate: { uz: "Mo'tadil", en: "Moderate", ru: "Умеренный" },
    bestSeason: { uz: "Bahor va Kuz", en: "Spring & Autumn" },
    highlights: ["Bobur muzeyi", "Jome masjidi", "Andijon bozori", "Qo'qon xonligi me'morchiligi"],
    rating: 4.2,
    reviewCount: 430,
    coordinates: { lat: 40.7821, lng: 72.3442 },
    tags: ["Tarix", "Bobur", "Meros"],
    color: "#be185d",
  },
  {
    id: 'samarkand',
    slug: 'samarkand',
    name: { uz: "Samarqand", ru: "Самарканд", en: "Samarkand", tr: "Semerkant", zh: "撒马尔罕" },
    description: {
      uz: "Ipak yo'lining marvarid shahri. Registon maydoni, Bibixonim masjidi va Shohi Zinda bilan dunyo bo'ylab mashhur.",
      ru: "Жемчужина Шёлкового пути. Всемирно известен площадью Регистан, мечетью Биби-Ханым и мавзолеем Шахи-Зинда.",
      en: "The pearl of the Silk Road. World-famous for Registan Square, Bibi-Khanym Mosque, and Shah-i-Zinda necropolis.",
      tr: "İpek Yolu'nun incisi. Registan Meydanı, Bibi-Hanım Camii ve Şah-ı Zinde ile dünyaca ünlüdür.",
      zh: "丝绸之路的明珠。以雷吉斯坦广场、比比哈努姆清真寺和沙赫-伊-辛达墓地而享誉世界。"
    },
    heroImage: "/images/uzb3.jpg",
    thumbnail: "/images/uzb3.jpg",
    coverGradient: "from-amber-900 via-orange-800 to-yellow-900",
    icon: "🕌",
    population: "600 ming",
    area: "120 km²",
    climate: { uz: "Quruq kontinental", en: "Dry continental", ru: "Засушливый континентальный" },
    bestSeason: { uz: "Mart - Iyun, Sentyabr - Noyabr", en: "Mar–Jun, Sep–Nov" },
    highlights: ["Registon", "Bibixonim masjidi", "Shohi Zinda", "Ulug'bek rasadxonasi"],
    rating: 4.9,
    reviewCount: 3820,
    coordinates: { lat: 39.6542, lng: 66.9597 },
    tags: ["UNESCO", "Ipak yo'li", "Tarix"],
    color: "#d97706",
  },
  {
    id: 'bukhara',
    slug: 'bukhara',
    name: { uz: "Buxoro", ru: "Бухара", en: "Bukhara", tr: "Buhara", zh: "布哈拉" },
    description: {
      uz: "Yashil gumbazlar va minoralar shahri. O'rta asrlar me'morchiligining jonli muzeyi sifatida UNESCO ro'yxatiga kiritilgan.",
      ru: "Город зелёных куполов и минаретов. Включён в список ЮНЕСКО как живой музей средневековой архитектуры.",
      en: "The city of green domes and minarets. A UNESCO-listed living museum of medieval architecture.",
      tr: "Yeşil kubbelerin ve minarelerin şehri. Ortaçağ mimarisinin yaşayan müzesi olarak UNESCO listesinde.",
      zh: "绿色圆顶和宣礼塔之城。作为中世纪建筑的活博物馆被列入联合国教科文组织名单。"
    },
    heroImage: "/images/buxoro.jpg",
    thumbnail: "/images/buxoro.jpg",
    coverGradient: "from-amber-800 via-yellow-700 to-orange-800",
    icon: "",
    population: "300 ming",
    area: "39 km²",
    climate: { uz: "Quruq", en: "Arid", ru: "Засушливый" },
    bestSeason: { uz: "Mart - May, Oktyabr - Noyabr", en: "Mar–May, Oct–Nov" },
    highlights: ["Ark qal'asi", "Kalon minorasi", "Lyabi hovuz", "Chor Minor"],
    rating: 4.8,
    reviewCount: 2950,
    coordinates: { lat: 39.7747, lng: 64.4286 },
    tags: ["UNESCO", "Qadimiy", "Me'morchilik"],
    color: "#b45309",
  },
  {
    id: 'khiva',
    slug: 'khiva',
    name: { uz: "Xiva", ru: "Хива", en: "Khiva", tr: "Hive", zh: "希瓦" },
    description: {
      uz: "Ichon-qal'a — dunyodagi eng yaxshi saqlangan qadimiy shaharlardan biri. Go'yo zaman to'xtab qolgan bu shaharda har bir ko'cha tarix nafasini his ettiradi.",
      ru: "Ичан-Кала — один из наиболее хорошо сохранившихся древних городов в мире. Каждая улочка дышит историей.",
      en: "Ichon-Qala — one of the best-preserved ancient cities in the world. Every alley breathes history.",
      tr: "İçan Kale — dünyanın en iyi korunan antik şehirlerinden biri. Her sokak tarih kokar.",
      zh: "依琼卡拉——世界上保存最完好的古城之一。每条街道都散发着历史的气息。"
    },
    heroImage: "/images/kxiva.jpg",
    thumbnail: "/images/kxiva.jpg",
    coverGradient: "from-orange-900 via-red-800 to-amber-900",
    icon: "",
    population: "90 ming",
    area: "18 km²",
    climate: { uz: "Cho'l", en: "Desert", ru: "Пустынный" },
    bestSeason: { uz: "Aprel - Iyun, Sentyabr - Oktyabr", en: "Apr–Jun, Sep–Oct" },
    highlights: ["Ichon-qal'a", "Kalta-Minor", "Juma masjidi", "Pahlavon Mahmud"],
    rating: 4.9,
    reviewCount: 1680,
    coordinates: { lat: 41.3775, lng: 60.3622 },
    tags: ["UNESCO", "Qadimiy shahar", "Noyob"],
    color: "#c2410c",
  },
  {
    id: 'fergana',
    slug: 'fergana',
    name: { uz: "Farg'ona", ru: "Фергана", en: "Fergana", tr: "Fergana", zh: "费尔干纳" },
    description: {
      uz: "Farg'ona vodiysi — O'zbekistonning eng sermahsul va zich aholi yashaydigan hududi. Ipak, atlas va qo'l hunarmandchiligi bilan mashhur.",
      ru: "Ферганская долина — самый плодородный и густонаселённый регион Узбекистана. Знаменита шёлком, атласом и ручным ремеслом.",
      en: "Fergana Valley — the most fertile and densely populated region of Uzbekistan. Famous for silk, atlas fabric, and handicrafts.",
      tr: "Fergana Vadisi — Özbekistan'ın en verimli ve yoğun nüfuslu bölgesi. İpek, atlas kumaşı ve el sanatlarıyla ünlüdür.",
      zh: "费尔干纳盆地——乌兹别克斯坦最肥沃、人口最密集的地区。以丝绸、金丝绒布料和手工艺品而闻名。"
    },
    heroImage: "/images/farg.jpg",
    thumbnail: "/images/farg.jpg",
    coverGradient: "from-green-900 via-emerald-800 to-teal-900",
    icon: "",
    population: "430 ming",
    area: "420 km²",
    climate: { uz: "Mo'tadil", en: "Moderate", ru: "Умеренный" },
    bestSeason: { uz: "Bahor va Kuz", en: "Spring & Autumn" },
    highlights: ["Marg'ilon ipak fabrikasi", "Rishton kulolchilik", "Vodiy panoramasi"],
    rating: 4.5,
    reviewCount: 870,
    coordinates: { lat: 40.3842, lng: 71.7843 },
    tags: ["Hunarmandchilik", "Ipak", "Vodiy"],
    color: "#059669",
  },
  {
    id: 'namangan',
    slug: 'namangan',
    name: { uz: "Namangan", ru: "Наманган", en: "Namangan", tr: "Namangan", zh: "纳曼干" },
    description: {
      uz: "Farg'ona vodiysining shimoliy qismida joylashgan Namangan — savdo va hunarmandchilik shahri. Eski mahallalar va guzarlar bilan boydir.",
      ru: "Наманган, расположенный в северной части Ферганской долины — город торговли и ремёсел. Богат старинными кварталами и гузарами.",
      en: "Located in the northern Fergana Valley, Namangan is a city of trade and craftsmanship, rich with old neighborhoods and guzars.",
      tr: "Fergana Vadisi'nin kuzeyinde yer alan Namangan, ticaret ve zanaat şehridir. Eski mahalleler ve guzarlarla doludur.",
      zh: "位于费尔干纳盆地北部的纳曼干是一个贸易和手工艺城市，以古老的街区和集市而丰富。"
    },
    heroImage: "/images/nammm.jpg",
    thumbnail: "/images/nammm.jpg",
    coverGradient: "from-purple-900 via-violet-800 to-indigo-900",
    icon: "",
    population: "600 ming",
    area: "440 km²",
    climate: { uz: "Kontinental", en: "Continental", ru: "Континентальный" },
    bestSeason: { uz: "May - Iyun, Sentyabr", en: "May–Jun, Sep" },
    highlights: ["Xudoyor Khan saroyi", "Eski shahar mahallasi", "Namangan bozori"],
    rating: 4.3,
    reviewCount: 560,
    coordinates: { lat: 40.9983, lng: 71.6726 },
    tags: ["Savdo", "Hunarmandchilik", "Mahalla"],
    color: "#7c3aed",
  },
  
  {
    id: 'nukus',
    slug: 'nukus',
    name: { uz: "Nukus", ru: "Нукус", en: "Nukus", tr: "Nükus", zh: "努库斯" },
    description: {
      uz: "Qoraqalpog'istonning poytaxti. Igor Savitskiy muzeyidagi noyob avangard san'at to'plami — 'Cho'ldagi Louvre' nomi bilan mashhur.",
      ru: "Столица Каракалпакстана. Уникальная коллекция авангардного искусства в музее Игоря Савицкого известна как 'Лувр в пустыне'.",
      en: "The capital of Karakalpakstan. The unique avant-garde art collection in Igor Savitsky Museum is known as the 'Louvre of the Desert'.",
      tr: "Karakalpakistan'ın başkenti. Igor Savitsky Müzesi'ndeki eşsiz avangard sanat koleksiyonu 'Çölün Luvr'u olarak bilinir.",
      zh: "卡拉卡尔帕克斯坦的首都。伊戈尔·萨维茨基博物馆中独特的前卫艺术收藏被称为'沙漠中的卢浮宫'。"
    },
    heroImage: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1400&q=80",
    thumbnail: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&q=80",
    coverGradient: "from-cyan-900 via-teal-800 to-blue-900",
    icon: "",
    population: "310 ming",
    area: "500 km²",
    climate: { uz: "Cho'l", en: "Desert", ru: "Пустынный" },
    bestSeason: { uz: "Aprel - May, Oktyabr", en: "Apr–May, Oct" },
    highlights: ["Savitskiy muzeyi", "Aral dengizi", "Moynaq", "Qoraqalpog'iston me'morchiligi"],
    rating: 4.6,
    reviewCount: 720,
    coordinates: { lat: 42.4647, lng: 59.6037 },
    tags: ["San'at", "Aral dengizi", "Noyob"],
    color: "#0e7490",
  },
];

export const getRegionById = (id) => regions.find(r => r.id === id || r.slug === id);

export const categories = [
  { id: 'hotels', icon: '🏨', label: { uz: 'Mehmonxonalar', en: 'Hotels', ru: 'Гостиницы' }, color: 'blue' },
  { id: 'museums', icon: '🏛', label: { uz: 'Muzeylar', en: 'Museums', ru: 'Музеи' }, color: 'purple' },
  { id: 'monuments', icon: '🕌', label: { uz: 'Tarixiy obidalar', en: 'Monuments', ru: 'Исторические памятники' }, color: 'amber' },
  { id: 'nature', icon: '🌄', label: { uz: 'Tabiiy maskanlar', en: 'Nature', ru: 'Природные места' }, color: 'green' },
  { id: 'parks', icon: '🌳', label: { uz: 'Parklar', en: 'Parks', ru: 'Парки' }, color: 'emerald' },
  { id: 'restaurants', icon: '🍽', label: { uz: 'Restoranlar', en: 'Restaurants', ru: 'Рестораны' }, color: 'red' },
  { id: 'entertainment', icon: '🎡', label: { uz: "Ko'ngilochar maskanlar", en: 'Entertainment', ru: 'Развлечения' }, color: 'pink' },
  { id: 'culture', icon: '🎭', label: { uz: 'Madaniy joylar', en: 'Cultural Sites', ru: 'Культурные места' }, color: 'indigo' },
];

export const regionAttractions = {
  andijan: [

  // HOTELS
  {
    id: 'and-h1',
    category: 'hotels',
    name: { uz: "Bobur Palace Hotel", en: "Bobur Palace Hotel", ru: "Отель Бабур Палас" },
    description: {
      uz: "Andijon markazida joylashgan zamonaviy mehmonxona.",
      en: "Modern hotel located in the center of Andijan."
    },
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    rating: 4.5,
    reviewCount: 220,
    pricePerNight: 70,
    currency: "USD",
    openHours: "24/7",
    address: "Mustaqillik ko'chasi 12",
    amenities: ["WiFi","Restaurant","Parking","Breakfast"],
    tags: ["Luxury","City Center"]
  },

  {
    id: 'and-h2',
    category: 'hotels',
    name: { uz: "Andijon Plaza Hotel", en: "Andijan Plaza Hotel", ru: "Отель Андижан Плаза" },
    description: {
      uz: "Sayohatchilar uchun qulay xizmat ko‘rsatadigan mehmonxona.",
      en: "Comfortable hotel for travelers."
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    rating: 4.4,
    reviewCount: 160,
    pricePerNight: 60,
    currency: "USD",
    openHours: "24/7",
    address: "Bobur shoh ko'chasi 18",
    amenities: ["WiFi","Parking","Airport transfer"],
    tags: ["Comfort","Travel"]
  },


  // MUSEUMS
  {
    id: 'and-m1',
    category: 'museums',
    name: { uz: "Bobur muzeyi", en: "Babur Museum", ru: "Музей Бабура" },
    description: {
      uz: "Zahiriddin Muhammad Bobur tavalludiga bag'ishlangan muzey.",
      en: "Museum dedicated to the life and legacy of Babur."
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    rating: 4.7,
    reviewCount: 350,
    entryFee: 10000,
    currency: "UZS",
    openHours: "09:00 - 17:00",
    address: "Bog‘ishamol mahallasi",
    tags: ["History","Babur","Museum"]
  },

  {
    id: 'and-m2',
    category: 'museums',
    name: { uz: "Andijon viloyat tarixi muzeyi", en: "Andijan Regional History Museum", ru: "Исторический музей Андижана" },
    description: {
      uz: "Viloyat tarixiga oid eksponatlar saqlanadigan muzey.",
      en: "Museum showcasing the history of the Andijan region."
    },
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&q=80",
    rating: 4.4,
    reviewCount: 180,
    entryFee: 8000,
    currency: "UZS",
    openHours: "09:00 - 18:00",
    address: "Andijon markazi",
    tags: ["History","Culture"]
  },


  // MONUMENTS
  {
    id: 'and-mon1',
    category: 'monuments',
    name: { uz: "Bobur haykali", en: "Babur Statue", ru: "Памятник Бабуру" },
    description: {
      uz: "Zahiriddin Muhammad Bobur haykali.",
      en: "Monument dedicated to Babur."
    },
    image: "https://images.unsplash.com/photo-1598879210942-bdb155de2ecb?w=600&q=80",
    rating: 4.6,
    reviewCount: 210,
    entryFee: 0,
    currency: "UZS",
    openHours: "Always open",
    tags: ["Monument","History"]
  },

  {
    id: 'and-mon2',
    category: 'monuments',
    name: { uz: "Andijon mustaqillik monumenti", en: "Independence Monument", ru: "Монумент Независимости" },
    description: {
      uz: "Mustaqillik sharafiga qurilgan monument.",
      en: "Monument dedicated to independence."
    },
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=600&q=80",
    rating: 4.5,
    reviewCount: 170,
    entryFee: 0,
    currency: "UZS",
    openHours: "Always open",
    tags: ["Monument"]
  },


  // PARKS
  {
    id: 'and-p1',
    category: 'parks',
    name: { uz: "Bobur bog‘i", en: "Babur Park", ru: "Парк Бабура" },
    description: {
      uz: "Dam olish uchun mashhur shahar bog‘i.",
      en: "Popular city park for recreation."
    },
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    rating: 4.7,
    reviewCount: 500,
    entryFee: 3000,
    currency: "UZS",
    openHours: "08:00 - 22:00",
    tags: ["Park","Nature"]
  },


  // RESTAURANTS (ko‘proq)
  {
    id: 'and-r1',
    category: 'restaurants',
    name: { uz: "Navbahor Choyxonasi", en: "Navbahor Teahouse", ru: "Чайхана Навбахор" },
    description: {
      uz: "Milliy taomlar bilan mashhur choyxona.",
      en: "Traditional Uzbek cuisine restaurant."
    },
    image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=600&q=80",
    rating: 4.8,
    reviewCount: 410,
    priceRange: "$10 - $25",
    openHours: "10:00 - 23:00",
    tags: ["Uzbek cuisine"]
  },

  {
    id: 'and-r2',
    category: 'restaurants',
    name: { uz: "Karvon Restaurant", en: "Karvon Restaurant", ru: "Ресторан Караван" },
    description: {
      uz: "Oilaviy kechki ovqat uchun yaxshi restoran.",
      en: "Family friendly restaurant."
    },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    rating: 4.6,
    reviewCount: 290,
    priceRange: "$12 - $30",
    openHours: "11:00 - 23:00",
    tags: ["Family","Restaurant"]
  },

  {
    id: 'and-r3',
    category: 'restaurants',
    name: { uz: "Registon Grill", en: "Registan Grill", ru: "Регистан Гриль" },
    description: {
      uz: "Grill va kaboblari bilan mashhur restoran.",
      en: "Restaurant famous for grilled dishes."
    },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    rating: 4.5,
    reviewCount: 240,
    priceRange: "$10 - $28",
    openHours: "12:00 - 23:30",
    tags: ["Grill","BBQ"]
  },

  {
    id: 'and-r4',
    category: 'restaurants',
    name: { uz: "Samarqand Osh Markazi", en: "Samarkand Pilaf Center", ru: "Центр Плова Самарканд" },
    description: {
      uz: "Mashhur o‘zbek oshini tatib ko‘rish mumkin.",
      en: "Famous place for Uzbek pilaf."
    },
    image: "https://images.unsplash.com/photo-1604908176997-431f74f5b7a2?w=600&q=80",
    rating: 4.7,
    reviewCount: 360,
    priceRange: "$8 - $20",
    openHours: "09:00 - 20:00",
    tags: ["Plov","Uzbek food"]
  },


  // ENTERTAINMENT
  {
    id: 'and-e1',
    category: 'entertainment',
    name: { uz: "Cinema Park Andijon", en: "Cinema Park Andijan", ru: "Кинотеатр Парк Андижан" },
    description: {
      uz: "Zamonaviy kinoteatr.",
      en: "Modern cinema complex."
    },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    rating: 4.4,
    reviewCount: 190,
    entryFee: 30000,
    currency: "UZS",
    openHours: "12:00 - 23:00",
    tags: ["Cinema","Entertainment"]
  },


  // CULTURE
  {
    id: 'and-c1',
    category: 'culture',
    name: { uz: "Andijon drama teatri", en: "Andijan Drama Theater", ru: "Андийский драматический театр" },
    description: {
      uz: "Mashhur teatr sahnasi.",
      en: "Famous theater for cultural events."
    },
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
    rating: 4.6,
    reviewCount: 210,
    entryFee: 15000,
    currency: "UZS",
    openHours: "09:00 - 21:00",
    tags: ["Theater","Culture"]
  }

],

  samarkand: [

  // ================= HOTELS =================
  {
    id: 'sam-h1',
    category: 'hotels',
    name: { uz: "Registon Plaza", en: "Registan Plaza", ru: "Регистан Плаза" },
    description: {
      uz: "Registon maydoniga yaqin zamonaviy mehmonxona.",
      en: "Modern hotel near Registan Square."
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    rating: 4.7,
    reviewCount: 540,
    pricePerNight: 140,
    currency: "USD",
    openHours: "24/7",
    amenities: ["WiFi","Restaurant","Pool"],
    tags: ["Luxury","Center"]
  },

  {
    id: 'sam-h2',
    category: 'hotels',
    name: { uz: "Emirhan Hotel", en: "Emirhan Hotel", ru: "Отель Эмирхан" },
    description: {
      uz: "Sayyohlar orasida mashhur qulay mehmonxona.",
      en: "Popular comfortable hotel among tourists."
    },
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    rating: 4.5,
    reviewCount: 320,
    pricePerNight: 85,
    currency: "USD",
    openHours: "24/7",
    amenities: ["WiFi","Breakfast","Parking"],
    tags: ["Comfort"]
  },

  {
    id: 'sam-h3',
    category: 'hotels',
    name: { uz: "Bibixonim Hotel", en: "Bibikhanym Hotel", ru: "Отель Бибиханым" },
    description: {
      uz: "Tarixiy markaz yaqinidagi milliy uslubdagi mehmonxona.",
      en: "Traditional-style hotel near historic center."
    },
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    rating: 4.4,
    reviewCount: 210,
    pricePerNight: 60,
    currency: "USD",
    openHours: "24/7",
    amenities: ["WiFi","Restaurant"],
    tags: ["Budget","Traditional"]
  },

  // ================= MUSEUMS =================
  {
    id: 'sam-m1',
    category: 'museums',
    name: { uz: "Afrosiyob muzeyi", en: "Afrasiab Museum", ru: "Музей Афрасиаб" },
    description: {
      uz: "Qadimgi Samarqand tarixiga bag‘ishlangan muzey.",
      en: "Museum dedicated to ancient Samarkand history."
    },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80",
    rating: 4.7,
    reviewCount: 480,
    entryFee: 15000,
    currency: "UZS",
    openHours: "09:00 - 17:00",
    tags: ["History","Museum"]
  },

  {
    id: 'sam-m2',
    category: 'museums',
    name: { uz: "Ulug‘bek observatoriyasi muzeyi", en: "Ulugh Beg Observatory Museum", ru: "Обсерватория Улугбека" },
    description: {
      uz: "Buyuk astronom Ulug‘bek merosiga bag‘ishlangan maskan.",
      en: "Museum dedicated to astronomer Ulugh Beg."
    },
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=600&q=80",
    rating: 4.8,
    reviewCount: 620,
    entryFee: 20000,
    currency: "UZS",
    openHours: "09:00 - 18:00",
    tags: ["Science","History"]
  },

  // ================= MONUMENTS =================
  {
    id: 'sam-mon1',
    category: 'monuments',
    name: { uz: "Registon maydoni", en: "Registan Square", ru: "Регистан" },
    description: {
      uz: "Samarqandning eng mashhur tarixiy majmuasi.",
      en: "The most famous historical complex of Samarkand."
    },
    image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&q=80",
    rating: 5.0,
    reviewCount: 5200,
    entryFee: 50000,
    currency: "UZS",
    openHours: "08:00 - 22:00",
    tags: ["UNESCO","Historic"]
  },

  {
    id: 'sam-mon2',
    category: 'monuments',
    name: { uz: "Shohi Zinda majmuasi", en: "Shah-i-Zinda", ru: "Шахи Зинда" },
    description: {
      uz: "Ko‘k gumbazli maqbaralar majmuasi.",
      en: "Complex of blue-tiled mausoleums."
    },
    image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=600&q=80",
    rating: 4.9,
    reviewCount: 3100,
    entryFee: 40000,
    currency: "UZS",
    openHours: "08:00 - 19:00",
    tags: ["Architecture","History"]
  },

  {
    id: 'sam-mon3',
    category: 'monuments',
    name: { uz: "Bibixonim masjidi", en: "Bibi-Khanym Mosque", ru: "Мечеть Биби-Ханым" },
    description: {
      uz: "Amir Temur davrida qurilgan ulkan masjid.",
      en: "Grand mosque built during Timur's era."
    },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    rating: 4.8,
    reviewCount: 2600,
    entryFee: 30000,
    currency: "UZS",
    openHours: "09:00 - 18:00",
    tags: ["Mosque","Historic"]
  },

  // ================= PARKS =================
  {
    id: 'sam-p1',
    category: 'parks',
    name: { uz: "Universitet xiyoboni", en: "University Boulevard", ru: "Университетский бульвар" },
    description: {
      uz: "Samarqanddagi eng chiroyli sayr joylaridan biri.",
      en: "One of the most beautiful walking areas."
    },
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    rating: 4.7,
    reviewCount: 700,
    entryFee: 0,
    currency: "UZS",
    openHours: "Always open",
    tags: ["Walk","Nature"]
  },

  // ================= RESTAURANTS =================
  {
    id: 'sam-r1',
    category: 'restaurants',
    name: { uz: "Samarkand Restaurant", en: "Samarkand Restaurant", ru: "Ресторан Самарканд" },
    description: {
      uz: "Milliy taomlar bilan mashhur restoran.",
      en: "Restaurant famous for Uzbek cuisine."
    },
    image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=600&q=80",
    rating: 4.8,
    reviewCount: 1200,
    priceRange: "$10 - $30",
    openHours: "10:00 - 23:00",
    tags: ["Uzbek food"]
  },

  {
    id: 'sam-r2',
    category: 'restaurants',
    name: { uz: "Platan Restaurant", en: "Platan Restaurant", ru: "Ресторан Платан" },
    description: {
      uz: "Yevropa va o‘zbek taomlari.",
      en: "European and Uzbek cuisine."
    },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    rating: 4.6,
    reviewCount: 540,
    priceRange: "$15 - $35",
    openHours: "11:00 - 23:00",
    tags: ["European","Uzbek"]
  },

  {
    id: 'sam-r3',
    category: 'restaurants',
    name: { uz: "Karimbek Osh Markazi", en: "Karimbek Plov Center", ru: "Центр Плова Каримбек" },
    description: {
      uz: "Mashhur Samarqand osh markazi.",
      en: "Famous Samarkand plov center."
    },
    image: "https://images.unsplash.com/photo-1604908176997-431f74f5b7a2?w=600&q=80",
    rating: 4.9,
    reviewCount: 1800,
    priceRange: "$7 - $18",
    openHours: "09:00 - 20:00",
    tags: ["Plov","Local food"]
  },

  // ================= ENTERTAINMENT =================
  {
    id: 'sam-e1',
    category: 'entertainment',
    name: { uz: "Family Park Samarqand", en: "Family Park Samarkand", ru: "Фэмили Парк Самарканд" },
    description: {
      uz: "Oilaviy dam olish maskani.",
      en: "Family entertainment park."
    },
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=600&q=80",
    rating: 4.5,
    reviewCount: 430,
    entryFee: 20000,
    currency: "UZS",
    openHours: "10:00 - 22:00",
    tags: ["Family","Fun"]
  },

  // ================= CULTURE =================
  {
    id: 'sam-c1',
    category: 'culture',
    name: { uz: "Samarqand drama teatri", en: "Samarkand Drama Theatre", ru: "Самаркандский драмтеатр" },
    description: {
      uz: "Shaharning asosiy teatr maskani.",
      en: "Main theatre of the city."
    },
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
    rating: 4.6,
    reviewCount: 260,
    entryFee: 30000,
    currency: "UZS",
    openHours: "10:00 - 21:00",
    tags: ["Theatre","Culture"]
  }

],

  bukhara: [

  // ================= HOTELS =================
  {
    id: 'bux-h1',
    category: 'hotels',
    name: { uz: "Amelia Boutique Hotel", en: "Amelia Boutique Hotel", ru: "Бутик-отель Амелия" },
    description: {
      uz: "Eski shahardagi tarixiy binoda joylashgan butik mehmonxona.",
      en: "Boutique hotel located in a historic building."
    },
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    rating: 4.9,
    reviewCount: 420,
    pricePerNight: 95,
    currency: "USD",
    openHours: "24/7",
    amenities: ["WiFi","Breakfast","Terrace"],
    tags: ["Boutique","Historic"]
  },

  {
    id: 'bux-h2',
    category: 'hotels',
    name: { uz: "Komil Bukhara Boutique Hotel", en: "Komil Bukhara Boutique Hotel", ru: "Отель Комил Бухара" },
    description: {
      uz: "An’anaviy buxoro uslubidagi mashhur mehmonxona.",
      en: "Traditional Bukhara-style hotel."
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    rating: 4.8,
    reviewCount: 380,
    pricePerNight: 80,
    currency: "USD",
    openHours: "24/7",
    amenities: ["WiFi","Restaurant"],
    tags: ["Traditional"]
  },

  {
    id: 'bux-h3',
    category: 'hotels',
    name: { uz: "Minorai Kalon Hotel", en: "Minorai Kalon Hotel", ru: "Отель Минарет Калян" },
    description: {
      uz: "Kalon minorasi yaqinidagi qulay mehmonxona.",
      en: "Comfortable hotel near Kalon Minaret."
    },
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    rating: 4.5,
    reviewCount: 210,
    pricePerNight: 60,
    currency: "USD",
    openHours: "24/7",
    amenities: ["WiFi","Breakfast"],
    tags: ["Budget","Center"]
  },

  // ================= MUSEUMS =================
  {
    id: 'bux-m1',
    category: 'museums',
    name: { uz: "Ark qal’asi muzeyi", en: "Ark Fortress Museum", ru: "Крепость Арк" },
    description: {
      uz: "Buxoro amirlarining qadimiy qarorgohi.",
      en: "Ancient residence of Bukhara emirs."
    },
    image: "https://images.unsplash.com/photo-1604430456280-43c1c3c6c7b4?w=600&q=80",
    rating: 4.9,
    reviewCount: 2400,
    entryFee: 40000,
    currency: "UZS",
    openHours: "09:00 - 18:00",
    tags: ["History","UNESCO"]
  },

  {
    id: 'bux-m2',
    category: 'museums',
    name: { uz: "Fayzulla Xo‘jayev uy-muzeyi", en: "Fayzulla Khojaev Museum", ru: "Дом-музей Файзуллы Ходжаева" },
    description: {
      uz: "Buxoro tarixiga oid uy-muzey.",
      en: "Historic house museum in Bukhara."
    },
    image: "https://images.unsplash.com/photo-1580130732478-4e339fb6836f?w=600&q=80",
    rating: 4.6,
    reviewCount: 320,
    entryFee: 15000,
    currency: "UZS",
    openHours: "09:00 - 17:00",
    tags: ["Museum","History"]
  },

  // ================= MONUMENTS =================
  {
    id: 'bux-mon1',
    category: 'monuments',
    name: { uz: "Minorai Kalon", en: "Kalon Minaret", ru: "Минарет Калян" },
    description: {
      uz: "Buxoroning ramzi hisoblangan mashhur minora.",
      en: "Iconic symbol of Bukhara."
    },
    image: "https://images.unsplash.com/photo-1590080877777-95bcb3e43c75?w=600&q=80",
    rating: 5.0,
    reviewCount: 5000,
    entryFee: 30000,
    currency: "UZS",
    openHours: "08:00 - 20:00",
    tags: ["UNESCO","Historic"]
  },

  {
    id: 'bux-mon2',
    category: 'monuments',
    name: { uz: "Lyabi Hovuz majmuasi", en: "Lyabi Hauz Ensemble", ru: "Ляби-Хауз" },
    description: {
      uz: "Buxorodagi eng jonli tarixiy maydon.",
      en: "Historic square and pond complex."
    },
    image: "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=600&q=80",
    rating: 4.9,
    reviewCount: 3100,
    entryFee: 0,
    currency: "UZS",
    openHours: "Always open",
    tags: ["Historic","Square"]
  },

  {
    id: 'bux-mon3',
    category: 'monuments',
    name: { uz: "Chor Minor", en: "Chor Minor", ru: "Чор-Минор" },
    description: {
      uz: "To‘rt minorali noyob me’moriy yodgorlik.",
      en: "Unique four-towered monument."
    },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    rating: 4.8,
    reviewCount: 1800,
    entryFee: 15000,
    currency: "UZS",
    openHours: "09:00 - 18:00",
    tags: ["Architecture"]
  },

  // ================= RESTAURANTS (REAL BUXORO) =================
  {
    id: 'bux-r1',
    category: 'restaurants',
    name: { uz: "Chinar Restaurant", en: "Chinar Restaurant", ru: "Ресторан Чинар" },
    description: {
      uz: "Lyabi Hovuz yaqinidagi mashhur milliy restoran.",
      en: "Popular traditional restaurant near Lyabi Hauz."
    },
    image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=600&q=80",
    rating: 4.7,
    reviewCount: 890,
    priceRange: "$10 - $25",
    openHours: "10:00 - 23:00",
    tags: ["Uzbek cuisine"]
  },

  {
    id: 'bux-r2',
    category: 'restaurants',
    name: { uz: "Ayvan Restaurant", en: "Ayvan Restaurant", ru: "Ресторан Айван" },
    description: {
      uz: "Tom qismida joylashgan panoramali restoran.",
      en: "Rooftop restaurant with city views."
    },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    rating: 4.8,
    reviewCount: 760,
    priceRange: "$15 - $35",
    openHours: "11:00 - 23:00",
    tags: ["Rooftop","Tourist"]
  },

  {
    id: 'bux-r3',
    category: 'restaurants',
    name: { uz: "Old Bukhara Restaurant", en: "Old Bukhara Restaurant", ru: "Олд Бухара" },
    description: {
      uz: "Milliy atmosfera va an’anaviy taomlar.",
      en: "Traditional atmosphere and Uzbek dishes."
    },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    rating: 4.6,
    reviewCount: 540,
    priceRange: "$8 - $22",
    openHours: "10:00 - 22:00",
    tags: ["Local food"]
  },

  // ================= CULTURE =================
  {
    id: 'bux-c1',
    category: 'culture',
    name: { uz: "Nodir Devonbegi madrasasi", en: "Nadir Divan-Begi Madrasa", ru: "Медресе Надир Диван-Беги" },
    description: {
      uz: "Madaniy tadbirlar o‘tkaziladigan tarixiy madrasa.",
      en: "Historic madrasa hosting cultural shows."
    },
    image: "https://images.unsplash.com/photo-1604430456280-43c1c3c6c7b4?w=600&q=80",
    rating: 4.7,
    reviewCount: 600,
    entryFee: 20000,
    currency: "UZS",
    openHours: "09:00 - 20:00",
    tags: ["Culture","Show"]
  }

],

  tashkent: [

  // HOTELS
  {
    id: 'tsh-h1',
    category: 'hotels',
    name: { uz: "Hyatt Regency Tashkent", en: "Hyatt Regency Tashkent", ru: "Хаятт Ридженси Ташкент" },
    description: {
      uz: "Toshkentdagi eng mashhur 5 yulduzli mehmonxonalardan biri.",
      en: "One of the most famous 5-star hotels in Tashkent."
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    rating: 4.8,
    reviewCount: 950,
    pricePerNight: 220,
    currency: "USD",
    openHours: "24/7",
    amenities: ["Spa","Pool","Restaurant","WiFi"],
    tags: ["Luxury","City Center"]
  },

  {
    id: 'tsh-h2',
    category: 'hotels',
    name: { uz: "Wyndham Tashkent", en: "Wyndham Tashkent Hotel", ru: "Отель Виндхам Ташкент" },
    description: {
      uz: "Biznes sayohatchilar uchun qulay mehmonxona.",
      en: "Comfortable hotel for business travelers."
    },
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    rating: 4.6,
    reviewCount: 610,
    pricePerNight: 150,
    currency: "USD",
    openHours: "24/7",
    amenities: ["Gym","Restaurant","WiFi"],
    tags: ["Business","Luxury"]
  },

  {
    id: 'tsh-h3',
    category: 'hotels',
    name: { uz: "Hilton Tashkent City", en: "Hilton Tashkent City", ru: "Хилтон Ташкент Сити" },
    description: {
      uz: "Tashkent City hududidagi zamonaviy mehmonxona.",
      en: "Modern hotel located in Tashkent City."
    },
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    rating: 4.7,
    reviewCount: 820,
    pricePerNight: 210,
    currency: "USD",
    openHours: "24/7",
    amenities: ["Pool","Spa","Restaurant"],
    tags: ["Luxury"]
  },


  // MUSEUMS
  {
    id: 'tsh-m1',
    category: 'museums',
    name: { uz: "O‘zbekiston tarixi davlat muzeyi", en: "State Museum of History of Uzbekistan", ru: "Государственный музей истории Узбекистана" },
    description: {
      uz: "O‘zbekiston tarixiga oid eng katta muzeylardan biri.",
      en: "One of the largest museums dedicated to the history of Uzbekistan."
    },
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&q=80",
    rating: 4.6,
    reviewCount: 520,
    entryFee: 15000,
    currency: "UZS",
    openHours: "10:00 - 17:00",
    tags: ["History","Museum"]
  },

  {
    id: 'tsh-m2',
    category: 'museums',
    name: { uz: "Amir Temur muzeyi", en: "Amir Temur Museum", ru: "Музей Амира Темура" },
    description: {
      uz: "Buyuk sarkarda Amir Temurga bag‘ishlangan muzey.",
      en: "Museum dedicated to the great conqueror Amir Temur."
    },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80",
    rating: 4.8,
    reviewCount: 730,
    entryFee: 20000,
    currency: "UZS",
    openHours: "09:00 - 18:00",
    tags: ["History","Temur"]
  },


  // MONUMENTS
  {
    id: 'tsh-mon1',
    category: 'monuments',
    name: { uz: "Amir Temur haykali", en: "Amir Temur Statue", ru: "Памятник Амиру Темуру" },
    description: {
      uz: "Toshkent markazidagi mashhur haykal.",
      en: "Famous statue in the center of Tashkent."
    },
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=80",
    rating: 4.7,
    reviewCount: 900,
    entryFee: 0,
    currency: "UZS",
    openHours: "Always open",
    tags: ["Monument","History"]
  },

  {
    id: 'tsh-mon2',
    category: 'monuments',
    name: { uz: "Mustaqillik monumenti", en: "Independence Monument", ru: "Монумент Независимости" },
    description: {
      uz: "O‘zbekiston mustaqilligiga bag‘ishlangan monument.",
      en: "Monument dedicated to Uzbekistan independence."
    },
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=600&q=80",
    rating: 4.6,
    reviewCount: 620,
    entryFee: 0,
    currency: "UZS",
    openHours: "Always open",
    tags: ["Monument"]
  },


  // PARKS
  {
    id: 'tsh-p1',
    category: 'parks',
    name: { uz: "Tashkent City Park", en: "Tashkent City Park", ru: "Парк Ташкент Сити" },
    description: {
      uz: "Zamonaviy va chiroyli shahar bog‘i.",
      en: "Modern urban park."
    },
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    rating: 4.8,
    reviewCount: 1200,
    entryFee: 0,
    currency: "UZS",
    openHours: "08:00 - 23:00",
    tags: ["Park","Nature"]
  },

  {
    id: 'tsh-p2',
    category: 'parks',
    name: { uz: "Yapon bog‘i", en: "Japanese Garden", ru: "Японский сад" },
    description: {
      uz: "Yapon uslubida qurilgan tinch va chiroyli bog‘.",
      en: "Peaceful garden designed in Japanese style."
    },
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80",
    rating: 4.7,
    reviewCount: 500,
    entryFee: 10000,
    currency: "UZS",
    openHours: "09:00 - 20:00",
    tags: ["Nature","Park"]
  },


  // RESTAURANTS (ko‘p)
  {
    id: 'tsh-r1',
    category: 'restaurants',
    name: { uz: "Afsona Restaurant", en: "Afsona Restaurant", ru: "Ресторан Афсона" },
    description: {
      uz: "Milliy o‘zbek taomlari bilan mashhur restoran.",
      en: "Restaurant famous for Uzbek cuisine."
    },
    image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=600&q=80",
    rating: 4.8,
    reviewCount: 1200,
    priceRange: "$15 - $35",
    openHours: "10:00 - 23:00",
    tags: ["Uzbek food"]
  },

  {
    id: 'tsh-r2',
    category: 'restaurants',
    name: { uz: "Caravan Restaurant", en: "Caravan Restaurant", ru: "Ресторан Караван" },
    description: {
      uz: "Turistlar orasida juda mashhur restoran.",
      en: "Very popular restaurant among tourists."
    },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    rating: 4.7,
    reviewCount: 980,
    priceRange: "$20 - $40",
    openHours: "11:00 - 23:00",
    tags: ["Uzbek cuisine","Tourist"]
  },

  {
    id: 'tsh-r3',
    category: 'restaurants',
    name: { uz: "Besh Qozon Plov Center", en: "Besh Qozon Pilaf Center", ru: "Центр Плова Беш Козон" },
    description: {
      uz: "Mashhur Toshkent osh markazi.",
      en: "Famous plov center in Tashkent."
    },
    image: "https://images.unsplash.com/photo-1604908176997-431f74f5b7a2?w=600&q=80",
    rating: 4.9,
    reviewCount: 2100,
    priceRange: "$8 - $20",
    openHours: "09:00 - 20:00",
    tags: ["Plov","Uzbek food"]
  },

  {
    id: 'tsh-r4',
    category: 'restaurants',
    name: { uz: "Jumanji Restaurant", en: "Jumanji Restaurant", ru: "Ресторан Джуманджи" },
    description: {
      uz: "Zamonaviy interyerga ega restoran.",
      en: "Modern restaurant with unique interior."
    },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    rating: 4.6,
    reviewCount: 650,
    priceRange: "$15 - $35",
    openHours: "12:00 - 23:30",
    tags: ["Modern"]
  },


  // ENTERTAINMENT
  {
    id: 'tsh-e1',
    category: 'entertainment',
    name: { uz: "Magic City", en: "Magic City Park", ru: "Мэджик Сити" },
    description: {
      uz: "Toshkentdagi eng mashhur o‘yin-kulgi markazi.",
      en: "One of the most famous entertainment parks in Tashkent."
    },
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=600&q=80",
    rating: 4.8,
    reviewCount: 1800,
    entryFee: 30000,
    currency: "UZS",
    openHours: "10:00 - 23:00",
    tags: ["Entertainment","Park"]
  },


  // CULTURE
  {
    id: 'tsh-c1',
    category: 'culture',
    name: { uz: "Alisher Navoiy opera va balet teatri", en: "Alisher Navoi Opera and Ballet Theatre", ru: "Театр оперы и балета имени Навои" },
    description: {
      uz: "O‘zbekistondagi eng mashhur teatr.",
      en: "One of the most famous theaters in Uzbekistan."
    },
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
    rating: 4.8,
    reviewCount: 430,
    entryFee: 50000,
    currency: "UZS",
    openHours: "10:00 - 22:00",
    tags: ["Theater","Culture"]
  }

],

  khiva: [
    {
      id: 'xiv-1',
      category: 'monuments',
      name: { uz: "Ichon-qal'a", en: "Ichon-Qala", ru: "Ичан-Кала" },
      description: { uz: "Dunyodagi eng yaxshi saqlangan qadimiy shahar.", en: "One of the best-preserved ancient cities in the world." },
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      rating: 4.9,
      reviewCount: 1500,
      entryFee: 30000,
      currency: "UZS",
      openHours: "08:00 - 20:00",
      tags: ["UNESCO", "Qadimiy shahar"],
    },
    {
      id: 'xiv-2',
      category: 'monuments',
      name: { uz: "Kalta-Minor", en: "Kalta Minor", ru: "Калта-Минар" },
      description: { uz: "Tugallanmagan ulkan minora — Xivaning ramzi.", en: "The unfinished grand minaret, symbol of Khiva." },
      image: "https://images.unsplash.com/photo-1597101838432-86b79e5d6b3d?w=600&q=80",
      rating: 4.8,
      reviewCount: 980,
      entryFee: 15000,
      currency: "UZS",
      openHours: "08:00 - 19:00",
      tags: ["Minora", "Ramz"],
    },
    {
      id: 'xiv-3',
      category: 'culture',
      name: { uz: "Pahlavon Mahmud maqbarasi", en: "Pahlavon Mahmud Mausoleum", ru: "Мавзолей Пахлавана Махмуда" },
      description: { uz: "Xivaning milliy qahramoni Pahlavon Mahmud maqbarasi.", en: "Mausoleum of Khiva's national hero Pahlavon Mahmud." },
      image: "https://images.unsplash.com/photo-1586185976272-eb473dc91c05?w=600&q=80",
      rating: 4.7,
      reviewCount: 720,
      entryFee: 12000,
      currency: "UZS",
      openHours: "09:00 - 18:00",
      tags: ["Maqbara", "Tarix"],
    },
  ],

  fergana: [
    {
      id: 'ferg-1',
      category: 'culture',
      name: { uz: "Marg'ilon ipak fabrikasi", en: "Margilan Silk Factory", ru: "Шёлковая фабрика Маргилана" },
      description: { uz: "O'zbekistonning eng mashhur ipak to'qimachilik fabrikasi.", en: "Uzbekistan's most famous silk weaving factory." },
      image: "https://images.unsplash.com/photo-1625244695078-e7d0b0c7e2d1?w=600&q=80",
      rating: 4.8,
      reviewCount: 640,
      entryFee: 10000,
      currency: "UZS",
      openHours: "09:00 - 17:00",
      tags: ["Ipak", "Hunarmandchilik"],
    },
    {
      id: 'ferg-2',
      category: 'culture',
      name: { uz: "Rishton kulolchilik ustaxonasi", en: "Rishtan Ceramics Workshop", ru: "Керамическая мастерская Риштана" },
      description: { uz: "Mashhur Rishton ko'k-oq kulolchiligi ustaxonasi.", en: "Famous Rishtan blue-and-white ceramics workshop." },
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80",
      rating: 4.7,
      reviewCount: 380,
      entryFee: 8000,
      currency: "UZS",
      openHours: "09:00 - 17:00",
      tags: ["Kulolchilik", "San'at"],
    },
    {
      id: 'ferg-3',
      category: 'nature',
      name: { uz: "Farg'ona vodiysi panoramasi", en: "Fergana Valley Panorama", ru: "Панорама Ферганской долины" },
      description: { uz: "Tog'lardan ko'rinadigan ajoyib vodiy manzarasi.", en: "Stunning valley view from the mountains." },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      rating: 4.9,
      reviewCount: 520,
      entryFee: 0,
      currency: "UZS",
      openHours: "Doim ochiq",
      tags: ["Tabiat", "Panorama"],
    },
  ],

  namangan: [
    {
      id: 'nam-1',
      category: 'monuments',
      name: { uz: "Xudoyor Khan saroyi", en: "Khudayar Khan Palace", ru: "Дворец Худояр-хана" },
      description: { uz: "XIX asrda qurilgan so'nggi Qo'qon xoni saroyi.", en: "Palace of the last Khan of Kokand, built in the 19th century." },
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
      rating: 4.6,
      reviewCount: 480,
      entryFee: 15000,
      currency: "UZS",
      openHours: "09:00 - 17:00",
      tags: ["Saroy", "Tarix"],
    },
    {
      id: 'nam-2',
      category: 'entertainment',
      name: { uz: "Namangan bozori", en: "Namangan Bazaar", ru: "Наманганский базар" },
      description: { uz: "Shahardagi eng katta va gavjum bozor.", en: "The largest and busiest bazaar in the city." },
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
      rating: 4.4,
      reviewCount: 320,
      entryFee: 0,
      currency: "UZS",
      openHours: "07:00 - 18:00",
      tags: ["Bozor", "Savdo"],
    },
  ],

  nukus: [
    {
      id: 'nuk-1',
      category: 'museums',
      name: { uz: "Savitskiy muzeyi", en: "Savitsky Museum", ru: "Музей Савицкого" },
      description: { uz: "Dunyodagi eng noyob avangard san'at to'plami — 'Cho'ldagi Louvre'.", en: "One of the world's most unique avant-garde art collections — 'Louvre of the Desert'." },
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
      rating: 4.9,
      reviewCount: 620,
      entryFee: 20000,
      currency: "UZS",
      openHours: "09:00 - 17:00",
      tags: ["San'at", "Noyob"],
    },
    {
      id: 'nuk-2',
      category: 'nature',
      name: { uz: "Aral dengizi", en: "Aral Sea", ru: "Аральское море" },
      description: { uz: "Bir vaqtlar dunyodagi to'rtinchi eng katta ko'l — hozir ekologik falokatning ramzi.", en: "Once the world's fourth largest lake — now a symbol of ecological disaster." },
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&q=80",
      rating: 4.5,
      reviewCount: 390,
      entryFee: 0,
      currency: "UZS",
      openHours: "Doim ochiq",
      tags: ["Tabiat", "Ekologiya"],
    },
    {
      id: 'nuk-3',
      category: 'culture',
      name: { uz: "Moynaq kemalar qabristoni", en: "Moynaq Ship Graveyard", ru: "Кладбище кораблей Муйнак" },
      description: { uz: "Qurib qolgan Aral dengizida qolgan eski kemalar.", en: "Old ships stranded in the dried Aral Sea." },
      image: "https://images.unsplash.com/photo-1625244695078-e7d0b0c7e2d1?w=600&q=80",
      rating: 4.7,
      reviewCount: 450,
      entryFee: 0,
      currency: "UZS",
      openHours: "Doim ochiq",
      tags: ["Noyob", "Tarix"],
    },
  ],
};

export const regionHotels = {
  andijan: [
    {
      id: 'and-h1',
      name: "Bobur Palace Hotel",
      stars: 4,
      image: "/images/hotel1.jpg",
      description: { uz: "Andijon markazida joylashgan qulay mehmonxona.", en: "Comfortable hotel in the center of Andijan." },
      price: 60,
      currency: "USD",
      rating: 4.4,
      reviewCount: 180,
      amenities: ["WiFi", "Restaurant", "Parking"],
      address: "Mustaqillik ko'chasi, 12",
      rooms: [
        { id: 'r1', type: "Standard", price: 60, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
        { id: 'r2', type: "Deluxe", price: 90, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400" },
      ]
    },
    {
  id: 'and-h2',
  name: "Royal Plaza Andijan",
  stars: 4,
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  description: { 
    uz: "Zamonaviy dizaynga ega Andijondagi mashhur mehmonxona.", 
    en: "Modern designed popular hotel in Andijan." 
  },
  price: 75,
  currency: "USD",
  rating: 4.6,
  reviewCount: 210,
  amenities: ["WiFi", "Restaurant", "Fitness Center", "Parking"],
  address: "Bobur shoh ko'chasi, 45",
  rooms: [
    { id: 'r1', type: "Standard", price: 75, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400" },
    { id: 'r2', type: "Suite", price: 120, capacity: 3, available: true, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400" },
  ]
    },
    {
      id: 'and-h3',
      name: "Sheykh Hotel Andijan",
      stars: 3,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
      description: { 
        uz: "Shinam va arzon narxdagi mehmonxona.", 
        en: "Cozy and affordable hotel." 
      },
      price: 45,
      currency: "USD",
      rating: 4.2,
      reviewCount: 95,
      amenities: ["WiFi", "Breakfast", "Parking"],
      address: "Navoi ko'chasi, 8",
      rooms: [
        { id: 'r1', type: "Single", price: 40, capacity: 1, available: true, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400" },
        { id: 'r2', type: "Double", price: 45, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400" },
      ]
    },
    {
      id: 'and-h4',
      name: "Bogishamol Hotel",
      stars: 4,
      image: "/images/hotel1.jpg",
      description: { 
        uz: "Bog' manzarali sokin hududdagi mehmonxona.", 
        en: "Peaceful hotel with garden view." 
      },
      price: 65,
      currency: "USD",
      rating: 4.5,
      reviewCount: 140,
      amenities: ["WiFi", "Restaurant", "Garden", "Parking"],
      address: "Bog'ishamol tumani",
      rooms: [
        { id: 'r1', type: "Standard", price: 65, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400" },
        { id: 'r2', type: "Family", price: 95, capacity: 4, available: true, image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400" },
      ]
    },
    {
      id: 'and-h5',
      name: "Andijan International Hotel",
      stars: 5,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
      description: { 
        uz: "Premium xizmatlarga ega zamonaviy mehmonxona.", 
        en: "Modern hotel with premium services." 
      },
      price: 110,
      currency: "USD",
      rating: 4.7,
      reviewCount: 320,
      amenities: ["WiFi", "Restaurant", "Spa", "Pool", "Fitness Center", "Parking"],
      address: "Temuriylar ko'chasi, 20",
      rooms: [
        { id: 'r1', type: "Deluxe", price: 110, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
        { id: 'r2', type: "Executive Suite", price: 160, capacity: 3, available: true, image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400" },
      ]
    }
  ],

  samarkand: [
  {
    id: 'sam-h1',
    name: "Registon Saroyi Mehmonxonasi",
    stars: 5,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    description: {
      uz: "Registon maydoniga yaqin joylashgan hashamatli mehmonxona.",
      en: "Luxury hotel located near Registan Square."
    },
    price: 160,
    currency: "USD",
    rating: 4.8,
    reviewCount: 310,
    amenities: ["WiFi", "Spa", "Restaurant", "Pool", "Parking"],
    address: "Registon ko'chasi, 5",
    rooms: [
      { id: 'r1', type: "Standard", price: 160, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
      { id: 'r2', type: "Suite", price: 300, capacity: 4, available: true, image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400" },
    ]
  },

  {
    id: 'sam-h2',
    name: "Ipak Yo‘li Mehmon Uyi",
    stars: 4,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
    description: {
      uz: "Milliy uslubda bezatilgan shinam butik mehmonxona.",
      en: "Cozy boutique hotel decorated in traditional style."
    },
    price: 85,
    currency: "USD",
    rating: 4.6,
    reviewCount: 205,
    amenities: ["WiFi", "Breakfast", "Garden", "Restaurant"],
    address: "Universitet xiyoboni, 12",
    rooms: [
      { id: 'r3', type: "Standard", price: 85, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400" },
      { id: 'r4', type: "Superior", price: 120, capacity: 3, available: true, image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400" },
    ]
  },

  {
    id: 'sam-h3',
    name: "Afrosiyob Mehmonxonasi",
    stars: 3,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    description: {
      uz: "Sayyohlar uchun qulay va arzon mehmonxona.",
      en: "Affordable and comfortable hotel for travelers."
    },
    price: 55,
    currency: "USD",
    rating: 4.3,
    reviewCount: 150,
    amenities: ["WiFi", "Parking", "Breakfast"],
    address: "Afrosiyob ko'chasi, 21",
    rooms: [
      { id: 'r5', type: "Single", price: 45, capacity: 1, available: true, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400" },
      { id: 'r6', type: "Double", price: 55, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400" },
    ]
  },

  {
    id: 'sam-h4',
    name: "Bibixonim Mehmon Uyi",
    stars: 3,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    description: {
      uz: "Bibixonim masjidiga yaqin oilaviy mehmon uyi.",
      en: "Family guest house near Bibi-Khanym Mosque."
    },
    price: 40,
    currency: "USD",
    rating: 4.2,
    reviewCount: 98,
    amenities: ["WiFi", "Breakfast", "Garden"],
    address: "Bibixonim ko'chasi, 7",
    rooms: [
      { id: 'r7', type: "Standard", price: 40, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400" },
      { id: 'r8', type: "Family", price: 70, capacity: 4, available: true, image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400" },
    ]
  },

  {
    id: 'sam-h5',
    name: "Zarafshon Plaza Mehmonxonasi",
    stars: 4,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
    description: {
      uz: "Zamonaviy xizmatlarga ega biznes mehmonxona.",
      en: "Modern business hotel with full services."
    },
    price: 105,
    currency: "USD",
    rating: 4.5,
    reviewCount: 187,
    amenities: ["WiFi", "Restaurant", "Fitness Center", "Parking"],
    address: "Zarafshon ko'chasi, 18",
    rooms: [
      { id: 'r9', type: "Standard", price: 105, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
      { id: 'r10', type: "Deluxe", price: 145, capacity: 3, available: true, image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400" },
    ]
  },

  {
    id: 'sam-h6',
    name: "Samarqand Sayyoh Mehmonxonasi",
    stars: 2,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
    description: {
      uz: "Byudjet sayohatchilar uchun arzon va qulay mehmonxona.",
      en: "Budget-friendly hotel for travelers."
    },
    price: 28,
    currency: "USD",
    rating: 4.0,
    reviewCount: 76,
    amenities: ["WiFi", "Parking"],
    address: "Temiryo‘l vokzali yaqinida",
    rooms: [
      { id: 'r11', type: "Single", price: 25, capacity: 1, available: true, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400" },
      { id: 'r12', type: "Double", price: 28, capacity: 2, available: true, image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400" },
    ]
  }
],

  tashkent:[
{
 id:'tsh-h1',
 name:"Toshkent Grand Mehmonxonasi",
 stars:5,
 image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
 description:{uz:"Poytaxt markazidagi premium mehmonxona.",en:"Premium hotel in city center."},
 price:190,currency:"USD",rating:4.9,reviewCount:410,
 amenities:["WiFi","Pool","Spa","Restaurant","Parking"],
 address:"Amir Temur xiyoboni, 1",
 rooms:[
  {id:'r1',type:"Standard",price:190,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400"}
 ]
},
{
 id:'tsh-h2',
 name:"Chorsu Mehmon Uyi",
 stars:3,
 image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
 description:{uz:"Eski shahar hududidagi arzon mehmonxona.",en:"Budget hotel in old town."},
 price:45,currency:"USD",rating:4.2,reviewCount:130,
 amenities:["WiFi","Breakfast"],
 address:"Chorsu bozori",
 rooms:[
  {id:'r2',type:"Double",price:45,capacity:2,available:true,image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"}
 ]
},
{
 id:'tsh-h3',
 name:"Minor Plaza Hotel",
 stars:4,
 image:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
 description:{uz:"Zamonaviy biznes mehmonxonasi.",en:"Modern business hotel."},
 price:110,currency:"USD",rating:4.6,reviewCount:250,
 amenities:["WiFi","Fitness","Restaurant"],
 address:"Minor masjidi yaqinida",
 rooms:[
  {id:'r3',type:"Standard",price:110,capacity:2,available:true,image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400"}
 ]
},
{
 id:'tsh-h4',
 name:"Yunusobod Inn",
 stars:3,
 image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
 description:{uz:"Sokin hududdagi qulay mehmonxona.",en:"Quiet comfortable hotel."},
 price:60,currency:"USD",rating:4.3,reviewCount:90,
 amenities:["WiFi","Parking"],
 address:"Yunusobod tumani",
 rooms:[{id:'r4',type:"Standard",price:60,capacity:2,available:true,image:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400"}]
},
{
 id:'tsh-h5',
 name:"Airport Hotel",
 stars:4,
 image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
 description:{uz:"Aeroport yaqinidagi mehmonxona.",en:"Hotel near airport."},
 price:85,currency:"USD",rating:4.4,reviewCount:160,
 amenities:["WiFi","Transfer","Restaurant"],
 address:"Sergeli yo'li",
 rooms:[{id:'r5',type:"Standard",price:85,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400"}]
},
{
 id:'tsh-h6',
 name:"Sayyoh Budget Hotel",
 stars:2,
 image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
 description:{uz:"Talabalar va backpackerlar uchun arzon joy.",en:"Budget traveler hotel."},
 price:25,currency:"USD",rating:4.0,reviewCount:70,
 amenities:["WiFi"],
 address:"Olmazor tumani",
 rooms:[{id:'r6',type:"Single",price:25,capacity:1,available:true,image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400"}]
}
],

  bukhara: [
{
  id:'bux-h1',
  name:"Ark Saroyi Mehmonxonasi",
  stars:5,
  image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
  description:{uz:"Ark qal'asiga yaqin hashamatli mehmonxona.",en:"Luxury hotel near Ark fortress."},
  price:150,currency:"USD",rating:4.8,reviewCount:260,
  amenities:["WiFi","Pool","Restaurant","Spa","Parking"],
  address:"Ark ko'chasi, 3",
  rooms:[
    {id:'r1',type:"Standard",price:150,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400"},
    {id:'r2',type:"Suite",price:280,capacity:4,available:true,image:"https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400"}
  ]
},
{
  id:'bux-h2',
  name:"Labi Hovuz Mehmon Uyi",
  stars:4,
  image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
  description:{uz:"Tarixiy markazdagi milliy uslubdagi mehmon uyi.",en:"Traditional guest house in old city."},
  price:85,currency:"USD",rating:4.6,reviewCount:190,
  amenities:["WiFi","Breakfast","Garden"],
  address:"Labi Hovuz, 12",
  rooms:[
    {id:'r3',type:"Standard",price:85,capacity:2,available:true,image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"}
  ]
},
{
  id:'bux-h3',
  name:"Buxoro Sayyoh Mehmonxonasi",
  stars:3,
  image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
  description:{uz:"Qulay va arzon mehmonxona.",en:"Affordable hotel."},
  price:50,currency:"USD",rating:4.3,reviewCount:120,
  amenities:["WiFi","Parking"],
  address:"G'ijduvon ko'chasi, 8",
  rooms:[
    {id:'r4',type:"Double",price:50,capacity:2,available:true,image:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400"}
  ]
},
{
  id:'bux-h4',
  name:"Minorai Kalon Hotel",
  stars:4,
  image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  description:{uz:"Kalon minorasi yaqinida joylashgan mehmonxona.",en:"Hotel near Kalon Minaret."},
  price:95,currency:"USD",rating:4.5,reviewCount:170,
  amenities:["WiFi","Restaurant","Rooftop"],
  address:"Kalon maydoni, 5",
  rooms:[
    {id:'r5',type:"Standard",price:95,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400"}
  ]
},
{
  id:'bux-h5',
  name:"Somoniylar Mehmon Uyi",
  stars:3,
  image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
  description:{uz:"Oilaviy shinam mehmon uyi.",en:"Cozy family guest house."},
  price:42,currency:"USD",rating:4.1,reviewCount:80,
  amenities:["WiFi","Breakfast"],
  address:"Somoniylar bog'i",
  rooms:[
    {id:'r6',type:"Standard",price:42,capacity:2,available:true,image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400"}
  ]
},
{
  id:'bux-h6',
  name:"Zarafshon Plaza",
  stars:4,
  image:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
  description:{uz:"Biznes sayohatchilar uchun zamonaviy mehmonxona.",en:"Modern business hotel."},
  price:110,currency:"USD",rating:4.6,reviewCount:210,
  amenities:["WiFi","Fitness","Restaurant","Parking"],
  address:"Mustaqillik ko'chasi, 22",
  rooms:[
    {id:'r7',type:"Deluxe",price:110,capacity:2,available:true,image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400"}
  ]
}
],

  khiva:[
{
 id:'xiv-h1',
 name:"Ichan Qal'a Mehmonxonasi",
 stars:4,
 image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
 description:{uz:"Ichan qal'a ichidagi tarixiy mehmonxona.",en:"Historic hotel inside Ichan Kala."},
 price:120,currency:"USD",rating:4.7,reviewCount:210,
 amenities:["WiFi","Restaurant","Rooftop"],
 address:"Ichan qal'a",
 rooms:[{id:'r1',type:"Standard",price:120,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400"}]
},
{
 id:'xiv-h2',
 name:"Xiva Sayyoh Uyi",
 stars:3,
 image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
 description:{uz:"Milliy uslubdagi mehmon uyi.",en:"Traditional guest house."},
 price:55,currency:"USD",rating:4.4,reviewCount:130,
 amenities:["WiFi","Breakfast"],
 address:"Pahlavon Mahmud ko'chasi",
 rooms:[{id:'r2',type:"Double",price:55,capacity:2,available:true,image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"}]
},
{
 id:'xiv-h3',
 name:"Xorazm Plaza",
 stars:4,
 image:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
 description:{uz:"Zamonaviy xizmatlarga ega mehmonxona.",en:"Modern hotel."},
 price:95,currency:"USD",rating:4.5,reviewCount:150,
 amenities:["WiFi","Pool","Restaurant"],
 address:"Urganch yo'li",
 rooms:[{id:'r3',type:"Standard",price:95,capacity:2,available:true,image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400"}]
},
{
 id:'xiv-h4',
 name:"Karvon Saroy Mehmon Uyi",
 stars:3,
 image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
 description:{uz:"Sayyohlar uchun shinam joy.",en:"Cozy stay for tourists."},
 price:48,currency:"USD",rating:4.2,reviewCount:85,
 amenities:["WiFi","Garden"],
 address:"Eski shahar",
 rooms:[{id:'r4',type:"Standard",price:48,capacity:2,available:true,image:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400"}]
},
{
 id:'xiv-h5',
 name:"Xiva Budget Hotel",
 stars:2,
 image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
 description:{uz:"Arzon turar joy.",en:"Budget stay."},
 price:28,currency:"USD",rating:4.0,reviewCount:60,
 amenities:["WiFi"],
 address:"Markaziy ko'cha",
 rooms:[{id:'r5',type:"Single",price:28,capacity:1,available:true,image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400"}]
},
{
 id:'xiv-h6',
 name:"Amir Temur Hotel Xiva",
 stars:4,
 image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
 description:{uz:"Qulay oilaviy mehmonxona.",en:"Comfortable family hotel."},
 price:80,currency:"USD",rating:4.4,reviewCount:120,
 amenities:["WiFi","Restaurant","Parking"],
 address:"Temur ko'chasi",
 rooms:[{id:'r6',type:"Standard",price:80,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400"}]
}
],

  fergana:[
{
 id:'far-h1',
 name:"Farg‘ona Grand Mehmonxonasi",
 stars:4,
 image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
 description:{uz:"Farg‘ona markazidagi zamonaviy mehmonxona.",en:"Modern hotel in Fergana city center."},
 price:95,currency:"USD",rating:4.6,reviewCount:180,
 amenities:["WiFi","Restaurant","Parking","Fitness"],
 address:"Alisher Navoiy ko'chasi, 10",
 rooms:[
  {id:'r1',type:"Standard",price:95,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400"}
 ]
},
{
 id:'far-h2',
 name:"Vodiy Plaza Hotel",
 stars:4,
 image:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
 description:{uz:"Biznes safarlar uchun qulay mehmonxona.",en:"Comfortable hotel for business trips."},
 price:110,currency:"USD",rating:4.5,reviewCount:140,
 amenities:["WiFi","Restaurant","Conference Hall"],
 address:"Mustaqillik ko'chasi, 22",
 rooms:[
  {id:'r2',type:"Deluxe",price:110,capacity:2,available:true,image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400"}
 ]
},
{
 id:'far-h3',
 name:"Atlas Mehmon Uyi",
 stars:3,
 image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
 description:{uz:"Milliy uslubdagi shinam mehmon uyi.",en:"Cozy traditional guest house."},
 price:55,currency:"USD",rating:4.3,reviewCount:95,
 amenities:["WiFi","Breakfast","Garden"],
 address:"Atlas ko'chasi, 7",
 rooms:[
  {id:'r3',type:"Standard",price:55,capacity:2,available:true,image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"}
 ]
},
{
 id:'far-h4',
 name:"Farg‘ona Sayyoh Hotel",
 stars:3,
 image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
 description:{uz:"Sayyohlar uchun arzon va qulay mehmonxona.",en:"Affordable tourist hotel."},
 price:48,currency:"USD",rating:4.2,reviewCount:80,
 amenities:["WiFi","Parking"],
 address:"Temiryo‘l vokzali yaqinida",
 rooms:[
  {id:'r4',type:"Double",price:48,capacity:2,available:true,image:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400"}
 ]
},
{
 id:'far-h5',
 name:"Marg‘ilon Inn",
 stars:3,
 image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
 description:{uz:"Marg‘ilon shahridagi oilaviy mehmonxona.",en:"Family hotel in Margilan."},
 price:60,currency:"USD",rating:4.4,reviewCount:105,
 amenities:["WiFi","Restaurant"],
 address:"Marg‘ilon markazi",
 rooms:[
  {id:'r5',type:"Standard",price:60,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400"}
 ]
},
{
 id:'far-h6',
 name:"Vodiy Budget Hotel",
 stars:2,
 image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
 description:{uz:"Byudjet sayohatchilar uchun arzon mehmonxona.",en:"Budget traveler hotel."},
 price:27,currency:"USD",rating:4.0,reviewCount:60,
 amenities:["WiFi"],
 address:"Qo‘qon yo‘li",
 rooms:[
  {id:'r6',type:"Single",price:27,capacity:1,available:true,image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400"}
 ]
}
],

  namangan:[
{
 id:'nam-h1',
 name:"Namangan Palace Mehmonxonasi",
 stars:4,
 image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
 description:{uz:"Namangan markazidagi zamonaviy mehmonxona.",en:"Modern central hotel."},
 price:90,currency:"USD",rating:4.6,reviewCount:150,
 amenities:["WiFi","Restaurant","Parking"],
 address:"Bobur ko'chasi, 14",
 rooms:[{id:'r1',type:"Standard",price:90,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400"}]
},
{
 id:'nam-h2',
 name:"Chortoq Resort Hotel",
 stars:4,
 image:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
 description:{uz:"Chortoq dam olish hududidagi mehmonxona.",en:"Resort hotel in Chortoq."},
 price:120,currency:"USD",rating:4.7,reviewCount:210,
 amenities:["WiFi","Pool","Spa","Restaurant"],
 address:"Chortoq tumani",
 rooms:[{id:'r2',type:"Deluxe",price:120,capacity:2,available:true,image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400"}]
},
{
 id:'nam-h3',
 name:"Namangan Sayyoh Uyi",
 stars:3,
 image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
 description:{uz:"Qulay va arzon mehmonxona.",en:"Affordable hotel."},
 price:50,currency:"USD",rating:4.2,reviewCount:85,
 amenities:["WiFi","Breakfast"],
 address:"Markaziy ko'cha",
 rooms:[{id:'r3',type:"Double",price:50,capacity:2,available:true,image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"}]
},
{
 id:'nam-h4',
 name:"Gulshan Mehmonxonasi",
 stars:3,
 image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
 description:{uz:"Sokin hududdagi oilaviy mehmonxona.",en:"Quiet family hotel."},
 price:55,currency:"USD",rating:4.3,reviewCount:90,
 amenities:["WiFi","Parking"],
 address:"Yangi Namangan",
 rooms:[{id:'r4',type:"Standard",price:55,capacity:2,available:true,image:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400"}]
},
{
 id:'nam-h5',
 name:"Orzu Budget Hotel",
 stars:2,
 image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
 description:{uz:"Talabalar uchun arzon turar joy.",en:"Budget stay."},
 price:26,currency:"USD",rating:4.0,reviewCount:55,
 amenities:["WiFi"],
 address:"Kosonsoy yo'li",
 rooms:[{id:'r5',type:"Single",price:26,capacity:1,available:true,image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400"}]
},
{
 id:'nam-h6',
 name:"Vodiy Plaza Namangan",
 stars:4,
 image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
 description:{uz:"Biznes uchrashuvlar uchun qulay mehmonxona.",en:"Business friendly hotel."},
 price:105,currency:"USD",rating:4.5,reviewCount:130,
 amenities:["WiFi","Restaurant","Conference Hall"],
 address:"Mustaqillik shoh ko'chasi",
 rooms:[{id:'r6',type:"Standard",price:105,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400"}]
}
],

  nukus:[
{
 id:'nuk-h1',
 name:"Savitskiy Plaza Mehmonxonasi",
 stars:4,
 image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
 description:{uz:"Savitskiy muzeyi yaqinidagi mehmonxona.",en:"Hotel near Savitsky Museum."},
 price:100,currency:"USD",rating:4.6,reviewCount:170,
 amenities:["WiFi","Restaurant","Parking"],
 address:"Savitskiy ko'chasi, 2",
 rooms:[{id:'r1',type:"Standard",price:100,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400"}]
},
{
 id:'nuk-h2',
 name:"Amudaryo Mehmonxonasi",
 stars:3,
 image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
 description:{uz:"Qulay va arzon mehmonxona.",en:"Comfortable affordable hotel."},
 price:52,currency:"USD",rating:4.3,reviewCount:95,
 amenities:["WiFi","Breakfast"],
 address:"Amudaryo ko'chasi",
 rooms:[{id:'r2',type:"Double",price:52,capacity:2,available:true,image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"}]
},
{
 id:'nuk-h3',
 name:"Qoraqalpoq Inn",
 stars:3,
 image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
 description:{uz:"Milliy uslubdagi mehmon uyi.",en:"Traditional guest house."},
 price:45,currency:"USD",rating:4.2,reviewCount:70,
 amenities:["WiFi","Garden"],
 address:"Markaziy Nukus",
 rooms:[{id:'r3',type:"Standard",price:45,capacity:2,available:true,image:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400"}]
},
{
 id:'nuk-h4',
 name:"Aral Plaza Hotel",
 stars:4,
 image:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
 description:{uz:"Zamonaviy xizmatlarga ega mehmonxona.",en:"Modern hotel."},
 price:110,currency:"USD",rating:4.5,reviewCount:120,
 amenities:["WiFi","Restaurant","Fitness"],
 address:"Aral yo'li",
 rooms:[{id:'r4',type:"Deluxe",price:110,capacity:2,available:true,image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400"}]
},
{
 id:'nuk-h5',
 name:"Nukus Sayyoh Uyi",
 stars:2,
 image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80",
 description:{uz:"Byudjet mehmonxona.",en:"Budget hotel."},
 price:24,currency:"USD",rating:4.0,reviewCount:50,
 amenities:["WiFi"],
 address:"Temiryo‘l vokzali",
 rooms:[{id:'r5',type:"Single",price:24,capacity:1,available:true,image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400"}]
},
{
 id:'nuk-h6',
 name:"Orol Mehmonxonasi",
 stars:3,
 image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
 description:{uz:"Sayyohlar uchun qulay mehmonxona.",en:"Comfortable tourist hotel."},
 price:60,currency:"USD",rating:4.4,reviewCount:90,
 amenities:["WiFi","Restaurant","Parking"],
 address:"Beruniy ko'chasi",
 rooms:[{id:'r6',type:"Standard",price:60,capacity:2,available:true,image:"https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400"}]
}
],

};