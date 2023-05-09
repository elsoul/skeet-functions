import admin from 'firebase-admin'
import dotenv from 'dotenv'
import { hello } from '@/route'
import { Request } from 'firebase-functions/v2/https'

dotenv.config()
admin.initializeApp()

export interface TypedRequestBody<T> extends Request {
  body: T
}

export { hello }
