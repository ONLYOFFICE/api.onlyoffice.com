'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { PlaygroundPreview } from '../preview/PlaygroundPreview'
import styles from './PlaygroundContent.module.css'
import { useSyncExternalStore } from "react";
import {PlaygroundEditor} from "@site/src/components/Playground/editor/PlaygroundEditor";

function useIsMobile(query = '(max-width: 767px)') {
    return useSyncExternalStore(
        (callback) => {
            const matchMedia = window.matchMedia(query);
            matchMedia.addEventListener('change', callback);
            return () => matchMedia.removeEventListener('change', callback);
        },
        () => window.matchMedia(query).matches,
        () => false
    );
}

export const PlaygroundContent = () => {
    const isMobile = useIsMobile()

    if (isMobile) {
        return (
            <Tabs.Root className={styles.TabsRoot} defaultValue='editor'>
                <Tabs.List className={styles.TabsList}>
                    <Tabs.Trigger value="editor" className={styles.Tab}>
                        Editor
                    </Tabs.Trigger>
                    <Tabs.Trigger value="preview" className={styles.Tab}>
                        Preview
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="editor" className={styles.TabPanel}>
                    <PlaygroundEditor />
                </Tabs.Content>
                <Tabs.Content value="preview" className={styles.TabPanel}>
                    <PlaygroundPreview />
                </Tabs.Content>
            </Tabs.Root>
        )
    }

    return (
        <PanelGroup direction="horizontal" className={styles.DesktopContent}>
            <Panel minSize={20} defaultSize={40}>
                <PlaygroundEditor />
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
                        className="lucide lucide-grip-vertical size-2.5"
                    >
                        <circle cx="9" cy="12" r="1"></circle>
                        <circle cx="9" cy="5" r="1"></circle>
                        <circle cx="9" cy="19" r="1"></circle>
                        <circle cx="15" cy="12" r="1"></circle>
                        <circle cx="15" cy="5" r="1"></circle>
                        <circle cx="15" cy="19" r="1"></circle>
                    </svg>
                </div>
            </PanelResizeHandle>
            <Panel minSize={20} defaultSize={60}>
                <PlaygroundPreview />
            </Panel>
        </PanelGroup>
    )
}
