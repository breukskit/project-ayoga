import { v4 as uuidv4 } from 'uuid';

export const menuItems = [
  { name: 'Home', id: uuidv4(), path: '/' },
  { name: 'About Us', id: uuidv4(), path: '/about' },
  { name: 'Methods', id: uuidv4(), path: '/methods' },
  { name: 'Events', id: uuidv4(), path: '/events' },
  { name: 'Contact', id: uuidv4(), path: '/contact' },
];
