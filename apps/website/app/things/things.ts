import nomosAhoiNeomatikSirenBlue from '../images/things/nomos-ahoi-neomatik-siren-blue.webp';
import elYucatecoGreenChileHabanero from '../images/things/el-yucateco-green-chile-habanero.png';
import lochbyPocketNotebook from '../images/things/lochby-pocket-notebook.png';
import shigeruKawaiSk3 from '../images/things/shigeru-kawai-sk-3.jpg';
import adidasSambaOg from '../images/things/adidas-samba-og.jpg';
import withnailAndI from '../images/things/withnail-and-i.jpg';
import newYorkMets from '../images/things/new-york-mets.svg';
import tactileTurnSlimSwitchPen from '../images/things/tactile-turn-slim-switch-pen.jpg';
import breitlingSuperocean from '../images/things/breitling-superocean.webp';
import trakkeBannochPro from '../images/things/trakke-bannoch-pro.jpg';
import depechemode from '../images/things/depeche-mode.jpg';
import montyPython from '../images/things/monty-python.png';
import obsidian from '../images/things/obsidian.svg';
import nytCrossword from '../images/things/nyt-crossword.svg';

export type Thing = {
  name: string;
  description: string;
  image: string;
  link?: string;
};

export const things: Thing[] = [
  {
    name: 'NOMOS Ahoi Neomatik Siren Blue',
    description: 'Blue moon watch.',
    image: nomosAhoiNeomatikSirenBlue,
    link: 'https://nomos-glashuette.com/en-us/ahoi/ahoi-neomatik-siren-blue-562',
  },
  {
    name: 'El Yucateco Green Chile Habanero Hot Sauce',
    description: 'Green goto hot sauce.',
    image: elYucatecoGreenChileHabanero,
    link: 'https://www.hotsauce.com/El-Yucateco-Salsa-Picante-De-Chile-Habanero-Green',
  },
  {
    name: 'Lochby Pocket Notebooks (Dot Grid)',
    description: 'Nice notebook.',
    image: lochbyPocketNotebook,
    link: 'https://www.lochby.com/collections/notebooks/products/pocket-size-notebooks',
  },
  {
    name: 'Shigeru Kawai SK-3 Grand Piano',
    description: 'Sounds (and looks) absolutely beautiful.',
    image: shigeruKawaiSk3,
    link: 'https://shigerukawai.com/shigeru-kawai-sk-3/',
  },
  {
    name: 'Adidas Samba OG',
    description: 'Simple. Iconic.',
    image: adidasSambaOg,
    link: 'https://www.adidas.com/us/blog/1060276-we-gave-the-world-a-samba-a-legendary-shoe-with-a-rich-history',
  },
  {
    name: 'Withnail and I',
    description: 'We went on holiday by mistake.',
    image: withnailAndI,
    link: 'https://www.imdb.com/title/tt0094336/',
  },
  {
    name: 'New York Mets',
    description: 'Ya gotta believe.',
    image: newYorkMets,
    link: 'https://www.mlb.com/mets',
  },
  {
    name: 'Tactile Turn Slim Switch Pen',
    description: 'Ideas click.',
    image: tactileTurnSlimSwitchPen,
    link: 'https://tactileturn.com/products/slim-switch-pen?variant=52409866781040',
  },
  {
    name: 'Breitling Superocean',
    description: 'White water watch.',
    image: breitlingSuperocean,
    link: 'https://www.breitling.com/mm-en/watches/superocean/superocean-automatic-42/A17366D81A1A1/',
  },
  {
    name: 'Trakke Bannoch Pro Backpack',
    description: 'Good vibes bag.',
    image: trakkeBannochPro,
    link: 'https://trakke.com/products/bannoch-pro-backpack?variant=54930578538881',
  },
  {
    name: 'Depeche Mode',
    description: 'Everything counts.',
    image: depechemode,
    link: 'https://www.depechemode.com/',
  },
  {
    name: 'Monty Python',
    description: 'And now for something completely different.',
    image: montyPython,
    link: 'https://www.montypython.com/',
  },
  {
    name: 'Obsidian',
    description: 'Notes.',
    image: obsidian,
    link: 'https://obsidian.md/',
  },
  {
    name: 'New York Times Crossword',
    description: 'Daily ritual.',
    image: nytCrossword,
    link: 'https://www.nytimes.com/crosswords',
  },
];
