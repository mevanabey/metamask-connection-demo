import { useState, useEffect } from 'react';

import { buildEtherscanApiUrl } from 'shared/helpers';

const useEtherscan = (ethAddress) => {
  const [walletBalance, setWalletBalance] = useState(null);
  const [tokenTransactions, setTokenTransactions] = useState([]);
  const [internalTransactions, setIntenalTransactions] = useState([]);
  const [normalTransactions, setNormalTransactions] = useState([]);
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

  const getNormalTransactions = async () => {
    try {
      const response = await fetch(
        buildEtherscanApiUrl(ethAddress, 'txlistinternal')
      );

      const json = await response.json();
      !!json.result.length && setNormalTransactions(json.result);
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
      !!json.result.length && setIntenalTransactions(json.result);
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
      !!json.result.length && setTokenTransactions(json.result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(async () => {
      if(!!ethAddress) {
        setIsLoading(true);

        // Todo: Update details every x seconds
        await getWalletBalance();
        await getNormalTransactions();

        // Commented due to Etherscan limits
        // await getInternalEthTransactions();
        // await getTokenTransactions();

        setIsLoading(false);
      } else {
        setWalletBalance(null);
        setIntenalTransactions([]);
        setTokenTransactions([]);
        setNormalTransactions([]);
      }
  }, [ethAddress]);

  return { walletBalance, normalTransactions, internalTransactions, tokenTransactions, isLoading };
}


export default useEtherscan;