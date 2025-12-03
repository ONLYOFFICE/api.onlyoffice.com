import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {useCallback, useEffect, useRef} from "react";
import {usePlaygroundRootContext} from "@site/src/components/Playground";
import styles from './PlaygroundPreview.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

declare global {
    interface Window {
        DocsAPI: any
    }
}

const FILE_CONFIGS = {
    word: { ext: 'docx', docType: 'word', url: 'https://static.onlyoffice.com/assets/docs/samples/demo.docx' },
    cell: { ext: 'xlsx', docType: 'cell', url: 'https://static.onlyoffice.com/assets/docs/samples/demo.xlsx' },
    slide: {
        ext: 'pptx',
        docType: 'slide',
        url: 'https://static.onlyoffice.com/assets/docs/samples/demo.pptx',
    },
    form: {
        ext: 'pdf',
        docType: 'pdf',
        url: 'https://static.onlyoffice.com/assets/docs/samples/demo-invoice.pdf',
    },
}

export const PlaygroundPreview = () => {
    const { siteConfig: { customFields } } = useDocusaurusContext()
    const documentServer = customFields.documentServer as string;
    const documentServerSecret = customFields.documentServerSecret as string;

    const { theme, scriptValue, previewType, scriptType, editorType } = usePlaygroundRootContext()

    const containerRef = useRef(null)
    const docEditorRef = useRef<any>(null)
    const connectorRef = useRef<any>(null)

    const createJWT = useCallback(
        async (payload: object): Promise<string> => {
            if (!documentServerSecret) return ''

            const header = {
                typ: 'JWT',
                alg: 'HS256',
            }

            const base64EncodeURL = (str: string): string => {
                return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
            }

            const encodedHeader = base64EncodeURL(JSON.stringify(header))
            const encodedPayload = base64EncodeURL(JSON.stringify(payload))

            const encoder = new TextEncoder()
            const algorithm = { name: 'HMAC', hash: 'SHA-256' }

            const key = await crypto.subtle.importKey('raw', encoder.encode(documentServerSecret), algorithm, false, [
                'sign',
            ])

            const data = encoder.encode(`${encodedHeader}.${encodedPayload}`)
            const signature = await crypto.subtle.sign(algorithm.name, key, data)
            const hash = base64EncodeURL(String.fromCharCode(...new Uint8Array(signature)))

            return `${encodedHeader}.${encodedPayload}.${hash}`
        },
        [documentServerSecret],
    )

    const initEditor = useCallback(async () => {
        if (docEditorRef.current) {
            docEditorRef.current.destroyEditor()
            docEditorRef.current = null
        }

        if (connectorRef.current) {
            connectorRef.current.disconnect()
            connectorRef.current = null
        }

        containerRef.current.innerHTML = '<div id="placeholder" style="width:100%;height:100%;"></div>'

        const fileConfig = FILE_CONFIGS[editorType] || FILE_CONFIGS.word

        // fixme: config typescript type
        const config = {
            document: {
                fileType: fileConfig.ext,
                key: `key${Date.now()}${Math.random()}`,
                title: `Document.${fileConfig.ext}`,
                url: fileConfig.url,
            },
            documentType: fileConfig.docType,
            type: previewType,
            editorConfig: {
                callbackUrl: documentServer + '/dummyCallback',
                user: {
                    id: 'userID',
                    name: 'Developer',
                },
                customization: {
                    uiTheme: theme === 'dark' ? 'default-dark' : 'default-light',
                    features: {
                        featuresTips: false,
                    },
                },
                lang: 'en',
            },
            height: '100%',
            width: '100%'
        }

        if (!!documentServerSecret?.length) {
            (config as any).token = await createJWT(config)
        }

        (config as any).events = {
            onDocumentReady: () => {
                connectorRef.current = docEditorRef.current.createConnector();

                let url = useBaseUrl("/plugin/config.json");
                connectorRef.current.callCommand(new Function("Api.installDeveloperPlugin(\"" + url + "\");"));
            }
        };

        docEditorRef.current = new window.DocsAPI.DocEditor('placeholder', config)
    }, [editorType, theme, previewType, documentServer, documentServerSecret, createJWT])

    const executeCode = useCallback((code: string, type: string) => {
        if (!connectorRef.current) {
            console.log('Please wait for editor to load...')
            return
        }

        try {
            switch (type) {
                case 'office-js-api':
                    connectorRef.current.callCommand(new Function(code))
                    break
                case 'connector':
                    eval(code)
                    break
                case 'plugin': {
                    connectorRef.current.executeMethod('SetPluginsOptions', [
                        {
                            'asc.{D764D084-C77A-4A3E-A157-A9A1E442BCFC}': {
                                codeExecute: code,
                            },
                        },
                    ])
                    break
                }
                default:
                    break
            }
        } catch (error) {
            console.error('Error executing code:', error)
        }
    }, [])

    useEffect(() => {
        if (!containerRef.current) return

        const script = document.createElement('script')
        script.src = `${documentServer}web-apps/apps/api/documents/api.js`
        script.async = true
        script.onload = () => initEditor()

        document.body.appendChild(script)

        return () => {
            docEditorRef.current?.destroyEditor()
        }
    }, [documentServer])

    useEffect(() => {
        if (!docEditorRef.current) return

        initEditor().catch(error => console.error('Error reinitializing editor:', error))
    }, [theme, previewType, initEditor])

    useEffect(() => {
        const handleRefresh = () => {
            if (connectorRef.current && !!scriptValue.length) {
                executeCode(scriptValue, scriptType)
            }
        }

        window.addEventListener('playground-run', handleRefresh)

        return () => window.removeEventListener('playground-run', handleRefresh)
    }, [scriptValue, scriptType, executeCode])

    return <div ref={containerRef} className={styles.PlaygroundPreviewContainer}/>
}