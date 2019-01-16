import React, { Component } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

import LearnMoreLink from '../components/LearnMoreLink';

class ScenarioPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="section-header">
            <h3 className="section-title">Scenario</h3>
          </div>

          <p>The TangleID contain the following scenario:</p>

          <div>
            <div className="section-header">
              <h4 className="section-title">
                <FaGraduationCap size={28} />
                Certification
              </h4>
              <div className="section-controls">
                <a
                  className="button button-primary"
                  href="http://demokits.biilabs.io:4500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  className="button"
                  href="https://github.com/TangleID/demo-site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon fab fa-github" />
                  Download
                </a>
              </div>
            </div>

            <p>
              In the digital world, entities, such as individuals, organizations
              or devices, generate many digital footprints in daily activities.
              Unfortunately, the current process is still time-consuming or
              inefficiently recorded, resulting from the non-digitalization or
              the human intervention.
            </p>
            <LearnMoreLink to="/certification" />
          </div>
        </section>
      </div>
    );
  }
}

export default ScenarioPage;
