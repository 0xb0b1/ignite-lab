import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl8i8jge55ikm01ue1zq26poc/master',
  cache: new InMemoryCache(),
})
