import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { createUseStyles, useTheme } from 'react-jss';

import { menuItems, methodsSub } from './menuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { CSSTransition } from 'react-transition-group';

import './animation.css';

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
    marginTop: '2rem',
  },
  listItem: {
    position: 'relative',
    borderBottom: '1px solid rgba(0,0,0,0.14)',
    '&:nth-child(5)': {
      borderBottom: 'none',
    },
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    width: '100%',
    height: '100%',
    padding: {
      top: '1rem',
      left: '1rem',
      bottom: '.5rem',
      right: '1rem',
    },
    color: ({ theme }) => theme.primaryTextColor,
    '&:hover': {
      cursor: 'pointer',
      background: '#eee',
    },
  },
  specialLink: {
    extend: 'link',
    borderBottom: ({ showMethodsSub }) =>
      showMethodsSub ? '1px solid rgba(0,0,0,0.14)' : '',
    color: '#2E3D49',
  },
  trigger: {
    position: 'absolute',
    right: '0',
    top: '0px',
    borderLeft: '1px solid rgba(0,0,0,0.14)',
    padding: {
      top: '1rem',
      left: '1rem',
      bottom: '.5rem',
      right: '1rem',
    },
    '&:hover': {
      cursor: 'pointer',
      background: '#eee',
    },
  },
  sublistItem: {
    borderBottom: '1px solid rgba(0,0,0,0.14)',
    '&:nth-child(7)': {
      borderBottom: 'none',
    },
  },
  sublistLink: {
    extend: 'link',
    paddingLeft: '2rem',
    color: ({ theme }) => theme.primaryTextColor,
  },
}));

interface Props {
  showBurgermenu: boolean;
  setShowBurgermenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu = ({ showBurgermenu, setShowBurgermenu }: Props) => {
  const [showMethodsSub, setShowMethodsSub] = useState(false);
  const [menuHeight, setMenuHeight] = useState<null | number>(null);

  const calcHeight = (el: HTMLElement) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const exit = () => {
    setMenuHeight(0);
  };
  const theme = useTheme();
  const classes = useStyles({ theme, showMethodsSub });
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
            <li className={classes.listItem} key={item.id}>
              <Link
                className={item.hasSubMenu ? classes.specialLink : classes.link}
                to={item.path}
                onClick={() => setShowBurgermenu(false)}
              >
                {item.name}
              </Link>
              {item.hasSubMenu ? (
                <span
                  className={classes.trigger}
                  onClick={() => setShowMethodsSub(!showMethodsSub)}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    rotation={showMethodsSub ? 180 : undefined}
                  />
                </span>
              ) : null}

              {item.hasSubMenu && (
                <div
                  className="dropdown-container"
                  style={{ height: menuHeight! }}
                >
                  <CSSTransition
                    in={showMethodsSub}
                    unmountOnExit
                    classNames="submenu"
                    timeout={300}
                    onEnter={calcHeight}
                    onExit={exit}
                  >
                    <ul>
                      {methodsSub.map((x) => {
                        return (
                          <li className={classes.sublistItem} key={x.id}>
                            <Link
                              className={classes.sublistLink}
                              onClick={() => setShowBurgermenu(false)}
                              to={{ pathname: x.path, hash: x.hash }}
                            >
                              {x.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </CSSTransition>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
