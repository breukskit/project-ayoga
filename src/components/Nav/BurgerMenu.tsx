import React from 'react';

import { Link } from 'react-router-dom';

import { createUseStyles, useTheme } from 'react-jss';

import { menuItems, methodsSub } from './menuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const useStyles = createUseStyles((theme) => ({
  burgerMenu: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '360px',
    maxWidth: '90%',
    height: '100vh',
    background: '#fff',
    boxShadow: '3px 10px 29px 0px rgba(0,0,0,0.61)',
  },
  times: {
    position: 'absolute',
    top: '4.67px',
    right: '8px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  list: {
    marginTop: '1rem',
  },
}));

interface Props {
  showBurgermenu: boolean;
  setShowBurgermenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu = ({ showBurgermenu, setShowBurgermenu }: Props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.burgerMenu}>
      <FontAwesomeIcon
        icon={faTimes}
        onClick={() => setShowBurgermenu(false)}
        color="#2E3D49"
        size="lg"
        className={classes.times}
      />
      <ul className={classes.list}>
        {menuItems.map((item) => {
          return (
            <li key={item.id} onClick={() => setShowBurgermenu(false)}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
