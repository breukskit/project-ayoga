import React from 'react';

import { ThemeProvider } from 'react-jss';
import { theme } from './components/styles/theme';

import { viewportContext } from './components/context/Context';
import { useSetviewport } from './useSetviewport';

import { Nav } from './components/Nav/Nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Methods } from './components/methods/Methods';
import { Events } from './components/events/Events';
import { Contact } from './components/contact/Contact';

function App() {
  const viewport = useSetviewport();
  return (
    <Router>
      <viewportContext.Provider value={{ viewport }}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/methods" component={Methods} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </ThemeProvider>
      </viewportContext.Provider>
    </Router>
  );
}

export default App;
