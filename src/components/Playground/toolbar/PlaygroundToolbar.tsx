'use client'

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Select from "@radix-ui/react-select";

import * as React from 'react'
import {useCallback, useState} from "react";
import {EditorType, PreviewType, ScriptType, usePlaygroundRootContext} from '../root/PlaygroundRootContext'
import styles from './PlaygroundToolbar.module.css'
import {DEFAULT_SCRIPTS} from "@site/src/components/Playground/defaultScripts";

export const PlaygroundToolbar = () => {
    const { editorType, setEditorType, previewType, setPreviewType, scriptType, setScriptType, isScriptModified, setIsScriptModified, theme, setTheme, setScriptValue } = usePlaygroundRootContext()

    const [dialogOpen, setDialogOpen] = useState(false)
    const [pendingEditorType, setPendingEditorType] = useState<EditorType | null>(null) // todo: better handle script+editor type

    const handleEditorTypeChange = useCallback((value: string) => {
        const newEditorType = value as EditorType

        if (isScriptModified) {
            setPendingEditorType(newEditorType)
            setDialogOpen(true)
        } else {
            setEditorType(newEditorType)
            setScriptValue(DEFAULT_SCRIPTS[newEditorType][scriptType])
        }
    }, [isScriptModified, scriptType, setEditorType, setScriptValue])

    const handleConfirmChange = useCallback(() => {
        if (pendingEditorType) {
            setEditorType(pendingEditorType)
            setScriptValue(DEFAULT_SCRIPTS[pendingEditorType][scriptType])
            setIsScriptModified(false)
            setPendingEditorType(null)
        }
        setDialogOpen(false)
    }, [pendingEditorType, scriptType, setEditorType, setScriptValue, setIsScriptModified])

    const handleKeepScript = useCallback(() => {
        if (pendingEditorType) {
            setEditorType(pendingEditorType)
            setPendingEditorType(null)
        }
        setDialogOpen(false)
    }, [pendingEditorType, setEditorType])

    const handleCancelChange = useCallback(() => {
        setPendingEditorType(null)
        setDialogOpen(false)
    }, [])

    const handleScriptTypeChange = useCallback((value: string) => {
        const newScriptType = value as ScriptType

        if (newScriptType === scriptType) {
            return
        }

        setScriptType(newScriptType)

        if (!isScriptModified) {
            setScriptValue(DEFAULT_SCRIPTS[editorType][newScriptType])
        }
    }, [scriptType, isScriptModified, editorType, setScriptType, setScriptValue])


    const handleRun = useCallback(() => {
        window.dispatchEvent(new Event('playground-run'))
    }, [])

    return (
        <div className={styles.Toolbar}>
            <div className={styles.ToolbarGroup}>
                <div className={styles.Label}>Editor:</div>
                <Select.Root value={editorType} onValueChange={handleEditorTypeChange}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                        <Select.Icon asChild>
                            <div className={styles.SelectIcon}/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className={styles.SelectContent}>
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
                        <Select.Icon asChild>
                            <div className={styles.SelectIcon}/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className={styles.SelectContent}>
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
                <Select.Root value={previewType} onValueChange={(value) => setPreviewType(value as PreviewType)}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                        <Select.Icon asChild>
                            <div className={styles.SelectIcon}/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className={styles.SelectContent}>
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
                <Select.Root value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark')}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                        <Select.Icon asChild>
                            <div className={styles.SelectIcon}/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className={styles.SelectContent}>
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
                Run
            </button>

            <AlertDialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialog.Portal>
                    <AlertDialog.Overlay className={styles.DialogOverlay} />
                    <AlertDialog.Content className={styles.DialogContent}>
                        <AlertDialog.Title className={styles.DialogTitle}>
                            Script Modified
                        </AlertDialog.Title>
                        <AlertDialog.Description className={styles.DialogDescription}>
                            You have modified the script. Do you want to replace it with the default
                            script for the new editor type?
                        </AlertDialog.Description>
                        <div className={styles.DialogActions}>
                            <AlertDialog.Action asChild>
                                <button onClick={handleConfirmChange} className={styles.ConfirmButton}>
                                    Replace Script
                                </button>
                            </AlertDialog.Action>
                            <AlertDialog.Action asChild>
                                <button onClick={handleKeepScript} className={styles.KeepButton}>
                                    Keep Script
                                </button>
                            </AlertDialog.Action>
                            <AlertDialog.Cancel asChild>
                                <button onClick={handleCancelChange} className={styles.CancelButton}>
                                    Cancel
                                </button>
                            </AlertDialog.Cancel>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Portal>
            </AlertDialog.Root>
        </div>
    )
}
