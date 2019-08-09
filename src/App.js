import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Showcase from './components/Showcase';
import BanjeeClassy from './components/BanjeeClassy';
import Footer from './components/Footer';

import './App.css';

export class App extends Component {
  state = {
    isNextPage: false
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path='/'
            render={props => (
              <div>
                <Showcase />
              </div>
            )}
          />
          <Route exact path='/banjeeclassymenaing' component={BanjeeClassy} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
