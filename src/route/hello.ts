import dotenv from 'dotenv'
import { onRequest } from 'firebase-functions/v2/https'
import { rootSpec } from '@/spec'
import { TypedRequestBody } from '..'
import { HelloParams } from '@/types/http/helloParams'
dotenv.config()

export const hello = onRequest(
  rootSpec,
  async (req: TypedRequestBody<HelloParams>, res) => {
    try {
      res.json({
        status: 'Skeet APP is Running!',
        env: process.env.NODE_ENV,
        name: req.body.name || 'World',
      })
    } catch (error) {
      const errorLog = `hello - ${error}`
      console.log(errorLog)
      res.status(400).json({ result: 'hello error!' })
    }
  }
)
