import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://ca-central-1.cdn.hygraph.com/content/cm00by4jj03j407w6ycub9e0e/master', // Seu endpoint
  cache: new InMemoryCache()
});

export default client;
