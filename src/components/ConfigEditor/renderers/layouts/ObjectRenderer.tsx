import { isObjectControl, rankWith, ControlElement, JsonSchema, composePaths, resolveSchema } from '@jsonforms/core'
import { withJsonFormsControlProps, JsonFormsDispatch, useJsonForms } from '@jsonforms/react'
import { memo } from 'react'
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

interface ResolvedChild {
    childPath: string
    childSchema: JsonSchema
    control: ControlElement
}

function resolveChildren(
    properties: Record<string, JsonSchema>,
    path: string,
    rootSchema: JsonSchema | undefined,
): ResolvedChild[] {
    const sorted = sortObjectKeys(Object.keys(properties), path, properties)
    const result: ResolvedChild[] = []

    for (const key of sorted) {
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

        if (!isRenderable(childSchema)) continue

        result.push({
            childPath,
            childSchema,
            control: { type: 'Control', scope: '#', label: childSchema.title || titleFromKey(key) },
        })
    }

    return result
}

const ChildDispatch = memo(function ChildDispatch({ childSchema, control, childPath, renderers, cells }: ResolvedChild & { renderers: any; cells: any }) {
    return (
        <JsonFormsDispatch
            schema={childSchema}
            uischema={control}
            path={childPath}
            renderers={renderers}
            cells={cells}
        />
    )
})

const ObjectRendererInner = memo(function ObjectRendererInner(props: any) {
    const { schema, path, label, renderers, cells } = props
    const ctx = useJsonForms()
    const rootSchema = ctx.core?.schema as JsonSchema | undefined

    const s = schema as JsonSchema
    const properties = s.properties ?? {}
    const children = resolveChildren(properties, path, rootSchema)

    const depth = depthOfPath(path)
    const lastKey = path ? path.split('.').pop() || '' : ''
    const title = label || s.title || titleFromKey(lastKey) || 'Root'

    const body = children.map((child: ResolvedChild) => (
        <ChildDispatch key={child.childPath} {...child} renderers={renderers} cells={cells} />
    ))

    if (!path) return <div>{body}</div>

    return (
        <Section
            title={title}
            depth={depth}
            description={(s as any)['x-shortDescription']}
            defaultOpen={depth <= 1}
        >
            {body}
        </Section>
    )
}, (prev, next) => prev.path === next.path)

export const objectRendererTester = rankWith(2, isObjectControl)
export const ObjectRenderer = withJsonFormsControlProps(ObjectRendererInner)
