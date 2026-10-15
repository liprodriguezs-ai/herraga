// Coverage check: every fact from the original herraga.com (HTML + text baked into images)
// must be present as real text in the built page. Run after `npm run build`.
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const text = html
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ');
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ');
const hay = norm(text);

const required = [
  // HTML copy
  'Refacciones diésel para motores de rango pesado',
  'Refacciones originales',
  'Trabajamos con marcas reconocidas como Cummins, Volvo, Mahle e IPD',
  'Asesoría especializada',
  'Nuestro equipo te ayuda a encontrar la refacción exacta para tu unidad',
  'Envíos a todo México',
  'disponibilidad inmediata en múltiples sucursales',
  'Formas de pago',
  'Ofrecemos múltiples formas de pago',
  'Cotiza con un asesor especializado',
  'Habla con un asesor',
  'Solicita cotización',
  'Suscríbete para recibir actualizaciones, promociones y mucho más',
  'Correo electrónico',
  'HERRAGA S. de R.L. de C.V.',
  'Todos los derechos reservados',
  // Hero banner
  'La fuerza detrás de tu motor',
  '¡Encuentra las mejores marcas!',
  'Especialistas en medias reparaciones, cabezas de cilindro y más',
  'Envíos a toda la república',
  // Image copy
  '100% original', 'Garantía total', 'Calidad', 'Confianza', 'Garantía',
  'Llegamos a donde tu negocio nos necesite', 'Cobertura nacional', 'Envíos seguros', 'Entregas rápidas',
  '¡Aceptamos todos los medios de pago!', 'Pago con tarjeta', 'Transferencia bancaria', 'Link de pago', 'Efectivo',
  'Medias reparaciones', 'Cabezas de cilindro', 'Especialistas en motores de trabajo pesado', 'Calidad · Servicio · Confianza',
  'Conoce más de nuestros productos',
  'Filtros diésel de alta calidad', 'Enfriadores de aceite diseñados', 'Componentes de lubricación',
  'Juegos de juntas para motores diésel', 'Sensores y componentes electrónicos', 'Aceites y lubricantes de alta calidad',
  'Refacciones para motores', 'Nuestras marcas', 'Interstate McBee', 'Chevron', 'Petronas', 'Fleetguard', 'MAHLE', 'IPD', 'Mack',
  'Nuestras sucursales', 'para que tu motor nunca se detenga',
  'Atención nacional', 'Calidad garantizada', 'Experiencia y confianza',
  'Refacciones diésel de calidad, donde y cuando las necesitas',
  // Phones
  '664 514 9674', '551 369 4968', '557 479 7258', '441 390 3098', '663 203 4335',
  // Branches
  'CDMX', 'Cuautitlán Izcalli', 'Huehuetoca', 'Querétaro', 'Tijuana',
  // Engine codes
  'ISM-EGR', 'M11', 'ISX-EGR', 'X15', 'NTC855', 'N14', 'ISX15/X15', 'ISF 3.8', 'ISL 8.9', 'ISM/M11', 'PX8/ISC',
  'Detroit Serie 60', '11.1L', '12.7L', '14L', 'DDEC 2', 'DDEC 3', 'DDEC 4', 'DDEC 5', 'DDEC 6', 'DD15',
  'D12', 'D13', 'MP8', 'OM 366', 'OM 460', 'OM 904/924', 'OM 906/926',
  'DT 466', 'DT 360', 'DT 530', 'Ford-Navistar', 'Super-Duty F250-F550', '7.3L', '6.7L', '6.4L', '6.0L',
  'Caterpillar', 'C15', 'C15-BT', '3406E', 'C15/3406E', 'C10/C12', 'C11/C13', 'Hino', 'J05E', 'Ceja de 3 mm', 'Ceja de 8 mm',
];

const links = [
  'https://www.facebook.com/109430565189462',
  'https://www.instagram.com/herragarefacciones',
  'https://www.tiktok.com/@herraga_refacciones',
  'https://x.com/herraga_',
  'https://www.youtube.com/@HERRAGA',
  'https://wa.me/526645149674',
  'tel:+526645149674',
];

const missing = required.filter((s) => !hay.includes(norm(s)));
const missingLinks = links.filter((l) => !html.includes(l));

console.log(`text: ${required.length - missing.length}/${required.length} present`);
console.log(`links: ${links.length - missingLinks.length}/${links.length} present`);
if (missing.length || missingLinks.length) {
  console.error('MISSING:', [...missing, ...missingLinks]);
  process.exit(1);
}
