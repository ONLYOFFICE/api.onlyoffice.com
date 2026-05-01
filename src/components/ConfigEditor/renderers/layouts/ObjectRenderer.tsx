import { isObjectControl, rankWith, ControlElement, JsonSchema, composePaths, resolveSchema } from '@jsonforms/core';
import { withJsonFormsControlProps, JsonFormsDispatch, useJsonForms } from '@jsonforms/react';
import { memo } from 'react';
import { Section } from '../utils/Section';
import { depthOfPath, titleFromKey } from './depth';
import { sortObjectKeys, isComplexType } from '../utils/fieldSort';

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
    childPath: string;
    childSchema: JsonSchema;
    control: ControlElement;
}

function resolveProperty(raw: JsonSchema, rootSchema: JsonSchema | undefined): JsonSchema {
    if (raw.$ref && rootSchema) {
        const resolved = resolveSchema(rootSchema, raw.$ref, rootSchema) as JsonSchema;
        return {
            ...resolved,
            description: raw.description ?? resolved.description,
            title: raw.title ?? resolved.title,
        };
    }
    return raw;
}

function resolveChildren(
    properties: Record<string, JsonSchema>,
    path: string,
    rootSchema: JsonSchema | undefined,
): ResolvedChild[] {
    const keys = Object.keys(properties);
    const resolved: Record<string, JsonSchema> = {};
    for (const key of keys) {
        resolved[key] = resolveProperty(properties[key] as JsonSchema, rootSchema);
    }

    const sorted = sortObjectKeys(keys, path, resolved);
    const result: ResolvedChild[] = [];

    for (const key of sorted) {
        const childSchema = resolved[key];
        if (!isRenderable(childSchema)) continue;

        result.push({
            childPath: path ? composePaths(path, key) : key,
            childSchema,
            control: { type: 'Control', scope: '#', label: childSchema.title || titleFromKey(key) },
        })
    }

    return result;
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
    const { schema, path, label, renderers, cells } = props;
    const ctx = useJsonForms();
    const rootSchema = ctx.core?.schema as JsonSchema | undefined;

    const s = schema as JsonSchema;
    const properties = s.properties ?? {};
    const children = resolveChildren(properties, path, rootSchema);

    const depth = depthOfPath(path);
    const lastKey = path ? path.split('.').pop() || '' : '';
    const title = label || s.title || titleFromKey(lastKey) || 'Root';

    const renderChild = (child: ResolvedChild) => (
        <ChildDispatch key={child.childPath} {...child} renderers={renderers} cells={cells} />
    )

    if (!path) {
        const configFields = children.filter((c) => !isComplexType(c.childSchema));
        const sectionFields = children.filter((c) => isComplexType(c.childSchema));

        return (
            <div>
                {configFields.length > 0 && (
                    <Section title="Config" depth={1} defaultOpen>
                        {configFields.map(renderChild)}
                    </Section>
                )}
                {sectionFields.map(renderChild)}
            </div>
        )
    }

    return (
        <Section
            title={title}
            depth={depth}
            description={(s as any)['x-shortDescription']}
            defaultOpen={depth <= 1}
        >
            {children.map(renderChild)}
        </Section>
    )
}, (prev, next) => prev.path === next.path);

export const objectRendererTester = rankWith(2, isObjectControl);
export const ObjectRenderer = withJsonFormsControlProps(ObjectRendererInner);
