import { ArrayControlProps, isObjectArrayControl, isPrimitiveArrayControl, or, rankWith, ControlElement, JsonSchema, composePaths, update } from '@jsonforms/core';
import { withJsonFormsArrayControlProps, JsonFormsDispatch, useJsonForms } from '@jsonforms/react';
import { memo, useCallback } from 'react';
import { Section } from '../utils/Section';
import { depthOfPath, titleFromKey } from '../layouts/depth';
import styles from '../../styles.module.css';

const ITEM_UISCHEMA: ControlElement = { type: 'Control', scope: '#', label: false };

function defaultForSchema(s: JsonSchema | undefined): unknown {
    if (!s) return undefined;
    switch (s.type) {
        case 'array': return [];
        case 'string': return '';
        case 'number': case 'integer': return 0;
        case 'boolean': return false;
        case 'object': return {};
        default: return undefined;
    }
}

const ArrayControlRenderer = memo(function ArrayControlRenderer(props: ArrayControlProps) {
    const { label, path, schema, description, data, addItem, removeItems, enabled, renderers, cells } = props;
    const ctx = useJsonForms();

    // mapStateToArrayControlProps already resolves schema.items (including $ref),
    // so schema here is the item schema, not the array schema
    let itemSchema: JsonSchema = (schema as JsonSchema) ?? {};

    const items: unknown[] = Array.isArray(data) ? data : [];
    const depth = depthOfPath(path);

    const toggled = data == null ? undefined : true;
    const onToggle = useCallback(() => {
        ctx.dispatch!(update(path, () => data == null ? [] : undefined));
    }, [ctx.dispatch, path, data]);

    // If schema is empty, infer type from data
    if (!itemSchema.type && !itemSchema.properties && !itemSchema.items) {
        const firstItem = items[0];
        if (firstItem !== undefined) {
            const itemType = typeof firstItem;
            if (itemType === 'string' || itemType === 'number' || itemType === 'boolean') {
                itemSchema = { type: itemType as JsonSchema['type'] };
            }
        } else {
            itemSchema = { type: 'string' };
        }
    }

    return (
        <Section title={label || titleFromKey(path.split('.').pop() || '') || 'Items'} depth={depth + 1} description={description} defaultOpen={depth < 1} toggled={toggled} onToggle={onToggle}>
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
                            schema={itemSchema}
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
                    className={styles.actionButton}
                    onClick={() => addItem(path, defaultForSchema(itemSchema))()}
                    data-variant="primary"
                    aria-label="Add new item"
                >
                    + Add item
                </button>
            )}
        </Section>
    )
}, (prev, next) => prev.path === next.path && prev.data === next.data && prev.enabled === next.enabled);

export const arrayControlTester = rankWith(4, or(isObjectArrayControl, isPrimitiveArrayControl));
export const ArrayControl = withJsonFormsArrayControlProps(ArrayControlRenderer);
