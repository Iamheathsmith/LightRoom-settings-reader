export const buildLineKey = (line) => {
  const key = new RegExp(`\:(.*)`).exec(line.trim())[1]

  if (key.includes('2012')) {
    return key.replace('2012', '').toLowerCase()
  }

  return key.toLowerCase()
}
