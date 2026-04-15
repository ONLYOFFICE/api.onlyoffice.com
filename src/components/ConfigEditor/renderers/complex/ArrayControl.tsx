import { ArrayControlProps, isObjectArrayControl, isPrimitiveArrayControl, or, rankWith, ControlElement, JsonSchema, composePaths } from '@jsonforms/core'
import { withJsonFormsArrayControlProps, JsonFormsDispatch } from '@jsonforms/react'
import { Section } from '../utils/Section'
import { depthOfPath, titleFromKey } from '../layouts/depth'
import styles from '../../styles.module.css'

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

function ArrayControlRenderer(props: ArrayControlProps) {
    const { label, path, schema, data, addItem, removeItems, enabled, renderers, cells, uischema } = props
    const itemSchema = (schema as JsonSchema).items as JsonSchema
    const items: unknown[] = Array.isArray(data) ? data : []
    const depth = depthOfPath(path)

    const itemUischema: ControlElement = { type: 'Control', scope: '#' }

    return (
        <Section title={label || titleFromKey(path.split('.').pop() || '') || 'Items'} depth={depth + 1} description={(schema as JsonSchema).description}>
            {items.map((_, index) => {
                const itemPath = composePaths(path, `${index}`)
                return (
                    <div key={index} className={styles.arrayItem}>
                        <div className={styles.arrayItemHeader}>
                            <strong>#{index + 1}</strong>
                            {enabled && (
                                <button type="button" onClick={() => removeItems!(path, [index])()}>Remove</button>
                            )}
                        </div>
                        <JsonFormsDispatch
                            schema={itemSchema}
                            uischema={itemUischema}
                            path={itemPath}
                            renderers={renderers}
                            cells={cells}
                        />
                    </div>
                )
            })}
            {enabled && (
                <button type="button" onClick={addItem(path, defaultForSchema(itemSchema))}>+ Add item</button>
            )}
        </Section>
    )
}

export const arrayControlTester = rankWith(4, or(isObjectArrayControl, isPrimitiveArrayControl))
export const ArrayControl = withJsonFormsArrayControlProps(ArrayControlRenderer)
