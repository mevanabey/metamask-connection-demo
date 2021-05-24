import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ children }) => <button className={styles.button}>{children}</button>;

Button.defaultProps = {
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
