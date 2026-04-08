import {Playground} from "../components/Playground";
import styles from './playground.module.css';
import {ColorModeProvider} from "@docusaurus/theme-common/internal";
import {useLocation} from "react-router-dom";
import {EditorType, PreviewType, ScriptType, DocumentType} from "@site/src/components/Playground/root/PlaygroundRootContext";
import Head from '@docusaurus/Head';
import BrowserOnly from "@docusaurus/BrowserOnly";
import {getSearchParams} from "@site/src/utils/url";

const PlaygroundRoute = () => {
    const location = useLocation();

    const { templateUrl, emptyTemplateUrl, ...props } = getSearchParams<{
        editorType: EditorType
        scriptType: ScriptType
        previewType: PreviewType
        initialScript: string
        documentServerUrl: string
        documentServerSecret: string
        templateUrl: string
        emptyTemplateUrl?: string // note: because you can't use "boolean"
        documentType: DocumentType
    }>(location.search, {
        editorType: 'editor',
        scriptType: 'testType',
        previewType: 'preview',
        initialScript: 'code',
        documentServerUrl: 'documentServerUrl',
        documentServerSecret: 'documentServerSecret',
        templateUrl: 'templateUrl',
        emptyTemplateUrl: 'emptyTemplateUrl',
        documentType: 'document'
    });

    return (
        <ColorModeProvider>
            <Head>
                <title>Playground | ONLYOFFICE</title>
                <meta name="description" content="An interactive platform to explore and test ONLYOFFICE Docs APIs without registration - test Office JavaScript API, Automation API, Plugins, and Document Builder." />
                <meta property="og:title" content="Playground | ONLYOFFICE" />
                <meta property="og:description" content="An interactive platform to explore and test ONLYOFFICE Docs APIs without registration - test Office JavaScript API, Automation API, Plugins, and Document Builder." />
            </Head>
            <BrowserOnly>
                {() => (
                    <div className={styles.playgroundContainer}>
                        <Playground.Root templateUrl={emptyTemplateUrl !== undefined ? null : templateUrl} {...props}>
                            <Playground.Toolbar/>
                            <Playground.Content/>
                        </Playground.Root>
                    </div>
                )}
            </BrowserOnly>
        </ColorModeProvider>
    )
}

export default PlaygroundRoute;