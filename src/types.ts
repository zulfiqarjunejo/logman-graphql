import { type LogmanAPI } from './api'

export interface LogmanContext {
  apis: {
    logmanAPI: LogmanAPI
  }
}
