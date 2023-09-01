import { onRequest } from 'firebase-functions/v2/https'
import { publicHttpOption } from '@/routings/options'

export const root = onRequest(publicHttpOption, async (req, res) => {
  try {
    const body = req.body
    res.json({
      status: 'success',
      message: 'Skeet Backend is running!',
      body,
    })
  } catch (error) {
    res.status(500).json({ status: 'error', message: String(error) })
  }
})
