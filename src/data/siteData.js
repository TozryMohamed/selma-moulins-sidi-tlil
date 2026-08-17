// Toutes les URLs d'images sont centralisées ici afin de pouvoir les
// remplacer facilement par des photos officielles de la Société des
// Moulins Sidi Tlil. Les images ci-dessous proviennent d'Unsplash
// (libres de droits, licence Unsplash — https://unsplash.com/license).
//
// Pour utiliser le logo officiel SELMA, déposez le fichier dans
// /public/logo.png puis remplacez la valeur de LOGO_PATH ci-dessous.

export const LOGO_PATH = '/selma1.png'

const unsplash = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  heroWheatField: unsplash('1753866551936-998e5fcf6d5f', 2400),
  silos: unsplash('1745517512760-dd48be2f7cb8', 1800),
  industrialPlant: unsplash('1757573538081-c469f75cdd7a', 1800),
  wheatGrainClose: unsplash('1664736909263-2c735a6a9fb0', 1400),
  flourPouring: unsplash('1549590143-d5855148a9d5', 1400),
  livestockFeed: unsplash('1588152850700-c82ecb8ba9b1', 1400),
}

export const PRODUCTS = [
  { key: 'flour', image: IMAGES.flourPouring },
  { key: 'semolina', image: IMAGES.wheatGrainClose },
  { key: 'feed', image: IMAGES.livestockFeed },
]

export const PROCESS_STEPS = ['s1', 's2', 's3', 's4', 's5']

export const QUALITY_ITEMS = ['quality', 'hygiene', 'safety', 'control', 'regularity', 'standards']

export const VALUES_ITEMS = ['quality', 'reliability', 'expertise', 'commitment']

export const INDUSTRY_IMAGES = [IMAGES.silos, IMAGES.industrialPlant, IMAGES.wheatGrainClose]

export const CONTACT_INFO = {
  companyName: "Société des Moulins Sidi Tlil",
  companyNameAr: "شركة مطاحن سيدي تليل",
  address: "zone industrielle Feriana Kasserine",
  addressAr: "المنطقة الصناعية فريانة القصرين",
  phone: "77 431 498",
  phone2: "77 431 490",
  fax: "77 431 459",
  email: "commercial@smst.tn",
  phoneHref: "tel:+21677431498",
  phoneHref2: "tel:+21677431490",
}