import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LearnMoreLink = props => {
  return (
    <Link to={props.to}>
      {props.text} <span className="arrow" />
    </Link>
  );
};

LearnMoreLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
};

LearnMoreLink.defaultProps = {
  text: 'Learn more',
  to: '#'
};

export default LearnMoreLink;
