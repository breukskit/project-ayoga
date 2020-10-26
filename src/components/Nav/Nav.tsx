import React, { useContext } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { viewportContext } from '../context/Context';
import { FullsizeNav } from './FullsizeNav';
import { MobileNav } from './MobileNav';

const useStyles = createUseStyles((theme) => ({
  nav: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    minHeight: '96px',
    padding: '1rem',
    boxShadow: '3px 3px 10px 0px rgba(50, 50, 50, 0.5)',
    '@media(max-width: 766px)': {
      minHeight: '76px',
    },
    '@media(max-width: 575px)': {
      padding: '.5rem',
    },
  },
}));

export const Nav = () => {
  const { viewport } = useContext(viewportContext)!;
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <nav className={classes.nav}>
      {viewport !== 'xs' && viewport !== 'small' && <FullsizeNav />}
      {viewport !== 'xl' && viewport !== 'large' && viewport !== 'medium' && (
        <MobileNav />
      )}
    </nav>
  );
};
