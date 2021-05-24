import React from 'react';
import 'shared/styles/global.css';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App;