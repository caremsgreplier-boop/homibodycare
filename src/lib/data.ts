
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  image: ImagePlaceholder;
  price: string;
  originalPrice?: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
};

export type Testimonial = {
  id: string;
  name: string;
  avatar: ImagePlaceholder;
  comment: string;
  product: string;
};

export const products: Product[] = [
  {
    id: 'hair-oil',
    name: 'Hair oil',
    tagline: 'Strength and shine, naturally.',
    image: getImage('hair-oil')!,
    price: '₹150',
    originalPrice: '₹199',
    description: 'Hairfall and anti dandruff',
    ingredients: ['Argan Oil', 'Jojoba Oil', 'Coconut Oil', 'Rosemary Extract', 'Vitamin E'],
    benefits: ['Reduces hair fall', 'Promotes healthy growth', 'Adds natural luster and shine', 'Tames frizz and flyaways'],
    usage: 'Gently massage into scalp and apply from root to tip. Leave for at least 30 minutes or overnight for deep conditioning. Wash with a gentle shampoo.',
  },
  {
    id: 'body-soap',
    name: 'Avocado soap',
    tagline: 'Cleanse and rejuvenate your skin.',
    image: getImage('body-soap')!,
    price: '₹70',
    originalPrice: '₹100',
    description: 'Our handcrafted herbal body soap is made with a blend of moisturizing butters and essential oils to cleanse your skin without stripping its natural moisture. Suitable for all skin types.',
    ingredients: ['Avocado', 'Avocado oil', 'Goat milk', 'Vitamins', 'Natural oils'],
    benefits: ['Gently cleanses and purifies', 'Moisturizes and softens skin', 'Soothes irritation with a calming aroma', 'Exfoliates dead skin cells'],
    usage: 'Lather with water and apply to body. Rinse thoroughly. For external use only. Avoid contact with eyes.',
  },
  {
    id: 'shampoo',
    name: 'Shampoo',
    tagline: 'For healthy scalp and strong hair.',
    image: getImage('shampoo')!,
    price: '₹350',
    originalPrice: '₹399',
    description: "Hairfall and anti dandruff and reduce hair skin disease",
    ingredients: ['Hibiscus Flower Extract', 'Amla Extract', 'Bhringaraj Leaf Extract', 'Methi Seeds Extract', 'Rosemary Seeds Extract', 'Vitamins & Oils', 'And more'],
    benefits: ['Controls hair fall', 'Fights dandruff', 'Soothes scalp irritation and reduces skin diseases', 'Gentle, sulfate-free formula'],
    usage: 'Gently massage all over the scalp & along the tresses with fingertips (not nails) for 2-3 minutes Wash it off clean & follow with a cold-water rinse. Let the hair air-dry and feel soft hairs.',
  },
  {
    id: 'body-care',
    name: 'Hydrating Body Care',
    tagline: 'All-day moisture, silky smooth.',
    image: getImage('body-care')!,
    price: '',
    description: 'A rich and creamy body lotion that provides long-lasting hydration. Its fast-absorbing formula is enriched with natural extracts to leave your skin feeling silky smooth, supple, and radiant.',
    ingredients: ['Hyaluronic Acid', 'Shea Butter', 'Almond Oil', 'Cucumber Extract', 'Vitamin E'],
    benefits: ['Provides deep, long-lasting hydration', 'Improves skin elasticity', 'Soothes and nourishes dry skin', 'Absorbs quickly with no greasy residue'],
    usage: 'Apply generously to clean, dry skin. Massage in circular motions until fully absorbed. Use daily for best results.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    avatar: getImage('avatar-1')!,
    comment: 'The hair oil is a game-changer! My hair has never felt so soft and healthy. The shine is incredible and it smells divine. I\'ve noticed a lot less breakage since I started using it.',
    product: 'Hair oil',
  },
  {
    id: '2',
    name: 'Michael B.',
    avatar: getImage('avatar-2')!,
    comment: 'I have very sensitive skin, and this herbal soap is perfect. It\'s gentle, moisturizing, and doesn\'t cause any irritation. The lavender scent is so calming.',
    product: 'Avocado soap',
  },
  {
    id: '3',
    name: 'Emily R.',
    avatar: getImage('avatar-3')!,
    comment: 'Finally, a body lotion that actually works. My skin stays hydrated all day long without feeling greasy. I love the light, fresh scent. Highly recommend!',
    product: 'Hydrating Body Care',
  },
  {
    id: '4',
    name: 'Jessica P.',
    avatar: getImage('avatar-1')!,
    comment: 'The shampoo has done wonders for my dandruff problem. My scalp feels so clean and refreshed after every wash. Plus, my hair is much stronger now!',
    product: 'Shampoo',
  },
  {
    id: '5',
    name: 'David L.',
    avatar: getImage('avatar-2')!,
    comment: 'I love how lightweight the hair oil is. It doesn\'t weigh my hair down at all, but still gives it a beautiful shine and gets rid of frizz. Highly recommended.',
    product: 'Hair oil',
  },
  {
    id: '6',
    name: 'Chloe G.',
    avatar: getImage('avatar-3')!,
    comment: 'This is the best herbal soap I have ever used. It smells amazing and leaves my skin feeling so soft and supple. I will definitely be repurchasing!',
    product: 'Avocado soap',
  },
  {
    id: '7',
    name: 'Ben K.',
    avatar: getImage('avatar-1')!,
    comment: 'My dry skin has improved so much since I started using the hydrating body care. It absorbs quickly and keeps my skin moisturized all day. Fantastic product!',
    product: 'Hydrating Body Care',
  },
];
