import React, { useContext } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { viewportContext } from '../context/Context';
import { FullsizeNav } from './FullsizeNav';
import { MobileNav } from './MobileNav';

const useStyles = createUseStyles((theme) => ({
  nav: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1180px',
    minHeight: '96px',
    margin: 'auto',
    padding: '1rem',
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
