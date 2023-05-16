import crypto from 'crypto'
import dotenv from 'dotenv'
dotenv.config()

const algorithm = 'aes-256-cbc'
const password = process.env.SKEET_PW_SALT || ''
const salt = process.env.SKEET_CRYPTO_SALT || ''
const key = crypto.scryptSync(password, salt, 32)
const inputEncoding = 'utf8'
const outputEncoding = 'base64'

export const encrypt = (data: string, iv: string) => {
  try {
    const cipher = crypto.createCipheriv(
      algorithm,
      key,
      Buffer.from(iv, 'base64')
    )
    let cipheredData = cipher.update(data, inputEncoding, outputEncoding)
    cipheredData += cipher.final(outputEncoding)
    return cipheredData
  } catch (error) {
    throw new Error(`encrypt: ${error}`)
  }
}

export const decrypt = (data: string, iv: string) => {
  try {
    const decipher = crypto.createDecipheriv(
      algorithm,
      key,
      Buffer.from(iv, 'base64')
    )
    let decipheredData = decipher.update(data, outputEncoding, inputEncoding)
    decipheredData += decipher.final(inputEncoding)
    return decipheredData
  } catch (error) {
    throw new Error(`decrypt: ${error}`)
  }
}

export const generateIv = () => {
  try {
    const iv = crypto.randomBytes(16)
    return Buffer.from(iv).toString('base64')
  } catch (error) {
    throw new Error(`generateIv: ${error}`)
  }
}
