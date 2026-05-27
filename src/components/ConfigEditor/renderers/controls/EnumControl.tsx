import { ControlProps, isEnumControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Tooltip } from '../utils/Tooltip';
import styles from '../../styles.module.css';

function EnumControlRenderer({ id, label, data, path, schema, description, required, enabled, handleChange }: ControlProps) {
    const options: any[] = schema.enum ?? [];
    const isNumeric = schema.type === 'number' || schema.type === 'integer';
    const isUnset = data === undefined || data === null;

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const raw = e.target.value;
        if (raw === '') { handleChange(path, undefined); return; }
        handleChange(path, isNumeric ? Number(raw) : raw);
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
            <select id={id} value={data ?? ''} onChange={onChange} disabled={!enabled}>
                <option value="">—</option>
                {options.map(opt => (
                    <option key={String(opt)} value={String(opt)}>{String(opt)}</option>
                ))}
            </select>
        </div>
    )
}

export const enumControlTester = rankWith(4, isEnumControl);
export const EnumControl = withJsonFormsControlProps(EnumControlRenderer);
