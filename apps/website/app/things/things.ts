export type Thing = {
  name: string;
  description: string;
  image: string;
  link?: string;
};

export const things: Thing[] = [
  {
    name: 'Coffee',
    description: 'The ritual of grinding, brewing, and savoring a perfect cup.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop',
    link: 'https://en.wikipedia.org/wiki/Coffee',
  },
  {
    name: 'Vinyl Records',
    description: 'Warm analog sound and the joy of flipping through crates.',
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=200&h=200&fit=crop',
    link: 'https://en.wikipedia.org/wiki/Phonograph_record',
  },
  {
    name: 'Mechanical Keyboards',
    description: 'The satisfying click-clack of a well-built board.',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=200&h=200&fit=crop',
    link: 'https://www.reddit.com/r/MechanicalKeyboards/',
  },
  {
    name: 'Cast Iron Cooking',
    description: 'A seasoned skillet that only gets better with age.',
    image: 'https://images.unsplash.com/photo-1585837146751-a44118595680?w=200&h=200&fit=crop',
    link: 'https://en.wikipedia.org/wiki/Cast-iron_cookware',
  },
  {
    name: 'Public Libraries',
    description: 'Free access to knowledge, community, and quiet wonder.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=200&h=200&fit=crop',
    link: 'https://en.wikipedia.org/wiki/Public_library',
  },
  {
    name: 'Night Sky',
    description: 'Looking up and remembering how vast it all is.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&h=200&fit=crop',
  },
  {
    name: 'Bicycles',
    description: 'The most elegant and efficient machine ever invented.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=200&h=200&fit=crop',
    link: 'https://en.wikipedia.org/wiki/Bicycle',
  },
  {
    name: 'Sourdough Bread',
    description: 'Flour, water, salt, time, and a little wild magic.',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=200&h=200&fit=crop',
    link: 'https://en.wikipedia.org/wiki/Sourdough',
  },
];
