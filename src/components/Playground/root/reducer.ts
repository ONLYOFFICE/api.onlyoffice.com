import {EditorType, ModeType, ScriptType, FileType} from "./PlaygroundRootContext";
import {getDefaultScript} from "../defaultScripts";

export interface PlaygroundState {
    editorType: EditorType;
    modeType: ModeType;
    scriptType: ScriptType;
    scriptValue: string;
    isScriptModified: boolean;
    isEditorReady: boolean;
    fileType: FileType;
    documentServerUrl: string;
    documentServerSecret: string;
}

export type PlaygroundAction =
    | { type: 'SET_EDITOR_TYPE'; payload: EditorType; replace?: boolean }
    | { type: 'SET_MODE_TYPE'; payload: ModeType }
    | { type: 'SET_SCRIPT_TYPE'; payload: ScriptType; replace?: boolean }
    | { type: 'SET_SCRIPT_VALUE'; payload: string }
    | { type: 'RESET_SCRIPT' }
    | { type: 'SET_FILE_TYPE'; payload: FileType }
    | { type: 'SET_SERVER_CONFIG'; payload: { documentServerUrl: string; documentServerSecret: string } }
    | { type: 'SET_EDITOR_READY'; payload: boolean };

function isCodeScriptType(t: ScriptType): t is Exclude<ScriptType, 'config'> {
    return t !== 'config';
}

export function playgroundReducer(state: PlaygroundState, action: PlaygroundAction): PlaygroundState {
    switch (action.type) {
        case 'SET_EDITOR_TYPE': {
            if (action.payload === state.editorType) return state;
            const scriptValue = action.replace && isCodeScriptType(state.scriptType)
                ? getDefaultScript(action.payload, state.modeType, state.scriptType)
                : state.scriptValue;
            return {
                ...state,
                editorType: action.payload,
                scriptValue,
                isScriptModified: action.replace ? false : state.isScriptModified,
            };
        }
        case 'SET_SCRIPT_TYPE': {
            if (action.payload === state.scriptType) return state;
            if (!isCodeScriptType(action.payload)) {
                return {...state, scriptType: action.payload};
            }
            const scriptValue = action.replace || !(state.isScriptModified && isCodeScriptType(state.scriptType))
                ? getDefaultScript(state.editorType, state.modeType, action.payload)
                : state.scriptValue;
            return {
                ...state,
                scriptType: action.payload,
                scriptValue,
                isScriptModified: action.replace ? false : state.isScriptModified,
            };
        }
        case 'SET_MODE_TYPE': {
            if (action.payload === state.modeType) return state;
            if (!isCodeScriptType(state.scriptType)) {
                return {...state, modeType: action.payload};
            }
            const scriptValue = state.isScriptModified
                ? state.scriptValue
                : getDefaultScript(state.editorType, action.payload, state.scriptType);
            return {...state, modeType: action.payload, scriptValue};
        }
        case 'SET_SCRIPT_VALUE':
            return {...state, scriptValue: action.payload, isScriptModified: true};
        case 'RESET_SCRIPT': {
            if (!isCodeScriptType(state.scriptType)) return state;
            return {
                ...state,
                scriptValue: getDefaultScript(state.editorType, state.modeType, state.scriptType),
                isScriptModified: false,
            };
        }
        case 'SET_FILE_TYPE':
            return {...state, fileType: action.payload};
        case 'SET_SERVER_CONFIG':
            return {
                ...state,
                documentServerUrl: action.payload.documentServerUrl,
                documentServerSecret: action.payload.documentServerSecret,
            };
        case 'SET_EDITOR_READY':
            return {...state, isEditorReady: action.payload};
        default:
            return state;
    }
}