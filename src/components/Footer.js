import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="footer-logo">
              <span>TangleID</span>
              <p>Copyright (C) 2017-2019 BiiLabs Co., Ltd. and Contributors</p>
            </div>
            <div className="footer-nav">
              <div className="title">Github</div>
              <a
                href="https://github.com/TangleID/TangleID"
                target="_blank"
                rel="noopener noreferrer"
              >
                TangleID
              </a>
              <a
                href="https://github.com/visuallylab/BiiMe"
                target="_blank"
                rel="noopener noreferrer"
              >
                TangleID Client App
              </a>
              <a
                href="https://drive.google.com/file/d/1PQTnliJHsVdgszT3lCz2L9sF7yqBzwuo/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the App
              </a>
            </div>
            <div className="footer-nav">
              <div className="title">Docs</div>
              <a
                href="https://github.com/TangleID/TangleID/wiki"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Reference
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
