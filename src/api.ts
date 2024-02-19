/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { type AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest'

export class LogmanAPI extends RESTDataSource {
  baseURL = process.env.API_URL!.trim()

  override willSendRequest (path: string, request: AugmentedRequest) {
    request.headers['x-api-key'] = process.env.API_KEY!.trim()
    request.headers['x-client-id'] = process.env.CLIENT_ID!.trim()
  }

  async listClients () {
    return await this.get('clients')
  }

  async listLogs () {
    return await this.get('logs')
  }
}
