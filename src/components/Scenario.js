import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';

import InteractionFlow from '../images/certification_flow.jpg';
import RoleImage from '../images/vc_roles.png';

class Scenario extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="container">
        <section className="section">
          <h3 className="section-title">Scenario</h3>
          <p>
            In the digital world, entities, such as individuals, organizations
            or devices, generate many digital footprints in daily activities.
            Unfortunately, the current process is still time-consuming or
            inefficiently recorded, resulting from the non-digitalization or the
            human intervention.
          </p>

          <p>Take certification for instance.</p>
          <ImageZoom
            image={{
              src: InteractionFlow,
              alt: 'Certification Interaction Flow'
            }}
          />

          <p>
            Imagine what you need to get a bank loan approved. Firstly, you have
            to be a recoginzed entity by an trusted organization. Later, you are
            likely to be asked to show identity verification, financial
            statement or even professional accreditation in order to build
            trust. However, before a bank accepts the loan, you tend to be
            exhausted during the complex and lenthy procedure.
          </p>

          <p>
            If all things can be digitalized and automatically matched, what
            should it be? In the following, we will list down the key players in
            certification and explain how to make it smarter.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">Three Elements in TangleID</h3>
          <p>
            Basically, there are three main players in TangleID: Issuer, Holder
            and Inspector-Verifier. Sometimes, to further deliberate the
            framework, Identifier Registry will be emphasized, but here we focus
            on major three elements and give them descriptions in reference of
            W3C.
          </p>

          <ImageZoom
            image={{
              src: RoleImage,
              alt: 'Certification Interaction Flow'
            }}
          />

          <h4 className="section-title">1. Issuer</h4>
          <p>
            The entity that creates a claim and associates it with a particular
            subject (Often known as Holder, but not always).
          </p>

          <h4 className="section-title">2. Holder</h4>
          <p>
            The entity who controls a particular claim. A holder is typically
            the initiator of the transmission of a claim.
          </p>

          <h4 className="section-title">3. Inspector-Verifier</h4>
          <p>The entity verifying a claim about a given subject.</p>

          <p>
            In the certification scenario, Issuer is the authorites; Holder is
            you; Inspector Verifier is the bank. The flow can be described as
            follow: Holder (you) applies for the loan, hence the identity
            authentication to Issuer (the authorities) by Inspector Verifier
            (bank). That is, TangleID, a powerful tool, can reduce the costs by
            M2M mechanics and further rebuild the trust without trusts by DLT.
          </p>
        </section>
      </div>
    );
  }
}

export default Scenario;
