import { useRef, useState } from 'react';
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

let current: PendingInput | null = null;
const deferred: Map<string, { value: unknown; handleChange: (path: string, value: unknown) => void }> = new Map();

function parseInput(inputEl: HTMLInputElement, schemaType: string | undefined): unknown {
    const raw = inputEl.value;
    if (raw === '') return undefined;
    if (schemaType === 'integer') return parseInt(raw, 10);
    if (schemaType === 'number') return parseFloat(raw);
    return raw;
}

function saveCurrent() {
    if (!current) return;
    const { inputEl, path, schemaType, data, handleChange } = current;
    const value = parseInput(inputEl, schemaType);
    current = null;
    if (value !== data) {
        deferred.set(path, { value, handleChange });
    }
}

export function flushPendingInput(): boolean {
    saveCurrent();
    if (deferred.size === 0) return false;
    for (const [path, { value, handleChange }] of deferred) {
        handleChange(path, value);
    }
    deferred.clear();
    return true;
}

function TextControlRenderer({ id, label, data, path, schema, description, required, enabled, handleChange }: ControlProps) {
    const type = schema.type === 'integer' || schema.type === 'number' ? 'number' : 'text';
    const [isUnset, setIsUnset] = useState(data === undefined || data === null);
    const inputRef = useRef<HTMLInputElement>(null);

    const onFocus = () => {
        saveCurrent();
        current = { inputEl: inputRef.current!, path, schemaType: schema.type as string, data, handleChange };
    };

    const onBlur = () => {
        setIsUnset(inputRef.current?.value === '');
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
