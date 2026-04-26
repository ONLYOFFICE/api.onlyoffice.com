import type { EditorType, PreviewType, DocumentType } from "@site/src/components/Playground/root/PlaygroundRootContext";
import { ColorModeProvider } from "@docusaurus/theme-common/internal";
import Head from "@docusaurus/Head";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { EditorPreview, EditorPreviewRef } from "@site/src/components/EditorPreview";
import { SplitPane } from "@site/src/components/SplitPane";
import styles from './config-playground.module.css';
import { useCallback, useMemo, useRef, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { useLocation } from "react-router-dom";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { getSearchParams } from "@site/src/utils/url";
import { ConfigEditor } from "@site/src/components/ConfigEditor";
import { ConfigPlaygroundToolbar, STORAGE_KEY } from "@site/src/components/ConfigEditor/toolbar/ConfigPlaygroundToolbar";

type DocumentConfig = { fileType: string; docType: string; url: string; title: string }

const BLANK_CONFIGS: Record<EditorType, DocumentConfig> = {
    word: { fileType: 'docx', docType: 'word', url: 'https://static.onlyoffice.com/assets/docs/samples/new.docx', title: 'Example Document Title.docx' },
    cell: { fileType: 'xlsx', docType: 'cell', url: 'https://static.onlyoffice.com/assets/docs/samples/new.xlsx', title: 'Example Spreadsheet.xlsx' },
    slide: { fileType: 'pptx', docType: 'slide', url: 'https://static.onlyoffice.com/assets/docs/samples/new.pptx', title: 'Example Presentation.pptx' },
    form: { fileType: 'pdf', docType: 'pdf', url: 'https://static.onlyoffice.com/assets/docs/samples/new.pdf', title: 'Example Form.pdf' },
    pdf: { fileType: 'pdf', docType: 'pdf', url: 'https://static.onlyoffice.com/assets/docs/samples/blank.pdf', title: 'Example PDF.pdf' },
}

const SAMPLE_CONFIGS: Record<EditorType, DocumentConfig> = {
    word: { fileType: 'docx', docType: 'word', url: 'https://static.onlyoffice.com/assets/docs/samples/demo.docx', title: 'Example Document Title.docx' },
    cell: { fileType: 'xlsx', docType: 'cell', url: 'https://static.onlyoffice.com/assets/docs/samples/demo.xlsx', title: 'Example Spreadsheet.xlsx' },
    slide: { fileType: 'pptx', docType: 'slide', url: 'https://static.onlyoffice.com/assets/docs/samples/demo.pptx', title: 'Example Presentation.pptx' },
    form: { fileType: 'pdf', docType: 'pdf', url: 'https://static.onlyoffice.com/assets/docs/samples/demo-invoice.pdf', title: 'Example Form.pdf' },
    pdf: { fileType: 'pdf', docType: 'pdf', url: 'https://static.onlyoffice.com/assets/docs/samples/demo.pdf', title: 'Example PDF.pdf' },
}

function loadServerConfig(): { url?: string; secret?: string } | null {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) return JSON.parse(stored)
    } catch {}
    return null
}

const withFreshKey = (config: Record<string, any>): Record<string, any> => ({
    ...config,
    document: {
        ...(config?.document ?? {}),
        key: crypto.randomUUID(),
    },
})

const ConfigPlaygroundInner = ({ initialEditorType }: { initialEditorType: EditorType }) => {
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext()

    const defaultDocumentServerUrl = customFields?.documentServer as string
    const defaultDocumentServerSecret = customFields?.documentServerSecret as string
    const { colorMode, setColorMode } = useColorMode()

    const [savedConfig] = useState(loadServerConfig)

    const [editorType, setEditorType] = useState<EditorType>(initialEditorType)
    const [previewType, setPreviewType] = useState<PreviewType>('desktop')
    const [documentType, setDocumentType] = useState<DocumentType>('sample')
    const [documentServerUrl, setDocumentServerUrl] = useState(savedConfig?.url || defaultDocumentServerUrl)
    const [documentServerSecret, setDocumentServerSecret] = useState(savedConfig?.secret || defaultDocumentServerSecret)

    const editorRef = useRef<EditorPreviewRef>(null)
    const latestConfigRef = useRef<Record<string, any> | null>(null)

    const docConfig = (documentType === 'sample' ? SAMPLE_CONFIGS : BLANK_CONFIGS)[editorType]

    const defaultConfig = useMemo<Record<string, unknown>>(() => ({
        documentType: docConfig.docType,
        type: previewType,
        width: '100%',
        height: '100%',
        document: {
            fileType: docConfig.fileType,
            key: 'demo-document-key',
            title: docConfig.title,
            url: docConfig.url,
        },
        editorConfig: {
            callbackUrl: documentServerUrl + 'dummyCallback',
            user: { id: 'userID', name: 'Developer' },
            customization: {
                uiTheme: colorMode === 'dark' ? 'default-dark' : 'default-light',
                features: { featuresTips: false },
            },
            lang: 'en',
        },
    }), [documentServerUrl, colorMode, docConfig, previewType])

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

    const handleServerConfigChange = useCallback((url: string, secret: string) => {
        setDocumentServerUrl(url)
        setDocumentServerSecret(secret)
    }, [])

    return (
        <div className={styles.container}>
            <ConfigPlaygroundToolbar
                editorType={editorType}
                previewType={previewType}
                documentType={documentType}
                theme={colorMode}
                documentServerUrl={documentServerUrl}
                documentServerSecret={documentServerSecret}
                defaultDocumentServerUrl={defaultDocumentServerUrl}
                defaultDocumentServerSecret={defaultDocumentServerSecret}
                onEditorTypeChange={setEditorType}
                onPreviewTypeChange={setPreviewType}
                onDocumentTypeChange={setDocumentType}
                onThemeChange={setColorMode}
                onServerConfigChange={handleServerConfigChange}
            />
            <SplitPane
                first={
                    <ConfigEditor
                        defaultConfig={defaultConfig}
                        onApply={handleApply}
                        excludePaths={['events', 'document.options']}
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
        </div>
    )
}

const ConfigPlaygroundRoute = () => {
    const location = useLocation()

    const { documentType } = getSearchParams<{
        documentType: EditorType
    }>(location.search, { documentType: { paramName: 'documentType', defaultValue: 'word' } })

    return (
        <ColorModeProvider>
            <Head>
                <title>Configuration Playground | ONLYOFFICE</title>
                <meta name="description" content="An interactive tool for configuring ONLYOFFICE Docs API initialization parameters — visually build, edit, and preview configuration objects in a live embedded editor." />
                <meta property="og:title" content="Configuration Playground | ONLYOFFICE" />
                <meta property="og:description" content="An interactive tool for configuring ONLYOFFICE Docs API initialization parameters — visually build, edit, and preview configuration objects in a live embedded editor." />
            </Head>
            <BrowserOnly fallback={null}>
                {() => <ConfigPlaygroundInner initialEditorType={documentType ?? 'word'}/>}
            </BrowserOnly>
        </ColorModeProvider>
    )
}

export default ConfigPlaygroundRoute
