import React from 'react';

import { ThemeProvider } from 'react-jss';
import { theme } from './components/styles/theme';

import { viewportContext } from './components/context/Context';
import { useSetviewport } from './useSetviewport';

import { Nav } from './components/Nav/Nav';

function App() {
  const viewport = useSetviewport();
  return (
    <viewportContext.Provider value={{ viewport }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Nav />
        </div>
      </ThemeProvider>
    </viewportContext.Provider>
  );
}

export default App;
