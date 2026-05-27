import { useCallback } from 'react';
import { ControlProps, isStringControl, rankWith, and, schemaMatches } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Tooltip } from '../utils/Tooltip';
import styles from '../../styles.module.css';

function EventControlRenderer({ label, data, path, schema, description, enabled, handleChange }: ControlProps) {
    const isChecked = typeof data === 'string' && data.length > 0;
    const eventName = path.split('.').pop() || label;
    const hasParam = (schema as any)['x-hasEventParam'] === true;

    const handleToggle = useCallback(() => {
        if (isChecked) {
            handleChange(path, undefined);
        } else {
            const body = hasParam
                ? `console.log("${eventName}", event);`
                : `console.log("${eventName}");`;
            handleChange(path, body);
        }
    }, [isChecked, path, eventName, hasParam, handleChange]);

    return (
        <div className={styles.field}>
            <label className={`${styles.label}${!isChecked ? ` ${styles.unset}` : ''}`}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleToggle}
                    disabled={!enabled}
                />
                <span>{eventName}</span>
                {description && <Tooltip text={description} />}
            </label>
        </div>
    );
}

export const eventControlTester = rankWith(6, and(
    isStringControl,
    schemaMatches(schema => (schema as any)['x-event'] === true),
));

export const EventControl = withJsonFormsControlProps(EventControlRenderer);
