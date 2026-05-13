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

function isToggleable(schema: JsonSchema): boolean {
    return (
        schema.type === 'object' &&
        !!(schema as any)['x-alsoBoolean'] &&
        !!schema.properties &&
        Object.keys(schema.properties).length > 0
    )
}

const ObjectRendererInner = memo(function ObjectRendererInner(props: any) {
    const { schema, path, label, data, handleChange, renderers, cells } = props;
    const ctx = useJsonForms();
    const rootSchema = ctx.core?.schema as JsonSchema | undefined;

    const s = schema as JsonSchema;
    const properties = s.properties ?? {};
    const children = resolveChildren(properties, path, rootSchema);

    const depth = depthOfPath(path);
    const lastKey = path ? path.split('.').pop() || '' : '';
    const title = label || s.title || titleFromKey(lastKey) || 'Root';

    const canBeFalse = isToggleable(s);
    // Three states: true (object data exists), false (data === false), undefined (unset)
    const toggled = path
        ? (data === false ? false : (data == null ? undefined : true))
        : undefined;
    const onToggle = path
        ? () => {
            if (data == null) {
                handleChange(path, {});
            } else if (typeof data === 'object') {
                handleChange(path, canBeFalse ? false : undefined);
            } else {
                handleChange(path, undefined);
            }
        }
        : undefined;

    const renderChild = (child: ResolvedChild) => (
        <ChildDispatch key={child.childPath} {...child} renderers={renderers} cells={cells} />
    )

    if (!path) {
        const configFields = children.filter((c) => !isComplexType(c.childSchema));
        const sectionFields = children.filter((c) => isComplexType(c.childSchema));

        return (
            <div>
                {configFields.length > 0 && (
                    <Section title="Config" description={s.description} depth={1} defaultOpen>
                        {configFields.map(renderChild)}
                    </Section>
                )}
                {sectionFields.map(renderChild)}
            </div>
        )
    }

    // label: false means the caller already provides the wrapper (e.g. array items)
    if (props.uischema?.label === false) {
        return <>{children.map(renderChild)}</>;
    }

    return (
        <Section
            title={title}
            description={s.description}
            depth={depth}
            defaultOpen={depth <= 1}
            toggled={toggled}
            onToggle={onToggle}
        >
            {children.map(renderChild)}
        </Section>
    )
}, (prev, next) => prev.path === next.path && prev.data === next.data);

export const objectRendererTester = rankWith(2, isObjectControl);
export const ObjectRenderer = withJsonFormsControlProps(ObjectRendererInner);
