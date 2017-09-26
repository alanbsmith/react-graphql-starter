import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql'
});

const client = new ApolloClient({
  networkInterface,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
