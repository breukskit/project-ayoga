import React, { useContext } from 'react';
import logo from '../assets/logo2.svg';
import { createUseStyles, useTheme } from 'react-jss';
import { viewportContext } from '../context/Context';

const useStyles = createUseStyles((theme) => ({
  nav: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1180px',
    margin: 'auto',
    padding: '1rem',
    '@media(max-width: 766px)': {
      padding: '.5rem',
    },
  },
  logo: {
    width: '50px',
  },
  header: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: '26px',
    paddingLeft: '.5rem',
    color: ({ theme }) => theme.primaryTextColor,
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const menuItems = [
  { name: 'Home' },
  { name: 'About Us' },
  { name: 'Methods' },
  { name: 'Events' },
  { name: 'Contact' },
];

export const Nav = () => {
  const { viewport } = useContext(viewportContext)!;
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <nav className={classes.nav}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <h1 className={classes.header}>ayoga a&amp;e</h1>
      <ul className={classes.list}>
        {menuItems.map((x) => {
          return <li></li>;
        })}
      </ul>
    </nav>
  );
};
