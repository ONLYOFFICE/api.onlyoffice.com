'use client';

import {useState, useEffect, useRef, useCallback, lazy, Suspense} from 'react';
import * as Select from '@radix-ui/react-select';
import * as Tabs from '@radix-ui/react-tabs';
import {Panel, PanelGroup, PanelResizeHandle} from 'react-resizable-panels';
import {useColorMode} from '@docusaurus/theme-common';
import {type DocSpaceMode, DEFAULT_SCRIPTS, MODE_LABELS} from './codeSnippets';
import {DocSpacePreview, type DocSpacePreviewHandle} from './DocSpacePreview';
import styles from './DocSpacePlayground.module.css';

const DocSpaceEditor = lazy(() =>
    import('./DocSpaceEditor').then(m => ({default: m.DocSpaceEditor}))
);

interface DocSpacePlaygroundProps {
    initialMode?: DocSpaceMode;
}

export const DocSpacePlayground = ({initialMode = 'manager'}: DocSpacePlaygroundProps) => {
    const [mode, setMode] = useState<DocSpaceMode>(initialMode);
    const [script, setScript] = useState(DEFAULT_SCRIPTS[initialMode]);
    const {colorMode, setColorMode} = useColorMode();
    const previewRef = useRef<DocSpacePreviewHandle>(null);

    // Auto-run on initial mount
    const hasRun = useRef(false);
    useEffect(() => {
        if (!hasRun.current) {
            hasRun.current = true;
            previewRef.current?.runScript(script);
        }
    }, []);

    // Re-run script when theme changes
    const prevTheme = useRef(colorMode);
    useEffect(() => {
        if (prevTheme.current !== colorMode) {
            prevTheme.current = colorMode;
            previewRef.current?.runScript(script);
        }
    }, [colorMode]);

    const handleModeChange = useCallback((newMode: DocSpaceMode) => {
        setMode(newMode);
        const newScript = DEFAULT_SCRIPTS[newMode];
        setScript(newScript);
        previewRef.current?.runScript(newScript);
    }, []);

    const handleRun = useCallback(() => {
        previewRef.current?.runScript(script);
    }, [script]);

    return (
        <div className={styles.container}>
            <Toolbar
                mode={mode}
                onModeChange={handleModeChange}
                theme={colorMode}
                onThemeChange={setColorMode}
            />
            <div className={styles.notice}>
                This playground may not work in Safari or incognito/private browsing mode due to third-party cookie restrictions.
            </div>
            <Content
                script={script}
                onScriptChange={setScript}
                onRun={handleRun}
                previewRef={previewRef}
                mode={mode}
                theme={colorMode}
            />
        </div>
    );
};

// ── Toolbar ─────────────────────────────────────────────────────

interface ToolbarProps {
    mode: DocSpaceMode;
    onModeChange: (mode: DocSpaceMode) => void;
    theme: string;
    onThemeChange: (theme: 'light' | 'dark') => void;
}

const Toolbar = ({mode, onModeChange, theme, onThemeChange}: ToolbarProps) => (
    <div className={styles.toolbar}>
        <div className={styles.toolbarGroup}>
            <div className={styles.label}>Mode:</div>
            <Select.Root value={mode} onValueChange={(v) => onModeChange(v as DocSpaceMode)}>
                <Select.Trigger className={styles.selectTrigger}>
                    <Select.Value/>
                    <Select.Icon asChild>
                        <div className={styles.selectIcon}/>
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className={styles.selectContent} position="popper">
                        <Select.Viewport className={styles.selectPopup}>
                            {(Object.keys(MODE_LABELS) as DocSpaceMode[]).map((key) => (
                                <Select.Item key={key} value={key} className={styles.selectOption}>
                                    <Select.ItemText>{MODE_LABELS[key]}</Select.ItemText>
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>

        <div className={`${styles.toolbarGroup} ${styles.toolbarGroupRight}`}>
            <div className={styles.label}>Theme:</div>
            <Select.Root value={theme} onValueChange={(v) => onThemeChange(v as 'light' | 'dark')}>
                <Select.Trigger className={styles.selectTrigger}>
                    <Select.Value/>
                    <Select.Icon asChild>
                        <div className={styles.selectIcon}/>
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className={styles.selectContent} position="popper">
                        <Select.Viewport className={styles.selectPopup}>
                            <Select.Item value="light" className={styles.selectOption}>
                                <Select.ItemText>Light</Select.ItemText>
                            </Select.Item>
                            <Select.Item value="dark" className={styles.selectOption}>
                                <Select.ItemText>Dark</Select.ItemText>
                            </Select.Item>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    </div>
);

// ── Content (split layout) ──────────────────────────────────────

interface ContentProps {
    script: string;
    onScriptChange: (value: string) => void;
    onRun: () => void;
    previewRef: React.RefObject<DocSpacePreviewHandle | null>;
    mode: DocSpaceMode;
    theme: 'light' | 'dark';
}

const Content = ({script, onScriptChange, onRun, previewRef, mode, theme}: ContentProps) => {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Tabs.Root className={styles.tabsRoot} defaultValue="editor">
                <Tabs.List className={styles.tabsList}>
                    <Tabs.Trigger value="editor" className={styles.tab}>
                        Editor
                    </Tabs.Trigger>
                    <Tabs.Trigger value="preview" className={styles.tab}>
                        Preview
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="editor" className={styles.tabPanel}>
                    <Suspense>
                        <DocSpaceEditor value={script} onChange={onScriptChange} onRun={onRun} theme={theme}/>
                    </Suspense>
                </Tabs.Content>
                <Tabs.Content value="preview" className={styles.tabPanel}>
                    <DocSpacePreview ref={previewRef} mode={mode} theme={theme} autoInit={false} className={styles.preview}/>
                </Tabs.Content>
            </Tabs.Root>
        );
    }

    return (
        <PanelGroup direction="horizontal" className={styles.desktopContent}>
            <Panel minSize={20} defaultSize={40}>
                <Suspense>
                    <DocSpaceEditor value={script} onChange={onScriptChange} onRun={onRun} theme={theme}/>
                </Suspense>
            </Panel>
            <PanelResizeHandle className={styles.resizeHandle}>
                <div className={styles.resizeHandleGrip}>
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
            <Panel minSize={20} defaultSize={60}>
                <DocSpacePreview ref={previewRef} mode={mode} theme={theme} autoInit={false} className={styles.preview}/>
            </Panel>
        </PanelGroup>
    );
};

// ── Helpers ─────────────────────────────────────────────────────

function useIsMobile(query = '(max-width: 767px)') {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const mql = window.matchMedia(query);
        setMatches(mql.matches);
        const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, [query]);
    return matches;
}
