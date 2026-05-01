import {
    DocumentType,
    EditorType,
    PlaygroundRootContext,
    PreviewType,
    ScriptType
} from "./PlaygroundRootContext";
import { ComponentProps, useMemo, useReducer } from "react";
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
    previewType?: PreviewType
    scriptType?: ScriptType
    initialScript?: string
    documentServerUrl?: string
    documentServerSecret?: string
    templateUrl?: string | null
    documentType?: DocumentType
}

export const PlaygroundRoot = ({
    editorType = 'word',
    previewType = 'desktop',
    scriptType = 'connector',
    initialScript: initialScriptProp,
    documentServerUrl: documentServerUrlProp,
    documentServerSecret: documentServerSecretProp,
    templateUrl,
    documentType: documentTypeProp = 'sample',
    ...props
}: PlaygroundRootProps) => {
    const { colorMode, setColorMode } = useColorMode();
    const { siteConfig: { customFields } } = useDocusaurusContext();

    const defaultDocumentServerUrl = documentServerUrlProp ?? (customFields.documentServer as string);
    const defaultDocumentServerSecret = documentServerSecretProp ?? (customFields.documentServerSecret as string);

    const savedConfig = useMemo(() => loadServerConfig(), []);

    const [state, dispatch] = useReducer(playgroundReducer, {
        editorType,
        previewType,
        scriptType,
        scriptValue: initialScriptProp ?? (scriptType !== 'config' ? getDefaultScript(editorType, previewType, scriptType) : ''),
        isScriptModified: false,
        documentType: documentTypeProp,
        documentServerUrl: savedConfig?.url || defaultDocumentServerUrl,
        documentServerSecret: savedConfig?.secret || defaultDocumentServerSecret,
    } satisfies PlaygroundState);

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