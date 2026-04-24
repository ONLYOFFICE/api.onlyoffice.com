import { ArrayControlProps, isObjectArrayControl, isPrimitiveArrayControl, or, rankWith, ControlElement, JsonSchema, composePaths, resolveSchema } from '@jsonforms/core'
import { withJsonFormsArrayControlProps, JsonFormsDispatch, useJsonForms } from '@jsonforms/react'
import { memo } from 'react'
import { Section } from '../utils/Section'
import { depthOfPath, titleFromKey } from '../layouts/depth'
import styles from '../../styles.module.css'

const ITEM_UISCHEMA: ControlElement = { type: 'Control', scope: '#', label: false }

function defaultForSchema(s: JsonSchema | undefined): unknown {
    if (!s) return undefined
    switch (s.type) {
        case 'array': return []
        case 'string': return ''
        case 'number': case 'integer': return 0
        case 'boolean': return false
        case 'object': return {}
        default: return undefined
    }
}

const ArrayControlRenderer = memo(function ArrayControlRenderer(props: ArrayControlProps) {
    const { label, path, schema, data, addItem, removeItems, enabled, renderers, cells } = props
    const ctx = useJsonForms()
    const rootSchema = ctx.core?.schema as JsonSchema | undefined

    const rawItemSchema = (schema as JsonSchema).items as JsonSchema | undefined
    let itemSchema: JsonSchema = rawItemSchema ?? {}

    if (rawItemSchema?.$ref && rootSchema) {
        itemSchema = resolveSchema(rootSchema, rawItemSchema.$ref, rootSchema) as JsonSchema
    }

    const items: unknown[] = Array.isArray(data) ? data : []
    const depth = depthOfPath(path)

    // Determine effective item schema
    const firstItem = items[0]
    let effectiveItemSchema: JsonSchema = itemSchema
    
    // If we have data, infer type from first item
    if (firstItem !== undefined) {
        const itemType = typeof firstItem
        if (itemType === 'string' || itemType === 'number' || itemType === 'boolean') {
            effectiveItemSchema = { type: itemType as JsonSchema['type'] }
        }
    } else if (!itemSchema.type && !itemSchema.properties && !itemSchema.items) {
        // If no data and no clear schema, default to string
        effectiveItemSchema = { type: 'string' }
    }

    return (
        <Section title={label || titleFromKey(path.split('.').pop() || '') || 'Items'} depth={depth + 1} description={(schema as JsonSchema).description} defaultOpen={depth < 1}>
            {items.map((_, index) => {
                const itemPath = composePaths(path, `${index}`)
                return (
                    <div key={index} className={styles.arrayItem}>
                        <div className={styles.arrayItemHeader}>
                            <strong>#{index + 1}</strong>
                            {enabled && (
                                <button
                                    type="button"
                                    onClick={() => removeItems!(path, [index])()}
                                    data-variant="danger"
                                    aria-label={`Remove item ${index + 1}`}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                        <JsonFormsDispatch
                            schema={effectiveItemSchema}
                            uischema={ITEM_UISCHEMA}
                            path={itemPath}
                            renderers={renderers}
                            cells={cells}
                        />
                    </div>
                )
            })}
            {enabled && (
                <button
                    type="button"
                    onClick={() => addItem(path, defaultForSchema(effectiveItemSchema))()}
                    data-variant="primary"
                    aria-label="Add new item"
                >
                    + Add item
                </button>
            )}
        </Section>
    )
}, (prev, next) => prev.path === next.path && prev.data === next.data && prev.enabled === next.enabled)

export const arrayControlTester = rankWith(4, or(isObjectArrayControl, isPrimitiveArrayControl))
export const ArrayControl = withJsonFormsArrayControlProps(ArrayControlRenderer)
