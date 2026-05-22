'use client';

import {useCallback} from 'react';
import MonacoEditor from '@monaco-editor/react';
import PlayIcon from '@site/static/icons/icon-play.svg';
import styles from './DocSpacePlayground.module.css';

interface DocSpaceEditorProps {
    value: string;
    onChange: (value: string) => void;
    onRun: () => void;
    theme: string;
}

export const DocSpaceEditor = ({value, onChange, onRun, theme}: DocSpaceEditorProps) => {
    const handleChange = useCallback((newValue: string | undefined) => {
        if (newValue !== undefined) onChange(newValue);
    }, [onChange]);

    return (
        <div className={styles.editorContainer}>
            <button onClick={onRun} className={styles.runButton} title="Run (Ctrl+Enter)">
                <PlayIcon fill="currentColor"/>
            </button>
            <MonacoEditor
                defaultLanguage="javascript"
                value={value}
                onChange={handleChange}
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
    );
};
