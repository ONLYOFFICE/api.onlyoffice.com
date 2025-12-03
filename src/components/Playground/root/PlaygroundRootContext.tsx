import {SetStateAction, Dispatch, createContext, useContext} from "react";

export const PlaygroundRootContext = createContext<PlaygroundRootContext | undefined>(undefined)

export function usePlaygroundRootContext() {
    const value = useContext(PlaygroundRootContext)
    if (value === undefined) {
        throw new Error('PlaygroundRootContext is missing. Playground parts must be placed within <Playground.Root>.')
    }

    return value
}

export type EditorType = 'word' | 'cell' | 'slide' | 'form'
export type ScriptType = 'office-js-api' | 'connector' | 'plugin'
export type PreviewType = 'desktop' | 'mobile' | 'embedded'

export type PlaygroundTheme = 'light' | 'dark'

export interface PlaygroundRootContext {
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
}
