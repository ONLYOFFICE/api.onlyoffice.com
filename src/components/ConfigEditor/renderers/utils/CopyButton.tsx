import { useState } from 'react'
import CopyIcon from '@site/static/icons/copy.svg'
import styles from './CopyButton.module.css'

interface CopyButtonProps {
    getText: () => string
}

export function CopyButton({ getText }: CopyButtonProps) {
    const [copied, setCopied] = useState(false)

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(getText())
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            alert('Failed to copy to clipboard.')
        }
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={styles.button}
            title={copied ? 'Copied!' : 'Copy to clipboard'}
            aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
            data-copied={copied}
        >
            <CopyIcon aria-hidden="true" />
        </button>
    )
}
