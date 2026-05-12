import styles from './styles.module.css';
import PlayIcon from '@site/static/icons/icon-play.svg';
import ResetIcon from '@site/static/icons/icon-reset.svg';
import CopyIcon from '@site/static/icons/copy.svg';
import * as Tabs from "@radix-ui/react-tabs";
import { renderers } from "./renderers";
import schema from '@site/src/data/config-schema.json';
import { UISchemaElement } from "@jsonforms/core";

import { JsonForms } from '@jsonforms/react';
import { useColorMode } from "@docusaurus/theme-common";
import { useCallback, useEffect, useRef, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
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

const eventSchemas: Record<string, any> =
    (schema as any).properties?.events?.properties ?? {};

function hasEventParam(name: string): boolean {
    return eventSchemas[name]?.['x-hasEventParam'] === true;
}

function serializeAsCode(data: Record<string, unknown>): string {
    const { events, ...rest } = data;
    const json = JSON.stringify(rest, null, 2);

    if (!events) return `const config = ${json};`;

    const eventEntries: string[] = [];
    Object.keys(events as Record<string, unknown>).forEach((name) => {
        const body = (events as Record<string, unknown>)[name];
        if (typeof body === 'string' && body.length > 0) {
            const params = hasEventParam(name) ? 'event' : '';
            eventEntries.push(`    "${name}": function(${params}) {\n      ${body}\n    }`);
        }
    });

    const eventsBody = eventEntries.length === 0
        ? '{}'
        : `{\n${eventEntries.join(',\n')}\n  }`;
    const obj = json.slice(0, -2) + `,\n  "events": ${eventsBody}\n}`;

    return `const config = ${obj};`;
}

function parseCode(code: string): Record<string, unknown> | null {
    try {
        const match = code.match(/(?:const|let|var)\s+(\w+)\s*=/);
        const parsed = match
            ? new Function(code + '\nreturn ' + match[1])() as Record<string, unknown>
            : new Function('return (' + code + ')')() as Record<string, unknown>;
        if (parsed.events) {
            const events = parsed.events as Record<string, unknown>;
            Object.keys(events).forEach((name) => {
                if (typeof events[name] === 'function') {
                    const src = (events[name] as Function).toString();
                    const bodyMatch = src.match(/\{([\s\S]*)\}\s*$/);
                    events[name] = bodyMatch ? bodyMatch[1].trim() : '';
                }
            });
        }
        return parsed;
    } catch {
        return null;
    }
}

export function ConfigEditor({ defaultConfig, onApply }: ConfigEditorProps) {
    const { colorMode } = useColorMode();

    const formDataRef = useRef(defaultConfig);
    const pendingAction = useRef<(() => void) | null>(null);
    const [codeText, setCodeText] = useState(() => JSON.stringify(defaultConfig, null, 2));
    const [tab, setTab] = useState<'form' | 'code'>('form');
    const tabRef = useRef(tab);
    const updateTabRef = useRef(false);
    const codeTextRef = useRef(codeText);
    codeTextRef.current = codeText;

    const onApplyRef = useRef(onApply);
    onApplyRef.current = onApply;

    const [formKey, setFormKey] = useState(0);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        formDataRef.current = defaultConfig;
        setCodeText(JSON.stringify(defaultConfig, null, 2));
        updateTabRef.current = false;
        setFormKey((k) => k + 1);
        onApplyRef.current(defaultConfig);
    }, [defaultConfig]);

    const applyConfig = useCallback(() => {
        const config = { ...formDataRef.current };
        if (config.events) {
            const events: Record<string, Function> = {};
            let hasEvents = false;
            const src = config.events as Record<string, unknown>;
            Object.keys(src).forEach((name) => {
                if (typeof src[name] === 'string' && (src[name] as string).length > 0) {
                    events[name] = hasEventParam(name)
                        ? new Function('event', src[name] as string)
                        : new Function(src[name] as string);
                    hasEvents = true;
                }
            });
            config.events = hasEvents ? events : undefined;
        }
        onApplyRef.current(config);
    }, []);

    const serializeConfig = useCallback(() => {
        return serializeAsCode(formDataRef.current);
    }, []);

    const syncCode = useCallback(() => {
        setCodeText(serializeConfig());
    }, [serializeConfig]);

    const syncForm = useCallback(() => {
        const parsed = parseCode(codeTextRef.current);
        if (parsed) {
            formDataRef.current = parsed;
            setFormKey((k) => k + 1);
        }
    }, []);

    // Sync data when switching tabs
    const handleTabChange = useCallback((value: string) => {
        if (tabRef.current === value) return;
        if (value === 'code') {
            if (flushPendingInput()) {
                tabRef.current = 'code';
                pendingAction.current = () => {
                    syncCode();
                    updateTabRef.current = false;
                    setTab('code');
                };
                return;
            }
            if (updateTabRef.current) {
                syncCode();
            }
        } else if (value === 'form' && updateTabRef.current) {
            syncForm();
        }
        updateTabRef.current = false;
        tabRef.current = value as 'form' | 'code';
        setTab(value as 'form' | 'code');
    }, [syncCode, syncForm]);

    const handleFormChange = useCallback(({ data }: { data: Record<string, unknown> }) => {
        formDataRef.current = data ?? {};
        updateTabRef.current = true;
        if (pendingAction.current) {
            const action = pendingAction.current;
            pendingAction.current = null;
            action();
        }
    }, []);

    const handleCodeChange = useCallback((value: string | undefined) => {
        setCodeText(value ?? '');
        updateTabRef.current = true;
    }, []);

    const handleRun = useCallback(() => {
        if (tabRef.current === 'code') {
            if (updateTabRef.current) {
                syncForm();
                updateTabRef.current = false;
            }
            applyConfig();
        } else if (flushPendingInput()) {
            pendingAction.current = applyConfig;
        } else {
            applyConfig();
        }
    }, [applyConfig, syncForm]);

    const handleReset = useCallback(() => {
        formDataRef.current = defaultConfig;
        setCodeText(JSON.stringify(defaultConfig, null, 2));
        updateTabRef.current = false;
        setFormKey((k) => k + 1);
    }, [defaultConfig]);

    const getCopyText = useCallback((): string | Promise<string> => {
        if (tabRef.current === 'code') {
            return codeTextRef.current;
        }
        if (flushPendingInput()) {
            return new Promise((resolve) => {
                pendingAction.current = () => resolve(serializeConfig());
            });
        }
        return serializeConfig();
    }, [serializeConfig]);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(await getCopyText());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard write failed
        }
    }, [getCopyText]);

    return (
        <div className={styles.container}>
                <Tabs.Root value={tab} onValueChange={handleTabChange} className={styles.tabs}>
                    <Tabs.List className={styles.list}>
                        <Tabs.Trigger value="form">Form</Tabs.Trigger>
                        <Tabs.Trigger value="code">Code</Tabs.Trigger>
                        <div className={styles.headerActions}>
                            <button
                                onClick={handleReset}
                                className={styles.headerButton}
                                aria-label="Reset to default configuration"
                                title="Reset to default configuration"
                                type="button"
                            >
                                <ResetIcon aria-hidden="true"/>
                            </button>
                            <button
                                onClick={handleCopy}
                                className={styles.headerButton}
                                aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
                                title={copied ? 'Copied!' : 'Copy to clipboard'}
                                type="button"
                                data-copied={copied}
                            >
                                <CopyIcon aria-hidden="true"/>
                            </button>
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
                        <Tabs.Content value='code' className={styles.content} forceMount>
                            <div className={styles.monacoContainer}>
                                <MonacoEditor
                                    language="javascript"
                                    value={codeText}
                                    onChange={handleCodeChange}
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
