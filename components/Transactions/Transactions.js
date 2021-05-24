import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import { useMoralis } from 'react-moralis';

import { useEtherscan } from 'shared/hooks';

import TransactionRow from './TransactionRow/TransactionRow';
import styles from './Transactions.module.scss';

const Transactions = ({ children }) => {
  const { isAuthenticated, user } = useMoralis();

  const primaryEthAddress = useMemo(() => isAuthenticated && (user.get('accounts')[0]), [isAuthenticated, user]);

  const { internalTransactions, tokenTransactions, isLoading } = useEtherscan(primaryEthAddress || null, 'balance');

  return (
    <div className={styles.container}>
      <h2>Internal transactions (Last 10)</h2>
      {!!internalTransactions.length ?
        internalTransactions.map(transaction => <TransactionRow key={transaction.hash} transaction={transaction} />) : <div>No Transactions to be displayed</div>}

      <h2>ERC-20 transactions (Last 10)</h2>
      {!!tokenTransactions.length ?
        tokenTransactions.map(transaction => <TransactionRow key={transaction.hash} transaction={transaction} />) : <div>No Transactions to be displayed</div>}
    </div>
  );
}

Transactions.defaultProps = {
  children: null,
};

Transactions.propTypes = {
  children: PropTypes.node,
};

export default Transactions;
