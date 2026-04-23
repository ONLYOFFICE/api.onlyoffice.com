import { ControlProps, isIntegerControl, isNumberControl, isStringControl, not, isEnumControl, and, or, rankWith } from '@jsonforms/core'
import { withJsonFormsControlProps } from '@jsonforms/react'
import { Tooltip } from '../utils/Tooltip'
import styles from '../../styles.module.css'

function TextControlRenderer({ id, label, data, path, schema, description, required, enabled, handleChange }: ControlProps) {
    const type = schema.type === 'integer' || schema.type === 'number' ? 'number' : 'text'

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value
        if (raw === '') {
            handleChange(path, undefined)
            return
        }
        if (schema.type === 'integer') {
            handleChange(path, parseInt(raw, 10))
        } else if (schema.type === 'number') {
            handleChange(path, parseFloat(raw))
        } else {
            handleChange(path, raw)
        }
    }

    return (
        <div className={styles.field}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    <span>
                        {label}
                        {required && <span className={styles.required}> *</span>}
                    </span>
                    {description && <Tooltip text={description} />}
                </label>
            )}
            <input
                id={id}
                type={type}
                value={data ?? ''}
                onChange={onChange}
                disabled={!enabled}
            />
        </div>
    )
}

export const textControlTester = rankWith(3, and(
    or(isStringControl, isNumberControl, isIntegerControl),
    not(isEnumControl),
))

export const TextControl = withJsonFormsControlProps(TextControlRenderer)
