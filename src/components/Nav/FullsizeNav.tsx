import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo2.svg';
import { createUseStyles, useTheme } from 'react-jss';

import { menuItems } from './menuItems';

const useStyles = createUseStyles((theme) => ({
  fullsizeNav: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    textTransform: 'uppercase',
    color: ({ theme }) => theme.primaryTextColor,
    padding: {
      right: '.4rem',
      left: '.4rem',
    },
    '&:hover': {
      // textDecoration: 'underline',
      color: ({ theme }) => theme.primaryColor,
    },
    transition: 'all 200ms ease',
  },
  activeLink: {
    extend: 'link',
    borderBottom: ({ theme }) => `2px solid ${theme.primaryColor}`,
    color: ({ theme }) => theme.primaryColor,
  },
}));

export const FullsizeNav = () => {
  const [active, setActive] = useState('');
  const theme = useTheme();
  const classes = useStyles({ theme });
  const handleActive = (id: string) => {
    menuItems.forEach((item) => {
      if (item.id === id) {
        setActive(item.name);
      }
    });
  };
  return (
    <div className={classes.fullsizeNav}>
      <div className={classes.left}>
        <img className={classes.logo} src={logo} alt="Logo" />
        <h1 className={classes.header}>ayoga a&amp;e</h1>
      </div>
      <ul className={classes.list}>
        {menuItems.map((x) => {
          return (
            <Link
              onClick={() => handleActive(x.id)}
              className={active === x.name ? classes.activeLink : classes.link}
              to={x.path}
              key={x.id}
            >
              {x.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
