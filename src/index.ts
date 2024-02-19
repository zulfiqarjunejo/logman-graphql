import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { configDotenv } from 'dotenv'
import { LogmanAPI } from './api'
import { resolvers } from './resolvers'
import { typeDefs } from './schema'
import { type LogmanContext } from './types'

configDotenv({
  path: ['.env', '.env.local']
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function startApolloServer () {
  console.log('Starting GraphQL Server ...')

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { url } = await startStandaloneServer(server, {
    context: async (): Promise<LogmanContext> => {
      const { cache } = server

      return {
        apis: {
          logmanAPI: new LogmanAPI({ cache })
        }
      }
    }
  })

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startApolloServer()
