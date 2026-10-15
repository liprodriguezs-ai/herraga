// Generates src/data/mexico-map.json: an accurate outline of Mexico (Natural Earth 1:50m via world-atlas)
// in the Lambert conformal conic projection INEGI uses (standard parallels 17.5° and 29.5°),
// plus the projected position of every branch. Run with `npm run build:map` when branches change.
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { geoConicConformal, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';

const require = createRequire(import.meta.url);
const world = JSON.parse(readFileSync(require.resolve('world-atlas/countries-50m.json'), 'utf8'));
const countries = feature(world, world.objects.countries).features;
// Neighbours are only faint context, so the lighter 1:110m outlines are enough.
const coarse = JSON.parse(readFileSync(require.resolve('world-atlas/countries-110m.json'), 'utf8'));
const coarseCountries = feature(coarse, coarse.objects.countries).features;

const MEXICO = '484';
const NEIGHBOURS = ['840', '320', '084']; // United States, Guatemala, Belize

const mexico = countries.find((c) => c.id === MEXICO);
const neighbours = coarseCountries.filter((c) => NEIGHBOURS.includes(c.id));

const WIDTH = 1000;
const HEIGHT = 660;
const projection = geoConicConformal()
  .parallels([17.5, 29.5])
  .rotate([102, 0])
  .fitExtent([[24, 24], [WIDTH - 24, HEIGHT - 24]], mexico);
const path = geoPath(projection).digits(1);

// City-centre coordinates [longitude, latitude] for each branch city.
const branches = [
  { city: 'Tijuana', coords: [-117.0382, 32.5149] },
  { city: 'Querétaro', coords: [-100.3899, 20.5888] },
  { city: 'Huehuetoca', coords: [-99.2036, 19.8306] },
  { city: 'Cuautitlán Izcalli', coords: [-99.2464, 19.6469] },
  { city: 'CDMX', coords: [-99.1332, 19.4326] },
].map((b) => {
  const [x, y] = projection(b.coords);
  return { city: b.city, x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
});

const out = {
  source: 'Natural Earth 1:50m (world-atlas 2.0.2), Lambert conformal conic 17.5°/29.5°',
  viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
  mexico: path(mexico),
  neighbours: neighbours.map((n) => path(n)).join(''),
  branches,
};

writeFileSync(new URL('../src/data/mexico-map.json', import.meta.url), JSON.stringify(out));
console.log(`mexico-map.json: ${out.mexico.length + out.neighbours.length} path chars, ${branches.length} branches`);
console.log(branches);
