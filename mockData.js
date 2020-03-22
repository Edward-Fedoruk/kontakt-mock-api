const BlogItems = [
  {
    id: 0,
    image: '/images/blog-1.jpg',
    title: 'Apple анонсировала iPhone 11',
    date: '11.08.2019',
  },
  {
    id: 1,
    image: '/images/blog-2.jpg',
    title: 'Huawei выпустила умную колонку Sound X с 360-градусным звучанием',
    date: '10.10.2019',
  },
  {
    id: 2,
    image: '/images/blog-3.jpg',
    title: 'Huawei показала новые смартфоны P30 и P30 Pro',
    date: '10.10.2019',
  },
];

const generalSlides = [
  {
    id: 0,
    image: '/images/product-image.jpg',
  },
  {
    id: 1,
    image: '/images/product-image.jpg',
  },
  {
    id: 2,
    image: '/images/product-image.jpg',
  },
  {
    id: 3,
    image: '/images/product-image.jpg',
  },
  {
    id: 4,
    image: '/images/product-image.jpg',
  },
];

const specialOffers = [
  {
    id: 0,
    products: [
      {
        id: 0,
        image: 'images/TV.png',
        productName: 'Philips TV',
        description: 'SMART',
        price: 1199.99,
        likes: 81,
        tags: [],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 1,
        image: 'images/airPods.png',
        productName: 'airPods 2',
        description: 'With wireless charging case',
        price: 2649.99,
        tags: [],
        likes: 981,
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 2,
        image: 'images/mac.png',
        productName: 'MacBook Air 13',
        description: 'Gold 2019',
        price: 1200.99,
        tags: [],
        likes: 99,
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 3,
        image: 'images/huawei.png',
        productName: 'Huawei',
        description: 'AI camera',
        price: 2649.99,
        likes: 67,
        tags: [
          {
            id: 0,
            color: false,
            text: '-25%',
          },
        ],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    products: [
      {
        id: 0,
        image: 'images/marshall.png',
        productName: 'Philips TV',
        description: 'SMART',
        price: 1199.99,
        likes: 864,
        tags: [
          {
            id: 0,
            color: true,
            text: 'NEW',
          },
        ],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 1,
        image: 'images/mac.png',
        productName: 'airPods 2',
        description: 'With wireless charging case',
        price: 2649.99,
        likes: 1010,
        tags: [],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 2,
        image: 'images/display.png',
        productName: 'MacBook Air 13',
        description: 'Gold 2019',
        price: 1200.99,
        likes: 878,
        tags: [],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 3,
        image: 'images/gopro.png',
        productName: 'Huawei',
        description: 'AI camera',
        price: 2649.99,
        likes: 894,
        tags: [
          {
            id: 0,
            color: false,
            text: '6 месяцев 0%',
          },
        ],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    products: [
      {
        id: 0,
        image: 'images/TV.png',
        productName: 'Philips TV',
        description: 'SMART',
        price: 1199.99,
        likes: 893,
        tags: [],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 1,
        image: 'images/airPods.png',
        productName: 'airPods 2',
        description: 'With wireless charging case',
        price: 2649.99,
        tags: [],
        likes: 6803,
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 2,
        image: 'images/mac.png',
        productName: 'MacBook Air 13',
        description: 'Gold 2019',
        price: 1200.99,
        likes: 111,
        tags: [],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 3,
        image: 'images/huawei.png',
        productName: 'Huawei',
        description: 'AI camera',
        price: 2649.99,
        likes: 908,
        tags: [
          {
            id: 0,
            color: false,
            text: '-25%',
          },
        ],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    products: [
      {
        id: 0,
        image: 'images/marshall.png',
        productName: 'Philips TV',
        description: 'SMART',
        price: 1199.99,
        likes: 190,
        tags: [
          {
            id: 0,
            color: true,
            text: 'NEW',
          },
        ],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 1,
        image: 'images/mac.png',
        productName: 'airPods 2',
        description: 'With wireless charging case',
        price: 2649.99,
        tags: [],
        likes: 45,
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 2,
        image: 'images/display.png',
        productName: 'MacBook Air 13',
        description: 'Gold 2019',
        price: 1200.99,
        likes: 464,
        tags: [],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
      {
        id: 3,
        image: 'images/gopro.png',
        productName: 'Huawei',
        description: 'AI camera',
        price: 2649.99,
        likes: 35,
        tags: [
          {
            id: 0,
            color: false,
            text: '6 месяцев 0%',
          },
        ],
        specs: [
          {
            id: 0,
            specName: 'Размер экрана:',
            spec: '6,3',
          },
          {
            id: 1,
            specName: 'RAM-ROM:',
            spec: '4 ГБ / 64 ГБ',
          },
          {
            id: 2,
            specName: 'Емкость аккумулятора:',
            spec: '6000 мА*ч',
          },
        ],
      },
    ],
  },
];

const newProducts = [
  {
    id: 0,
    image: 'images/TV.png',
    productName: 'Philips TV',
    description: 'SMART',
    price: 1199.99,
    likes: 151,
    tags: [],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 1,
    image: 'images/airPods.png',
    productName: 'airPods 2',
    description: 'With wireless charging case',
    price: 2649.99,
    likes: 6511,
    tags: [],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 2,
    image: 'images/mac.png',
    productName: 'MacBook Air 13',
    description: 'Gold 2019',
    price: 1200.99,
    likes: 51,
    tags: [],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 3,
    image: 'images/huawei.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 91,
    tags: [
      {
        id: 0,
        color: false,
        text: '-25%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 4,
    image: 'images/huawei.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 341,
    tags: [
      {
        id: 0,
        color: false,
        text: '-25%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 5,
    image: 'images/huawei.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 86,
    tags: [
      {
        id: 0,
        color: false,
        text: '-25%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 6,
    image: 'images/huawei.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 91,
    tags: [
      {
        id: 0,
        color: false,
        text: '-25%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
];

const newsSlides = [
  {
    id: 0,
    image: '/images/new-product.jpg',
  },
];

const promotionsSides = [
  {
    id: 0,
    image: '/images/special-product.jpg',
    date: '30 March 2020 14:48 UTC',
  },
];

const salsLeader = [
  {
    id: 0,
    image: 'images/marshall.png',
    productName: 'Philips TV',
    description: 'SMART',
    price: 1199.99,
    likes: 111,
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 1,
    image: 'images/mac.png',
    productName: 'airPods 2',
    description: 'With wireless charging case',
    price: 2649.99,
    likes: 88,
    tags: [],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 2,
    image: 'images/display.png',
    productName: 'MacBook Air 13',
    description: 'Gold 2019',
    price: 1200.99,
    tags: [],
    likes: 98,
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 3,
    image: 'images/gopro.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 76,
    tags: [
      {
        id: 0,
        color: false,
        text: '6 месяцев 0%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 4,
    image: 'images/mac.png',
    productName: 'airPods 2',
    description: 'With wireless charging case',
    price: 2649.99,
    tags: [],
    likes: 23,
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 5,
    image: 'images/display.png',
    productName: 'MacBook Air 13',
    description: 'Gold 2019',
    price: 1200.99,
    tags: [],
    likes: 101,
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 6,
    image: 'images/gopro.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 1113,
    tags: [
      {
        id: 0,
        color: false,
        text: '6 месяцев 0%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 7,
    image: 'images/mac.png',
    productName: 'airPods 2',
    description: 'With wireless charging case',
    price: 2649.99,
    likes: 911,
    tags: [],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 8,
    image: 'images/display.png',
    productName: 'MacBook Air 13',
    description: 'Gold 2019',
    price: 1200.99,
    tags: [],
    likes: 511,
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 9,
    image: 'images/gopro.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 1161,
    tags: [
      {
        id: 0,
        color: false,
        text: '6 месяцев 0%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
];

const smallBanners = [
  {
    id: 0,
    image: '/images/banner-2.jpg',
  },
  {
    id: 1,
    image: '/images/banner-3.jpg',
  },
];

const specialProducts = [
  {
    id: 0,
    image: 'images/marshall.png',
    productName: 'Philips TV',
    description: 'SMART',
    price: 1199.99,
    likes: 111,
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 1,
    image: 'images/mac.png',
    productName: 'airPods 2',
    description: 'With wireless charging case',
    price: 2649.99,
    likes: 23,
    tags: [],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 2,
    image: 'images/display.png',
    productName: 'MacBook Air 13',
    description: 'Gold 2019',
    price: 1200.99,
    likes: 101,
    tags: [],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 3,
    image: 'images/gopro.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 67,
    tags: [
      {
        id: 0,
        color: false,
        text: '6 месяцев 0%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 4,
    image: 'images/mac.png',
    productName: 'airPods 2',
    description: 'With wireless charging case',
    price: 2649.99,
    tags: [],
    likes: 23,
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 5,
    image: 'images/display.png',
    productName: 'MacBook Air 13',
    description: 'Gold 2019',
    price: 1200.99,
    likes: 11,
    tags: [],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 6,
    image: 'images/gopro.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 55,
    tags: [
      {
        id: 0,
        color: false,
        text: '6 месяцев 0%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 7,
    image: 'images/mac.png',
    productName: 'airPods 2',
    description: 'With wireless charging case',
    price: 2649.99,
    likes: 22,
    tags: [],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 8,
    image: 'images/display.png',
    productName: 'MacBook Air 13',
    description: 'Gold 2019',
    price: 1200.99,
    tags: [],
    likes: 67,
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
  {
    id: 9,
    image: 'images/gopro.png',
    productName: 'Huawei',
    description: 'AI camera',
    price: 2649.99,
    likes: 34,
    tags: [
      {
        id: 0,
        color: false,
        text: '6 месяцев 0%',
      },
    ],
    specs: [
      {
        id: 0,
        specName: 'Размер экрана:',
        spec: '6,3',
      },
      {
        id: 1,
        specName: 'RAM-ROM:',
        spec: '4 ГБ / 64 ГБ',
      },
      {
        id: 2,
        specName: 'Емкость аккумулятора:',
        spec: '6000 мА*ч',
      },
    ],
  },
];

const SubMenuCategories = [
  {
    id: 0,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам',
        items: [
          'Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Huawei', 'Honor', 'Google', 'Remade Iphone', 'ZTE', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 1,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам1',
        items: [
          'Apple', 'Samsung', 'Remade Iphone', 'ZTE', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 2,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам2',
        items: [
          'Honor', 'Google', 'Remade Iphone', 'ZTE', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 3,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам3',
        items: [
          'Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Huawei', 'Honor', 'Google', 'Remade Iphone', 'ZTE', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж3',
        items: [
          'iPhone XR', 'Samsung Galaxy A70', 'iPhone 8', 'iPhone 8 Plus', 'Xiaomi Redmi 7A', 'Honor 20', 'Honor 20 pro', 'Samsung Galaxy A50 2019', 'Honor 8X', 'Huawei P Smart Z',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 2,
        name: 'По цене3',
        items: [
          'До 600', '4001 - 6000', 'От 6000',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 4,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 5,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 6,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 7,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 8,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 9,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 10,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 11,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 12,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 13,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 14,
        name: 'Аксессуары3',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 4,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам4',
        items: [
          'Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Huawei', 'Honor', 'Google', 'Remade Iphone', 'ZTE', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж4',
        items: [
          'iPhone XR', 'Xiaomi Redmi Note 7', 'Samsung Galaxy Noote 10', 'Samsung Galaxy Noote 10 Plus', 'Samsung Galaxy A70', 'iPhone 8', 'iPhone 8 Plus', 'Xiaomi Redmi 7A', 'Honor 20', 'Honor 20 pro', 'Samsung Galaxy A50 2019', 'Honor 8X', 'Huawei P Smart Z',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 2,
        name: 'По цене4',
        items: [
          'До 600', '1000 - 2000', '2001 - 4000', '4001 - 6000', 'От 6000',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары4',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 5,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам5',
        items: [
          'Apple', 'Samsung', 'Xiaomi', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж5',
        items: [
          'iPhone XR', 'Xiaomi Redmi Note 7', 'Samsung Galaxy Noote 10', 'Samsung Galaxy Noote 10 Plus', 'Samsung Galaxy A70', 'iPhone 8', 'iPhone 8 Plus', 'Xiaomi Redmi 7A', 'Honor 20', 'Honor 20 pro', 'Samsung Galaxy A50 2019', 'Honor 8X', 'Huawei P Smart Z',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 2,
        name: 'По цене5',
        items: [
          'До 600', '1000 - 2000', '2001 - 4000', '4001 - 6000', 'От 6000',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары5',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 6,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам6',
        items: [
          'Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Huawei', 'Honor', 'Google', 'Remade Iphone', 'ZTE', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж6',
        items: [
          'iPhone XR', 'Samsung Galaxy A70', 'iPhone 8', 'iPhone 8 Plus', 'Xiaomi Redmi 7A', 'Honor 20', 'Honor 20 pro', 'Samsung Galaxy A50 2019', 'Honor 8X', 'Huawei P Smart Z',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 2,
        name: 'По цене6',
        items: [
          'До 600', '1000 - 2000', '2001 - 4000', '4001 - 6000', 'От 6000',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары6',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 7,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам7',
        items: [
          'Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Huawei', 'Honor', 'Google', 'Remade Iphone', 'ZTE', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж7',
        items: [
          'iPhone XR', 'Xiaomi Redmi Note 7', 'Samsung Galaxy Noote 10', 'Samsung Galaxy Noote 10 Plus', 'Samsung Galaxy A70', 'iPhone 8', 'iPhone 8 Plus', 'Xiaomi Redmi 7A', 'Honor 20', 'Honor 20 pro', 'Samsung Galaxy A50 2019', 'Honor 8X', 'Huawei P Smart Z',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 2,
        name: 'По цене7',
        items: [
          'До 600', '1000 - 2000', '2001 - 4000', '4001 - 6000', 'От 6000',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары7',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 8,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам8',
        items: [
          'Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Huawei', 'Honor', 'Google', 'Remade Iphone', 'ZTE', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж8',
        items: [
          'Samsung Galaxy A70', 'iPhone 8', 'iPhone 8 Plus', 'Xiaomi Redmi 7A', 'Honor 20', 'Honor 20 pro', 'Samsung Galaxy A50 2019', 'Honor 8X', 'Huawei P Smart Z',
        ],
      },
      {
        id: 2,
        name: 'По цене88',
        items: [
          'До 600', '1000 - 2000', '2001 - 4000', '4001 - 6000', 'От 6000',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары8',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 9,
    subCategories: [
      {
        id: 0,
        name: 'По Брендам8',
        items: [
          'Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Huawei', 'Honor', 'Google', 'Remade Iphone', 'ZTE', 'vivo', 'OPPO', 'Meizu', 'Все бренды',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж8',
        items: [
          'Samsung Galaxy A70', 'iPhone 8', 'iPhone 8 Plus', 'Xiaomi Redmi 7A', 'Honor 20', 'Honor 20 pro', 'Samsung Galaxy A50 2019', 'Honor 8X', 'Huawei P Smart Z',
        ],
      },
      {
        id: 2,
        name: 'По цене88',
        items: [
          'До 600', '1000 - 2000', '2001 - 4000', '4001 - 6000', 'От 6000',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары8',
        items: [
          'Чехлы для смартфонов', 'Защитные стекла и пленки', 'Портативные батареи', 'Наушники', 'Портативная акустика', 'Все аксессуары',
        ],
        img: '/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
];

const wideBanners = [
  {
    id: 0,
    image: '/images/banner-1.jpg',
  },
  {
    id: 1,
    image: '/images/banner-1.jpg',
  },
];

const searchHistory = [
  'iphone',
  'something cool',
  'pink airpods',
  'corona virus antidot',
];

const mostPopularProducts = [
  {
    id: 0,
    image: 'images/TV.png',
    productName: 'Philips TV',
    price: 1199.99,
    slug: 'apple-iphone-11'
  },
  {
    id: 2,
    image: 'images/mac.png',
    productName: 'MacBook Air 13',
    price: 1200.99,
    slug: 'apple-MacBook-11'
  },
  {
    id: 3,
    image: 'images/marshall.png',
    productName: 'Philips TV',
    price: 1199.99,
    slug: 'Philips-TV'
  },
]


module.exports = {
  BlogItems, 
  newProducts,
  promotionsSides,
  salsLeader,
  smallBanners,
  SubMenuCategories,
  wideBanners,
  newsSlides,
  specialProducts,
  generalSlides,
  specialOffers,
  searchHistory,
  mostPopularProducts
}
