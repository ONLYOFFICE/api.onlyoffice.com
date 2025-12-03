import {
    EditorType,
    PlaygroundRootContext,
    PlaygroundTheme,
    PreviewType,
    ScriptType
} from "./PlaygroundRootContext"
import {ComponentProps, useMemo, useState} from "react";
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
    const initialTheme: PlaygroundTheme = (typeof window !== 'undefined' && document.querySelector('html')?.dataset.theme === 'dark') ? 'dark' : 'light';

    const [editorType, setEditorType] = useState<EditorType>(props.editorType)
    const [previewType, setPreviewType] = useState<PreviewType>(props.previewType)
    const [scriptType, setScriptType] = useState<ScriptType>(props.scriptType)
    const [theme, setTheme] = useState(initialTheme)
    const [scriptValue, setScriptValue] = useState(initialScript)
    const [isScriptModified, setIsScriptModified] = useState(false)

    const contextValue = useMemo(() => ({
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
        setIsScriptModified
    }), [editorType, previewType, scriptType, theme, scriptValue, isScriptModified])

    return (
        <PlaygroundRootContext.Provider value={contextValue}>
                {props.children}
        </PlaygroundRootContext.Provider>
    )
}

export namespace PlaygroundRoot {
    export type Props = PlaygroundRootProps
}