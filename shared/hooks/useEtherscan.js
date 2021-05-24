import { useState, useEffect } from 'react';

import { buildEtherscanApiUrl } from 'shared/helpers';

const useEtherscan = (ethAddress, type) => {
  const [walletBalance, setWalletBalance] = useState(null);
  const [tokenTransactions, setTokenTransactions] = useState(null);
  const [internalTransactions, setIntenalTransactions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getWalletBalance = async () => {
    try {
      const response = await fetch(
        buildEtherscanApiUrl(ethAddress, 'balance')
      );

      const json = await response.json();
      setWalletBalance(json.result);
    } catch (error) {
      console.log(error);
    }
  }

  const getInternalEthTransactions = async () => {
    try {
      const response = await fetch(
        buildEtherscanApiUrl(ethAddress, 'txlistinternal')
      );

      const json = await response.json();
      setIntenalTransactions(json.result);
    } catch (error) {
      console.log(error);
    }
  }

  const getTokenTransactions = async () => {
    try {
      const response = await fetch(
        buildEtherscanApiUrl(ethAddress, 'tokentx')
      );

      const json = await response.json();
      setTokenTransactions(json.result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( async () => {
      setIsLoading(true);

      // Todo: Update details every x seconds
      await getWalletBalance();
      await getInternalEthTransactions();
      await getTokenTransactions();

      setIsLoading(false);
  }, [ethAddress]);

  return { walletBalance, internalTransactions, tokenTransactions, isLoading };
}


export default useEtherscan;