import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function startApolloServer () {
  console.log('Starting GraphQL Server ...')

  const server = new ApolloServer({ typeDefs })
  const { url } = await startStandaloneServer(server)

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startApolloServer()
