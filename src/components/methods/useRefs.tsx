import { useRef } from 'react';

export const useRefs = () => {
  const One = useRef<null | HTMLDivElement>(null);
  const Two = useRef<null | HTMLDivElement>(null);
  const Three = useRef<null | HTMLDivElement>(null);
  const Four = useRef<null | HTMLDivElement>(null);
  const Five = useRef<null | HTMLDivElement>(null);
  const Six = useRef<null | HTMLDivElement>(null);
  const Seven = useRef<null | HTMLDivElement>(null);
  return { One, Two, Three, Four, Five, Six, Seven } as const;
};
