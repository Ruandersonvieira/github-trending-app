import React from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apollo';
import './config/ReactotronConfig';
import Routes from './routes';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Routes />
  </ApolloProvider>
);

export default App;
