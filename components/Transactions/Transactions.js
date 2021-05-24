import React from 'react';
import PropTypes from 'prop-types';

import TransactionRow from './TransactionRow/TransactionRow';
import styles from './Transactions.module.scss';

const Transactions = ({ children }) => <div className={styles.container}>{children}</div>;

Transactions.defaultProps = {
  children: null,
};

Transactions.propTypes = {
  children: PropTypes.node,
};

export default Transactions;
