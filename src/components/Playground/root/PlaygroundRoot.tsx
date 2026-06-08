import {
    FileType,
    EditorType,
    PlaygroundRootContext,
    ModeType,
    ScriptType
} from "./PlaygroundRootContext";
import { ComponentProps, useEffect, useMemo, useReducer } from "react";
import { getDefaultScript } from "@site/src/components/Playground/defaultScripts";
import {useColorMode} from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {playgroundReducer, PlaygroundState} from "@site/src/components/Playground/root/reducer";

const STORAGE_KEY = 'playground_server_config';

function loadServerConfig(): { url?: string; secret?: string } | null {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored);
    } catch {}
    return null;
}

export type PlaygroundRootProps = ComponentProps<'div'> & {
    editorType?: EditorType
    modeType?: ModeType
    scriptType?: ScriptType
    initialScript?: string
    documentServerUrl?: string
    documentServerSecret?: string
    templateUrl?: string | null
    fileType?: FileType
}

export const PlaygroundRoot = ({
    editorType = 'word',
    modeType = 'desktop',
    scriptType = 'connector',
    initialScript: initialScriptProp,
    documentServerUrl: documentServerUrlProp,
    documentServerSecret: documentServerSecretProp,
    templateUrl,
    fileType: fileTypeProp = 'sample',
    ...props
}: PlaygroundRootProps) => {
    const { colorMode, setColorMode } = useColorMode();
    const { siteConfig: { customFields } } = useDocusaurusContext();

    const defaultDocumentServerUrl = documentServerUrlProp ?? (customFields.documentServer as string);
    const defaultDocumentServerSecret = documentServerSecretProp ?? (customFields.documentServerSecret as string);

    const savedConfig = useMemo(() => loadServerConfig(), []);

    const [state, dispatch] = useReducer(playgroundReducer, {
        editorType,
        modeType,
        scriptType,
        scriptValue: initialScriptProp ?? (scriptType !== 'config' ? getDefaultScript(editorType, modeType, scriptType) : ''),
        isScriptModified: false,
        isEditorReady: false,
        fileType: fileTypeProp,
        documentServerUrl: savedConfig?.url || defaultDocumentServerUrl,
        documentServerSecret: savedConfig?.secret || defaultDocumentServerSecret,
    } satisfies PlaygroundState);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.set('editor', state.editorType);
        params.set('script', state.scriptType);
        params.set('mode', state.modeType);
        params.set('file', state.fileType);
        history.replaceState(null, '', `?${params}`);
    }, [state.editorType, state.scriptType, state.modeType, state.fileType]);

    const contextValue = useMemo<PlaygroundRootContext>(() => ({
        ...state,
        dispatch,
        theme: colorMode,
        setTheme: setColorMode,
        defaultDocumentServerUrl,
        defaultDocumentServerSecret,
        templateUrl,
        hasInitialScript: !!initialScriptProp,
    }), [state, colorMode, defaultDocumentServerUrl, defaultDocumentServerSecret, templateUrl, initialScriptProp]);

    return <PlaygroundRootContext.Provider value={contextValue} {...props}/>;
}

export namespace PlaygroundRoot {
    export type Props = PlaygroundRootProps
}