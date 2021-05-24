import { WEI_IN_WTH, ETHERSCAN_API_URL, ETHERSCAN_API_KEY } from 'shared/constants';

export const convertWeiToEth = wei => wei / WEI_IN_WTH;

export const buildEtherscanApiUrl = (ethAddress, action, transactionCount = 1000, page = 1, sort = 'asc') => ethAddress && action &&
  `${ETHERSCAN_API_URL}&action=${action}&address=${ethAddress}&page=${page}&offset=${transactionCount}&sort=${sort}&tag=latest&apikey=${ETHERSCAN_API_KEY}`;