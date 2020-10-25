import React, { useState } from 'react';
import logo from '../assets/logo2.svg';

import { Link } from 'react-router-dom';

import { createUseStyles, useTheme } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { BurgerMenu } from './BurgerMenu';

const useStyles = createUseStyles((theme) => ({
  mobileNav: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bars: {
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
  burgerMenu: {
    position: 'absolute',
    top: '76px',
  },
}));

export const MobileNav = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [showBurgermenu, setShowBurgermenu] = useState(false);
  return (
    <div className={classes.mobileNav}>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="Logo" />
      </Link>
      <h1 className={classes.header}>A&amp;E</h1>
      <FontAwesomeIcon
        onClick={() => setShowBurgermenu(!showBurgermenu)}
        icon={faBars}
        size="lg"
        className={classes.bars}
        color="#2E3D49"
      />
      {showBurgermenu && (
        <BurgerMenu
          showBurgermenu={showBurgermenu}
          setShowBurgermenu={setShowBurgermenu}
        />
      )}
    </div>
  );
};
