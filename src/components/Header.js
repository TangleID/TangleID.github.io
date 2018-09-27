import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="nav-wrap">
            <Link className="main-logo" to="/">
              <span>TangleID</span>
            </Link>

            <div className="nav-menu">
              <span itemProp="name">
                <Link itemProp="url" to="/">
                  Get Started
                </Link>
              </span>
              <span itemProp="name">
                <Link itemProp="url" to="/scenario">
                  Scenarios
                </Link>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
