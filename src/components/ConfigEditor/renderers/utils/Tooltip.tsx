import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import styles from './Tooltip.module.css'

export function Tooltip({ text }: { text: string }) {
    return (
        <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger asChild>
                <span className={styles.icon}>i</span>
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content className={styles.content} sideOffset={6}>
                    {text}
                    <TooltipPrimitive.Arrow className={styles.arrow} />
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
    )
}