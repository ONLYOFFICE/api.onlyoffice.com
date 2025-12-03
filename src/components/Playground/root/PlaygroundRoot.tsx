import {
    EditorType,
    PlaygroundRootContext,
    PreviewType,
    ScriptType
} from "./PlaygroundRootContext"
import {ComponentProps, useEffect, useMemo, useState} from "react";
import {DEFAULT_SCRIPTS} from "@site/src/components/Playground/defaultScripts";
import {useColorMode} from "@docusaurus/theme-common";

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

    const { colorMode, setColorMode } = useColorMode()

    const initialScript = DEFAULT_SCRIPTS[props.editorType][props.scriptType];

    const [editorType, setEditorType] = useState<EditorType>(props.editorType)
    const [previewType, setPreviewType] = useState<PreviewType>(props.previewType)
    const [scriptType, setScriptType] = useState<ScriptType>(props.scriptType)
    const [scriptValue, setScriptValue] = useState(initialScript)
    const [isScriptModified, setIsScriptModified] = useState(false)

    const contextValue = useMemo(() => ({
        editorType,
        setEditorType,
        previewType,
        setPreviewType,
        scriptType,
        setScriptType,
        theme: colorMode,
        setTheme: setColorMode,
        scriptValue,
        setScriptValue,
        isScriptModified,
        setIsScriptModified
    }), [editorType, previewType, scriptType, colorMode, scriptValue, isScriptModified])

    useEffect(() => {
        if (!isScriptModified) {
            const newScript = DEFAULT_SCRIPTS[editorType]?.[scriptType];
            if (newScript) {
                setScriptValue(newScript);
            }
        }
    }, [editorType, scriptType, isScriptModified]);

    return (
        <PlaygroundRootContext.Provider value={contextValue}>
            {props.children}
        </PlaygroundRootContext.Provider>
    )
}

export namespace PlaygroundRoot {
    export type Props = PlaygroundRootProps
}