import { ControlProps, JsonSchema, rankWith, RankedTester, uiTypeIs, and, schemaMatches } from '@jsonforms/core';
import { withJsonFormsControlProps, JsonFormsDispatch } from '@jsonforms/react';
import { Tooltip } from '../utils/Tooltip';
import styles from '../../styles.module.css';

function detectVariant(data: unknown, variants: JsonSchema[]): number {
    for (let i = 0; i < variants.length; i++) {
        const v = variants[i];
        if (v.type === 'array' && Array.isArray(data)) return i;
        if (v.type === 'string' && typeof data === 'string') return i;
        if (v.type === 'number' && typeof data === 'number') return i;
        if (v.type === 'integer' && Number.isInteger(data as number)) return i;
        if (v.type === 'boolean' && typeof data === 'boolean') return i;
        if (v.type === 'object' && data && typeof data === 'object' && !Array.isArray(data)) return i;
        if (v.type === 'null' && data === null) return i;
    }
    return 0;
}

function defaultForType(t: string | undefined): unknown {
    switch (t) {
        case 'array': return [];
        case 'string': return '';
        case 'number': case 'integer': return 0;
        case 'boolean': return false;
        case 'object': return {};
        case 'null': return null;
        default: return undefined;
    }
}

function variantLabel(v: JsonSchema, idx: number): string {
    return v.title || (v.type as string) || `Option ${idx + 1}`;
}

const ONEOF_UISCHEMA = { type: 'Control', scope: '#', label: false } as any;

function OneOfControlRenderer(props: ControlProps) {
    const { id, label, data, path, schema, description, enabled, handleChange, renderers, cells } = props;
    const variants = (schema.oneOf ?? []) as JsonSchema[];
    const selected = detectVariant(data, variants);
    const active = variants[selected] ?? variants[0];

    const onSelect = (idx: number) => {
        handleChange(path, defaultForType(variants[idx].type as string));
    };

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
                schema={active}
                uischema={ONEOF_UISCHEMA}
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
);
export const OneOfControl = withJsonFormsControlProps(OneOfControlRenderer);
