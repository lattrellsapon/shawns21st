import React, { Component } from 'react';
import Showcase from './components/Showcase';
import LandingMessage from './components/LandingMessage';
import Footer from './components/Footer';

import './App.css';

export class App extends Component {
  state = {
    isMessageOpened: true
  };

  readMessage = () => {
    this.setState({
      isMessageOpened: true
    });
  };

  render() {
    return (
      <div>
        <LandingMessage
          readMessage={this.readMessage}
          isMessageOpened={this.state.isMessageOpened}
        />
        <Showcase isMessageOpened={this.state.isMessageOpened} />
        <Footer />
      </div>
    );
  }
}

export default App;
