import nomosAhoiNeomatikSirenBlue from '../images/good-things/nomos-ahoi-neomatik-siren-blue.webp';
import elYucatecoGreenChileHabanero from '../images/good-things/el-yucateco-green-chile-habanero.png';
import lochbyPocketNotebook from '../images/good-things/lochby-pocket-notebook.png';
import shigeruKawaiSk3 from '../images/good-things/shigeru-kawai-sk-3.jpg';
import adidasSambaOg from '../images/good-things/adidas-samba-og.jpg';
import withnailAndI from '../images/good-things/withnail-and-i.jpg';
import newYorkMets from '../images/good-things/new-york-mets.svg';
import tactileTurnSlimSwitchPen from '../images/good-things/tactile-turn-slim-switch-pen.jpg';
import breitlingSuperocean from '../images/good-things/breitling-superocean.webp';
import trakkeBannochPro from '../images/good-things/trakke-bannoch-pro.jpg';
import depechemode from '../images/good-things/depeche-mode.jpg';
import montyPython from '../images/good-things/monty-python.png';
import obsidian from '../images/good-things/obsidian.svg';
import nytCrossword from '../images/good-things/nyt-crossword.svg';
import timexSnoopySpaceTraveler from '../images/good-things/timex-snoopy-space-traveler.jpg';
import timexMarlinSnoopy from '../images/good-things/timex-marlin-snoopy.jpg';
import seikoSeikomaticSelfDater from '../images/good-things/seiko-seikomatic-self-dater.jpg';

export type Thing = {
  name: string;
  description: string | (() => string);
  image: string;
  link?: string;
  tags: string[];
};

export const things: Thing[] = [
  {
    name: 'NOMOS Ahoi Neomatik Siren Blue',
    description: 'Blue moon watch.',
    image: nomosAhoiNeomatikSirenBlue,
    link: 'https://nomos-glashuette.com/en-us/ahoi/ahoi-neomatik-siren-blue-562',
    tags: ['watches'],
  },
  {
    name: 'El Yucateco Green Chile Habanero Hot Sauce',
    description: 'Green goto hot sauce.',
    image: elYucatecoGreenChileHabanero,
    link: 'https://www.hotsauce.com/El-Yucateco-Salsa-Picante-De-Chile-Habanero-Green',
    tags: ['food'],
  },
  {
    name: 'Lochby Pocket Notebooks (Dot Grid)',
    description: 'Nice notebook.',
    image: lochbyPocketNotebook,
    link: 'https://www.lochby.com/collections/notebooks/products/pocket-size-notebooks',
    tags: ['notes'],
  },
  {
    name: 'Shigeru Kawai SK-3 Grand Piano',
    description: 'Sounds (and looks) absolutely beautiful.',
    image: shigeruKawaiSk3,
    link: 'https://shigerukawai.com/shigeru-kawai-sk-3/',
    tags: ['music'],
  },
  {
    name: 'Adidas Samba OG',
    description: 'Simple. Iconic.',
    image: adidasSambaOg,
    link: 'https://www.adidas.com/us/blog/1060276-we-gave-the-world-a-samba-a-legendary-shoe-with-a-rich-history',
    tags: ['style'],
  },
  {
    name: 'Withnail and I',
    description: 'We went on holiday by mistake.',
    image: withnailAndI,
    link: 'https://www.imdb.com/title/tt0094336/',
    tags: ['movies'],
  },
  {
    name: 'New York Mets',
    description: 'Ya gotta believe.',
    image: newYorkMets,
    link: 'https://www.mlb.com/mets',
    tags: ['sports'],
  },
  {
    name: 'Tactile Turn Slim Switch Pen',
    description: 'Ideas click.',
    image: tactileTurnSlimSwitchPen,
    link: 'https://tactileturn.com/products/slim-switch-pen?variant=52409866781040',
    tags: ['notes'],
  },
  {
    name: 'Breitling Superocean',
    description: 'White water watch.',
    image: breitlingSuperocean,
    link: 'https://www.breitling.com/mm-en/watches/superocean/superocean-automatic-42/A17366D81A1A1/',
    tags: ['watches'],
  },
  {
    name: 'Trakke Bannoch Pro Backpack',
    description: 'Good vibes bag.',
    image: trakkeBannochPro,
    link: 'https://trakke.com/products/bannoch-pro-backpack?variant=54930578538881',
    tags: ['style'],
  },
  {
    name: 'Depeche Mode',
    description: 'Everything counts.',
    image: depechemode,
    link: 'https://www.depechemode.com/',
    tags: ['music'],
  },
  {
    name: 'Monty Python',
    description: 'And now for something completely different.',
    image: montyPython,
    link: 'https://www.montypython.com/',
    tags: ['movies'],
  },
  {
    name: 'Obsidian',
    description: 'Notes.',
    image: obsidian,
    link: 'https://obsidian.md/',
    tags: ['notes'],
  },
  {
    name: 'New York Times Crossword',
    description: () => {
      const start = new Date(2020, 0, 20);
      const now = new Date();
      const days = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      return `Current streak: ${days.toLocaleString()} days`;
    },
    image: nytCrossword,
    link: 'https://www.nytimes.com/crosswords',
    tags: ['games'],
  },
  {
    name: 'Timex x Snoopy Space Traveler',
    description: 'One small step for beagle.',
    image: timexSnoopySpaceTraveler,
    link: 'https://wornandwound.com/exclusive-introducing-the-timex-snoopy-space-traveler-marlin-automatic/',
    tags: ['watches'],
  },
  {
    name: 'Timex Marlin Automatic Snoopy Edition',
    description: 'Here\'s the World War I flying ace...',
    image: timexMarlinSnoopy,
    link: 'https://www.ablogtowatch.com/timex-marlin-automatic-snoopy-edition-watch/',
    tags: ['watches'],
  },
  {
    name: '1963 Seiko Seikomatic Self Dater',
    description: 'Gold is best.',
    image: seikoSeikomaticSelfDater,
    link: 'https://youtu.be/n7-RetY7fGo?si=GmN-oFn5MoSqzu2e',
    tags: ['watches'],
  },
];
