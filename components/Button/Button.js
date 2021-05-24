import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ children, onClick }) => <button className={styles.button} onClick={onClick}>{children}</button>;

Button.defaultProps = {
  children: null,
  onClick: null,
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
