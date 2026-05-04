import { useCallback, useEffect, useRef } from "react";
import { usePlaygroundRootContext } from "@site/src/components/Playground";
import { EditorPreview, type EditorPreviewRef } from "@site/src/components/EditorPreview";
import { getFullUrl } from "@site/src/utils/url";
import { FILE_CONFIGS, SAMPLE_FILE_CONFIGS } from "../defaultScripts";

export const PlaygroundPreview = () => {
    const { theme, scriptValue, modeType, scriptType, editorType, documentServerUrl, documentServerSecret, templateUrl, hasInitialScript, fileType } = usePlaygroundRootContext();

    const editorRef = useRef<EditorPreviewRef>(null);
    const initialScriptExecutedRef = useRef(!hasInitialScript);
    const isApiReadyRef = useRef(false);

    const executeCode = useCallback((code: string, type: string) => {
        if (!window.connector) {
            console.log('Please wait for editor to load...');
            return;
        }

        try {
            switch (type) {
                case 'office-js-api':
                    window.connector.callCommand(new Function(code));
                    break;
                case 'connector':
                    const connectorFn = new Function('connector', code);
                    connectorFn(window.connector);
                    break;
                case 'plugin': {
                    window.connector.executeMethod('SetPluginsOptions', [
                        {
                            'asc.{D764D084-C77A-4A3E-A157-A9A1E442BCFC}': {
                                codeExecute: code,
                            },
                        },
                    ]);
                    break;
                }
                case 'builder': {
                    var removeMethod = {
                        "word": "Api.GetDocument().RemoveAllElements();",
                        "cell": "Api.AddSheet(\"Sheet 1\");var sheets = Api.GetSheets(); for (var shInd = 0; shInd < sheets.length - 1; shInd++){ sheets[shInd].Delete(); }",
                        "slide": "var oPresentation = Api.GetPresentation(); var nSlidesCount = oPresentation.GetSlidesCount(); for(var nSlideIdx = nSlidesCount - 1; nSlideIdx > -1; --nSlideIdx) { oPresentation.GetSlideByIndex(nSlideIdx).Delete(); } oPresentation.AddSlide(Api.CreateSlide());",
                        "form": "Api.GetDocument().RemoveAllElements();",
                        "pdf": "let doc = Api.GetDocument();for(let i = doc.GetPagesCount()-1; i > 0; i--) {doc.RemovePage(i);} doc.AddPage(1);doc.RemovePage(0);",
                    };
                    var script = removeMethod[editorType] + code.replace(/\/\/.*$/gm, "").replaceAll("builder.CreateFile", "").replaceAll("builder.SaveFile", "").replaceAll("builder.CloseFile()", "").replaceAll("\n", "");
                    window.connector.callCommand(new Function(script));
                    break;
                }
                default:
                    break;
            }
        } catch (error) {
            console.error('Error executing code:', error);
        }
    }, [editorType]);

    const buildConfig = useCallback(() => {
        const configs = fileType === 'sample' ? SAMPLE_FILE_CONFIGS : FILE_CONFIGS;
        const fileConfig = configs[editorType] || configs.word;

        return {
            document: {
                fileType: fileConfig.ext,
                key: `demo-document-key-${crypto.randomUUID().slice(0, 8)}`,
                title: `Example Document Title.${fileConfig.ext}`,
                url: templateUrl ?? fileConfig.url,
            },
            documentType: fileConfig.docType,
            type: modeType,
            editorConfig: {
                callbackUrl: documentServerUrl + 'dummyCallback',
                customization: {
                    anonymous: { request: false },
                    uiTheme: theme === 'dark' ? 'default-dark' : 'default-light',
                    features: { featuresTips: false },
                },
                lang: 'en',
            },
            events: {
                onDocumentReady: () => {
                    try {
                        const pluginConfigUrl = getFullUrl("/plugin/config.json");

                        const installPluginShim: Record<string, string> = {
                            word: "gg.ud.yJj=gg.ud.installDeveloperPlugin;",
                            pdf: "gg.ud.yJj=gg.ud.installDeveloperPlugin;",
                            cell: "zi.je.Xok=zi.je.installDeveloperPlugin;",
                            slide: "$g.le.Prj=$g.le.installDeveloperPlugin;",
                        };

                        window.connector = window.docEditor.createConnector();
                        window.connector.callCommand(
                            new Function(`${installPluginShim[fileConfig.docType] || ""}Api.installDeveloperPlugin("${pluginConfigUrl}");`)
                        );

                        if (!initialScriptExecutedRef.current) {
                            initialScriptExecutedRef.current = true;
                            executeCode(scriptValue, scriptType);
                        }
                    } catch (error) {
                        console.error('Failed to initialize connector:', error);
                    }
                }
            }
        }
    }, [editorType, theme, modeType, documentServerUrl, templateUrl, fileType, executeCode, scriptValue, scriptType]);

    const initEditorWithConfig = useCallback(() => {
        if (!isApiReadyRef.current || !editorRef.current) return;
        const config = buildConfig();
        editorRef.current.initEditor(config);
    }, [buildConfig]);

    const handleApiReady = useCallback(() => {
        isApiReadyRef.current = true;
        initEditorWithConfig();
    }, [initEditorWithConfig]);

    useEffect(() => {
        initEditorWithConfig();
    }, [theme, modeType, editorType, initEditorWithConfig]);

    useEffect(() => {
        const handleRefresh = () => {
            if (window.connector && !!scriptValue.length) {
                executeCode(scriptValue, scriptType);
            }
        };

        window.addEventListener('playground-run', handleRefresh);

        return () => window.removeEventListener('playground-run', handleRefresh);
    }, [scriptValue, scriptType, executeCode]);

    return <EditorPreview
        ref={editorRef}
        documentServerUrl={documentServerUrl}
        documentServerSecret={documentServerSecret}
        onReady={handleApiReady}
    />;
}
