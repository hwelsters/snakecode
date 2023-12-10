const clampNumber = (value: number, minimum: number, maximum: number) => {
  return Math.min(Math.max(value, minimum), maximum)
}

export default clampNumber
