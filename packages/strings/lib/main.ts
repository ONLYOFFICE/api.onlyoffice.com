export function cutPrefix(s: string, p: string): string {
  if (p !== "" && s.startsWith(p)) {
    return s.slice(p.length)
  }
  return s
}

export function cutSuffix(s: string, p: string): string {
  if (p !== "" && s.endsWith(p)) {
    return s.slice(0, -p.length)
  }
  return s
}

export function substringPosition(a: string, b: string): [number, number] {
  const i = a.indexOf(b)
  if (i === -1) {
    return [-1, -1]
  }
  const l = a.slice(0, i).split("\n").length
  const c = i - a.lastIndexOf("\n", i) - 1
  return [l, c]
}
