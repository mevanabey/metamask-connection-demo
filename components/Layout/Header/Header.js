import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useMoralis } from 'react-moralis';

import { useEtherscan } from 'shared/hooks';
import { convertWeiToEth } from 'shared/helpers';
import { Button } from 'components';
import styles from './Header.module.scss';

const Header = () => {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  const primaryEthAddress = useMemo(() => isAuthenticated && (user.get('accounts')[0]), [isAuthenticated, user]);

  const { walletBalance, isLoading } = useEtherscan(primaryEthAddress || null, 'balance');

  const convertedWalletBalance = !isLoading && walletBalance ? convertWeiToEth(walletBalance) : 'Please connect to MetaMask to view balance';

  return (
    <header className={styles.container}>
      <div>
        {convertedWalletBalance}
      </div>
      <div>
        {!isAuthenticated && (
          <div>
            <Button onClick={() => authenticate()}>Authenticate</Button>
          </div>
        )}
        {isAuthenticated && (
          <div className={styles.walletBalance}>
            Wallet Balance <span>{primaryEthAddress} ETH</span>
            <Button onClick={() => logout()}>Logout</Button>
          </div>
        )}
      </div>
    </header>
  );
}

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
