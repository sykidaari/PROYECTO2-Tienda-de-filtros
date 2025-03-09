const headerArray = [
  '/IMGs/navBar/JDlogo.png',
  'Hombre',
  'Mujer',
  'Niños',
  'Ofertas',
  '/IMGs/navBar/filterIcon.png',
  '/IMGs/navBar/cartIcon.png',
  '/IMGs/navBar/userIcon.png'
];

const heroIMGsrc = '/IMGs/hero.jpeg';

const sneakers = [
  {
    imgSrc: '/IMGS/sneakers/airmax1.png',
    brand: 'Nike Original',
    model: 'Air Max 1',
    price: 120
  },
  {
    imgSrc: '/IMGS/sneakers/nb9060.png',
    brand: 'New Balance',
    model: 'NB 9060',
    price: 80
  },
  {
    imgSrc: '/IMGS/sneakers/nikerevolution.png',
    brand: 'Nike Original',
    model: 'Nike Revolution',
    price: 90
  },
  {
    imgSrc: '/IMGS/sneakers/forumbuckle.png',
    brand: 'Adidas Original',
    model: 'Forum Buckle',
    price: 100
  },
  {
    imgSrc: '/IMGS/sneakers/campus.png',
    brand: 'Adidas Original',
    model: 'Campus',
    price: 120
  },
  {
    imgSrc: '/IMGS/sneakers/nb327.png',
    brand: 'New Balance',
    model: 'NB 327',
    price: 120
  },
  {
    imgSrc: '/IMGS/sneakers/dunklow.png',
    brand: 'Nike Original',
    model: 'Dunk Low',
    price: 120
  },
  {
    imgSrc: '/IMGS/sneakers/gazelle.png',
    brand: 'Adidas Original',
    model: 'Gazelle',
    price: 90
  },
  {
    imgSrc: '/IMGS/sneakers/airmaxsc.png',
    brand: 'Nike Original',
    model: 'Air Max SC',
    price: 150
  },
  {
    imgSrc: '/IMGS/sneakers/handballspezial.png',
    brand: 'Adidas Original',
    model: 'Handball Spezial',
    price: 120
  },
  {
    imgSrc: '/IMGS/sneakers/airforce.png',
    brand: 'Nike Original',
    model: 'Air Force',
    price: 130
  },
  {
    imgSrc: '/IMGS/sneakers/nb90602.png',
    brand: 'New Balance',
    model: 'NB 9060',
    price: 100
  },
  {
    imgSrc: '/IMGS/sneakers/nb480.png',
    brand: 'New Balance',
    model: 'NB 480',
    price: 150
  },
  {
    imgSrc: '/IMGS/sneakers/fullforcelow.png',
    brand: 'Nike Original',
    model: 'Full Force Low',
    price: 70
  },
  {
    imgSrc: '/IMGS/sneakers/airmaxsc2.png',
    brand: 'Nike Original',
    model: 'Air Max SC',
    price: 160
  },
  {
    imgSrc: '/IMGS/sneakers/handballspezial2.png',
    brand: 'Adidas Original',
    model: 'Handball Spezial',
    price: 140
  }
];

const filters = [
  {
    text: ['Marcas'],
    options: ['Nike Original', 'New Balance', 'Adidas Original']
  },
  {
    text: ['Precio'],

    description: ['Mínimo', 'Máximo']
  },
  { text: ['Filtrar'] },
  { text: ['Limpiar'] }
];

const footerElements = [
  {
    title: 'Compra con JD',
    links: [
      'Guía de tallas',
      'Buscador de tallas',
      'Descuento estudiantes',
      'Calendario lanzamientos',
      'Inscríbete a JDX',
      'JD Blog'
    ]
  },
  {
    title: 'Atención al cliente',
    links: [
      'Preguntas frecuentes',
      'Envíos y devoluciones',
      'Seguimiento de envío',
      'Contacto'
    ]
  },
  {
    title: 'Aviso legal',
    links: [
      'Términos y condiciones',
      'Promociones y condiciones',
      'Política de privacidad',
      'Política y Cookies',
      'Accesibilidad'
    ]
  }
];

export { headerArray, heroIMGsrc, filters, sneakers, footerElements };
