import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createHttpLink } from '@apollo/client/link/http'
import { DefaultApolloClient } from '@vue/apollo-composable'

const httpLink = createHttpLink({
  uri: 'https://api.annict.com/graphql',
  headers: {
    Authorization: 'Bearer D3ElPXO8ld0k4r895fkRS2bLeInD0eXs1KAH9rsw8w4'
  }
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export { apolloClient, DefaultApolloClient }
