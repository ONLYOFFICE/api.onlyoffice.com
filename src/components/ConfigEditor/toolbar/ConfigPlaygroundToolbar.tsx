import * as Select from "@radix-ui/react-select"
import { useCallback, useRef, useState } from "react"
import type { EditorType, PreviewType, DocumentType } from "../../Playground/root/PlaygroundRootContext"
import styles from '../../Playground/toolbar/PlaygroundToolbar.module.css'

export const STORAGE_KEY = 'playground_server_config'

const normalizeServerUrl = (url: string): string =>
    url.endsWith('/') ? url : `${url}/`

export interface ConfigPlaygroundToolbarProps {
    editorType: EditorType
    previewType: PreviewType
    documentType: DocumentType
    theme: 'light' | 'dark'
    documentServerUrl: string
    documentServerSecret: string
    defaultDocumentServerUrl: string
    defaultDocumentServerSecret: string
    onEditorTypeChange: (value: EditorType) => void
    onPreviewTypeChange: (value: PreviewType) => void
    onDocumentTypeChange: (value: DocumentType) => void
    onThemeChange: (value: 'light' | 'dark') => void
    onServerConfigChange: (url: string, secret: string) => void
}

export function ConfigPlaygroundToolbar({
    editorType,
    previewType,
    documentType,
    theme,
    documentServerUrl,
    documentServerSecret,
    defaultDocumentServerUrl,
    defaultDocumentServerSecret,
    onEditorTypeChange,
    onPreviewTypeChange,
    onDocumentTypeChange,
    onThemeChange,
    onServerConfigChange,
}: ConfigPlaygroundToolbarProps) {
    const [settingsOpen, setSettingsOpen] = useState(false)
    const [serverUrl, setServerUrl] = useState(documentServerUrl)
    const [serverSecret, setServerSecret] = useState(documentServerSecret)
    const secretInputRef = useRef<HTMLInputElement>(null)

    const isCustomServer = documentServerUrl !== defaultDocumentServerUrl || documentServerSecret !== defaultDocumentServerSecret

    const handleOpenSettings = useCallback(() => {
        setServerUrl(documentServerUrl)
        setServerSecret(documentServerSecret)
        setSettingsOpen(true)
    }, [documentServerUrl, documentServerSecret])

    const handleSaveSettings = useCallback(() => {
        const trimmedUrl = serverUrl.trim()
        const url = trimmedUrl ? normalizeServerUrl(trimmedUrl) : defaultDocumentServerUrl
        const secret = serverSecret.trim() || defaultDocumentServerSecret
        onServerConfigChange(url, secret)
        try {
            if (url !== defaultDocumentServerUrl || secret !== defaultDocumentServerSecret) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify({ url, secret }))
            } else {
                localStorage.removeItem(STORAGE_KEY)
            }
        } catch {}
        setSettingsOpen(false)
    }, [serverUrl, serverSecret, defaultDocumentServerUrl, defaultDocumentServerSecret, onServerConfigChange])

    const handleResetSettings = useCallback(() => {
        setServerUrl(defaultDocumentServerUrl)
        setServerSecret(defaultDocumentServerSecret)
    }, [defaultDocumentServerUrl, defaultDocumentServerSecret])

    return (
        <div className={styles.Toolbar}>
            <div className={styles.ToolbarGroup}>
                <div className={styles.Label}>Editor:</div>
                <Select.Root value={editorType} onValueChange={v => onEditorTypeChange(v as EditorType)}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                        <Select.Icon asChild>
                            <div className={styles.SelectIcon}/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className={styles.SelectContent} position='popper'>
                            <Select.Viewport className={styles.SelectPopup}>
                                <Select.Item value="word" className={styles.SelectOption}>
                                    <Select.ItemText>Text Document</Select.ItemText>
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
                                <Select.Item value="pdf" className={styles.SelectOption}>
                                    <Select.ItemText>PDF</Select.ItemText>
                                </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>

            <div className={styles.ToolbarGroup}>
                <div className={styles.Label}>Mode:</div>
                <Select.Root value={previewType} onValueChange={v => onPreviewTypeChange(v as PreviewType)}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                        <Select.Icon asChild>
                            <div className={styles.SelectIcon}/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className={styles.SelectContent} position='popper'>
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
                <div className={styles.Label}>File:</div>
                <Select.Root value={documentType} onValueChange={v => onDocumentTypeChange(v as DocumentType)}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                        <Select.Icon asChild>
                            <div className={styles.SelectIcon}/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className={styles.SelectContent} position='popper'>
                            <Select.Viewport className={styles.SelectPopup}>
                                <Select.Item value="blank" className={styles.SelectOption}>
                                    <Select.ItemText>Blank</Select.ItemText>
                                </Select.Item>
                                <Select.Item value="sample" className={styles.SelectOption}>
                                    <Select.ItemText>Sample</Select.ItemText>
                                </Select.Item>
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>

            <div className={styles.ToolbarGroup}>
                <button
                    className={`${styles.SettingsButton} ${isCustomServer ? styles.SettingsButtonActive : ''}`}
                    onClick={handleOpenSettings}
                    title={isCustomServer ? "Settings (modified)" : "Settings"}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
                    </svg>
                </button>
            </div>

            <div className={`${styles.ToolbarGroup} ${styles.ToolbarGroupRight}`}>
                <div className={styles.Label}>Theme:</div>
                <Select.Root value={theme} onValueChange={v => onThemeChange(v as 'light' | 'dark')}>
                    <Select.Trigger className={styles.SelectTrigger}>
                        <Select.Value />
                        <Select.Icon asChild>
                            <div className={styles.SelectIcon}/>
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className={styles.SelectContent} position='popper'>
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

            {settingsOpen && (
                <>
                    <div className={styles.DialogOverlay} onClick={() => setSettingsOpen(false)} />
                    <div className={styles.DialogContent} style={{ maxWidth: 480 }} onKeyDown={(e) => { if (e.key === 'Escape') setSettingsOpen(false) }}>
                        <div className={styles.DialogTitle}>Document Server Settings</div>
                        <p className={styles.DialogDescription}>
                            Connect to your own ONLYOFFICE Document Server to test the API with your instance.
                        </p>
                        <div className={styles.SettingsForm}>
                            <label className={styles.SettingsLabel}>
                                Server URL
                                <input
                                    className={styles.SettingsInput}
                                    type="url"
                                    value={serverUrl}
                                    onChange={(e) => setServerUrl(e.target.value)}
                                    placeholder={defaultDocumentServerUrl}
                                    autoFocus
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') secretInputRef.current?.focus()
                                    }}
                                />
                            </label>
                            <label className={styles.SettingsLabel}>
                                JWT Secret
                                <input
                                    ref={secretInputRef}
                                    className={styles.SettingsInput}
                                    type="text"
                                    value={serverSecret}
                                    onChange={(e) => setServerSecret(e.target.value)}
                                    placeholder={defaultDocumentServerSecret}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleSaveSettings()
                                    }}
                                />
                            </label>
                        </div>
                        <div className={styles.DialogActions}>
                            <button onClick={handleResetSettings} className={styles.CancelButton}>
                                Reset to Default
                            </button>
                            <button onClick={() => setSettingsOpen(false)} className={styles.CancelButton}>
                                Cancel
                            </button>
                            <button onClick={handleSaveSettings} className={styles.ConfirmButton}>
                                Apply
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
