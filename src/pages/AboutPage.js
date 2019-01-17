import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

const AboutPage = () => {
  return (
    <div className="container">
      <section className="section">
        <div className="section-header">
          <h3 className="section-title">TangleID</h3>
        </div>

        <ImageZoom
          image={{
            src: require('../../images/marketplace/overview.png'),
            alt: 'Data Marketplace Overview'
          }}
        />
        <p style={{ textAlign: 'center' }}>
          Figure1. Data Marketplace Overview
        </p>

        <p>
          The value of data is not a new thing, whether in business or in
          warfare. The successes of Alphabet, Facebook and Amazon are futher
          changing our cognitions of profitable business models in current
          world. Either the goal of precision marketing or the material
          collection for machine learning, their intentions can be shorten into
          one word: data, the oil in the digital era.
        </p>
        <p>
          Not surprisingly, data storage and marketplace turn into new
          challenges. However, current data storage and marketplace, featured as
          centralized modes, still face up substantial costs and huge risks.
          More urgently, the issues of security and transparency not merely
          remain, but further deteriorate.
        </p>
        <p>
          Therefore, what BiiLabs provides is an innovative type of data
          marketplace platform with distributed legder technology (DLT) to
          transform data into profits with better trust basic.
        </p>

        <h3>Data Marketplace Platform</h3>
        <p>
          Inspired by the concept of The Streaming Data Payment Protocal
          (SDPP）, BiiLabs proposes a new type of data marketplace platform
          based on MAM Channel, DID Auth and Smart Contract. Meanwhile,
          differing from SDPP, our implementation puts not merely the trading
          records but also the transaction process on the distributed ledgers.
          This way can efficiently enhance the degree of transparency, since all
          interactions with smart contracts will be cryptographically writen
          on-chain.
        </p>

        <p>
          In other words, household tranports the encrypted data to smart
          contracts for storage via “MAM channel,” and simultaneously make a
          verifiable Auth-compliant request to the platform in claim of “being
          tradable.” Later, the verified data will enter data marketplace to be
          traded. What’s more, the platform will complete matching and trading
          without human intervention in the whole process, and finally meet both
          providers’ and consumers’ expectations.
        </p>

        <p>
          The ecosystem consists of three mechanisms: data recording, matching
          and data trading, which are similar to most trading platform. The
          tasks of the platform can be divided into two parts: seller filtering
          and system maintenance. The former one aims to avoid data bias by
          previous selection, while the later one intends to confirm the system
          stability with continued technical supports. Also, according to the
          mechanism, sellers will only receive the pay from the buyers until
          transactions are confirmed, or the fee will be temporally stored on
          the Tangle.
        </p>

        <h3>Use Case: Airbox</h3>

        <ImageZoom
          image={{
            src: require('../../images/marketplace/flow.png'),
            alt: 'Data Marketplace Overview'
          }}
        />
        <p style={{ textAlign: 'center' }}>
          Figure1. Data Marketplace Workflow
        </p>

        <p>
          Take the use case of Airbox for instance. Every household with Airbox
          can collect air quality records automatically and autonomically,
          rather than passively accept the outcomes from the centralized
          authorities. To protect privacy, data should be encrypted before
          on-chain. As for the data reliability, BiiLabs designs the
          smart-contract-oriented structure to write down every transaction. At
          the same time, data on-chain will send a verifiable request to mark
          itself as “being tradeable.” This step enables buyers to review and
          bargain at will. Last but not least, payments will be stored on the
          smart contracts until the transactions are confirmed.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
