import React from 'react';
import PropTypes from 'prop-types';

import { EHERSCAN_TRANSACTION_URL } from 'shared/constants';
import { Button } from 'components';
import styles from './TransactionRow.module.scss';

const TransactionRow = ({ transaction }) => (
  <div className={styles.container}>
    <div><span>Date: </span>{transaction.date}</div>
    <div><span>Value: </span>{transaction.value}</div>
    <div><span>From: </span>{transaction.from} <span>To: </span>{transaction.to}</div>
    <div><span>Tx Hash: </span>{transaction.hash}</div>
    <div><a href={`${EHERSCAN_TRANSACTION_URL}/${transaction.hash}`} target="_blank">View On Etherscan</a></div>
  </div>
);

TransactionRow.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default TransactionRow;
