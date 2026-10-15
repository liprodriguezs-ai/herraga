// Single source of truth for every fact shown on the landing.
// All copy is transcribed from herraga.com (HTML text and text baked into images),
// see _source/CONTENT.md.

// Canonical origin. herraga.com (apex) forwards here from GoDaddy; www is served by Cloudflare.
export const SITE_URL = 'https://www.herraga.com';

// Google Tag Manager container (owned by HERRAGA). GA4 and any other tags are configured inside GTM.
export const GTM_ID = 'GTM-T7RF9SK2';

export const company = {
  name: 'HERRAGA',
  brand: 'HERRAGA Refacciones',
  legalName: 'HERRAGA S. de R.L. de C.V.',
  tagline: 'La fuerza detrás de tu motor',
  values: ['Calidad', 'Servicio', 'Confianza'],
  description:
    'Refacciones diésel originales y con garantía para motores de rango medio y pesado: medias reparaciones, cabezas de cilindro, filtros, enfriadores, bombas de aceite, juntas, sensores y aceites. Sucursales en CDMX, Edo. Méx., Querétaro y Tijuana con envíos a todo México.',
};

// National line (also WhatsApp). Digits only, without country code.
export const NATIONAL_PHONE = '6645149674';

// Customer service line (from HERRAGA's 2026 shipping flyer).
export const SERVICE_PHONE = '5519595959';

// Mexican 10-digit numbers: two-digit area codes (CDMX/Edo. Méx. 55 and 56, Guadalajara 33, Monterrey 81)
// read 2-4-4; every other area code reads 3-3-4.
export const formatPhone = (digits: string) =>
  /^(55|56|33|81)/.test(digits)
    ? `${digits.slice(0, 2)} ${digits.slice(2, 6)} ${digits.slice(6)}`
    : `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;

export const telHref = (digits: string) => `tel:+52${digits}`;

export const whatsappHref = (message = 'Hola HERRAGA, quiero cotizar una refacción.') =>
  `https://wa.me/52${NATIONAL_PHONE}?text=${encodeURIComponent(message)}`;

export const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/109430565189462', icon: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/herragarefacciones', icon: 'instagram' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@herraga_refacciones', icon: 'tiktok' },
  { name: 'X', href: 'https://x.com/herraga_', icon: 'x' },
  { name: 'YouTube', href: 'https://www.youtube.com/@HERRAGA', icon: 'youtube' },
] as const;

export const nav = [
  { label: 'Motores', href: '#motores' },
  { label: 'Productos', href: '#productos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Sucursales', href: '#sucursales' },
  { label: 'Cotizar', href: '#cotizar' },
];

// Brands printed on the original hero banner, in banner order.
export const heroBrands = ['Cummins', 'IPD', 'MAHLE', 'CAT', 'Volvo', 'Fleetguard', 'Detroit', 'Mack', 'Mercedes-Benz', 'Navistar'];

export type Pillar = {
  id: string;
  title: string;
  body: string;
  image: 'garantia' | 'asesoria' | 'envios' | 'pagos';
  imageAlt: string;
  lead?: string;
  points: string[];
  cta: { label: string; kind: 'tel' | 'whatsapp' };
};

export const pillars: Pillar[] = [
  {
    id: 'originales',
    title: 'Refacciones originales',
    body: 'Trabajamos con marcas reconocidas como Cummins, Volvo, Mahle e IPD, entre otras, garantizando calidad, durabilidad y garantía en cada pieza.',
    image: 'garantia',
    imageAlt: 'Sello HERRAGA: 100% original, garantía total. Calidad, confianza, garantía.',
    lead: '100% original. Garantía total.',
    points: ['Calidad', 'Confianza', 'Garantía'],
    cta: { label: 'Llamar', kind: 'tel' },
  },
  {
    id: 'asesoria',
    title: 'Asesoría especializada',
    body: 'Nuestro equipo te ayuda a encontrar la refacción exacta para tu unidad. Evita errores, ahorra tiempo y asegura el correcto funcionamiento de tu motor.',
    image: 'asesoria',
    imageAlt: 'Asesor de HERRAGA Refacciones revisando turbos, inyectores y camisas con un cliente en el almacén.',
    points: [],
    cta: { label: 'Solicita cotización', kind: 'whatsapp' },
  },
  {
    id: 'envios',
    title: 'Envíos a todo México',
    body: 'Contamos con envíos a todo México y disponibilidad inmediata en múltiples sucursales. Recibe tus refacciones cuando las necesitas.',
    image: 'envios',
    imageAlt: 'Envíos a todo México: mapa con rutas de entrega, tractocamión y cajas de HERRAGA Refacciones. Cobertura nacional, envíos seguros y entregas rápidas.',
    lead: 'Llegamos a donde tu negocio nos necesite.',
    points: ['Cobertura nacional', 'Envíos seguros', 'Entregas rápidas'],
    cta: { label: 'Llamar', kind: 'tel' },
  },
  {
    id: 'pagos',
    title: 'Formas de pago',
    body: 'Ofrecemos múltiples formas de pago para tu comodidad y rapidez en cada compra. Elige la opción que mejor se adapte a tus necesidades y asegura tus refacciones sin complicaciones.',
    image: 'pagos',
    imageAlt: 'Pago con celular, tarjeta y efectivo en HERRAGA Refacciones.',
    lead: '¡Aceptamos todos los medios de pago!',
    points: ['Pago con tarjeta', 'Transferencia bancaria', 'Link de pago', 'Efectivo'],
    cta: { label: 'Llamar', kind: 'tel' },
  },
];

export type EngineGroup = { brand: string; lines: string[][] };

export type Specialty = {
  id: string;
  title: string;
  short: string;
  image: 'medias-reparaciones' | 'cabeza-cilindro';
  imageAlt: string;
  groups: EngineGroup[];
};

export const specialties: Specialty[] = [
  {
    id: 'medias-reparaciones',
    title: 'Medias reparaciones',
    short: 'media reparación',
    image: 'medias-reparaciones',
    imageAlt: 'Kits de media reparación Cummins Genuine Parts: camisas, pistones, filtros y juntas.',
    groups: [
      { brand: 'Cummins', lines: [['ISM-EGR', 'M11', 'ISX', 'ISX-EGR', 'X15', 'NTC855', 'N14']] },
      { brand: 'Detroit Serie 60', lines: [['11.1L', '12.7L', '14L'], ['DDEC 3', 'DDEC 4', 'DDEC 5', 'DDEC 6']] },
      { brand: 'Volvo', lines: [['D12', 'D13', 'MP8']] },
      { brand: 'Mercedes-Benz', lines: [['OM 366', 'OM 460', 'OM 904/924', 'OM 906/926']] },
      { brand: 'Navistar', lines: [['DT 466', 'DT 360', 'DT 530']] },
      { brand: 'Ford-Navistar', lines: [['Super-Duty F250-F550'], ['7.3L', '6.7L', '6.4L', '6.0L']] },
      { brand: 'Caterpillar', lines: [['C15', 'C15-BT', '3406E']] },
      { brand: 'Hino', lines: [['J05E', 'Ceja de 3 mm', 'Ceja de 8 mm']] },
    ],
  },
  {
    id: 'cabezas-de-cilindro',
    title: 'Cabezas de cilindro',
    short: 'cabeza de cilindro',
    image: 'cabeza-cilindro',
    imageAlt: 'Cabeza de cilindro para motor diésel de trabajo pesado con válvulas y resortes ensamblados.',
    groups: [
      { brand: 'Cummins', lines: [['ISX', 'X15', 'ISX15/X15', 'ISF 3.8', 'ISL 8.9', 'ISM/M11', 'PX8/ISC']] },
      { brand: 'Detroit Serie 60', lines: [['DDEC 2', 'DDEC 3', 'DDEC 4', '12.7 L', 'DDEC 5', '14 L', 'DDEC 6', 'DD15']] },
      { brand: 'Volvo', lines: [['D12', 'D13', 'MP8']] },
      { brand: 'Mercedes-Benz', lines: [['OM 366', 'OM 904/924', 'OM 906/926']] },
      { brand: 'Caterpillar', lines: [['C15/3406E', 'C10/C12', 'C11/C13']] },
    ],
  },
];

export type Product = {
  id: 'filtros' | 'enfriadores' | 'bombas-aceite' | 'juntas' | 'sensores' | 'aceites';
  title: string;
  body: string;
  alt: string;
};

export const products: Product[] = [
  {
    id: 'filtros',
    title: 'Filtros',
    body: 'Filtros diésel de alta calidad diseñados para ofrecer máxima protección y rendimiento en motores de trabajo pesado.',
    alt: 'Filtros Fleetguard WF2127, LF14000NN, FF2200 y FS19729 para motores diésel Cummins.',
  },
  {
    id: 'enfriadores',
    title: 'Enfriadores',
    body: 'Enfriadores de aceite diseñados para motores diésel de trabajo pesado, ideales para mantener una temperatura óptima de operación y proteger el rendimiento del motor en aplicaciones de alta exigencia.',
    alt: 'Enfriador de aceite Cummins junto a su caja original.',
  },
  {
    id: 'bombas-aceite',
    title: 'Bombas de aceite',
    body: 'Componentes de lubricación para motores diésel que garantizan un flujo eficiente de aceite y un desempeño confiable en aplicaciones de alta exigencia.',
    alt: 'Bomba de aceite con engranes para motor diésel frente a su caja Cummins.',
  },
  {
    id: 'juntas',
    title: 'Juegos de juntas',
    body: 'Juegos de juntas para motores diésel diseñados para ofrecer un sellado confiable y un desempeño óptimo en aplicaciones de trabajo pesado.',
    alt: 'Juego completo de juntas y empaques para motor diésel de seis cilindros.',
  },
  {
    id: 'sensores',
    title: 'Sensores',
    body: 'Sensores y componentes electrónicos para motores diésel de trabajo pesado, diseñados para monitorear y mantener un funcionamiento preciso y confiable en distintas aplicaciones.',
    alt: 'Sensores de presión y temperatura Cummins Genuine Parts.',
  },
  {
    id: 'aceites',
    title: 'Aceites',
    body: 'Aceites y lubricantes de alta calidad diseñados para ofrecer protección avanzada, desempeño óptimo y mayor vida útil en motores diésel de trabajo pesado.',
    alt: 'Cubetas de aceite Petronas Urania para motores diésel de trabajo pesado.',
  },
];

// "Refacciones para motores" and "Nuestras marcas" from the catalog slide; IPD from the hero banner copy.
export const engineBrands = ['Cummins', 'CAT', 'Detroit', 'Mercedes-Benz', 'Navistar', 'Volvo', 'Mack'];
export const partBrands = ['MAHLE', 'Interstate McBee', 'Fleetguard', 'Chevron', 'Petronas', 'IPD'];

export type Branch = { city: string; region: string; regionCode: string; phone: string };

export const branches: Branch[] = [
  { city: 'CDMX', region: 'Ciudad de México', regionCode: 'CMX', phone: '5513694968' },
  { city: 'Cuautitlán Izcalli', region: 'Edo. Méx.', regionCode: 'MEX', phone: '5574797258' },
  { city: 'Huehuetoca', region: 'Edo. Méx.', regionCode: 'MEX', phone: '5574797258' },
  { city: 'Querétaro', region: 'Qro.', regionCode: 'QUE', phone: '4413903098' },
  { city: 'Tijuana', region: 'B.C.', regionCode: 'BCN', phone: '6632034335' },
];

export const guarantees = ['Calidad garantizada', 'Refacciones originales', 'Experiencia y confianza', 'Envíos a todo México'];
