import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionRow.module.scss';

const TransactionRow = ({ children }) => <div className={styles.container}>{children}</div>;

TransactionRow.defaultProps = {
  children: null,
};

TransactionRow.propTypes = {
  children: PropTypes.node,
};

export default TransactionRow;
