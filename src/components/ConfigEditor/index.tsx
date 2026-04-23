import styles from './styles.module.css'
import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";
import PlayIcon from '@site/static/icons/icon-play.svg';
import * as Tabs from "@radix-ui/react-tabs";
import { renderers } from "./renderers";
import rawSchema from '@site/static/schemas/config.json'
import { JsonSchema, UISchemaElement } from "@jsonforms/core";
import { JsonForms } from '@jsonforms/react'
import { useColorMode } from "@docusaurus/theme-common";
import { useCallback, useEffect, useMemo, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { filterSchema } from "./schemaFilter";
import { CopyButton } from "./renderers/utils/CopyButton";
import { useDebounce } from "@site/src/hooks/useDebounce";

interface ConfigEditorProps {
    defaultConfig: Record<string, unknown>
    onApply: (config: Record<string, unknown>) => void
    excludePaths?: string[]
}

const ROOT_UISCHEMA: UISchemaElement = { type: 'Control', scope: '#' } as any

export function ConfigEditor({ defaultConfig, onApply, excludePaths }: ConfigEditorProps) {
    const { colorMode } = useColorMode()

    const schema = useMemo(
        () => filterSchema(rawSchema as JsonSchema, excludePaths ?? []),
        [excludePaths],
    )

    const [formData, setFormData] = useState<Record<string, unknown>>(defaultConfig)
    const [jsonText, setJsonText] = useState(() => JSON.stringify(defaultConfig, null, 2))
    const [tab, setTab] = useState<'form' | 'json'>('form')
    const debouncedJsonText = useDebounce(jsonText, 300)

    useEffect(() => {
        setFormData(defaultConfig)
        setJsonText(JSON.stringify(defaultConfig, null, 2))
        onApply(defaultConfig)
    }, [defaultConfig, onApply])

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

    const handleFormChange = useCallback(({ data }: { data: Record<string, unknown> }) => {
        const updated = data ?? {}
        setFormData(updated)
        setJsonText(JSON.stringify(updated, null, 2))
    }, [])

    const handleJsonChange = useCallback((value: string) => {
        setJsonText(value ?? '')
    }, [])

    const handleRun = () => { onApply(formData) }

    return (
        <TooltipProvider delayDuration={200}>
            <div className={styles.container}>
                <button
                    onClick={handleRun}
                    className={styles.runButton}
                    aria-label="Apply configuration changes"
                    title="Apply configuration changes"
                    type="button"
                >
                    <PlayIcon fill='currentColor' aria-hidden="true"/>
                </button>
                <Tabs.Root value={tab} onValueChange={(v) => setTab(v as 'form' | 'json')} className={styles.tabs}>
                    <Tabs.List className={styles.list}>
                        <Tabs.Trigger value="form">Form</Tabs.Trigger>
                        <Tabs.Trigger value="json">JSON</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="form" className={styles.content} forceMount>
                        <div className={styles.formEditorContent}>
                            <JsonForms
                                schema={schema}
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
                                onChange={(v) => handleJsonChange(v ?? '')}
                                theme={colorMode === 'dark' ? 'vs-dark' : 'vs-light'}
                                options={{
                                    minimap: {enabled: false},
                                    scrollBeyondLastLine: false,
                                    fontSize: 14,
                                    lineNumbers: 'on',
                                    renderLineHighlight: 'all',
                                    automaticLayout: true,
                                    fixedOverflowWidgets: true,
                                }}
                            />
                            <CopyButton getText={() => jsonText} />
                        </div>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </TooltipProvider>
    )
}
