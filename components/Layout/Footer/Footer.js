import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = ({ children }) => <footer className={styles.container}>{children}</footer>;

Footer.defaultProps = {
  children: null,
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;