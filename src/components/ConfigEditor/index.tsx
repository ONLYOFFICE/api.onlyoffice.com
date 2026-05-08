import styles from './styles.module.css';
import PlayIcon from '@site/static/icons/icon-play.svg';
import * as Tabs from "@radix-ui/react-tabs";
import { renderers } from "./renderers";
import schema from '@site/src/data/config-schema.json';
import { UISchemaElement } from "@jsonforms/core";
import { JsonForms } from '@jsonforms/react';
import { useColorMode } from "@docusaurus/theme-common";
import { useCallback, useEffect, useRef, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { CopyButton } from "./renderers/utils/CopyButton";
import { flushPendingInput } from "./renderers/controls/TextControl";

interface ConfigEditorProps {
    defaultConfig: Record<string, unknown>;
    onApply: (config: Record<string, unknown>) => void;
}

const ROOT_UISCHEMA: UISchemaElement = { type: 'Control', scope: '#' } as any;

const MONACO_OPTIONS = {
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: 14,
    lineNumbers: 'on' as const,
    renderLineHighlight: 'all' as const,
    automaticLayout: true,
    fixedOverflowWidgets: true,
};

export function ConfigEditor({ defaultConfig, onApply }: ConfigEditorProps) {
    const { colorMode } = useColorMode();

    const formDataRef = useRef(defaultConfig);
    const pendingAction = useRef<(() => void) | null>(null);
    const [jsonText, setJsonText] = useState(() => JSON.stringify(defaultConfig, null, 2));
    const [tab, setTab] = useState<'form' | 'json'>('form');
    const tabRef = useRef(tab);
    const updateTabRef = useRef(false);
    const jsonTextRef = useRef(jsonText);
    jsonTextRef.current = jsonText;

    const onApplyRef = useRef(onApply);
    onApplyRef.current = onApply;

    const [formKey, setFormKey] = useState(0);

    useEffect(() => {
        formDataRef.current = defaultConfig;
        setJsonText(JSON.stringify(defaultConfig, null, 2));
        updateTabRef.current = false;
        setFormKey((k) => k + 1);
        onApplyRef.current(defaultConfig);
    }, [defaultConfig]);

    const applyConfig = useCallback(() => {
        onApplyRef.current(formDataRef.current);
    }, []);

    const serializeConfig = useCallback(() => {
        return JSON.stringify(formDataRef.current, null, 2);
    }, []);

    const syncJson = useCallback(() => {
        setJsonText(serializeConfig());
    }, [serializeConfig]);

    // Sync data when switching tabs
    const handleTabChange = useCallback((value: string) => {
        if (tabRef.current === value) return;
        if (value === 'json') {
            if (flushPendingInput()) {
                tabRef.current = 'json';
                pendingAction.current = () => {
                    syncJson();
                    updateTabRef.current = false;
                    setTab('json');
                };
                return;
            }
            if (updateTabRef.current) {
                syncJson();
            }
        } else if (value === 'form' && updateTabRef.current) {
            try {
                formDataRef.current = JSON.parse(jsonTextRef.current);
                setFormKey((k) => k + 1);
            } catch {
                // invalid JSON — keep current formData
            }
        }
        updateTabRef.current = false;
        tabRef.current = value as 'form' | 'json';
        setTab(value as 'form' | 'json');
    }, [syncJson]);

    const handleFormChange = useCallback(({ data }: { data: Record<string, unknown> }) => {
        formDataRef.current = data ?? {};
        updateTabRef.current = true;
        if (pendingAction.current) {
            const action = pendingAction.current;
            pendingAction.current = null;
            action();
        }
    }, []);

    const handleJsonChange = useCallback((value: string | undefined) => {
        setJsonText(value ?? '');
        updateTabRef.current = true;
    }, []);

    const handleRun = useCallback(() => {
        if (tabRef.current === 'json') {
            if (updateTabRef.current) {
                try {
                    formDataRef.current = JSON.parse(jsonTextRef.current);
                    updateTabRef.current = false;
                } catch {
                    // invalid JSON — keep current formData
                }
            }
            applyConfig();
        } else if (flushPendingInput()) {
            pendingAction.current = applyConfig;
        } else {
            applyConfig();
        }
    }, [applyConfig]);

    const getCopyText = useCallback((): string | Promise<string> => {
        if (tabRef.current === 'json') {
            return jsonTextRef.current;
        }
        if (flushPendingInput()) {
            return new Promise((resolve) => {
                pendingAction.current = () => resolve(serializeConfig());
            });
        }
        return serializeConfig();
    }, [serializeConfig]);

    return (
        <div className={styles.container}>
                <Tabs.Root value={tab} onValueChange={handleTabChange} className={styles.tabs}>
                    <Tabs.List className={styles.list}>
                        <Tabs.Trigger value="form">Form</Tabs.Trigger>
                        <Tabs.Trigger value="json">JSON</Tabs.Trigger>
                        <div className={styles.headerActions}>
                            <CopyButton getText={getCopyText} />
                            <button
                                onClick={handleRun}
                                className={styles.runButton}
                                aria-label="Apply configuration changes"
                                title="Apply configuration changes"
                                type="button"
                            >
                                <PlayIcon fill='currentColor' aria-hidden="true"/>
                            </button>
                        </div>
                    </Tabs.List>
                    <div className={styles.contentArea}>
                        <Tabs.Content value="form" className={styles.content} forceMount>
                            <div className={styles.formEditorContent}>
                                <JsonForms
                                    key={formKey}
                                    schema={schema as any}
                                    uischema={ROOT_UISCHEMA}
                                    data={formDataRef.current}
                                    renderers={renderers}
                                    onChange={handleFormChange}
                                    validationMode="NoValidation"
                                />
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value='json' className={styles.content} forceMount>
                            <div className={styles.monacoContainer}>
                                <MonacoEditor
                                    language="json"
                                    value={jsonText}
                                    onChange={handleJsonChange}
                                    theme={colorMode === 'dark' ? 'vs-dark' : 'vs-light'}
                                    options={MONACO_OPTIONS}
                                />
                            </div>
                        </Tabs.Content>
                    </div>
                </Tabs.Root>
        </div>
    )
}
