const randomNum = async (maxNum: number) => {
  try {
    const nmb = Math.floor(Math.random() * maxNum + 1)
    return nmb
  } catch (error) {
    throw new Error(`randomNum: ${error}`)
  }
}

export default randomNum
