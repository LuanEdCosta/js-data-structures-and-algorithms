export function hashCode(str: string): number {
  const hash = Array.from(str).reduce(
    (hash, char) => 0 | (31 * hash + char.charCodeAt(0)),
    0,
  )

  return hash
}
