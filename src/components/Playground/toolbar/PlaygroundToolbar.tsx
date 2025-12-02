'use client'

import * as Select from "@radix-ui/react-select";

import * as React from 'react'
import { useState } from "react";
import {EditorType, ScriptType, usePlaygroundRootContext} from '../root/PlaygroundRootContext'
import styles from './PlaygroundToolbar.module.css'

export const PlaygroundToolbar = () => {
    const { editorType, setEditorType, previewType, setPreviewType, scriptType, setScriptType, isScriptModified, setIsScriptModified, theme, setTheme, getDefaultScript, setScriptValue } = usePlaygroundRootContext()

    const [showWarning, setShowWarning] = useState(false)
    const [pendingEditorType, setPendingEditorType] = useState<EditorType | null>(null)

    const handleEditorTypeChange = (value: string | string[] | null) => {
        const newEditorType = value as EditorType

        if (isScriptModified) {
            setPendingEditorType(newEditorType)
            setShowWarning(true)
        } else {
            setEditorType(newEditorType)
            setScriptValue(getDefaultScript())
        }
    }

    const handleConfirmChange = () => {
        if (pendingEditorType) {
            setEditorType(pendingEditorType)
            setTimeout(() => {
                const newScript = getDefaultScript()
                setScriptValue(newScript)
                setIsScriptModified(false)
            }, 0)
            setPendingEditorType(null)
        }
        setShowWarning(false)
    }

    const handleKeepScript = () => {
        if (pendingEditorType) {
            setEditorType(pendingEditorType)
            setPendingEditorType(null)
        }
        setShowWarning(false)
    }

    const handleCancelChange = () => {
        setPendingEditorType(null)
        setShowWarning(false)
    }

    const handleScriptTypeChange = (value: string | string[] | null) => {
        const newScriptType = value as ScriptType
        const prevScriptType = scriptType
        setScriptType(newScriptType)

        if (!isScriptModified && prevScriptType !== newScriptType) {
            setTimeout(() => {
                const newScript = getDefaultScript()
                setScriptValue(newScript)
                setIsScriptModified(false)
            }, 0)
        }
    }

    const handleRun = React.useCallback(() => {
        window.dispatchEvent(new Event('playground-run'))
    }, [])

    return (
        <div className={styles.Toolbar}>
            <div className={styles.ToolbarGroup}>
                <div className={styles.Label}>Editor:</div>
                <Select.Root value={editorType} onValueChange={handleEditorTypeChange}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content>
                            <Select.Viewport className={styles.SelectPopup}>
                                    <Select.Item value="word" className={styles.SelectOption}>
                                        <Select.ItemText>Word</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="cell" className={styles.SelectOption}>
                                        <Select.ItemText>Spreadsheet</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="slide" className={styles.SelectOption}>
                                        <Select.ItemText>Presentation</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="form" className={styles.SelectOption}>
                                        <Select.ItemText>Form</Select.ItemText>
                                    </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>

            <div className={styles.ToolbarGroup}>
                <div className={styles.Label}>Script:</div>
                <Select.Root value={scriptType} onValueChange={handleScriptTypeChange}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content>
                            <Select.Viewport className={styles.SelectPopup}>
                                    <Select.Item value="office-js-api" className={styles.SelectOption}>
                                        <Select.ItemText>Office JS API</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="connector" className={styles.SelectOption}>
                                        <Select.ItemText>Connector</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="plugin" className={styles.SelectOption}>
                                        <Select.ItemText>Plugin</Select.ItemText>
                                    </Select.Item>

                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>

            <div className={styles.ToolbarGroup}>
                <div className={styles.Label}>Preview:</div>
                <Select.Root value={previewType} onValueChange={(value) => setPreviewType(value as any)}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content>
                            <Select.Viewport className={styles.SelectPopup}>
                                    <Select.Item value="desktop" className={styles.SelectOption}>
                                        <Select.ItemText>Desktop</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="mobile" className={styles.SelectOption}>
                                        <Select.ItemText>Mobile</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="embedded" className={styles.SelectOption}>
                                        <Select.ItemText>Embedded</Select.ItemText>
                                    </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>

            <div className={styles.ToolbarGroup}>
                <div className={styles.Label}>Theme:</div>
                <Select.Root value={theme} onValueChange={(value) => setTheme(value)}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content>
                            <Select.Viewport className={styles.SelectPopup}>

                                    <Select.Item value="light" className={styles.SelectOption}>
                                        <Select.ItemText>Light</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="dark" className={styles.SelectOption}>
                                        <Select.ItemText>Dark</Select.ItemText>
                                    </Select.Item>

                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>

            <button onClick={handleRun} className={styles.RunButton}>
                ▶ Run
            </button>

            {showWarning && (
                <div className={styles.WarningDialog}>
                    <div className={styles.WarningContent}>
                        <p>
                            You have modified the script. Do you want to replace it with the default script for the new
                            editor type?
                        </p>
                        <div className={styles.WarningActions}>
                            <button onClick={handleConfirmChange} className={styles.ConfirmButton}>
                                Replace Script
                            </button>
                            <button onClick={handleKeepScript} className={styles.KeepButton}>
                                Keep Script
                            </button>
                            <button onClick={handleCancelChange} className={styles.CancelButton}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
