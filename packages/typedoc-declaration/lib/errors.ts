// https://pkg.go.dev/errors@go1.23.3/

class Errors extends Error {
  collection: Error[] = []

  constructor() {
    super()
    this.name = "Errors"
  }
}

export function join(...a: (Error | undefined)[]): Error {
  const err = new Errors()
  collect(err, a)
  return err
}

function collect(err: Errors, c: (Error | undefined)[]): void {
  for (const e of c) {
    if (!e) {
      continue
    }

    if (e instanceof Errors) {
      collect(err, e.collection)
      continue
    }

    err.collection.push(e)
  }
}

export function split(e: Error | undefined): Error[] {
  if (!e) {
    return []
  }
  if (!(e instanceof Errors)) {
    return [e]
  }
  return e.collection
}
