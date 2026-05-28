'use client';

import MonacoEditor, {OnMount} from '@monaco-editor/react';
import {usePlaygroundRootContext} from "@site/src/components/Playground";
import styles from './PlaygroundEditor.module.css';
import PlayIcon from '@site/static/icons/icon-play.svg';
import {useCallback} from "react";

export const PlaygroundEditor = () => {
    const {scriptValue, theme, editorType, scriptType, documentServerUrl, dispatch} = usePlaygroundRootContext();

    const onChange = useCallback((newValue: string | undefined) => {
        if (newValue !== undefined) {
            dispatch({type: 'SET_SCRIPT_VALUE', payload: newValue});
        }
    }, [dispatch]);

    const libType = editorType === 'form' ? 'word' : editorType;
    const apiUrl = `${documentServerUrl}web-apps/vendor/monaco/libs/${libType}/api.js`;

    const onMount: OnMount = (_, monaco) => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${apiUrl}: ${response.status}`);
                }
                return response.text();
            })
            .then(libSource => {
                monaco.languages.typescript.javascriptDefaults.addExtraLib(libSource);
            })
            .catch(error => {
                console.error('Failed to load API library:', error);
            });
    };

    const handleRun = () => {
        window.dispatchEvent(new Event('playground-run'));
    };

    return (
        <div className={styles.editorContainer}>
            <button onClick={handleRun} className={styles.runButton}>
                <PlayIcon fill='currentColor'/>
            </button>
            <MonacoEditor
                key={`${editorType}-${scriptType}`}
                defaultLanguage="javascript"
                value={scriptValue}
                onChange={onChange}
                onMount={onMount}
                theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
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
        </div>
    )
}
