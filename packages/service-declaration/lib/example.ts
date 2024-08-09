import { type Example, example } from "@onlyoffice/declaration-code-example"
import { type RequestDeclaration } from "./main.ts"
import { HTTPSnippet } from 'httpsnippet';

export function httpExample(req: RequestDeclaration): Example {
  const e = example()
  e.syntax = "http"
  if (!req.endpoint) {
    return e
  }

  const q = query(req)
  const [m, p] = req.endpoint.split(" ")
  e.code = code(m, p, q)
  return e

  function parseHeaders(headerObject) {
    return headerObject.map(header => ({
      name: header.identifier,
      value: header.cases.join(', ')
    }));
  }

  function code(m: string, p: string, q: string): string {
    if (req.headerParameters !== undefined) {
      const headersArray = req.headerParameters !== undefined ? parseHeaders(req.headerParameters) : [];
      const request = {
        method: m,
        url: `http://example.com${p}${q}`,
        headers: headersArray,
      }
      const snippet = new HTTPSnippet(request)
      const output = snippet.convert('http', 'http1.1')
      return output
    }

  }
}

export function curlExample(req: RequestDeclaration): Example {
  const e = example()
  e.syntax = "shell"
  if (!req.endpoint) {
    return e
  }

  const q = query(req)
  const [m, p] = req.endpoint.split(" ")
  const x = method(m)
  e.code = code(x, p, q)
  return e

  function method(m: string): string {
    if (m === "GET") {
      return ""
    }
    return `-X "${m}"`
  }

  function parseHeaders(headerObject) {
    return headerObject.map(header => ({
      name: header.identifier,
      value: header.cases.join(', ')
    }));
  }

  function code(m: string, p: string, q: string): string {
    const headersArray = req.headerParameters !== undefined ? parseHeaders(req.headerParameters) : [];
    const snippet = new HTTPSnippet({
      method: m,
      url: `http://example.com${p}${q}`,
      headers: headersArray
    })
    const output = snippet.convert('shell')
    return output
  }
}

function query(req: RequestDeclaration): string {
  let qp = "?"
  if (req.queryParameters) {
    for (const q of req.queryParameters) {
      qp += `${q.identifier}={${q.identifier}}&`
    }
  }
  return qp.slice(0, -1)
}
