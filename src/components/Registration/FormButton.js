import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormButton.module.css';
import Loader from 'react-loader-spinner';

const FormButton = ({ text, isLoad }) => (
  <button className={styles.Button} type="submit">
    {!isLoad ? (
      <>{text}</>
    ) : (
      <div className={styles.loader}>
        <Loader
          type="Bars"
          color="#d4d4d4"
          width={30}
          height={30}
          visible={true}
        />
      </div>
    )}
  </button>
);

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
  isLoad: PropTypes.bool,
};

export default FormButton;
