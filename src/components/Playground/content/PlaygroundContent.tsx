'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { PlaygroundPreview } from '../preview/PlaygroundPreview'
import styles from './PlaygroundContent.module.css'
import {useEffect, useState, lazy, Suspense } from "react";

const PlaygroundEditor = lazy(() =>
    import('../editor/PlaygroundEditor').then(m => ({ default: m.PlaygroundEditor }))
)

export const PlaygroundContent = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)')

        const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsMobile(e.matches)
        }

        handleMediaChange(mediaQuery)

        mediaQuery.addEventListener('change', handleMediaChange)

        return () => mediaQuery.removeEventListener('change', handleMediaChange)
    }, [])

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
                    <Suspense>
                        <PlaygroundEditor />
                    </Suspense>
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
                <Suspense>
                    <PlaygroundEditor />
                </Suspense>
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
