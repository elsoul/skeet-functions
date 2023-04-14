import { HttpsOptions } from 'firebase-functions/v2/https'
import dotenv from 'dotenv'

dotenv.config()
const project = process.env.PROJECT_ID || 'skeet-framework'
const serviceAccount = `${project}@${project}.iam.gserviceaccount.com`
const vpcConnector = `${project}-con`
const cors = ['http://localhost:4000']

export const helloSpec: HttpsOptions = {
  region: 'europe-west4',
  cpu: 1,
  memory: '1GiB',
  maxInstances: 100,
  minInstances: 0,
  concurrency: 1,
  serviceAccount,
  ingressSettings: 'ALLOW_INTERNAL_AND_GCLB',
  vpcConnector,
  vpcConnectorEgressSettings: 'PRIVATE_RANGES_ONLY',
  cors,
}
