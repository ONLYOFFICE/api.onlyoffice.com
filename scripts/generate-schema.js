// @ts-check
import ts from "typescript"
import fs from "node:fs"
import path from "node:path"

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

// Flags: --skip-props=events,foo,bar  --jsonforms (collapse bool|obj unions)
const args = process.argv.slice(2)
const flags = args.filter(a => a.startsWith("--"))
const positional = args.filter(a => !a.startsWith("--"))

const [inputFile, entryType, outputFile] = positional

if (!inputFile || !entryType || !outputFile) {
    console.error("Usage: node generate-schema.js <input.d.ts> <EntryType> <output.json> [--skip-props=a,b] [--jsonforms]")
    process.exit(1)
}

/** @type {Set<string>} */
const skipProps = new Set(
    flags.find(f => f.startsWith("--skip-props="))
        ?.replace("--skip-props=", "")
        .split(",")
        .map(s => s.trim()) ?? []
)

// --jsonforms: collapse anyOf[object|bool] → object, deduplicate boolean true|false → boolean
const jsonformsMode = flags.includes("--jsonforms")

// ---------------------------------------------------------------------------
// Compiler setup
// ---------------------------------------------------------------------------

const program = ts.createProgram([path.resolve(inputFile)], {
    strict: true,
    noEmit: true,
})
const checker = program.getTypeChecker()

const sourceFile = program.getSourceFile(path.resolve(inputFile))
if (!sourceFile) {
    console.error(`Cannot find source file: ${inputFile}`)
    process.exit(1)
}

// ---------------------------------------------------------------------------
// Collect exported symbols from the source file
// ---------------------------------------------------------------------------

/** @type {Map<string, ts.Symbol>} */
const exportedSymbols = new Map()

checker.getSymbolAtLocation(sourceFile)
    ?.exports
    ?.forEach((sym, name) => exportedSymbols.set(String(name), sym))

// Also collect all top-level declarations (types/interfaces may not be "exported"
// in .d.ts files but are still accessible)
sourceFile.statements.forEach((stmt) => {
    if (
        ts.isInterfaceDeclaration(stmt) ||
        ts.isTypeAliasDeclaration(stmt)
    ) {
        const sym = checker.getSymbolAtLocation(stmt.name)
        if (sym) exportedSymbols.set(stmt.name.text, sym)
    }
})

const entrySym = exportedSymbols.get(entryType)
if (!entrySym) {
    console.error(`Type "${entryType}" not found. Available: ${[...exportedSymbols.keys()].join(", ")}`)
    process.exit(1)
}

// ---------------------------------------------------------------------------
// Conversion state
// ---------------------------------------------------------------------------

/** @type {Map<ts.Symbol, string>} */  // symbol -> $defs key
const definitionNames = new Map()

/** @type {Record<string, object>} */
const definitions = {}

// Symbols currently being processed (cycle detection)
/** @type {Set<ts.Symbol>} */
const inProgress = new Set()

// ---------------------------------------------------------------------------
// JSDoc helpers
// ---------------------------------------------------------------------------

/**
 * @param {ts.Symbol} sym
 * @returns {string | undefined}
 */
function getDescription(sym) {
    const comment = sym.getDocumentationComment(checker)
    const text = ts.displayPartsToString(comment).trim()
    return text || undefined
}

/**
 * @param {ts.Symbol} sym
 * @param {string} tagName
 * @returns {string | undefined}
 */
function getJSDocTag(sym, tagName) {
    const tags = sym.getJsDocTags(checker)
    const tag = tags.find(t => t.name === tagName)
    if (!tag) return undefined
    return ts.displayPartsToString(tag.text ?? []).trim() || undefined
}

/**
 * @param {ts.Symbol} sym
 * @returns {string | undefined}
 */
function getShortDescription(sym) {
    return getJSDocTag(sym, "shortDescription")
}

/**
 * @param {ts.Symbol} sym
 * @returns {unknown | undefined}
 */
function getDefault(sym) {
    const raw = getJSDocTag(sym, "default")
    if (raw === undefined) return undefined
    try { return JSON.parse(raw) } catch { return raw }
}

/**
 * @param {ts.Symbol} sym
 * @returns {unknown[] | undefined}
 */
function getExamples(sym) {
    const tags = sym.getJsDocTags(checker)
    const examples = tags
        .filter(t => t.name === "example")
        .map(t => {
            const raw = ts.displayPartsToString(t.text ?? []).trim()
            try { return JSON.parse(raw) } catch { return raw }
        })
    return examples.length ? examples : undefined
}

// ---------------------------------------------------------------------------
// Core conversion
// ---------------------------------------------------------------------------

/**
 * Convert a ts.Type to a JSON Schema node.
 * @param {ts.Type} type
 * @param {ts.Symbol | undefined} sym  — property symbol (for JSDoc)
 * @returns {object}
 */
function typeToSchema(type, sym) {
    // ---- function types → skip (return nothing renderable) -----------------
    if (type.getCallSignatures().length > 0) {
        return { type: "object", properties: {}, description: sym ? getDescription(sym) : undefined }
    }

    // ---- any / unknown / never ---------------------------------------------
    const flags = type.flags
    if (flags & ts.TypeFlags.Any || flags & ts.TypeFlags.Unknown) return {}
    if (flags & ts.TypeFlags.Never) return { not: {} }

    // ---- void / undefined / null -------------------------------------------
    if (flags & (ts.TypeFlags.Void | ts.TypeFlags.Undefined)) return { type: "null" }
    if (flags & ts.TypeFlags.Null) return { type: "null" }

    // ---- boolean literal ---------------------------------------------------
    if (flags & ts.TypeFlags.BooleanLiteral) {
        // @ts-ignore — intrinsicName is internal
        return { type: "boolean", const: type.intrinsicName === "true" }
    }

    // ---- string literal ----------------------------------------------------
    if (flags & ts.TypeFlags.StringLiteral) {
        return { type: "string", const: /** @type {ts.StringLiteralType} */ (type).value }
    }

    // ---- number literal ----------------------------------------------------
    if (flags & ts.TypeFlags.NumberLiteral) {
        return { type: "number", const: /** @type {ts.NumberLiteralType} */ (type).value }
    }

    // ---- primitives --------------------------------------------------------
    if (flags & ts.TypeFlags.String) return { type: "string" }
    if (flags & ts.TypeFlags.Number) return { type: "number" }
    if (flags & ts.TypeFlags.Boolean) return { type: "boolean" }

    // ---- union types -------------------------------------------------------
    if (type.isUnion()) {
        return unionToSchema(/** @type {ts.UnionType} */ (type), sym)
    }

    // ---- intersection types ------------------------------------------------
    if (type.isIntersection()) {
        return intersectionToSchema(/** @type {ts.IntersectionType} */ (type))
    }

    // ---- named object types (interface / type alias) → $ref ---------------
    const sym_ = type.aliasSymbol ?? type.getSymbol()
    if (sym_ && isNamedDefinable(sym_, type)) {
        return refOrInline(sym_, type)
    }

    // ---- anonymous object / array ------------------------------------------
    if (type.flags & ts.TypeFlags.Object) {
        return objectToSchema(type)
    }

    return {}
}

/**
 * True if the symbol represents a named type worth putting in $defs.
 * @param {ts.Symbol} sym
 * @param {ts.Type} type
 */
function isNamedDefinable(sym, type) {
    // Only interfaces and type aliases declared at top level
    const decl = sym.declarations?.[0]
    if (!decl) return false
    return (
        ts.isInterfaceDeclaration(decl) ||
        ts.isTypeAliasDeclaration(decl)
    )
}

/**
 * Return a $ref, registering the definition if not already done.
 * @param {ts.Symbol} sym
 * @param {ts.Type} type
 */
function refOrInline(sym, type) {
    if (definitionNames.has(sym)) {
        return { $ref: `#/definitions/${definitionNames.get(sym)}` }
    }

    if (inProgress.has(sym)) {
        // Cycle — emit ref even before definition is complete
        const name = sym.name
        return { $ref: `#/definitions/${name}` }
    }

    const name = sym.name
    definitionNames.set(sym, name)
    inProgress.add(sym)

    definitions[name] = objectToSchema(type)

    inProgress.delete(sym)
    return { $ref: `#/definitions/${name}` }
}

/**
 * @param {ts.UnionType} type
 * @param {ts.Symbol | undefined} sym
 * @returns {object}
 */
function unionToSchema(type, sym) {
    const members = type.types

    // Filter out null/undefined — they just make field optional in JSON Schema
    const nonNullable = members.filter(
        m => !(m.flags & (ts.TypeFlags.Null | ts.TypeFlags.Undefined | ts.TypeFlags.Void))
    )

    if (nonNullable.length === 0) return { type: "null" }
    if (nonNullable.length === 1) return typeToSchema(nonNullable[0], sym)

    // boolean = true | false in TS compiler — collapse back
    const allBoolLiterals = nonNullable.every(m => m.flags & ts.TypeFlags.BooleanLiteral)
    if (allBoolLiterals) return { type: "boolean" }

    // All string/number literals → enum (deduplicated)
    if (nonNullable.every(m => m.flags & (ts.TypeFlags.StringLiteral | ts.TypeFlags.NumberLiteral))) {
        const seen = new Set()
        const values = nonNullable
            .map(m =>
                m.flags & ts.TypeFlags.StringLiteral
                    ? /** @type {ts.StringLiteralType} */ (m).value
                    : /** @type {ts.NumberLiteralType} */ (m).value
            )
            .filter(v => {
                if (seen.has(v)) return false
                seen.add(v)
                return true
            })
        const baseType = nonNullable[0].flags & ts.TypeFlags.StringLiteral ? "string" : "number"
        return { type: baseType, enum: values }
    }

    // --jsonforms: object | boolean → keep the object variant only
    if (jsonformsMode) {
        const objectVariants = nonNullable.filter(m => m.flags & ts.TypeFlags.Object)
        const boolLike = nonNullable.filter(m =>
            m.flags & (ts.TypeFlags.Boolean | ts.TypeFlags.BooleanLiteral)
        )
        if (objectVariants.length > 0 && boolLike.length > 0 &&
            objectVariants.length + boolLike.length === nonNullable.length) {
            return typeToSchema(objectVariants[0], sym)
        }

        // object | string-literals (e.g. tabStyle: obj | "fill" | "line") → keep object
        const stringLitVariants = nonNullable.filter(m => m.flags & ts.TypeFlags.StringLiteral)
        if (objectVariants.length > 0 && stringLitVariants.length > 0 &&
            objectVariants.length + stringLitVariants.length === nonNullable.length) {
            return typeToSchema(objectVariants[0], sym)
        }

        // "" | T[] (userInfoGroups) → keep array
        const arrayVariants = nonNullable.filter(m => m.getSymbol()?.name === "Array")
        const emptyStringVariants = nonNullable.filter(
            m => (m.flags & ts.TypeFlags.StringLiteral) && /** @type {ts.StringLiteralType} */ (m).value === ""
        )
        if (arrayVariants.length > 0 && emptyStringVariants.length > 0 &&
            arrayVariants.length + emptyStringVariants.length === nonNullable.length) {
            return typeToSchema(arrayVariants[0], sym)
        }
    }

    // Generic anyOf — deduplicate by JSON string
    const schemas = nonNullable.map(m => typeToSchema(m, undefined))
    const deduped = deduplicateSchemas(schemas)
    if (deduped.length === 1) return deduped[0]
    return { anyOf: deduped }
}

/**
 * @param {object[]} schemas
 * @returns {object[]}
 */
function deduplicateSchemas(schemas) {
    const seen = new Set()
    return schemas.filter(s => {
        const k = JSON.stringify(s)
        if (seen.has(k)) return false
        seen.add(k)
        return true
    })
}

/**
 * @param {ts.IntersectionType} type
 * @returns {object}
 */
function intersectionToSchema(type) {
    // Merge all object shapes into one flat object schema
    /** @type {Record<string, object>} */
    const merged = {}
    const required = new Set()
    let description

    for (const member of type.types) {
        const schema = typeToSchema(member, undefined)
        if (schema.$ref) {
            // Inline the $ref definition if we have it
            const refName = schema.$ref.replace("#/definitions/", "")
            const def = definitions[refName]
            if (def?.properties) {
                Object.assign(merged, def.properties)
                for (const r of def.required ?? []) required.add(r)
            }
        } else if (schema.properties) {
            Object.assign(merged, schema.properties)
            for (const r of schema.required ?? []) required.add(r)
            if (!description && schema.description) description = schema.description
        }
    }

    return {
        type: "object",
        ...(description ? { description } : {}),
        properties: merged,
        ...(required.size ? { required: [...required] } : {}),
        additionalProperties: false,
    }
}

/**
 * @param {ts.Type} type
 * @returns {object}
 */
function objectToSchema(type) {
    // Array
    const indexInfo = checker.getIndexInfoOfType(type, ts.IndexKind.Number)
    if (indexInfo) {
        const itemSchema = typeToSchema(indexInfo.type, undefined)
        return { type: "array", items: itemSchema }
    }

    // Check if it's actually an Array<T> generic
    const typeArgs = checker.getTypeArguments(/** @type {ts.TypeReference} */ (type))
    if (
        type.getSymbol()?.name === "Array" ||
        type.getSymbol()?.name === "ReadonlyArray"
    ) {
        const itemSchema = typeArgs.length ? typeToSchema(typeArgs[0], undefined) : {}
        return { type: "array", items: itemSchema }
    }

    const properties = checker.getPropertiesOfType(type)
    if (!properties.length) {
        // No known properties — open object
        return { type: "object", additionalProperties: true }
    }

    /** @type {Record<string, object>} */
    const props = {}
    /** @type {string[]} */
    const required = []

    for (const prop of properties) {
        // Skip explicitly excluded props (e.g. --skip-props=events)
        if (skipProps.has(prop.name)) continue

        const propType = checker.getTypeOfSymbol(prop)

        // Skip function props entirely
        if (propType.getCallSignatures().length > 0) continue

        const schema = typeToSchema(propType, prop)

        // Attach JSDoc metadata
        const description = getDescription(prop)
        const shortDescription = getShortDescription(prop)
        const defaultVal = getDefault(prop)
        const examples = getExamples(prop)
        const deprecated = getJSDocTag(prop, "deprecated")

        const annotated = {
            ...(description ? { description } : {}),
            ...(shortDescription ? { "x-shortDescription": shortDescription } : {}),
            ...(defaultVal !== undefined ? { default: defaultVal } : {}),
            ...(examples ? { examples } : {}),
            ...(deprecated ? { deprecated: true, description: [description, `@deprecated ${deprecated}`].filter(Boolean).join("\n") } : {}),
            ...schema,
        }

        // description from schema might conflict — prefer prop-level description
        if (description && schema.description && description !== schema.description) {
            annotated.description = description
        }

        props[prop.name] = annotated

        // Required: not optional, not undefined in type
        const isOptional = prop.flags & ts.SymbolFlags.Optional
        if (!isOptional) required.push(prop.name)
    }

    return {
        type: "object",
        properties: props,
        ...(required.length ? { required } : {}),
        additionalProperties: false,
    }
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

const entryType_ = checker.getDeclaredTypeOfSymbol(entrySym)
let rootSchema = typeToSchema(entryType_, entrySym)

if (rootSchema.$ref && typeof rootSchema.$ref === "string") {
    const refName = rootSchema.$ref.replace("#/definitions/", "")
    if (definitions[refName]) {
        rootSchema = definitions[refName]
    }
}

const output = {
    $schema: "http://json-schema.org/draft-07/schema#",
    ...rootSchema,
    ...(Object.keys(definitions).length ? { definitions } : {}),
}

fs.writeFileSync(outputFile, JSON.stringify(output, null, 2))
console.log(`✓ Written to ${outputFile}`)
console.log(`  Root type:   ${entryType}`)
console.log(`  Definitions: ${Object.keys(definitions).join(", ") || "(none)"}`)