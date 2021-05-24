import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionRow.module.scss';

const TransactionRow = ({ transaction }) => <div className={styles.container}>{transaction.hash}</div>;

TransactionRow.propTypes = {
  transaction: PropTypes.array.isRequired,
};

export default TransactionRow;
