import { useCallback, useMemo, useRef } from "react"
import { usePlaygroundRootContext } from "../root/PlaygroundRootContext"
import { ConfigEditor } from "@site/src/components/ConfigEditor"
import { EditorPreview, type EditorPreviewRef } from "@site/src/components/EditorPreview"
import { SplitPane } from "@site/src/components/SplitPane"
import { FILE_CONFIGS, SAMPLE_FILE_CONFIGS } from "../defaultScripts"

const withFreshKey = (config: Record<string, any>): Record<string, any> => ({
    ...config,
    document: {
        ...(config?.document ?? {}),
        key: crypto.randomUUID(),
    },
})

export function PlaygroundConfigMode() {
    const {
        editorType,
        previewType,
        documentType,
        theme,
        documentServerUrl,
        documentServerSecret,
    } = usePlaygroundRootContext()

    const editorRef = useRef<EditorPreviewRef>(null)
    const latestConfigRef = useRef<Record<string, any> | null>(null)

    const configs = documentType === 'sample' ? SAMPLE_FILE_CONFIGS : FILE_CONFIGS
    const fileConfig = configs[editorType] || configs.word

    const defaultConfig = useMemo<Record<string, unknown>>(() => ({
        documentType: fileConfig.docType,
        type: previewType,
        document: {
            fileType: fileConfig.ext,
            key: 'demo-document-key',
            title: `Example Document Title.${fileConfig.ext}`,
            url: fileConfig.url,
        },
        editorConfig: {
            callbackUrl: documentServerUrl + 'dummyCallback',
            customization: {
                uiTheme: theme === 'dark' ? 'default-dark' : 'default-light',
                features: { featuresTips: false },
            },
            lang: 'en',
        },
    }), [documentServerUrl, theme, fileConfig, previewType])

    const handleApply = useCallback((config: Record<string, unknown>) => {
        const c = withFreshKey(config)
        latestConfigRef.current = c
        editorRef.current?.initEditor(c)
    }, [])

    const handlePreviewReady = useCallback(() => {
        if (latestConfigRef.current) {
            editorRef.current?.initEditor(latestConfigRef.current)
        }
    }, [])

    return (
        <SplitPane
            first={
                <ConfigEditor
                    defaultConfig={defaultConfig}
                    onApply={handleApply}
                />
            }
            second={
                <EditorPreview
                    ref={editorRef}
                    documentServerUrl={documentServerUrl}
                    documentServerSecret={documentServerSecret}
                    onReady={handlePreviewReady}
                />
            }
        />
    )
}
