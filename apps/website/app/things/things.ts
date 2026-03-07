import nomosAhoiNeomatikSirenBlue from '../images/things/nomos-ahoi-neomatik-siren-blue.webp';
import elYucatecoGreenChileHabanero from '../images/things/el-yucateco-green-chile-habanero.png';
import lochbyPocketNotebook from '../images/things/lochby-pocket-notebook.png';
import shigeruKawaiSk3 from '../images/things/shigeru-kawai-sk-3.jpg';
import adidasSambaOg from '../images/things/adidas-samba-og.jpg';

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
    description: 'Nice little notebook.',
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
];
