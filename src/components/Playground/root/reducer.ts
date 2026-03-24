import {EditorType, PreviewType, ScriptType, DocumentType} from "./PlaygroundRootContext";
import {DEFAULT_SCRIPTS} from "../defaultScripts";

export interface PlaygroundState {
    editorType: EditorType
    previewType: PreviewType
    scriptType: ScriptType
    scriptValue: string
    isScriptModified: boolean
    documentType: DocumentType
}

export type PlaygroundAction =
    | { type: 'SET_EDITOR_TYPE'; payload: EditorType; replace?: boolean }
    | { type: 'SET_PREVIEW_TYPE'; payload: PreviewType }
    | { type: 'SET_SCRIPT_TYPE'; payload: ScriptType }
    | { type: 'SET_SCRIPT_VALUE'; payload: string }
    | { type: 'RESET_SCRIPT' }
    | { type: 'SET_DOCUMENT_TYPE'; payload: DocumentType }

export function playgroundReducer(state: PlaygroundState, action: PlaygroundAction): PlaygroundState {
    switch (action.type) {
        case 'SET_EDITOR_TYPE': {
            if (action.payload === state.editorType) return state
            const scriptValue = action.replace
                ? DEFAULT_SCRIPTS[action.payload]?.[state.scriptType] ?? state.scriptValue
                : state.scriptValue
            return {
                ...state,
                editorType: action.payload,
                scriptValue,
                isScriptModified: action.replace ? false : state.isScriptModified,
            }
        }
        case 'SET_SCRIPT_TYPE': {
            if (action.payload === state.scriptType) return state
            const scriptValue = state.isScriptModified
                ? state.scriptValue
                : DEFAULT_SCRIPTS[state.editorType]?.[action.payload] ?? state.scriptValue
            return {...state, scriptType: action.payload, scriptValue}
        }
        case 'SET_PREVIEW_TYPE':
            return {...state, previewType: action.payload}
        case 'SET_SCRIPT_VALUE':
            return {...state, scriptValue: action.payload, isScriptModified: true}
        case 'RESET_SCRIPT':
            return {
                ...state,
                scriptValue: DEFAULT_SCRIPTS[state.editorType]?.[state.scriptType] ?? '',
                isScriptModified: false,
            }
        case 'SET_DOCUMENT_TYPE':
            return {...state, documentType: action.payload}
        default:
            return state
    }
}