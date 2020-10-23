import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => {
  return <section className="wrapper">{children}</section>;
};
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
