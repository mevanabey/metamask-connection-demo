import { WEI_IN_WTH, ETHERSCAN_API_URL, ETHERSCAN_API_KEY } from 'shared/constants';

export const convertWeiToEth = wei => parseFloat((wei / WEI_IN_WTH).toFixed(4));

export const buildEtherscanApiUrl = (ethAddress, action, transactionCount = 10, page = 1, sort = 'desc') => ethAddress && action &&
  `${ETHERSCAN_API_URL}&action=${action}&address=${ethAddress}&page=${page}&offset=${transactionCount}&sort=${sort}&tag=latest&apikey=${ETHERSCAN_API_KEY}`;

export const prepareTransactions = transactions => transactions.map(transaction => {
  transaction.value = convertWeiToEth(transaction.value);
  transaction.date = new Date(parseInt(transaction.timeStamp) * 1000).toLocaleDateString();

  return transaction;
});