import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Your GraphQL server endpoint
  credentials: 'include',
  cache: new InMemoryCache(),
});

export default client;
