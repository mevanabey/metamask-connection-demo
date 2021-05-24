import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import { useMoralis } from 'react-moralis';

import { useEtherscan } from 'shared/hooks';

import TransactionRow from './TransactionRow/TransactionRow';
import styles from './Transactions.module.scss';

const Transactions = ({ children }) => {
  const { isAuthenticated, user } = useMoralis();

  const primaryEthAddress = useMemo(() => isAuthenticated && (user.get('accounts')[0]), [isAuthenticated, user]);

  const { normalTransactions, isLoading } = useEtherscan(primaryEthAddress || null, 'balance');

  return (
    <div className={styles.container}>
      <h2>Transactions (Last 10)</h2>
      {!!normalTransactions.length ?
        normalTransactions.map(transaction => <TransactionRow key={transaction.hash} transaction={transaction} />) : isLoading ? '' : <div>No Transactions to be displayed</div>}
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
