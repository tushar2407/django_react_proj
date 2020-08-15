import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
