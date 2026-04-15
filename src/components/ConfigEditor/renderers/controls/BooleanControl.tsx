import { ControlProps, isBooleanControl, rankWith } from '@jsonforms/core'
import { withJsonFormsControlProps } from '@jsonforms/react'
import { Tooltip } from '../utils/Tooltip'
import styles from '../../styles.module.css'

function BooleanControlRenderer({ id, label, data, path, description, enabled, handleChange }: ControlProps) {
    return (
        <div className={styles.field}>
            <label htmlFor={id} className={styles.label}>
                <input
                    id={id}
                    type="checkbox"
                    checked={Boolean(data)}
                    onChange={e => handleChange(path, e.target.checked)}
                    disabled={!enabled}
                />
                <span>{label}</span>
                {description && <Tooltip text={description} />}
            </label>
        </div>
    )
}

export const booleanControlTester = rankWith(3, isBooleanControl)
export const BooleanControl = withJsonFormsControlProps(BooleanControlRenderer)
