import { useCallback, useMemo, useRef } from "react";
import { usePlaygroundRootContext } from "../root/PlaygroundRootContext";
import { ConfigEditor } from "@site/src/components/ConfigEditor";
import { EditorPreview, type EditorPreviewRef } from "@site/src/components/EditorPreview";
import { SplitPane } from "@site/src/components/SplitPane";
import { FILE_CONFIGS, SAMPLE_FILE_CONFIGS } from "../defaultScripts";

export function PlaygroundConfigMode() {
    const {
        editorType,
        modeType,
        fileType,
        theme,
        documentServerUrl,
        documentServerSecret,
    } = usePlaygroundRootContext()

    const editorRef = useRef<EditorPreviewRef>(null);
    const latestConfigRef = useRef<Record<string, any> | null>(null);

    const configs = fileType === 'sample' ? SAMPLE_FILE_CONFIGS : FILE_CONFIGS;
    const fileConfig = configs[editorType] || configs.word;

    const defaultConfig = useMemo<Record<string, unknown>>(() => ({
        documentType: fileConfig.docType,
        type: modeType,
        document: {
            fileType: fileConfig.ext,
            key: `demo-document-key-${crypto.randomUUID().slice(0, 8)}`,
            title: `Example Document Title.${fileConfig.ext}`,
            url: fileConfig.url,
        },
        editorConfig: {
            callbackUrl: documentServerUrl + 'dummyCallback',
            customization: {
                anonymous: { request: false },
                uiTheme: theme === 'dark' ? 'default-dark' : 'default-light',
                features: { featuresTips: false },
            },
            lang: 'en',
        },
    }), [documentServerUrl, theme, fileConfig, modeType]);

    const handleApply = useCallback((config: Record<string, unknown>) => {
        latestConfigRef.current = config;
        editorRef.current?.initEditor(config);
    }, []);

    const handlePreviewReady = useCallback(() => {
        if (latestConfigRef.current) {
            editorRef.current?.initEditor(latestConfigRef.current);
        }
    }, []);

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
