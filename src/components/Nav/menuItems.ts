import { v4 as uuidv4 } from 'uuid';

export const menuItems = [
  { name: 'Home', id: uuidv4(), path: '/', hasSubMenu: false },
  { name: 'About Us', id: uuidv4(), path: '/about', hasSubMenu: false },
  { name: 'Methods', id: uuidv4(), path: '/methods/', hasSubMenu: true },
  { name: 'Events', id: uuidv4(), path: '/events', hasSubMenu: false },
  { name: 'Contact', id: uuidv4(), path: '/contact', hasSubMenu: false },
];

export const methodsSub = [
  { name: 'Method One', id: uuidv4(), path: '/methods/', hash: '#method-one' },
  {
    name: 'Method Two',
    id: uuidv4(),
    path: '/methods/',
    hash: '#method-two',
  },
  {
    name: 'Method Three',
    id: uuidv4(),
    path: '/methods/',
    hash: '#method-three',
  },
  {
    name: 'Method Four',
    id: uuidv4(),
    path: '/methods/',
    hash: '#method-four',
  },
  {
    name: 'Method Five',
    id: uuidv4(),
    path: '/methods/',
    hash: '#method-five',
  },
  { name: 'Method Six', id: uuidv4(), path: '/methods/', hash: '#method-six' },
  {
    name: 'Method Seven',
    id: uuidv4(),
    path: '/methods/',
    hash: '#method-seven',
  },
];
