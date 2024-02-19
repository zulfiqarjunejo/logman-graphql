import { type LogmanContext } from './types'

export const resolvers = {
  Query: {
    listClients: (_: any, __: any, contextValue: LogmanContext) => {
      // TODO: fetch data from LogmanAPI.
      return [
        { id: 'client-1', name: 'Client #1' }
      ]
    },
    listLogs: async (_: any, __: any, contextValue: LogmanContext) => {
      return await contextValue.apis.logmanAPI.listLogs()
    }
  },

  Log: {
    client: (parent: any, _: any, contextValue: LogmanContext) => {
      // TODO: fetch data from LogmanAPI.
      return { id: parent.client_id, name: 'some client' }
    }
  }
}
