import * as Popover from '@radix-ui/react-popover'
import styles from './Tooltip.module.css'

export function Tooltip({ text }: { text: string }) {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button
                    type="button"
                    className={styles.icon}
                    aria-label="More information"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                    >
                        <circle
                            cx="8"
                            cy="8"
                            r="7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M8 7.5v3.5M8 4.5v.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className={styles.content} side="right" sideOffset={6}>
                    {text}
                    <Popover.Arrow className={styles.arrow} />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}
