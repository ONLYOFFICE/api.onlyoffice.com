import {EditorAPIConfig, EditorType, PlaygroundRootContext, PreviewType, ScriptType} from "./PlaygroundRootContext"
import {ComponentProps, PropsWithChildren, useCallback, useMemo, useState} from "react";
import {DEFAULT_SCRIPTS} from "@site/src/components/Playground/defaultScripts";

export type PlaygroundRootProps = ComponentProps<'div'> & {
    editorType?: EditorType
    previewType?: PreviewType
    scriptType?: ScriptType
}

const defaultProps = {
    editorType: 'word',
    previewType: 'desktop',
    scriptType: 'connector'
} satisfies PlaygroundRootProps

export const PlaygroundRoot = (incomingProps: PlaygroundRootProps) => {
    const props = { ...defaultProps, ...incomingProps };

    const initialScript = DEFAULT_SCRIPTS[props.editorType][props.scriptType];
    const initialTheme = (typeof window !== 'undefined' && document.querySelector('html').dataset.theme === 'dark') ? 'dark' : 'light';

    const [editorType, setEditorType] = useState<EditorType>(props.editorType)
    const [previewType, setPreviewType] = useState<PreviewType>(props.previewType)
    const [scriptType, setScriptType] = useState<ScriptType>(props.scriptType)
    const [theme, setTheme] = useState(initialTheme)
    const [scriptValue, setScriptValue] = useState(initialScript)
    const [isScriptModified, setIsScriptModified] = useState(false)

    const editorApiConfig = useMemo<EditorAPIConfig>(() => ({
        editorType,
        previewType,
        scriptType
    }), [editorType, previewType, scriptType])

    const getDefaultScript = useCallback(() => {
        return DEFAULT_SCRIPTS[editorType][scriptType]
    }, [editorType, scriptType])

    const contextValue = useMemo(() => ({
        editorApiConfig,
        editorType,
        setEditorType,
        previewType,
        setPreviewType,
        scriptType,
        setScriptType,
        theme,
        setTheme,
        scriptValue,
        setScriptValue,
        isScriptModified,
        setIsScriptModified,
        getDefaultScript
    }), [editorApiConfig, editorType, previewType, scriptType, theme, scriptValue, isScriptModified, getDefaultScript])

    return (
        <PlaygroundRootContext.Provider value={contextValue}>
                {props.children}
        </PlaygroundRootContext.Provider>
    )
}

export namespace PlaygroundRoot {
    export type Props = PlaygroundRootProps
}