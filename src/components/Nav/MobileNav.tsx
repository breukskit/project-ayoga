import React from 'react';
import bars from '../assets/bars.svg';
import logo from '../assets/logo2.svg';

import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  mobileNav: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bars: {
    height: '16px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  logo: {
    width: '50px',
  },
  header: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: '26px',
    letterSpacing: '.1rem',
    color: ({ theme }) => theme.primaryTextColor,
  },
}));

export const MobileNav = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.mobileNav}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <h1 className={classes.header}>A&amp;E</h1>
      <img className={classes.bars} src={bars} alt="Hamburger-menu" />
    </div>
  );
};
