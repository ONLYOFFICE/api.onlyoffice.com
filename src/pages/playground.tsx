import { Playground } from "../components/Playground";
import styles from './playground.module.css';
import {ColorModeProvider} from "@docusaurus/theme-common/internal";
import {useLocation} from "react-router-dom";
import {EditorType, ScriptType} from "@site/src/components/Playground/root/PlaygroundRootContext";

const PlaygroundRoute = () => {
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const editor = params.get('editor') as EditorType | null;
    const testType = params.get('testType') as ScriptType | null;

    return (
        <ColorModeProvider>
            <div className={styles.playgroundContainer}>
                <Playground.Root editorType={editor ?? undefined} scriptType={testType ?? undefined}>
                    <Playground.Toolbar/>
                    <Playground.Content/>
                </Playground.Root>
            </div>
        </ColorModeProvider>
    )
}

export default PlaygroundRoute;