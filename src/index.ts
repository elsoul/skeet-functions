import admin from 'firebase-admin'
import dotenv from 'dotenv'
import { onRequest } from 'firebase-functions/v2/https'
import { helloSpec } from './spec'

dotenv.config()

admin.initializeApp()

export const hello = onRequest(helloSpec, async (req, res) => {
  try {
    res.json({ status: 'Skeet APP is Running!', env: process.env.NODE_ENV })
  } catch (error) {
    const errorLog = `hello - ${error}`
    console.log(errorLog)
    res.status(400).json({ result: 'hello error!' })
  }
})
