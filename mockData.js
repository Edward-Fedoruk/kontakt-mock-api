const uuidv4 = require('uuid').v4;
const between = (min, max) => Math.floor(
  Math.random() * (max - min + 1) + min
);

const convertToUuid = (xs) => xs.map((x) => ({ ...x, id: uuidv4() }));

const BlogItems = [
  {
    id: 0,
    image: 'https://kontakt-mock-api.herokuapp.com/images/blog-1.jpg',
    title: 'Apple анонсировала iPhone 11',
    date: '11.08.2019',
  },
  {
    id: 1,
    image: 'https://kontakt-mock-api.herokuapp.com/images/blog-2.jpg',
    title: 'Huawei выпустила умную колонку Sound X с 360-градусным звучанием',
    date: '10.10.2019',
  },
  {
    id: 2,
    image: 'https://kontakt-mock-api.herokuapp.com/images/blog-3.jpg',
    title: 'Huawei показала новые смартфоны P30 и P30 Pro',
    date: '10.10.2019',
  },
];

const generalSlides = [
  {
    id: 0,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/product-image.jpg',
      medium: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg',
      small: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg'
    }
  },
  {
    id: 1,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/product-image.jpg',
      medium: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg',
      small: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg'
    }
  },
  {
    id: 2,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/product-image.jpg',
      medium: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg',
      small: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg'
    }
  },
  {
    id: 3,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/product-image.jpg',
      medium: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg',
      small: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg'
    }
  },
  {
    id: 4,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/product-image.jpg',
      medium: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg',
      small: 'https://kontakt-mock-api.herokuapp.com/images/933c9c91470241.5e333759552df.jpg'
    }
  },
];

const specialOffers = [
  {
    id: 0,
    products: [
      {
        id: 0,
        image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
        productName: 'Philips TV SMART',
        price: 1199.99,
        discount: 60,
        likes: 81,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 1,
        image: 'https://kontakt-mock-api.herokuapp.com/images/airPods.png',
        productName: 'airPods 2 With wireless charging case',
        price: 2649.99,
        discount: 60,
        tags: [],
        likes: 981,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 2,
        image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
        productName: 'MacBook Air 13 Gold 2019',
        price: 1200.99,
        discount: 50,
        tags: [],
        likes: 99,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 3,
        image: 'https://kontakt-mock-api.herokuapp.com/images/huawei.png',
        productName: 'Huawei AI camera',
        price: 2649.99,
        discount: 40,
        likes: 67,
        installment: 'Рассрочка 12 ay 259 azn',
        tags: [
          {
            id: 0,
            color: false,
            text: '-15 AZN',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
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
        image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
        productName: 'Philips TV SMART',
        price: 1199.99,
        discount: 50,
        likes: 864,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 1,
        image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
        productName: 'airPods 2 With wireless charging case',
        price: 2649.99,
        discount: 60,
        likes: 1010,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 2,
        image: 'https://kontakt-mock-api.herokuapp.com/images/display.png',
        productName: 'MacBook Air 13 Gold 2019',
        price: 1200.99,
        discount: 30,
        likes: 878,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 3,
        image: 'https://kontakt-mock-api.herokuapp.com/images/gopro.png',
        productName: 'Huawei AI camera',
        price: 2649.99,
        discount: 60,
        likes: 894,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
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
        image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
        productName: 'Philips TV SMART',
        price: 1199.99,
        discount: 50,
        likes: 893,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 1,
        image: 'https://kontakt-mock-api.herokuapp.com/images/airPods.png',
        productName: 'airPods 2 With wireless charging case',
        price: 2649.99,
        discount: 60,
        tags: [],
        likes: 6803,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 2,
        image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
        productName: 'MacBook Air 13 Gold 2019',
        price: 1200.99,
        discount: 60,
        likes: 111,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 3,
        image: 'https://kontakt-mock-api.herokuapp.com/images/huawei.png',
        productName: 'Huawei AI camera',
        price: 2649.99,
        discount: 60,
        likes: 908,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
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
        image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
        productName: 'Philips TV SMART',
        price: 1199.99,
        discount: 60,
        likes: 190,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 1,
        image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
        productName: 'airPods 2 With wireless charging case',
        price: 2649.99,
        discount: 60,
        tags: [],
        likes: 45,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 2,
        image: 'https://kontakt-mock-api.herokuapp.com/images/display.png',
        productName: 'MacBook Air 13 Gold 2019',
        price: 1200.99,
        discount: 50,
        likes: 464,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
      {
        id: 3,
        image: 'https://kontakt-mock-api.herokuapp.com/images/gopro.png',
        productName: 'Huawei AI camera',
        price: 2649.99,
        discount: 60,
        likes: 35,
        installment: 'Рассрочка 12 ay 259 azn',
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
        warrantyLabels: [
          {
            id: 0,
            isActive: true,
            text: 'Гарантия производителя',
            price: 0,
          },
          {
            id: 1,
            isActive: false,
            text: '1 Год золотой гарантии',
            top: true,
            price: 23,
          },
          {
            id: 2,
            isActive: false,
            text: '2 Года золотой гарантии',
            price: 37,
          },
        ],
      },
    ],
  },
];

const newProducts = convertToUuid([
  {
    id: 0,
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productName: 'Philips TV SMART',
    price: 1199.99,
    discount: 60,
    likes: 151,
    tags: [],
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 1,
    image: 'https://kontakt-mock-api.herokuapp.com/images/airPods.png',
    productName: 'airPods 2 With wireless charging case',
    price: 2649.99,
    discount: 50,
    likes: 6511,
    tags: [],
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 2,
    image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
    productName: 'MacBook Air 13 Gold 2019',
    price: 1200.99,
    discount: 60,
    likes: 51,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 3,
    image: 'https://kontakt-mock-api.herokuapp.com/images/huawei.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 60,
    likes: 91,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 4,
    image: 'https://kontakt-mock-api.herokuapp.com/images/huawei.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 50,
    likes: 341,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: false,
        text: '-15 AZN',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 5,
    image: 'https://kontakt-mock-api.herokuapp.com/images/huawei.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 60,
    likes: 86,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 6,
    image: 'https://kontakt-mock-api.herokuapp.com/images/huawei.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 60,
    likes: 91,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: false,
        text: '-15 AZN',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
]);

const newsSlides = [
  {
    id: 0,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/new-product.jpg',
      medium: 'https://kontakt-mock-api.herokuapp.com/images/news_med.jpg',
      small: 'https://kontakt-mock-api.herokuapp.com/images/new_small.jpg'
    }
  },
];

const promotionsSides = [
  {
    id: 0,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/special-product.jpg',
      medium: 'https://kontakt-mock-api.herokuapp.com/images/act_med.jpg',
      small: 'https://kontakt-mock-api.herokuapp.com/images/act_small.jpg'
    },
    date: '30 June 2021 14:48 UTC',
  },
];

const salesLeaders = [
  {
    id: 0,
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productName: 'Philips TV SMART',
    price: 1199.99,
    discount: 60,
    likes: 111,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 1,
    image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
    productName: 'airPods 2 With wireless charging case',
    price: 2649.99,
    discount: 60,
    likes: 88,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 2,
    image: 'https://kontakt-mock-api.herokuapp.com/images/display.png',
    productName: 'MacBook Air 13 Gold 2019',
    price: 1200.99,
    discount: 60,
    tags: [],
    likes: 98,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 3,
    image: 'https://kontakt-mock-api.herokuapp.com/images/gopro.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 60,
    likes: 76,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 4,
    image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
    productName: 'airPods 2 With wireless charging case',
    price: 2649.99,
    discount: 50,
    tags: [],
    likes: 23,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 5,
    image: 'https://kontakt-mock-api.herokuapp.com/images/display.png',
    productName: 'MacBook Air 13 Gold 2019',
    price: 1200.99,
    discount: 50,
    tags: [],
    likes: 101,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 6,
    image: 'https://kontakt-mock-api.herokuapp.com/images/gopro.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 60,
    likes: 1113,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 7,
    image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
    productName: 'airPods 2 With wireless charging case',
    price: 2649.99,
    discount: 60,
    likes: 911,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 8,
    image: 'https://kontakt-mock-api.herokuapp.com/images/display.png',
    productName: 'MacBook Air 13 Gold 2019',
    price: 1200.99,
    discount: 60,
    tags: [],
    likes: 511,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 9,
    image: 'https://kontakt-mock-api.herokuapp.com/images/gopro.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 50,
    likes: 1161,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
];

const smallBanners = [
  {
    id: 0,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/banner-2.jpg',
      small: 'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      smaller: 'https://kontakt-mock-api.herokuapp.com/images/18-layers.jpg',
      extraSmall: 'https://kontakt-mock-api.herokuapp.com/images/8-layers.jpg'

    },
  },
  {
    id: 1,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/banner-3.jpg',
      small: 'https://kontakt-mock-api.herokuapp.com/images/13-layers.jpg',
      smaller: 'https://kontakt-mock-api.herokuapp.com/images/12-layersb.jpg',
      extraSmall: 'https://kontakt-mock-api.herokuapp.com/images/12-layers.jpg'
    },
  },
];

const specialProducts = convertToUuid([
  {
    id: 0,
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productName: 'Philips TV SMART',
    price: 1199.99,
    discount: 50,
    likes: 111,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 1,
    image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
    productName: 'airPods 2 With wireless charging case',
    price: 2649.99,
    discount: 60,
    likes: 23,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 2,
    image: 'https://kontakt-mock-api.herokuapp.com/images/display.png',
    productName: 'MacBook Air 13 Gold 2019',
    price: 1200.99,
    discount: 60,
    likes: 101,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 3,
    image: 'https://kontakt-mock-api.herokuapp.com/images/gopro.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 60,
    likes: 67,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 4,
    image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
    productName: 'airPods 2 With wireless charging case',
    price: 2649.99,
    discount: 60,
    tags: [],
    likes: 23,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 5,
    image: 'https://kontakt-mock-api.herokuapp.com/images/display.png',
    productName: 'MacBook Air 13 Gold 2019',
    price: 1200.99,
    discount: 60,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 6,
    image: 'https://kontakt-mock-api.herokuapp.com/images/gopro.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 60,
    likes: 55,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 7,
    image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
    productName: 'airPods 2 With wireless charging case',
    price: 2649.99,
    discount: 60,
    likes: 22,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 8,
    image: 'https://kontakt-mock-api.herokuapp.com/images/display.png',
    productName: 'MacBook Air 13 Gold 2019',
    price: 1200.99,
    discount: 50,
    tags: [],
    likes: 67,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 9,
    image: 'https://kontakt-mock-api.herokuapp.com/images/gopro.png',
    productName: 'Huawei AI camera',
    price: 2649.99,
    discount: 50,
    likes: 34,
    installment: 'Рассрочка 12 ay 259 azn',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
]);

const wideBanners = [
  {
    id: 0,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/banner-1.jpg',
      medium: 'https://kontakt-mock-api.herokuapp.com/images/44-layers.png',
      small: 'https://kontakt-mock-api.herokuapp.com/images/45-layers.jpg',
      smaller: 'https://kontakt-mock-api.herokuapp.com/images/43-layers.jpg',
      extraSmall: 'https://kontakt-mock-api.herokuapp.com/images/8-layers.jpg'
    }
  },
  {
    id: 1,
    images: {
      big: 'https://kontakt-mock-api.herokuapp.com/images/banner-1.jpg',
      medium: 'https://kontakt-mock-api.herokuapp.com/images/44-layers.png',
      small: 'https://kontakt-mock-api.herokuapp.com/images/45-layers.jpg',
      smaller: 'https://kontakt-mock-api.herokuapp.com/images/43-layers.jpg',
      extraSmall: 'https://kontakt-mock-api.herokuapp.com/images/8-layers.jpg'
    }
  }
];

const mostPopularProducts = convertToUuid([
  {
    id: 0,
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productName: 'Philips TV SMART',
    price: 1199.99,
    discount: 60,
    slug: 'apple-iphone-11',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 1,
    image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
    productName: 'MacBook Air 13 With Soft Touch Blue Case',
    price: 1200.99,
    discount: 60,
    slug: 'apple-MacBook-11',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 2,
    image: 'https://kontakt-mock-api.herokuapp.com/images/mac.png',
    productName: 'MacBook Air 13 With Case',
    price: 1200.99,
    discount: 60,
    slug: 'apple-MacBook-11',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
  {
    id: 3,
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productName: 'Philips TV',
    price: 1199.99,
    discount: 60,
    slug: 'Philips-TV Smart TV',
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
    warrantyLabels: [
      {
        id: 0,
        isActive: true,
        text: 'Гарантия производителя',
        price: 0,
      },
      {
        id: 1,
        isActive: false,
        text: '1 Год золотой гарантии',
        top: true,
        price: 23,
      },
      {
        id: 2,
        isActive: false,
        text: '2 Года золотой гарантии',
        price: 37,
      },
    ],
  },
]);

const categories = [
  {
    id: 0,
    image: 'https://kontakt-mock-api.herokuapp.com/images/huawei.png',
    title: 'Смартфоны',
    href: '/category',
    productNames: [
      {
        product: 'Samsung',
        id: 0,
        href: '/category',
      },
      {
        product: 'Xiaomi',
        id: 1,
        href: '/category',
      },
      {
        product: 'Apple',
        id: 2,
        href: '/category',
      },
      {
        product: 'Huawei',
        id: 3,
        href: '/category',
      },
      {
        product: 'Honor',
        id: 4,
        href: '/category',
      },
      {
        product: 'Vivo',
        id: 5,
        href: '/category',
      },
      {
        product: 'Google',
        id: 6,
        href: '/category',
      },
      {
        product: 'Asus',
        id: 7,
        href: '/category',
      },
      {
        product: 'OnePlus',
        id: 8,
        href: '/category',
      },
      {
        product: 'ZTE',
        id: 9,
        href: '/category',
      },
    ],
  },
  {
    id: 1,
    image: 'https://kontakt-mock-api.herokuapp.com/images/tablet.png',
    title: 'Планшеты',
    href: '/category',
    productNames: [
      {
        product: 'Samsung',
        id: 10,
        href: '/category',
      },
      {
        product: 'Xiaomi',
        id: 11,
        href: '/category',
      },
      {
        product: 'Apple',
        id: 12,
        href: '/category',
      },
      {
        product: 'Huawei',
        id: 13,
        href: '/category',
      },
      {
        product: 'Honor',
        id: 14,
        href: '/category',
      },
      {
        product: 'Vivo',
        id: 15,
        href: '/category',
      },
      {
        product: 'Google',
        id: 16,
        href: '/category',
      },
      {
        product: 'Asus',
        id: 17,
        href: '/category',
      },
      {
        product: 'OnePlus',
        id: 18,
        href: '/category',
      },
      {
        product: 'ZTE',
        id: 19,
        href: '/category',
      },
    ],
  },
  {
    id: 2,
    image: 'https://kontakt-mock-api.herokuapp.com/images/bank.png',
    title: 'Аксессуары',
    href: '/category',
    productNames: [
      {
        product: 'Samsung',
        id: 20,
        href: '/category',
      },
      {
        product: 'Xiaomi',
        id: 21,
        href: '/category',
      },
      {
        product: 'Apple',
        id: 22,
        href: '/category',
      },
      {
        product: 'Huawei',
        id: 23,
        href: '/category',
      },
      {
        product: 'Honor',
        id: 24,
        href: '/category',
      },
      {
        product: 'Vivo',
        id: 25,
        href: '/category',
      },
      {
        product: 'Google',
        id: 26,
        href: '/category',
      },
      {
        product: 'Asus',
        id: 27,
        href: '/category',
      },
      {
        product: 'OnePlus',
        id: 28,
        href: '/category',
      },
      {
        product: 'ZTE',
        id: 29,
        href: '/category',
      },
    ],
  },
  {
    id: 3,
    image: 'https://kontakt-mock-api.herokuapp.com/images/band.png',
    title: 'Смарт браслеты',
    href: '/category',
    productNames: [
      {
        product: 'Samsung',
        id: 30,
        href: '/category',
      },
      {
        product: 'Xiaomi',
        id: 31,
        href: '/category',
      },
      {
        product: 'Apple',
        id: 32,
        href: '/category',
      },
      {
        product: 'Huawei',
        id: 33,
        href: '/category',
      },
      {
        product: 'Honor',
        id: 34,
        href: '/category',
      },
      {
        product: 'Vivo',
        id: 35,
        href: '/category',
      },
      {
        product: 'Google',
        id: 36,
        href: '/category',
      },
      {
        product: 'Asus',
        id: 37,
        href: '/category',
      },
      {
        product: 'OnePlus',
        id: 38,
        href: '/category',
      },
      {
        product: 'ZTE',
        id: 39,
        href: '/category',
      },
    ],
  },
  {
    id: 4,
    image: 'https://kontakt-mock-api.herokuapp.com/images/amazfit.png',
    title: 'Смарт часы',
    href: '/category',
    productNames: [
      {
        product: 'Samsung',
        id: 40,
        href: '/category',
      },
      {
        product: 'Xiaomi',
        id: 41,
        href: '/category',
      },
      {
        product: 'Apple',
        id: 42,
        href: '/category',
      },
      {
        product: 'Huawei',
        id: 43,
        href: '/category',
      },
      {
        product: 'Honor',
        id: 44,
        href: '/category',
      },
      {
        product: 'Vivo',
        id: 45,
        href: '/category',
      },
      {
        product: 'Google',
        id: 46,
        href: '/category',
      },
      {
        product: 'Asus',
        id: 47,
        href: '/category',
      },
      {
        product: 'OnePlus',
        id: 48,
        href: '/category',
      },
      {
        product: 'ZTE',
        id: 49,
        href: '/category',
      },
    ],
  },
  {
    id: 5,
    image: 'https://kontakt-mock-api.herokuapp.com/images/aspiring.png',
    title: 'Аксессуары для автомобиля',
    href: '/category',
    productNames: [
      {
        product: 'Samsung',
        id: 50,
        href: '/category',
      },
      {
        product: 'Xiaomi',
        id: 51,
        href: '/category',
      },
      {
        product: 'Apple',
        id: 52,
        href: '/category',
      },
      {
        product: 'Huawei',
        id: 53,
        href: '/category',
      },
      {
        product: 'Honor',
        id: 54,
        href: '/category',
      },
      {
        product: 'Vivo',
        id: 55,
        href: '/category',
      },
      {
        product: 'Google',
        id: 56,
        href: '/category',
      },
      {
        product: 'Asus',
        id: 57,
        href: '/category',
      },
      {
        product: 'OnePlus',
        id: 58,
        href: '/category',
      },
      {
        product: 'ZTE',
        id: 59,
        href: '/category',
      },
    ],
  },
  {
    id: 6,
    image: 'https://kontakt-mock-api.herokuapp.com/images/sim.png',
    title: 'Номера',
    href: '/category',
    productNames: [
      {
        product: 'Samsung',
        id: 60,
        href: '/category',
      },
      {
        product: 'Xiaomi',
        id: 61,
        href: '/category',
      },
      {
        product: 'Apple',
        id: 62,
        href: '/category',
      },
      {
        product: 'Huawei',
        id: 63,
        href: '/category',
      },
      {
        product: 'Honor',
        id: 64,
        href: '/category',
      },
      {
        product: 'Vivo',
        id: 65,
        href: '/category',
      },
      {
        product: 'Google',
        id: 66,
        href: '/category',
      },
      {
        product: 'Asus',
        id: 67,
        href: '/category',
      },
      {
        product: 'OnePlus',
        id: 68,
        href: '/category',
      },
      {
        product: 'ZTE',
        id: 69,
        href: '/category',
      },
    ],
  },
];

const categorySlides = [
  {
    id: 0,
    image: 'https://kontakt-mock-api.herokuapp.com/images/category_slide.jpg',
  },
  {
    id: 1,
    image: 'https://kontakt-mock-api.herokuapp.com/images/category_slide.jpg',
  },
  {
    id: 2,
    image: 'https://kontakt-mock-api.herokuapp.com/images/category_slide.jpg',
  },
  {
    id: 3,
    image: 'https://kontakt-mock-api.herokuapp.com/images/category_slide.jpg',
  },
  {
    id: 4,
    image: 'https://kontakt-mock-api.herokuapp.com/images/category_slide.jpg',
  },
];

const categoriesPrime = [
  {
    id: 0,
    text: 'Бытовая техника',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu1.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 1,
    text: 'Телефоны и Гаджеты',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu2.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам1',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 2,
    text: 'Компютеры и офисная техника',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu3.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 2,
        name: 'По цене3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 4,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 5,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 6,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 7,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 8,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 9,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 10,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 11,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 12,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 13,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 14,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 3,
    text: 'Фото и видеокамеры',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu4.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам1',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 4,
    text: 'Игры и развлечения',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu5.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам1',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 5,
    text: 'Телевизоры и аудиотехника',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu6.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 2,
        name: 'По цене3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 4,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 5,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 6,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 7,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 8,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 9,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 10,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 11,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 12,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 13,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 14,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 6,
    text: 'Apple',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu7.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 1,
        name: 'Хиты продаж3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 2,
        name: 'По цене3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 3,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 4,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 5,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 6,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 7,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 8,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 9,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 10,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 11,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 12,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 13,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
      {
        id: 14,
        name: 'Аксессуары3',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 7,
    text: 'Текстиль',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu8.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 8,
    text: 'Мебель',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu9.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
  {
    id: 9,
    text: 'Красота и здоровье',
    icon: 'https://kontakt-mock-api.herokuapp.com/images/menu10.svg',
    subCategories: [
      {
        id: 0,
        name: 'По Брендам',
        products: [
          { name: 'Мясорубки', img: 'https://kontakt-mock-api.herokuapp.com/images/moulinex_me1058.png' },
          { name: 'Гриль', img: 'https://kontakt-mock-api.herokuapp.com/images/delonghi_cgh1030d_9.png' },
          { name: 'Комбайны', img: 'https://kontakt-mock-api.herokuapp.com/images/kenwood_kvl6410s_1_1.png' },
          { name: 'Измельчители', img: 'https://kontakt-mock-api.herokuapp.com/images/NoPath.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Пароварки', img: 'https://kontakt-mock-api.herokuapp.com/images/vc1401_1.png' },
          { name: 'Индукционные плиты', img: 'https://kontakt-mock-api.herokuapp.com/images/_esperanza_ekh008.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
          { name: 'Чайники', img: 'https://kontakt-mock-api.herokuapp.com/images/husla_73907_images_14026829778.png' },
        ].map((item, id) => ({ ...item, id })),
        img: 'https://kontakt-mock-api.herokuapp.com/images/1275783_roda_aqua_inox_9@2x.png',
      },
    ],
  },
];

const categoryProducts = [
  {
    id: uuidv4(),
    title: "Все смартфоны",
    products: newProducts
  },
  {
    id: uuidv4(),
    title: "Планшеты",
    products: specialProducts
  },

  {
    id: uuidv4(),
    title: "Аксессуары",
    products: specialProducts
  },
  {
    id: uuidv4(),
    title: "Смарт браслеты",
    products: newProducts
  },
  {
    id: uuidv4(),
    title: "Смарт часы",
    products: specialProducts
  },
  {
    id: uuidv4(),
    title: "Специально для вас",
    products: newProducts
  }
];

const subCategories = [
  {
    id: uuidv4(),
    title: 'смартфоны',
    items: [
      {
        id: uuidv4(),
        image: 'https://kontakt-mock-api.herokuapp.com/images/sub-ctg.jpg'
      }
    ]
  }
]

const products = [
  {
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 119.99,
    discount: 0,
    likes: 11,
    installment: 'Рассрочка 12 ay 259 azn',
    tags: [
      {
        id: 0,
        color: true,
        text: 'NEW',
      },
    ],
    colors: [
      '#ec190b',
      '#606e7d'
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
    id: uuidv4(),
    image: 'https://kontakt-mock-api.herokuapp.com/images/TV.png',
    productImages: [
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
      'https://kontakt-mock-api.herokuapp.com/images/marshall.png',
    ],
    productName: 'Philips TV SMART',
    price: 1199.99,
    colors: [
      '#0000',
      '#ffff'
    ],
    discount: 0,
    slug: 'apple-iphone-11',
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
  
]

const spreadCategories = [
  {
    id: uuidv4(),
    name: 'Бытовая Техника',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu5.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Бытовая Техника в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Холодильники',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Смартфоны',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu1.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Мобильные телефоны в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Большие',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
      {
        id: uuidv4(),
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        name: 'Маленькие',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Бытовая Техника',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu5.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Бытовая Техника в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Холодильники',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Смартфоны',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu1.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Мобильные телефоны в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Большие',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
      {
        id: uuidv4(),
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        name: 'Маленькие',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Бытовая Техника',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu5.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Бытовая Техника в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Холодильники',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Смартфоны',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu1.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Мобильные телефоны в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Большие',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
      {
        id: uuidv4(),
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        name: 'Маленькие',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Бытовая Техника',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu5.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Бытовая Техника в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Холодильники',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Смартфоны',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu1.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Мобильные телефоны в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Большие',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
      {
        id: uuidv4(),
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        name: 'Маленькие',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Бытовая Техника',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu5.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Бытовая Техника в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Холодильники',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Смартфоны',
    thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/menu1.svg',
    categoryBanners: [
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
      'https://kontakt-mock-api.herokuapp.com/images/14-layers.jpg',
    ],
    seoBlock: {
      title: 'Мобильные телефоны в Kontakt Home!',
      description: [
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        },
        {
          id: uuidv4(), 
          paragraph: [
            'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi, Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS. ',
          ]
        }
      ],
      tags: [
        { id: 'apple', link: '#' },
        { id: 'samsung', link: '#' },
        { id: 'дешевые телефоны', link: '#' }
      ]
    },
    subCategories: [
      {
        id: uuidv4(),
        name: 'Большие',
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      },
      {
        id: uuidv4(),
        thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/iPhone.png',
        name: 'Маленькие',
        filters: [
          {
            id: uuidv4(), 
            name: 'Бренды',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Быстрый выбор',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Фронтальная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
          {
            id: uuidv4(), 
            name: 'Основная камера',
            thumbIcon: 'https://kontakt-mock-api.herokuapp.com/images/1457064_vestfrost_vfc09va_13@2x.png',
            categories: [
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 36,
                priductsIds: [...products.map((p) => p.id).slice(0, 36)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 16,
                priductsIds: [...products.map((p) => p.id).slice(0, 16)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 5,
                priductsIds: [...products.map((p) => p.id).slice(0, 5)]
              },
              {
                id: uuidv4(),
                name: 'Apple',
                count: 1,
                priductsIds: [...products.map((p) => p.id).slice(0, 1)]
              },
              {
                id: uuidv4(),
                name: 'Samsung',
                count: 10,
                priductsIds: [...products.map((p) => p.id).slice(0, 10)]
              },
              {
                id: uuidv4(),
                name: 'Xiaomi',
                count: 7,
                priductsIds: [...products.map((p) => p.id).slice(0, 7)]
              },
              {
                id: uuidv4(),
                name: 'Honor',
                count: 40,
                priductsIds: [...products.map((p) => p.id).slice(0, 40)]
              },
            ]
          },
        ],
      }
    ]
  },
]
 
module.exports = {
  newProducts,
  specialProducts,
  mostPopularProducts,
  BlogItems,
  promotionsSides,
  salesLeaders,
  smallBanners,
  wideBanners,
  newsSlides,
  generalSlides,
  specialOffers,
  categories,
  spreadCategories,
  categorySlides,
  categoryProducts,
  categoriesPrime,
  products: [
    ...newProducts,
    ...specialProducts,
    ...mostPopularProducts
  ].map((x, i) => ({
    ...x,
    category: {
      id: uuidv4(),
      name: ['phone', 'tv'][i % 2 === 0 ? 0 : 1],
    },
    stars: 2.5,
  }))
};
