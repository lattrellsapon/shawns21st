import React, { Component } from 'react';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Showcase />
        <Footer />
      </div>
    );
  }
}

export default App;
