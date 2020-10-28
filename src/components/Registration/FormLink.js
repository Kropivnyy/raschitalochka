import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormLink.module.css';

const FormLink = ({ route, text }) => (
  <a className={styles.link} href={route}>
    {text}
  </a>
);

FormLink.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormLink;
