import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/logo2.svg';
import { createUseStyles, useTheme } from 'react-jss';

import { menuItems, methodsSub } from './menuItems';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
    letterSpacing: '.1rem',
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
  listItem: {
    margin: {
      right: '.4rem',
      left: '.4rem',
    },
  },
  link: {
    textTransform: 'uppercase',
    color: ({ theme }) => theme.primaryTextColor,
    letterSpacing: '.09rem',
    '&:hover': {
      color: ({ theme }) => theme.primaryColor,
    },
    transition: 'all 200ms ease',
  },
  activeLink: {
    extend: 'link',
    borderBottom: ({ theme }) => `2px solid ${theme.primaryColor}`,
    color: ({ theme }) => theme.primaryColor,
  },
  submenu: {
    position: 'absolute',
    padding: {
      top: '.5rem',
    },
  },
  submenuLi: {
    '&:hover': {
      background: '#eee',
    },
  },
  submenuLink: {
    color: ({ theme }) => theme.primaryTextColor,
    letterSpacing: '.09rem',
    '&:hover': {
      color: ({ theme }) => theme.primaryColor,
    },
    transition: 'all 200ms ease',
    display: 'inline-block',
    height: '100%',
    width: '100%',
    padding: '.5rem',
  },
}));

export const FullsizeNav = () => {
  const [showSub, setShowSub] = useState(false);
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { pathname } = useLocation();
  return (
    <div className={classes.fullsizeNav}>
      <div className={classes.left}>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="Logo" />
        </Link>
        <h1 className={classes.header}>ayoga a&amp;e</h1>
      </div>
      <ul className={classes.list}>
        {menuItems.map((x) => {
          return (
            <li
              key={x.id}
              className={classes.listItem}
              onClick={
                x.hasSubMenu
                  ? () => setShowSub(!showSub)
                  : () => setShowSub(false)
              }
            >
              <Link
                to={x.path}
                className={
                  pathname === x.path ? classes.activeLink : classes.link
                }
              >
                {x.name}
                {x.hasSubMenu ? (
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faChevronDown} />{' '}
                  </span>
                ) : null}
              </Link>
              {x.hasSubMenu ? (
                <div className={classes.submenu}>
                  {showSub && (
                    <ul>
                      {methodsSub.map((item) => {
                        return (
                          <li className={classes.submenuLi} key={item.id}>
                            <Link
                              className={classes.submenuLink}
                              to={item.path}
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
