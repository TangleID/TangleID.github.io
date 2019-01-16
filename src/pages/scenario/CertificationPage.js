import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

const CertificationPage = () => {
  return (
    <div className="container">
      <section className="section">
        <div className="section-header">
          <h3 className="section-title">Certification Scenario</h3>
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

        <div className="section-body">
          <p>
            In the digital world, entities, such as individuals, organizations
            or devices, generate many digital footprints in daily activities.
            Unfortunately, the current process is still time-consuming or
            inefficiently recorded, resulting from the non-digitalization or the
            human intervention.
          </p>

          <p>
            Take certification for instance. Imagine what you need to get a bank
            loan approved. Firstly, you have to be a recoginzed entity by an
            trusted organization. Later, you are likely to be asked to show
            identity verification, financial statement or even professional
            accreditation in order to build trust. However, before a bank
            accepts the loan, you tend to be exhausted during the complex and
            lenthy procedure.
          </p>

          <p>
            If all things can be digitalized and automatically matched, what
            should it be?
          </p>

          <ImageZoom
            image={{
              src: require('../../images/certification/overview.png'),
              alt: 'Certification Interaction Flow'
            }}
          />

          <p>
            The scenario we choose is the certification process and the roles
            contain:
          </p>
          <ul>
            <li>
              Student: As a holder, a student is able to arrange his or her
              personal data and claims with verified carriers.
            </li>
            <li>
              College: As an issuer, a college can issue verifiable claims to
              the holders after verifying students&lsquo; identity.
            </li>
          </ul>

          <h2>Flow</h2>
          <h3>Step1: Register the Decentralized Identifier</h3>
          <p>
            At first, students (holders) have to create new digital identities
            on Tangle and the registration includes 2 steps:
          </p>

          <ol>
            <li>
              Download the application (APP) on devices, such as mobile or
              tablets
            </li>
            <li>Create a new account and sign in</li>
          </ol>

          <h3>Step2: Sign in by Verifying the Digital Identity</h3>
          <ImageZoom
            image={{
              src: require('../../images/certification/prove_identity.png'),
              alt: 'Certification Interaction Flow'
            }}
          />
          <p>
            After the accounts created, the next step is Sign in. Students
            (Holders) are required to scan the QR Codes provided by the website
            in order to decide what data will be revealed.
          </p>

          <h3>Step 3: Self-sovereign Identity Interaction</h3>
          <ImageZoom
            image={{
              src: require('../../images/certification/issue_claim.png'),
              alt: 'Certification Interaction Flow'
            }}
          />

          <p>
            With all preceding procedures done, students' digital identities can
            finally make their own footprints. For example, students can
            directly send requests to their college to get their certificates of
            degree with TangleID. In other words, the issue of diploma can be
            digitalized to save time and money.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CertificationPage;
