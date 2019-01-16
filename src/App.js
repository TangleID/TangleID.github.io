import React, { Component } from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import ScenarioPage from './pages/ScenarioPage';
import CertificationPage from './pages/scenario/CertificationPage';
import MarketplacePage from './pages/scenario/MarketplacePage';

import './stylesheets/main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App">
          <Header />

          <div className="content-container">
            <Route exact path="/" component={Home} />
            <Route path="/scenario" component={ScenarioPage} />
            <Route path="/certification" component={CertificationPage} />
            <Route path="/marketplace" component={MarketplacePage} />
          </div>

          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
