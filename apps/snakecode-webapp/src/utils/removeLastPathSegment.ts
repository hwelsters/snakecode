export default function removeLastPathSegment(url: string) {
  const pathSegments = url.split('/')
  pathSegments.pop()

  const newUrl = pathSegments.join('/')
  return newUrl
}
