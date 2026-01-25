import {useCallback, useEffect, useRef, useState} from "react";
import {usePlaygroundRootContext} from "@site/src/components/Playground";
import styles from './PlaygroundPreview.module.css';
import {getFullUrl} from "@site/src/utils/url";

declare global {
    interface Window {
        DocsAPI: any
        connector: any
        docEditor: any
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
    const { theme, scriptValue, previewType, scriptType, editorType, documentServerUrl, documentServerSecret } = usePlaygroundRootContext()

    const containerRef = useRef(null)
    const initializingRef = useRef(false)
    const [isApiLoaded, setIsApiLoaded] = useState(false)

    const pluginConfigUrl = getFullUrl("/plugin/config.json");

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

    const destroyEditor = useCallback(() => {
        if (window.connector) {
            try {
                window.connector.disconnect()
            } catch (error) {
                console.warn('Failed to disconnect connector:', error)
            }
            delete window.connector
        }

        if (window.docEditor) {
            try {
                window.docEditor.destroyEditor()
            } catch (error) {
                console.warn('Failed to destroy editor:', error)
            }
            delete window.docEditor
        }
    }, [])

    const initEditor = useCallback(async () => {
        if (!containerRef.current || !isApiLoaded || initializingRef.current) return

        initializingRef.current = true

        try {
            destroyEditor()

            containerRef.current.innerHTML = '<div id="placeholder" style="width:100%;height:100%;"></div>'

            const fileConfig = FILE_CONFIGS[editorType] || FILE_CONFIGS.word

            const config = {
                document: {
                    fileType: fileConfig.ext,
                    key: "0" + Math.random(),
                    title: `Example Document Title.${fileConfig.ext}`,
                    url: fileConfig.url,
                },
                documentType: fileConfig.docType,
                type: previewType,
                editorConfig: {
                    callbackUrl: documentServerUrl + 'dummyCallback',
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
                width: '100%',
                events: {
                    onDocumentReady: () => {
                        try {
                            window.connector = window.docEditor.createConnector();
                            window.connector.callCommand(
                                new Function(`Api.installDeveloperPlugin("${pluginConfigUrl}");`)
                            );
                        } catch (error) {
                            console.error('Failed to initialize connector:', error)
                        }
                    }
                }
            }

            if (!!documentServerSecret?.length) {
                (config as any).token = await createJWT(config)
            }

            window.docEditor = new window.DocsAPI.DocEditor('placeholder', config)
        } catch (error) {
            console.error('Failed to create editor:', error)
        } finally {
            initializingRef.current = false
        }

    }, [editorType, theme, previewType, documentServerUrl, documentServerSecret, createJWT, pluginConfigUrl, isApiLoaded, destroyEditor])

    const executeCode = useCallback((code: string, type: string) => {
        if (!window.connector) {
            console.log('Please wait for editor to load...')
            return
        }

        try {
            switch (type) {
                case 'office-js-api':
                    window.connector.callCommand(new Function(code))
                    break
                case 'connector':
                    const connectorFn = new Function('connector', code);
                    connectorFn(window.connector);
                    break
                case 'plugin': {
                    window.connector.executeMethod('SetPluginsOptions', [
                        {
                            'asc.{D764D084-C77A-4A3E-A157-A9A1E442BCFC}': {
                                codeExecute: code,
                            },
                        },
                    ])
                    break
                }
                case 'builder': {
                    var removeMethod = {
                        "word": "Api.GetDocument().RemoveAllElements();",
                        "cell": "Api.AddSheet(\"Sheet 1\");var sheets = Api.GetSheets(); for (var shInd = 0; shInd < sheets.length - 1; shInd++){ sheets[shInd].Delete(); }",
                        "slide": "var oPresentation = Api.GetPresentation(); var nSlidesCount = oPresentation.GetSlidesCount(); for(var nSlideIdx = nSlidesCount - 1; nSlideIdx > -1; --nSlideIdx) { oPresentation.GetSlideByIndex(nSlideIdx).Delete(); } oPresentation.AddSlide(Api.CreateSlide());",
                        "form": "Api.GetDocument().RemoveAllElements();"
                    };
                    // var script = removeMethod[Environment.editor] + code.replaceAll("builder.CreateFile", "").replaceAll("builder.SaveFile", "").replaceAll("builder.CloseFile()", "").replaceAll("\n", "");
                    var script = code.replaceAll("builder.CreateFile", "").replaceAll("builder.SaveFile", "").replaceAll("builder.CloseFile()", "").replaceAll("\n", "");
                    window.connector.callCommand(new Function(script));
                    break;
                }
                default:
                    break
            }
        } catch (error) {
            console.error('Error executing code:', error)
        }
    }, [])


    useEffect(() => {
        if (!documentServerUrl) return

        const script = document.createElement('script')
        script.src = `${documentServerUrl}web-apps/apps/api/documents/api.js`
        script.async = true
        script.onload = () => {
            setIsApiLoaded(true)
        }
        script.onerror = () => {
            console.error('Failed to load OnlyOffice API')
        }

        document.body.appendChild(script)

        return () => {
            destroyEditor()
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [documentServerUrl, destroyEditor])

    useEffect(() => {
        if (!isApiLoaded || !containerRef.current) return

        initEditor().catch(error => console.error('Error initializing editor:', error))
    }, [isApiLoaded])

    useEffect(() => {
        if (!isApiLoaded) return

        initEditor().catch(error => console.error('Error reinitializing editor:', error))
    }, [theme, previewType, editorType, initEditor])

    useEffect(() => {
        const handleRefresh = () => {
            if (window.connector && !!scriptValue.length) {
                executeCode(scriptValue, scriptType)
            }
        }

        window.addEventListener('playground-run', handleRefresh)

        return () => window.removeEventListener('playground-run', handleRefresh)
    }, [scriptValue, scriptType, executeCode])

    return <div ref={containerRef} className={styles.PlaygroundPreviewContainer}/>
}