'use client'

import MonacoEditor, {OnMount} from '@monaco-editor/react'
import {usePlaygroundRootContext} from "@site/src/components/Playground";
import styles from './PlaygroundEditor.module.css';

export const PlaygroundEditor = () => {
    const { scriptValue, setScriptValue, setIsScriptModified, theme, editorApiConfig } = usePlaygroundRootContext()

    const onChange = (newValue: string | undefined) => {
        setScriptValue(newValue)
        setIsScriptModified(true)
    }

    const onMount: OnMount = (editor, monaco) => {
        const apiUrl = `./libs/${editorApiConfig.editorType}/api.js`
        fetch(apiUrl)
            .then(response => response.text())
            .then(libSource => {
                monaco.languages.typescript.javascriptDefaults.addExtraLib(libSource)
            })
            .catch(error => {
                console.error('Failed to load API library:', error)
            })
    }

    const editorKey = `${editorApiConfig.editorType}-${editorApiConfig.scriptType}`

    return (
        <div className={styles.editorContainer}>
            <MonacoEditor
                key={editorKey}
                defaultLanguage="javascript"
                value={scriptValue}
                onChange={onChange}
                onMount={onMount}
                theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
                options={{
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    lineNumbers: 'on',
                    renderLineHighlight: 'all',
                    automaticLayout: true,
                }}
            />
        </div>
    )
}
