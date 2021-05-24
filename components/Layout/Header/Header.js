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

  const convertedWalletBalance = walletBalance && (convertWeiToEth(walletBalance));

  return (
    <header className={styles.container}>
      <div className={styles.walletBalance}>
        { walletBalance ? <>Wallet Balance <span>{convertedWalletBalance} ETH</span></> : 'Please connect to MetaMask to view balance'}
      </div>
      <div>
        {!isAuthenticated && (
          <div>
            <Button onClick={() => authenticate()}>Connect To Metamask</Button>
          </div>
        )}
        {isAuthenticated && (
          <div className={styles.walletDetails}>
            <span>{primaryEthAddress}</span>
            <Button onClick={() => logout()}>Disconnect</Button>
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
