import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="section">
          <h3 className="section-title">What is TangleID?</h3>
          <p>
            Give you a unique identity to transform digital footprints into
            property.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">About TangleID: One Principle</h3>
          <p>
            TangleID aims to convert your digital footprints into digital assets
            with the principle of Decentralized Identifiers (DIDs). Based on
            blockchain technology, our mission is to propose a more efficient
            solution to not merely identity authentication but digital asset
            management, and further create a highly potential data marketplace
            for digial footprints. Therefore, TangleID try hard to re-build the
            trust by both machine-to-machine (M2M) mechanics and distributed
            ledger technology (DLT), which is also known as blochchain.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">What we provide?</h3>
          <p>
            By interacting with Tangle network, an identity storing its hash of
            an attributed data blob(e.g. Google Cloud, Azure, AWS, Dropbox,
            etc.) can be linked to offline data storage and update its files
            automatically. The management contains adding friends, modifying
            profiles and posting ephemeral (short time) photos. What’s more, the
            solution proposed by TangleID has two impactful features.
          </p>

          <h4 className="section-title">1. Traceability of Data</h4>
          <p>
            Traceability and security admittedly catch everyone’s attention
            after a series of data breaches. Meanwhile, the ongoing collapses of
            trust in traditional organizations and institutions imply the
            potential risks of centralization, not to mention the implementation
            of General Data Protection Regulation (GDPR) by the EU. TangleID
            allows users to quantify their digital footprints as assets and
            further to manage their digital properties.
          </p>

          <h4 className="section-title">2. GDPR-Complianced Solution</h4>
          <p>
            General Data Protection Regulation (GDPR) re-defines data privacy as
            a type of human rights, causing panic in industries. TangleID grabs
            the opportuinity to develop Decentralized Identifiers (DIDs)
            solution. According to W3C, DIDs are a new type of verifiable
            identifier for “self-sovereign” digital identity and are fully under
            the control of its subject. In other words, TangleID enables all
            entities be identified via digital signatures, privacy-preserving
            biometric protocols, etc., without manual intervention in the base
            of DLT.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">Scenario</h3>

          <h4 className="section-title">Certification</h4>
          <p>
            In the digital world, entities, such as individuals, organizations
            or devices, generate many digital footprints in daily activities.
            Unfortunately, the current process is still time-consuming or
            inefficiently recorded, resulting from the non-digitalization or the
            human intervention.
          </p>
          <p>
            <Link to="/scenario">
              Learn more <span className="arrow" />
            </Link>
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
