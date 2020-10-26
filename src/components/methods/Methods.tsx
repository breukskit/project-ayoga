import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useRefs } from './useRefs';
import { useSIV } from './useSIV';

export const Methods = () => {
  const { hash } = useLocation();
  const refs = useRefs();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  useSIV(refs, hash);

  return (
    <div style={{ marginTop: '96px' }}>
      <div ref={refs.One} style={{ height: '100vh' }}>
        Method one
      </div>
      <div ref={refs.Two}>Method two</div>
      <div ref={refs.Three}>Method three</div>
      <div ref={refs.Four} style={{ height: '100vh' }}>
        Method four
      </div>
      <div ref={refs.Five}>Method five</div>
      <div ref={refs.Six}>Method six</div>
      <div ref={refs.Seven}>Method seven</div>
    </div>
  );
};
