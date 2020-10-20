import { useState, useEffect } from 'react';

const xs = window.matchMedia('(max-width: 575px)');
const small = window.matchMedia('(min-width: 576px) and (max-width: 766px)');
const medium = window.matchMedia('(min-width: 767px) and (max-width: 991px)');
const large = window.matchMedia('(min-width: 991px) and (max-width: 1199px)');
const xl = window.matchMedia('(min-width: 1200px)');

const setInitViewport = () => {
  const width = window.innerWidth;
  if (width < 576) {
    return 'xs';
  } else if (width > 575 && width < 766) {
    return 'small';
  } else if (width > 765 && width < 992) {
    return 'medium';
  } else if (width > 991 && width < 1200) {
    return 'large';
  } else {
    return 'xl';
  }
};

export const useSetviewport = () => {
  const [viewport, setViewport] = useState(setInitViewport);

  useEffect(() => {
    xs.addEventListener('change', (e) => {
      if (e.matches) {
        setViewport('xs');
      }
    });
    small.addEventListener('change', (e) => {
      if (e.matches) {
        setViewport('small');
      }
    });
    medium.addEventListener('change', (e) => {
      if (e.matches) {
        setViewport('medium');
      }
    });
    large.addEventListener('change', (e) => {
      if (e.matches) {
        setViewport('large');
      }
    });
    xl.addEventListener('change', (e) => {
      if (e.matches) {
        setViewport('xl');
      }
    });
    return () => {
      xs.removeEventListener('change', () => {
        console.log('cleaned');
      });
      small.removeEventListener('change', () => {});
      medium.removeEventListener('change', () => {});
      large.removeEventListener('change', () => {});
      xl.removeEventListener('change', () => {});
    };
  });
  return viewport;
};
