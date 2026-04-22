import { isObjectControl, rankWith, ControlElement, JsonSchema, composePaths, resolveSchema } from '@jsonforms/core'
import { withJsonFormsControlProps, JsonFormsDispatch, useJsonForms } from '@jsonforms/react'
import { Section } from '../utils/Section'
import { depthOfPath, titleFromKey } from './depth'
import { sortObjectKeys } from '../utils/fieldSort'

function isRenderable(schema: JsonSchema): boolean {
    return !!(
        schema.type ||
        schema.properties ||
        schema.items ||
        schema.enum ||
        schema.oneOf ||
        schema.anyOf ||
        schema.allOf ||
        schema.$ref
    )
}

function ObjectRendererInner(props: any) {
    const { schema, path, label, renderers, cells } = props
    const ctx = useJsonForms()
    const rootSchema = ctx.core?.schema as JsonSchema | undefined

    const s = schema as JsonSchema
    const properties = s.properties ?? {}
    const depth = depthOfPath(path)
    const lastKey = path ? path.split('.').pop() || '' : ''
    const title = label || s.title || titleFromKey(lastKey) || 'Root'

    const sortedKeys = sortObjectKeys(Object.keys(properties), path, properties)
    const body = sortedKeys.map(key => {
        const childPath = path ? composePaths(path, key) : key
        const rawChild = properties[key] as JsonSchema
        let childSchema: JsonSchema = rawChild

        if (rawChild.$ref && rootSchema) {
            const resolved = resolveSchema(rootSchema, rawChild.$ref, rootSchema) as JsonSchema
            childSchema = {
                ...resolved,
                description: rawChild.description ?? resolved.description,
                title: rawChild.title ?? resolved.title,
            }
        }

        if (!isRenderable(childSchema)) return null

        const control: ControlElement = {
            type: 'Control',
            scope: '#',
            label: childSchema.title || titleFromKey(key),
        }
        return (
            <JsonFormsDispatch
                key={childPath}
                schema={childSchema}
                uischema={control}
                path={childPath}
                renderers={renderers}
                cells={cells}
            />
        )
    })

    if (!path) return <div>{body}</div>

    return (
        <Section
            title={title}
            depth={depth}
            description={s['x-shortDescription']}
        >
            {body}
        </Section>
    )
}

export const objectRendererTester = rankWith(2, isObjectControl)
export const ObjectRenderer = withJsonFormsControlProps(ObjectRendererInner)
