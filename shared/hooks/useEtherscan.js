import { useState, useEffect } from 'react';

import { buildEtherscanApiUrl } from 'shared/helpers';

const useEtherscan = (ethAddress, action) => {
  const [result, setTransactions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getEthTransactions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        buildEtherscanApiUrl(ethAddress, action)
      );

      const json = await response.json();

      setTransactions(json.result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect( () => {
    if (!result) {
      // Todo: Update transactions every x seconds
      getEthTransactions();
    }
  }, [ethAddress]);

  return {result, isLoading};
}


export default useEtherscan;