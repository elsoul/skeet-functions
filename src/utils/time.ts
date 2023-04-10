export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const randomSleep = (min: number, max: number) => {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min
  return sleep(rand)
}
