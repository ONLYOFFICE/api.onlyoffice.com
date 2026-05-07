import * as Tabs from '@radix-ui/react-tabs';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { type ReactNode } from 'react';
import { useSyncExternalStore } from 'react';
import styles from './styles.module.css';

function useIsMobile(query = '(max-width: 767px)') {
    return useSyncExternalStore(
        (callback) => {
            const matchMedia = window.matchMedia(query);
            matchMedia.addEventListener('change', callback);
            return () => matchMedia.removeEventListener('change', callback);
        },
        () => window.matchMedia(query).matches,
        () => false,
    );
}

interface SplitPaneProps {
    first: ReactNode;
    second: ReactNode;
    firstLabel?: string;
    secondLabel?: string;
    defaultSize?: number;
}

export const SplitPane = ({
    first,
    second,
    firstLabel = 'Editor',
    secondLabel = 'Preview',
    defaultSize = 40,
}: SplitPaneProps) => {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Tabs.Root className={styles.TabsRoot} defaultValue="first">
                <Tabs.List className={styles.TabsList}>
                    <Tabs.Trigger value="first" className={styles.Tab}>
                        {firstLabel}
                    </Tabs.Trigger>
                    <Tabs.Trigger value="second" className={styles.Tab}>
                        {secondLabel}
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="first" className={styles.TabPanel} forceMount>
                    {first}
                </Tabs.Content>
                <Tabs.Content value="second" className={styles.TabPanel} forceMount>
                    {second}
                </Tabs.Content>
            </Tabs.Root>
        );
    }

    return (
        <PanelGroup direction="horizontal" className={styles.DesktopContent}>
            <Panel minSize={20} defaultSize={defaultSize}>
                {first}
            </Panel>
            <PanelResizeHandle className={styles.ResizeHandle}>
                <div className={styles.ResizeHandleGrip}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="9" cy="12" r="1"/>
                        <circle cx="9" cy="5" r="1"/>
                        <circle cx="9" cy="19" r="1"/>
                        <circle cx="15" cy="12" r="1"/>
                        <circle cx="15" cy="5" r="1"/>
                        <circle cx="15" cy="19" r="1"/>
                    </svg>
                </div>
            </PanelResizeHandle>
            <Panel minSize={20} defaultSize={100 - defaultSize}>
                {second}
            </Panel>
        </PanelGroup>
    );
};
