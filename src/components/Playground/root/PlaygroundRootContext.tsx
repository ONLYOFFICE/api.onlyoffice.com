import { Dispatch, createContext, useContext } from "react";
import { PlaygroundState, PlaygroundAction } from "./reducer";

export const PlaygroundRootContext = createContext<PlaygroundRootContext | undefined>(undefined);

export function usePlaygroundRootContext() {
    const value = useContext(PlaygroundRootContext);
    if (value === undefined) {
        throw new Error('PlaygroundRootContext is missing. Playground parts must be placed within <Playground.Root>.');
    }

    return value;
}

export type EditorType = 'word' | 'cell' | 'slide' | 'form' | 'pdf';
export type ScriptType = 'config' | 'office-js-api' | 'connector' | 'plugin' | 'builder';
export type ModeType = 'desktop' | 'mobile' | 'embedded';
export type FileType = 'blank' | 'sample';

export interface PlaygroundRootContext extends PlaygroundState {
    dispatch: Dispatch<PlaygroundAction>;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    defaultDocumentServerUrl: string;
    defaultDocumentServerSecret: string;
    templateUrl: string | null | undefined;
    hasInitialScript: boolean;
}