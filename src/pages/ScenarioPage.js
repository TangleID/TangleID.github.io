import React, { Component } from 'react';
import { FaGraduationCap, FaStore } from 'react-icons/fa';

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

          <p>
            TangleID now has two scenario: Certification and Data Marketplace.
            The most significant difference between them lies in the entities.
            The former one still focuses on human beings while the latter one
            expand to “Human–Machine Interaction (HMI)” or even “Machine to
            Machine (M2M) Interaction.”
          </p>

          <div>
            <div className="section-header">
              <h4 className="section-title">
                <FaGraduationCap size={28} />
                Certification
              </h4>
              <div className="section-controls">
                <a
                  className="button button-primary"
                  href="http://demokits.biilabs.io/certification"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
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

          <div>
            <h4 className="section-title">
              <FaStore size={24} />
              Data Marketplace
            </h4>

            <p>
              The value of data is not a new thing, whether in business or in
              warfare. The successes of Alphabet, Facebook and Amazon are futher
              changing our cognitions of profitable business models in current
              world. Either the goal of precision marketing or the material
              collection for machine learning, their intentions can be shorten
              into one word: data, the oil in the digital era.
            </p>
            <LearnMoreLink to="/marketplace" />
          </div>
        </section>
      </div>
    );
  }
}

export default ScenarioPage;
