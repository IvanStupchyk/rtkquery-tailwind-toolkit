export const transformCamelCaseWithSpace = (line: string) => {
  return line.replace(/([A-Z])/g, ' $1').trim()
}