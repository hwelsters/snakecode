export function addPathSegment(url: string) {
  const currentURL = typeof window !== 'undefined' ? `${window.location.href}/${url}` : ''
  return currentURL
}
