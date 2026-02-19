import {
    EditorType,
    PlaygroundRootContext,
    PreviewType,
    ScriptType
} from "./PlaygroundRootContext"
import {ComponentProps, useEffect, useMemo, useState} from "react";
import {DEFAULT_SCRIPTS} from "@site/src/components/Playground/defaultScripts";
import {useColorMode} from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export type PlaygroundRootProps = ComponentProps<'div'> & {
    editorType?: EditorType
    previewType?: PreviewType
    scriptType?: ScriptType
    documentServerUrl?: string
    documentServerSecret?: string
}

export const PlaygroundRoot = ({ editorType = 'word', previewType = 'desktop', scriptType = 'connector', documentServerUrl, documentServerSecret, ...props }: PlaygroundRootProps) => {
    const { colorMode, setColorMode } = useColorMode()

    const initialScript = DEFAULT_SCRIPTS[editorType][scriptType];

    if (!documentServerUrl || !documentServerSecret) {
        const { siteConfig: { customFields } } = useDocusaurusContext()
        if (!documentServerUrl) {
            documentServerUrl = customFields.documentServer as string;
        }

        if (!documentServerSecret) {
            documentServerSecret = customFields.documentServerSecret as string;
        }
    }

    const [editorTypeState, setEditorType] = useState<EditorType>(editorType)
    const [previewTypeState, setPreviewType] = useState<PreviewType>(previewType)
    const [scriptTypeState, setScriptType] = useState<ScriptType>(scriptType)
    const [scriptValue, setScriptValue] = useState(initialScript)
    const [isScriptModified, setIsScriptModified] = useState(false)

    const contextValue = useMemo(() => ({
        editorType: editorTypeState,
        setEditorType,
        previewType: previewTypeState,
        setPreviewType,
        scriptType: scriptTypeState,
        setScriptType,
        theme: colorMode,
        setTheme: setColorMode,
        scriptValue,
        setScriptValue,
        isScriptModified,
        setIsScriptModified,
        documentServerUrl,
        documentServerSecret
    }), [editorTypeState, previewTypeState, scriptTypeState, colorMode, documentServerUrl, documentServerSecret, scriptValue, isScriptModified])

    useEffect(() => {
        if (!isScriptModified) {
            const newScript = DEFAULT_SCRIPTS[editorTypeState]?.[scriptTypeState];
            if (newScript) {
                setScriptValue(newScript);
            }
        }
    }, [editorTypeState, scriptTypeState, isScriptModified]);

    return (
        <PlaygroundRootContext.Provider value={contextValue} {...props}/>
    )
}

export namespace PlaygroundRoot {
    export type Props = PlaygroundRootProps
}