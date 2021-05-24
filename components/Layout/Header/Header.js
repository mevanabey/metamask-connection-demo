import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useMoralis } from 'react-moralis';

import { Button } from 'components';
import styles from './Header.module.scss';

const Header = () => {
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  const primaryEthAddress = useMemo(() => isAuthenticated && (user.get('accounts')[0]), [isAuthenticated, user]);

  return (
    <header className={styles.container}>
      <div>
        {!isAuthenticated && (
          <div>
            <Button onClick={() => authenticate()}>Authenticate</Button>
          </div>
        )}
        {isAuthenticated && (
          <div>
            {primaryEthAddress}
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
