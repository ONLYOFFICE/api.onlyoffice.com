import {SetStateAction, Dispatch, createContext, useContext} from "react";

export const PlaygroundRootContext = createContext<PlaygroundRootContext | undefined>(undefined)

export function usePlaygroundRootContext(): PlaygroundRootContext {
    const value = useContext(PlaygroundRootContext)
    if (value === undefined) {
        throw new Error('PlaygroundRootContext is missing. Playground parts must be placed within <Playground.Root>.')
    }

    return value
}

export type EditorType = 'word' | 'cell' | 'slide' | 'form'
export type ScriptType = 'office-js-api' | 'connector' | 'plugin'
export type PreviewType = 'desktop' | 'mobile' | 'embedded'

export interface EditorAPIConfig {
    editorType: EditorType
    previewType: PreviewType
    scriptType: ScriptType
}

export type PlaygroundTheme = 'light' | 'dark'

export interface PlaygroundRootContext {
    editorApiConfig: EditorAPIConfig
    editorType: EditorType
    setEditorType: Dispatch<SetStateAction<EditorType>>
    previewType: PreviewType
    setPreviewType: Dispatch<SetStateAction<PreviewType>>
    scriptType: ScriptType
    setScriptType: Dispatch<SetStateAction<ScriptType>>
    theme: PlaygroundTheme
    setTheme: Dispatch<SetStateAction<PlaygroundTheme>>
    scriptValue: string
    setScriptValue: Dispatch<SetStateAction<string>>
    isScriptModified: boolean
    setIsScriptModified: Dispatch<SetStateAction<boolean>>
    getDefaultScript: () => string
}
