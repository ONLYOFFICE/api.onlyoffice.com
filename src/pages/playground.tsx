import { Playground } from "../components/Playground";
import styles from './playground.module.css';
import {ColorModeProvider} from "@docusaurus/theme-common/internal";
import {useLocation} from "react-router-dom";
import {EditorType, PreviewType, ScriptType} from "@site/src/components/Playground/root/PlaygroundRootContext";
import Head from '@docusaurus/Head';

const PlaygroundRoute = () => {
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const editorType = params.get('editor') as EditorType | null;
    const connectorType = params.get('testType') as ScriptType | null;
    const previewType = params.get('preview') as PreviewType | null;
    const documentServerUrl = params.get('documentServerUrl') as string | null;
    const documentServerSecret = params.get('documentServerSecret') as string | null;

    return (
        <ColorModeProvider>
            <Head>
                <title>Playground | ONLYOFFICE</title>
            </Head>
            <div className={styles.playgroundContainer}>
                <Playground.Root editorType={editorType ?? undefined} scriptType={connectorType ?? undefined} previewType={previewType ?? undefined} documentServerUrl={documentServerUrl ?? undefined} documentServerSecret={documentServerSecret ?? undefined}>
                    <Playground.Toolbar/>
                    <Playground.Content/>
                </Playground.Root>
            </div>
        </ColorModeProvider>
    )
}

export default PlaygroundRoute;