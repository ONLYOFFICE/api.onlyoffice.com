import { Playground } from "../components/Playground";
import styles from './playground.module.css';
import {ColorModeProvider} from "@docusaurus/theme-common/internal";

const PlaygroundRoute = () => {
    return (
        <ColorModeProvider>
            <div className={styles.playgroundContainer}>
                <Playground.Root>
                    <Playground.Toolbar/>
                    <Playground.Content/>
                </Playground.Root>
            </div>
        </ColorModeProvider>
    )
}

export default PlaygroundRoute;