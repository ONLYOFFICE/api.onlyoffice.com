import { useCallback, useRef, useEffect } from 'react';
import { ControlProps, isBooleanControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Tooltip } from '../utils/Tooltip';
import styles from '../../styles.module.css';

function BooleanControlRenderer({ id, label, data, path, description, enabled, handleChange }: ControlProps) {
    const ref = useRef<HTMLInputElement>(null);
    const isUnset = data === undefined || data === null;

    useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = isUnset;
        }
    }, [isUnset]);

    const handleClick = useCallback(() => {
        if (isUnset) {
            handleChange(path, true);
        } else if (data === true) {
            handleChange(path, false);
        } else {
            handleChange(path, undefined);
        }
    }, [data, isUnset, path, handleChange]);

    return (
        <div className={styles.field}>
            <label htmlFor={id} className={`${styles.label}${isUnset ? ` ${styles.unset}` : ''}`}>
                <input
                    ref={ref}
                    id={id}
                    type="checkbox"
                    checked={isUnset ? false : Boolean(data)}
                    onChange={handleClick}
                    disabled={!enabled}
                />
                <span>{label}</span>
                {description && <Tooltip text={description} />}
            </label>
        </div>
    )
}

export const booleanControlTester = rankWith(3, isBooleanControl);
export const BooleanControl = withJsonFormsControlProps(BooleanControlRenderer);
