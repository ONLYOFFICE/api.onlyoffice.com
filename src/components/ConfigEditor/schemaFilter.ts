import type { JsonSchema } from '@jsonforms/core'

export function filterSchema(schema: JsonSchema, excludePaths: string[] = []): JsonSchema {
    if (!excludePaths.length) return schema
    const exclusions = excludePaths.map(p => p.split('.').filter(Boolean))
    return walk(schema, [], exclusions) as JsonSchema
}

function walk(node: any, path: string[], exclusions: string[][]): any {
    if (!node || typeof node !== 'object') return node
    if (Array.isArray(node)) return node.map(n => walk(n, path, exclusions))

    const out: any = { ...node }

    if (out.properties && typeof out.properties === 'object') {
        const nextProps: Record<string, any> = {}
        for (const key of Object.keys(out.properties)) {
            const childPath = [...path, key]
            if (isExcluded(childPath, exclusions)) continue
            nextProps[key] = walk(out.properties[key], childPath, exclusions)
        }
        out.properties = nextProps
        if (Array.isArray(out.required)) {
            out.required = out.required.filter((k: string) => !isExcluded([...path, k], exclusions))
        }
    }

    if (out.items) out.items = walk(out.items, path, exclusions)
    if (Array.isArray(out.oneOf)) out.oneOf = out.oneOf.map((v: any) => walk(v, path, exclusions))
    if (Array.isArray(out.anyOf)) out.anyOf = out.anyOf.map((v: any) => walk(v, path, exclusions))
    if (Array.isArray(out.allOf)) out.allOf = out.allOf.map((v: any) => walk(v, path, exclusions))
    if (out.definitions) {
        const d: Record<string, any> = {}
        for (const k of Object.keys(out.definitions)) d[k] = walk(out.definitions[k], path, exclusions)
        out.definitions = d
    }

    return out
}

function isExcluded(path: string[], exclusions: string[][]): boolean {
    return exclusions.some(ex => ex.length === path.length && ex.every((s, i) => s === path[i]))
}
