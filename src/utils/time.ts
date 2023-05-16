import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const randomSleep = (min: number, max: number) => {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min
  return sleep(rand)
}

export const utcNow = (formatType = 0) => {
  const now = new Date()
  const timeZone = 'UTC'
  const nowUtc = utcToZonedTime(now, timeZone)
  const formatOptions = [
    'yyyy-MM-dd-HH:mm:ss',
    'yyyy-MM-dd',
    'yyyy-MM-dd-HH-mm-ss',
    'yyyy-MM-dd-HH:00',
  ]
  const formattedDate = format(nowUtc, formatOptions[formatType])
  return formattedDate
}

export const getTimestamp = () => {
  const now = new Date()
  const timeZone = 'UTC'
  const nowUtc = utcToZonedTime(now, timeZone)
  const timestamp = format(nowUtc, 'yyyy-MM-dd:HH:mm:ss')
  return timestamp
}
