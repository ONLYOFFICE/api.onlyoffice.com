import { useRef } from 'react';
import { ControlProps, isIntegerControl, isNumberControl, isStringControl, not, isEnumControl, and, or, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Tooltip } from '../utils/Tooltip';
import styles from '../../styles.module.css';

interface PendingInput {
    inputEl: HTMLInputElement;
    path: string;
    schemaType: string | undefined;
    data: unknown;
    handleChange: (path: string, value: unknown) => void;
}

let pending: PendingInput | null = null;

export function flushPendingInput(): boolean {
    if (!pending) return false;
    const { inputEl, path, schemaType, data, handleChange } = pending;
    const raw = inputEl.value;
    pending = null;
    let value: unknown;
    if (raw === '') {
        value = undefined;
    } else if (schemaType === 'integer') {
        value = parseInt(raw, 10);
    } else if (schemaType === 'number') {
        value = parseFloat(raw);
    } else {
        value = raw;
    }
    if (value === data) return false;
    handleChange(path, value);
    return true;
}

function TextControlRenderer({ id, label, data, path, schema, description, required, enabled, handleChange }: ControlProps) {
    const type = schema.type === 'integer' || schema.type === 'number' ? 'number' : 'text';
    const isUnset = data === undefined || data === null;
    const inputRef = useRef<HTMLInputElement>(null);

    const onFocus = () => {
        pending = { inputEl: inputRef.current!, path, schemaType: schema.type as string, data, handleChange };
    };

    const onBlur = () => {
        flushPendingInput();
    };

    return (
        <div className={styles.field}>
            {label && (
                <label htmlFor={id} className={`${styles.label}${isUnset ? ` ${styles.unset}` : ''}`}>
                    <span>
                        {label}
                        {required && <span className={styles.required}> *</span>}
                    </span>
                    {description && <Tooltip text={description} />}
                </label>
            )}
            <input
                ref={inputRef}
                id={id}
                type={type}
                defaultValue={data ?? ''}
                onFocus={onFocus}
                onBlur={onBlur}
                disabled={!enabled}
            />
        </div>
    )
}

export const textControlTester = rankWith(3, and(
    or(isStringControl, isNumberControl, isIntegerControl),
    not(isEnumControl),
));

export const TextControl = withJsonFormsControlProps(TextControlRenderer);
