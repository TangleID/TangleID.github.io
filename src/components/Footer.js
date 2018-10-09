import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="footer-logo">
              <span>TangleID</span>
              <p>Copyright (C) 2017-2018 BiiLabs, Co. Ltd. and Contributors</p>
            </div>
            <div className="footer-nav">
              <div className="title">Github</div>
              <a
                href="https://github.com/TangleID"
                target="_blank"
                rel="noopener noreferrer"
              >
                TangleID
              </a>
              <a
                href="https://github.com/TangleID/tangleid-did"
                target="_blank"
                rel="noopener noreferrer"
              >
                TangleID DID
              </a>
              <a
                href="https://github.com/TangleID/tangleid-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                TangleID Client App
              </a>
              <a
                href="https://github.com/TangleID/tangleid-client/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the App
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
