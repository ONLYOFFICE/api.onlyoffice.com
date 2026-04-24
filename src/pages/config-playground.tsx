import { EditorType } from "@site/src/components/Playground/root/PlaygroundRootContext";
import { ColorModeProvider } from "@docusaurus/theme-common/internal";
import Head from "@docusaurus/Head";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { EditorPreview, EditorPreviewRef } from "@site/src/components/EditorPreview";
import { SplitPane } from "@site/src/components/SplitPane";
import styles from './config-playground.module.css';
import { useCallback, useMemo, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { useLocation } from "react-router-dom";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { getSearchParams } from "@site/src/utils/url";
import { ConfigEditor } from "@site/src/components/ConfigEditor";

type DocumentConfig = { fileType: string; docType: string; url: string; title: string }

const DOCUMENT_TYPE_CONFIG: Record<EditorType, DocumentConfig> = {
    word: {
        fileType: 'docx',
        docType: 'word',
        url: 'https://static.onlyoffice.com/assets/docs/samples/demo.docx',
        title: 'Example Document Title.docx',
    },
    cell: {
        fileType: 'xlsx',
        docType: 'cell',
        url: 'https://static.onlyoffice.com/assets/docs/samples/demo.xlsx',
        title: 'Example Spreadsheet.xlsx',
    },
    slide: {
        fileType: 'pptx',
        docType: 'slide',
        url: 'https://static.onlyoffice.com/assets/docs/samples/demo.pptx',
        title: 'Example Presentation.pptx',
    },
    form: {
        fileType: 'oform',
        docType: 'word',
        url: 'https://static.onlyoffice.com/assets/docs/samples/demo-invoice.oform',
        title: 'Example Form.oform',
    },
    pdf: {
        fileType: 'pdf',
        docType: 'pdf',
        url: 'https://static.onlyoffice.com/assets/docs/samples/demo.pdf',
        title: 'Example PDF.pdf',
    },
} as const

const withFreshKey = (config: Record<string, any>): Record<string, any> => ({
    ...config,
    document: {
        ...(config?.document ?? {}),
        key: crypto.randomUUID(),
    },
})

const ConfigPlaygroundInner = (props: { docConfig: DocumentConfig }) => {
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext()

    const documentServerUrl = customFields.documentServer as string
    const documentServerSecret = customFields.documentServerSecret as string
    const { colorMode } = useColorMode()
    const editorRef = useRef<EditorPreviewRef>(null)
    const latestConfigRef = useRef<Record<string, any> | null>(null)

    const defaultConfig = useMemo<Record<string, unknown>>(() => ({
        documentType: props.docConfig.docType,
        type: 'desktop',
        width: '100%',
        height: '100%',
        document: {
            fileType: props.docConfig.fileType,
            key: 'demo-document-key',
            title: props.docConfig.title,
            url: props.docConfig.url,
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
    }), [documentServerUrl, colorMode, props.docConfig])

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
        <div className={styles.container}>
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
    const docConfig = DOCUMENT_TYPE_CONFIG[documentType] ?? DOCUMENT_TYPE_CONFIG.word

    return (
        <ColorModeProvider>
            <Head>
                <title>Configuration Playground | ONLYOFFICE</title>
                <meta name="description" content="An interactive tool for configuring ONLYOFFICE Docs API initialization parameters — visually build, edit, and preview configuration objects in a live embedded editor." />
                <meta property="og:title" content="Configuration Playground | ONLYOFFICE" />
                <meta property="og:description" content="An interactive tool for configuring ONLYOFFICE Docs API initialization parameters — visually build, edit, and preview configuration objects in a live embedded editor." />
            </Head>
            <BrowserOnly fallback={null}>
                {() => <ConfigPlaygroundInner docConfig={docConfig}/>}
            </BrowserOnly>
        </ColorModeProvider>
    )
}

export default ConfigPlaygroundRoute
