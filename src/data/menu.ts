export type Lang = 'EN' | 'AZ' | 'RU'
export const words = {
  EN: {
    kitchen: 'Kitchen',
    bar: 'Bar',
    back: 'Back',
    home: 'Home',
    choose: 'Choose a language',
    enter: 'Select your language. Make yourself at home.',
    ingredients: 'Ingredients',
    about: 'About this dish',
    menu: 'The menu',
    explore: 'Choose your kind of good time.',
    food: 'Fire up your appetite.',
    drinks: 'Good drinks. Better company.',
    tagline: 'Cold beer • Hot meat • Loud times',
    review: 'The only review that matters is yours',
    volume: 'Serving',
    demo: 'Sample menu • Prices in Azerbaijani manat',
    fire: 'Made with fire',
    collection: 'Garage collection',
    select: 'Language selected: EN',
  },
  AZ: {
    kitchen: 'Mətbəx',
    bar: 'Bar',
    back: 'Geri',
    home: 'Ana səhifə',
    choose: 'Dil seçin',
    enter: 'Dilinizi seçin. Özünüzü evdəki kimi hiss edin.',
    ingredients: 'Tərkibi',
    about: 'Yemək haqqında',
    menu: 'Menyu',
    explore: 'Yaxşı vaxt keçirməyin yolunu seçin.',
    food: 'İştahanızı alovlandırın.',
    drinks: 'Gözəl içkilər. Əla dostlar.',
    tagline: 'Soyuq pivə • İsti ət • Xoş anlar',
    review: 'Ən vacib rəy sizin rəyinizdir',
    volume: 'Porsiya',
    demo: 'Nümunə menyu • Qiymətlər Azərbaycan manatı ilə',
    fire: 'Odda hazırlanıb',
    collection: 'Garage kolleksiyası',
    select: 'Dil seçildi: AZ',
  },
  RU: {
    kitchen: 'Кухня',
    bar: 'Бар',
    back: 'Назад',
    home: 'Главная',
    choose: 'Выберите язык',
    enter: 'Выберите язык. Чувствуйте себя как дома.',
    ingredients: 'Состав',
    about: 'Об этом блюде',
    menu: 'Меню',
    explore: 'Выберите свой идеальный вечер.',
    food: 'Разожгите свой аппетит.',
    drinks: 'Хорошие напитки. Отличная компания.',
    tagline: 'Холодное пиво • Горячее мясо • Яркие вечера',
    review: 'Единственный важный отзыв — ваш',
    volume: 'Порция',
    demo: 'Демонстрационное меню • Цены в манатах',
    fire: 'Приготовлено на огне',
    collection: 'Коллекция Garage',
    select: 'Язык выбран: RU',
  },
}
export const kitchenCategories = [
  [
    'Sandwiches & breakfast',
    'Sendviçlər və səhər yeməyi',
    'Сэндвичи и завтраки',
  ],
  ['Soups', 'Şorbalar', 'Супы'],
  ['Salads', 'Salatlar', 'Салаты'],
  ['Starters', 'Qəlyanaltılar', 'Закуски'],
  ['Pasta & garnish', 'Pasta və qarnirlər', 'Паста и гарниры'],
  ['Main course poultry', 'Quş əti yeməkləri', 'Блюда из птицы'],
  ['Main course seafood', 'Dəniz məhsulları', 'Морепродукты'],
  ['Main course meat', 'Ət yeməkləri', 'Мясные блюда'],
  [
    'Desserts & hot drinks',
    'Desertlər və isti içkilər',
    'Десерты и горячие напитки',
  ],
]
export const barCategories = [
  ['Draft beer', 'Çəllək pivəsi', 'Разливное пиво'],
  ['Bottled beer & cider', 'Şüşə pivə və sidr', 'Бутылочное пиво и сидр'],
  ['Whiskey', 'Viski', 'Виски'],
  ['Rum', 'Rom', 'Ром'],
  ['Gin', 'Cin', 'Джин'],
  ['Vermouth', 'Vermut', 'Вермут'],
  ['Wine & prosecco', 'Şərab və prosecco', 'Вино и просекко'],
  ['Liqueurs & bitters', 'Likörlər və bitterlər', 'Ликёры и биттеры'],
  ['Other spirits', 'Digər spirtli içkilər', 'Другие крепкие напитки'],
  ['Soft drinks', 'Alkoqolsuz içkilər', 'Безалкогольные напитки'],
]
export const label = (labels: string[], lang: Lang) =>
  labels[lang === 'EN' ? 0 : lang === 'AZ' ? 1 : 2]
export type Dish = {
  name: string
  price: number
  category: number
  photo: string
  ingredients: string[][]
  description: string[]
}
const photo = (id: string) =>
  `/.netlify/images?url=/img/${id}.jpg&w=1000&fm=webp&q=85`
// Demonstration catalog: replace with the venue-approved menu before guest use.
export const dishes: Dish[] = [
  {
    name: 'FULL ENGLISH BREAKFAST',
    price: 16,
    category: 0,
    photo: photo('photo-1533089860892-a7c6f0a88666'),
    ingredients: [
      ['Eggs', 'Sausages & bacon', 'Toast, mushrooms & tomatoes'],
      ['Yumurta', 'Kolbasa və bekon', 'Tost, göbələk və pomidor'],
      ['Яйца', 'Колбаски и бекон', 'Тосты, грибы и томаты'],
    ],
    description: [
      'A proper start. Golden eggs, crisp bacon and grilled favourites, served straight from our kitchen.',
      'Günə gözəl başlanğıc. Yumurta, xırtıldayan bekon və qrildə tərəvəzlər.',
      'Правильное начало дня: яйца, хрустящий бекон и овощи с гриля.',
    ],
  },
  {
    name: 'OMELETTE',
    price: 9,
    category: 0,
    photo: photo('photo-1510693206972-df098062cb71'),
    ingredients: [
      ['Eggs', 'Mushrooms', 'Cheddar & herbs'],
      ['Yumurta', 'Göbələk', 'Çedar və göyərti'],
      ['Яйца', 'Грибы', 'Чеддер и зелень'],
    ],
    description: [
      'Soft folded eggs with melted cheddar and pan-fried mushrooms.',
      'Əridilmiş çedar və qızardılmış göbələk ilə yumşaq omlet.',
      'Нежный омлет с расплавленным чеддером и обжаренными грибами.',
    ],
  },
  {
    name: 'HAMBURGER',
    price: 13,
    category: 0,
    photo: photo('photo-1568901346375-23c9450c58cd'),
    ingredients: [
      ['Beef patty', 'Sesame bun & cheddar', 'Lettuce, tomato & house sauce'],
      [
        'Mal əti kotleti',
        'Küncütlü çörək və çedar',
        'Kahı, pomidor və xüsusi sous',
      ],
      [
        'Говяжья котлета',
        'Кунжутная булочка и чеддер',
        'Салат, томат и фирменный соус',
      ],
    ],
    description: [
      'Flame-grilled beef, melted cheese and our signature sauce. A Garage classic.',
      'Qrildə mal əti, əridilmiş pendir və xüsusi sousumuz. Garage klassikası.',
      'Говядина с огня, расплавленный сыр и фирменный соус. Классика Garage.',
    ],
  },
  {
    name: 'CHICKEN BURGER',
    price: 12,
    category: 0,
    photo: photo('photo-1606755962773-d324e0a13086'),
    ingredients: [
      ['Crispy chicken', 'Brioche bun', 'Lettuce & garlic sauce'],
      ['Xırtıldayan toyuq', 'Brioş çörəyi', 'Kahı və sarımsaq sousu'],
      ['Хрустящая курица', 'Булочка бриошь', 'Салат и чесночный соус'],
    ],
    description: [
      'Crispy golden chicken with cool lettuce and a generous spoon of garlic sauce.',
      'Xırtıldayan toyuq, təzə kahı və sarımsaq sousu.',
      'Золотистая курица с прохладным салатом и чесночным соусом.',
    ],
  },
  ...[
    'TOMATO SOUP',
    'CAESAR SALAD',
    'GARAGE WINGS',
    'CREAMY MUSHROOM PASTA',
    'GRILLED CHICKEN',
    'GRILLED SALMON',
    'RIBEYE STEAK',
    'CHOCOLATE BROWNIE',
  ].map((name, i) => ({
    name,
    price: [8, 14, 12, 15, 18, 26, 38, 9][i],
    category: i + 1,
    photo: photo(
      [
        'photo-1547592180-85f173990554',
        'photo-1512621776951-a57141f2eefd',
        'photo-1567620832903-9fc6debc209f',
        'photo-1473093226795-af9932fe5856',
        'photo-1532550907401-a500c9a57435',
        'photo-1467003909585-2f8a72700288',
        'photo-1546833999-b9f581a1996d',
        'photo-1606313564200-e75d5e30476c',
      ][i],
    ),
    ingredients: [
      ['Fresh seasonal ingredients', 'House seasoning'],
      ['Təzə mövsümi məhsullar', 'Xüsusi ədviyyatlar'],
      ['Свежие сезонные продукты', 'Фирменные специи'],
    ],
    description: [
      'Prepared to order in the Garage kitchen. Ask our team about allergens and daily availability.',
      'Garage mətbəxində sifarişlə hazırlanır. Allergenlər və mövcudluq barədə komandamızdan soruşun.',
      'Готовим по заказу на кухне Garage. Уточняйте аллергены и наличие у команды.',
    ],
  })),
]
export const drinks = [
  [
    { name: 'GUINNESS', price: 12, size: '500 ml' },
    { name: 'GRIMBERGEN BLONDE', price: 10, size: '500 ml' },
    { name: 'CARLSBERG', price: 7, size: '500 ml' },
    { name: 'ERDINGER', price: 11, size: '500 ml' },
  ],
  [
    { name: 'CORONA EXTRA', price: 9, size: '330 ml' },
    { name: 'HEINEKEN', price: 8, size: '330 ml' },
    { name: 'SOMERSBY', price: 8, size: '330 ml' },
  ],
  [
    { name: 'JACK DANIEL’S', price: 10, size: '50 ml' },
    { name: 'MACALLAN 12', price: 24, size: '50 ml' },
    { name: 'JAMESON', price: 10, size: '50 ml' },
  ],
  [
    { name: 'HAVANA CLUB 7', price: 12, size: '50 ml' },
    { name: 'BACARDI CARTA BLANCA', price: 9, size: '50 ml' },
  ],
  [
    { name: 'BOMBAY SAPPHIRE', price: 11, size: '50 ml' },
    { name: 'TANQUERAY', price: 10, size: '50 ml' },
  ],
  [
    { name: 'MARTINI BIANCO', price: 8, size: '100 ml' },
    { name: 'MARTINI ROSSO', price: 8, size: '100 ml' },
  ],
  [
    { name: 'HOUSE RED', price: 10, size: '150 ml' },
    { name: 'HOUSE WHITE', price: 10, size: '150 ml' },
    { name: 'MOËT & CHANDON', price: 180, size: '750 ml' },
  ],
  [
    { name: 'JÄGERMEISTER', price: 9, size: '50 ml' },
    { name: 'BAILEYS', price: 9, size: '50 ml' },
    { name: 'APEROL', price: 8, size: '50 ml' },
  ],
  [
    { name: 'GREY GOOSE', price: 12, size: '50 ml' },
    { name: 'OLMECA BLANCO', price: 10, size: '50 ml' },
  ],
  [
    { name: 'COCA-COLA', price: 4, size: '330 ml' },
    { name: 'RED BULL', price: 7, size: '250 ml' },
    { name: 'SAN PELLEGRINO', price: 6, size: '500 ml' },
  ],
]
