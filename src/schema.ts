import { gql } from 'graphql-tag'

export const typeDefs = gql`
    "Client represents any software interested in storing logs"
    type Client {
        id: ID!
        name: String!
    }

    "Log represents collection of information for an event/log"
    type Log {
        client: Client!
        description: String
        id: ID!
        message: String!
    }

    type Query {
        "List all clients"
        listClients: [Client!]!

        "List all logs"
        listLogs: [Log!]!
    }
`
