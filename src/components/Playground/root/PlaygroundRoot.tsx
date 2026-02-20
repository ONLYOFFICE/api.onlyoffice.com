import {
    EditorType,
    PlaygroundRootContext,
    PreviewType,
    ScriptType
} from "./PlaygroundRootContext"
import {ComponentProps, useMemo, useReducer} from "react";
import {DEFAULT_SCRIPTS} from "@site/src/components/Playground/defaultScripts";
import {useColorMode} from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {playgroundReducer, PlaygroundState} from "@site/src/components/Playground/root/reducer";

export type PlaygroundRootProps = ComponentProps<'div'> & {
    editorType?: EditorType
    previewType?: PreviewType
    scriptType?: ScriptType
    initialScript?: string
    documentServerUrl?: string
    documentServerSecret?: string
    templateUrl?: string | null
}

export const PlaygroundRoot = ({
    editorType = 'word',
    previewType = 'desktop',
    scriptType = 'connector',
    initialScript: initialScriptProp,
    documentServerUrl: documentServerUrlProp,
    documentServerSecret: documentServerSecretProp,
    templateUrl,
    ...props
}: PlaygroundRootProps) => {
    const { colorMode, setColorMode } = useColorMode()
    const { siteConfig: { customFields } } = useDocusaurusContext()

    const documentServerUrl = documentServerUrlProp ?? (customFields.documentServer as string)
    const documentServerSecret = documentServerSecretProp ?? (customFields.documentServerSecret as string)

    const [state, dispatch] = useReducer(playgroundReducer, {
        editorType,
        previewType,
        scriptType,
        scriptValue: initialScriptProp ?? DEFAULT_SCRIPTS[editorType][scriptType],
        isScriptModified: false,
    } satisfies PlaygroundState)

    const contextValue = useMemo<PlaygroundRootContext>(() => ({
        ...state,
        dispatch,
        theme: colorMode,
        setTheme: setColorMode,
        documentServerUrl,
        documentServerSecret,
        templateUrl,
        hasInitialScript: !!initialScriptProp,
    }), [state, colorMode, documentServerUrl, documentServerSecret, templateUrl, initialScriptProp])

    return <PlaygroundRootContext.Provider value={contextValue} {...props}/>
}

export namespace PlaygroundRoot {
    export type Props = PlaygroundRootProps
}