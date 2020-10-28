import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormButton.module.css';

const FormButton = ({ text }) => (
  <button className={styles.Button} type="submit">
    {text}
  </button>
);

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormButton;
