import { createContext } from 'react';

interface State {
  viewport: string;
}

export const viewportContext = createContext<State | undefined>(undefined);
