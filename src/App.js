import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Scenario from './components/Scenario';

import './stylesheets/main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App">
          <Header />

          <div className="content-container">
            <Route exact path="/" component={Home} />
            <Route path="/scenario" component={Scenario} />
          </div>

          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
