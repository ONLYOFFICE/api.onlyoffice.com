import styles from './styles.module.css'
import PlayIcon from '@site/static/icons/icon-play.svg';
import * as Tabs from "@radix-ui/react-tabs";
import { renderers } from "./renderers";
import schema from '@site/src/data/config-schema.json'
import { UISchemaElement } from "@jsonforms/core";
import { JsonForms } from '@jsonforms/react'
import { useColorMode } from "@docusaurus/theme-common";
import { useCallback, useEffect, useRef, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { CopyButton } from "./renderers/utils/CopyButton";
import { useDebounce } from "@site/src/hooks/useDebounce";

interface ConfigEditorProps {
    defaultConfig: Record<string, unknown>
    onApply: (config: Record<string, unknown>) => void
}

const ROOT_UISCHEMA: UISchemaElement = { type: 'Control', scope: '#' } as any

const MONACO_OPTIONS = {
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    fontSize: 14,
    lineNumbers: 'on' as const,
    renderLineHighlight: 'all' as const,
    automaticLayout: true,
    fixedOverflowWidgets: true,
}

export function ConfigEditor({ defaultConfig, onApply }: ConfigEditorProps) {
    const { colorMode } = useColorMode()

    const [formData, setFormData] = useState<Record<string, unknown>>(defaultConfig)
    const [jsonText, setJsonText] = useState(() => JSON.stringify(defaultConfig, null, 2))
    const [tab, setTab] = useState<'form' | 'json'>('form')
    const debouncedJsonText = useDebounce(jsonText, 300)
    const jsonDirtyRef = useRef(false)
    const jsonTextRef = useRef(jsonText)
    jsonTextRef.current = jsonText

    const onApplyRef = useRef(onApply)
    onApplyRef.current = onApply

    const formDataRef = useRef(formData)
    formDataRef.current = formData

    useEffect(() => {
        setFormData(defaultConfig)
        setJsonText(JSON.stringify(defaultConfig, null, 2))
        jsonDirtyRef.current = false
        onApplyRef.current(defaultConfig)
    }, [defaultConfig])

    // Sync debounced JSON to form data (only when editing JSON tab)
    useEffect(() => {
        if (tab !== 'json') return
        try {
            const parsed = JSON.parse(debouncedJsonText)
            setFormData(parsed)
        } catch {
            // invalid JSON — keep current formData
        }
    }, [debouncedJsonText, tab])

    // Serialize form data to JSON only when switching to JSON tab
    const handleTabChange = useCallback((value: string) => {
        if (value === 'json' && jsonDirtyRef.current) {
            setJsonText(JSON.stringify(formDataRef.current, null, 2))
            jsonDirtyRef.current = false
        }
        setTab(value as 'form' | 'json')
    }, [])

    const handleFormChange = useCallback(({ data }: { data: Record<string, unknown> }) => {
        const updated = data ?? {}
        setFormData(updated)
        jsonDirtyRef.current = true
    }, [])

    const handleJsonChange = useCallback((value: string | undefined) => {
        setJsonText(value ?? '')
    }, [])

    const handleRun = useCallback(() => {
        onApplyRef.current(formDataRef.current)
    }, [])

    const getCopyText = useCallback(() => {
        if (jsonDirtyRef.current) {
            return JSON.stringify(formDataRef.current, null, 2)
        }
        return jsonTextRef.current
    }, [])

    return (
        <div className={styles.container}>
                <Tabs.Root value={tab} onValueChange={handleTabChange} className={styles.tabs}>
                    <Tabs.List className={styles.list}>
                        <Tabs.Trigger value="form">Form</Tabs.Trigger>
                        <Tabs.Trigger value="json">JSON</Tabs.Trigger>
                    </Tabs.List>
                    <div className={styles.contentArea}>
                        <div className={styles.floatingActions}>
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
                        <Tabs.Content value="form" className={styles.content} forceMount>
                            <div className={styles.formEditorContent}>
                                <JsonForms
                                    schema={schema as any}
                                    uischema={ROOT_UISCHEMA}
                                    data={formData}
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
