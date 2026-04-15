import { ControlProps, JsonSchema, rankWith, RankedTester, uiTypeIs, and, schemaMatches } from '@jsonforms/core'
import { withJsonFormsControlProps, JsonFormsDispatch } from '@jsonforms/react'
import { useMemo, useState } from 'react'
import { Tooltip } from '../utils/Tooltip'
import styles from '../../styles.module.css'

function detectVariant(data: unknown, variants: JsonSchema[]): number {
    for (let i = 0; i < variants.length; i++) {
        const v = variants[i]
        if (v.type === 'array' && Array.isArray(data)) return i
        if (v.type === 'string' && typeof data === 'string') return i
        if (v.type === 'number' && typeof data === 'number') return i
        if (v.type === 'integer' && Number.isInteger(data as number)) return i
        if (v.type === 'boolean' && typeof data === 'boolean') return i
        if (v.type === 'object' && data && typeof data === 'object' && !Array.isArray(data)) return i
        if (v.type === 'null' && data === null) return i
    }
    return 0
}

function defaultForType(t: string | undefined): unknown {
    switch (t) {
        case 'array': return []
        case 'string': return ''
        case 'number': case 'integer': return 0
        case 'boolean': return false
        case 'object': return {}
        case 'null': return null
        default: return undefined
    }
}

function variantLabel(v: JsonSchema, idx: number): string {
    return v.title || (v.type as string) || `Option ${idx + 1}`
}

function OneOfControlRenderer(props: ControlProps) {
    const { id, label, data, path, schema, description, enabled, handleChange, renderers, cells, uischema } = props
    const variants = (schema.oneOf ?? []) as JsonSchema[]
    const detected = useMemo(() => detectVariant(data, variants), [data, variants])
    const [selected, setSelected] = useState(detected)

    const active = variants[selected] ?? variants[0]

    const onSelect = (idx: number) => {
        setSelected(idx)
        const v = variants[idx]
        if (detectVariant(data, variants) !== idx) {
            handleChange(path, defaultForType(v.type as string))
        }
    }

    const variantSchema: JsonSchema = { ...active, title: schema.title, description: schema.description }

    return (
        <div className={styles.field}>
            {label && (
                <div className={styles.label}>
                    <span>{label}</span>
                    {description && <Tooltip text={description} />}
                </div>
            )}
            <div role="radiogroup">
                {variants.map((v, i) => (
                    <label key={i} style={{ marginRight: '0.75rem' }}>
                        <input
                            type="radio"
                            name={`${id}-oneof`}
                            checked={selected === i}
                            onChange={() => onSelect(i)}
                            disabled={!enabled}
                        />
                        {variantLabel(v, i)}
                    </label>
                ))}
            </div>
            <JsonFormsDispatch
                schema={variantSchema}
                uischema={{ type: 'Control', scope: '#', label: false } as any}
                path={path}
                renderers={renderers}
                cells={cells}
            />
        </div>
    )
}

export const oneOfControlTester: RankedTester = rankWith(
    5,
    and(uiTypeIs('Control'), schemaMatches((s: any) => Array.isArray(s?.oneOf))),
)
export const OneOfControl = withJsonFormsControlProps(OneOfControlRenderer)
