import React, { useEffect } from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import { useLocation } from 'react-router-dom';

import { useRefs } from './useRefs';
import { useSIV } from './useSIV';

import citrus from '../assets/citrus.jpg';
import yogaOne from '../assets/yoga-one.jpg';
import pyramid from '../assets/pyramid.webp';

const useStyles = createUseStyles((theme) => ({
  methods: {
    margin: { top: '96px', right: 'auto', left: 'auto' },
    maxWidth: '1180px',
  },
  header: {},
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '1rem',
    '@media(max-width: 991px)': {
      gridTemplateColumns: '1fr',
      textAlign: 'center',
    },
    '@media(max-width: 575px)': {
      padding: '.5rem',
    },
  },
  leftContent: {
    padding: '1rem',
    '& h2': {
      marginBottom: '1rem',
      textAlign: 'center',
    },
    '& h4': {
      marginBottom: '1rem',
      textAlign: 'center',
    },
    '& p': {
      marginBottom: '.5rem',
      lineHeight: '1.6',
    },
    '@media(max-width: 991px)': {
      order: 2,
    },
  },
  rightContent: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: '100%', maxWidth: '600px' },
}));

export const Methods = () => {
  const { hash } = useLocation();
  const refs = useRefs();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [hash]);

  useSIV(refs, hash);
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <section className={classes.methods}>
      <header className={classes.header}>
        <h2>Methods overview</h2>
        <h4>Subtitle?</h4>
        <p>General information about the approach...</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quo
          architecto nemo inventore odit itaque debitis esse! Non vel fugit
          deserunt quas adipisci et ducimus voluptate ad cumque eveniet commodi
          iste dolorem doloremque nesciunt cupiditate, itaque architecto ipsum
          consectetur. Quos a cum iusto aliquid repellat nihil vitae qui.
          Excepturi ducimus, laboriosam consectetur incidunt similique sint et,
          nam pariatur ullam nobis repellat ratione assumenda exercitationem
          iure in aliquam expedita, earum numquam magnam voluptatibus fuga
          reiciendis qui? Quo dolor impedit veniam dignissimos beatae! Possimus
          praesentium odio eum sint, omnis natus, quaerat accusantium unde neque
          sapiente veniam vel error nisi fugit labore earum?
        </p>
      </header>
      <div className={classes.container} ref={refs.One}>
        <div className={classes.leftContent}>
          <h2>Method 1</h2>
          <h4>Subtitle</h4>
          <p>
            <strong>Description of the method below</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptates voluptatibus optio nobis, autem saepe modi
            nulla, a, doloremque minima explicabo deleniti! Illo exercitationem
            recusandae iusto, suscipit dolores quas at molestias ut repellat
            harum! Repudiandae voluptate saepe quaerat laborum vero quam
            eligendi ipsum incidunt, dolorem similique odit, minus numquam illo.
          </p>
        </div>
        <div className={classes.rightContent}>
          <img
            className={classes.image}
            src={yogaOne}
            alt="People doing yoga"
          />
        </div>
      </div>
      <div className={classes.container} ref={refs.Two}>
        <div className={classes.rightContent}>
          <img className={classes.image} src={citrus} alt="Fruits" />
        </div>
        <div className={classes.leftContent}>
          <h2>Method 2</h2>
          <h4>Subtitle 2</h4>
          <p>
            <strong>Description of the method below</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptates voluptatibus optio nobis, autem saepe modi
            nulla, a, doloremque minima explicabo deleniti! Illo exercitationem
            recusandae iusto, suscipit dolores quas at molestias ut repellat
            harum! Repudiandae voluptate saepe quaerat laborum vero quam
            eligendi ipsum incidunt, dolorem similique odit, minus numquam illo.
          </p>
        </div>
      </div>
      <div ref={refs.Three}>Method three</div>
      <div ref={refs.Four}>Method four</div>
      <div ref={refs.Five}>Method five</div>
      <div ref={refs.Six}>Method six</div>
      <div ref={refs.Seven}>Method seven</div>
    </section>
  );
};
