'use client'

import MonacoEditor, {OnMount} from '@monaco-editor/react'
import {usePlaygroundRootContext} from "@site/src/components/Playground";
import styles from './PlaygroundEditor.module.css';
import {getFullUrl} from "@site/src/utils/url";
import {useCallback} from "react";
import PlayIcon from '@site/static/icons/icon-play.svg';

export const PlaygroundEditor = () => {
    const { scriptValue, setScriptValue, setIsScriptModified, theme, editorType, scriptType } = usePlaygroundRootContext()

    const onChange = (newValue: string | undefined) => {
        setScriptValue(newValue)
        setIsScriptModified(true)
    }

    const apiUrl = getFullUrl(`/libs/${editorType}/api.js`)

    const onMount: OnMount = (_, monaco) => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${apiUrl}: ${response.status}`)
                }
                return response.text()
            })
            .then(libSource => {
                monaco.languages.typescript.javascriptDefaults.addExtraLib(libSource)
            })
            .catch(error => {
                console.error('Failed to load API library:', error)
            })
    }

    const handleRun = useCallback(() => {
        window.dispatchEvent(new Event('playground-run'))
    }, [])

    return (
        <div className={styles.editorContainer}>
            <button onClick={handleRun} className={styles.runButton}>
                <PlayIcon fill='currentColor' />
            </button>
            <MonacoEditor
                key={`${editorType}-${scriptType}`}
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
