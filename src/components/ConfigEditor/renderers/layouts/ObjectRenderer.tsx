import { StatePropsOfControl, isObjectControl, rankWith, ControlElement, JsonSchema, composePaths } from '@jsonforms/core'
import { withJsonFormsControlProps, JsonFormsDispatch } from '@jsonforms/react'
import { Section } from '../utils/Section'
import { depthOfPath, titleFromKey } from './depth'

function ObjectRendererInner(props: any) {
    const { schema, path, label, renderers, cells } = props
    const s = schema as JsonSchema
    const properties = s.properties ?? {}
    const depth = depthOfPath(path)
    const lastKey = path ? path.split('.').pop() || '' : ''
    const title = label || s.title || titleFromKey(lastKey) || 'Root'

    const body = Object.keys(properties).map(key => {
        const childPath = path ? composePaths(path, key) : key
        const childSchema = properties[key] as JsonSchema
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
        <Section title={title} depth={depth} description={s.description}>
            {body}
        </Section>
    )
}

export const objectRendererTester = rankWith(2, isObjectControl)
export const ObjectRenderer = withJsonFormsControlProps(ObjectRendererInner)
