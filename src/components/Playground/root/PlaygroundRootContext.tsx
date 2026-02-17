import { Dispatch, createContext, useContext } from "react";
import { PlaygroundState, PlaygroundAction } from "./reducer";

export const PlaygroundRootContext = createContext<PlaygroundRootContext | undefined>(undefined)

export function usePlaygroundRootContext() {
    const value = useContext(PlaygroundRootContext)
    if (value === undefined) {
        throw new Error('PlaygroundRootContext is missing. Playground parts must be placed within <Playground.Root>.')
    }

    return value
}

export type EditorType = 'word' | 'cell' | 'slide' | 'form'
export type ScriptType = 'office-js-api' | 'connector' | 'plugin' | 'builder'
export type PreviewType = 'desktop' | 'mobile' | 'embedded'

export interface PlaygroundRootContext extends PlaygroundState {
    dispatch: Dispatch<PlaygroundAction>
    theme: 'light' | 'dark'
    setTheme: (theme: 'light' | 'dark') => void
    documentServerUrl: string
    documentServerSecret: string
    templateUrl: string | null | undefined
    hasInitialScript: boolean
}