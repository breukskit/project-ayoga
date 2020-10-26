import { useEffect } from 'react';

interface Refs {
  readonly One: React.MutableRefObject<null | HTMLDivElement>;
  readonly Two: React.MutableRefObject<null | HTMLDivElement>;
  readonly Three: React.MutableRefObject<null | HTMLDivElement>;
  readonly Four: React.MutableRefObject<null | HTMLDivElement>;
  readonly Five: React.MutableRefObject<null | HTMLDivElement>;
  readonly Six: React.MutableRefObject<null | HTMLDivElement>;
  readonly Seven: React.MutableRefObject<null | HTMLDivElement>;
}
export const useSIV = (refs: Refs, hash: string) => {
  useEffect(() => {
    switch (hash) {
      case '#method-one':
        refs.One.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;
      case '#method-two':
        refs.Two.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;
      case '#method-three':
        refs.Three.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;
      case '#method-four':
        refs.Four.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;
      case '#method-five':
        refs.Five.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;
      case '#method-six':
        refs.Six.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;
      case '#method-seven':
        refs.Seven.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;
    }
  });
};
