import type {Component, ComponentProps, ReactNode} from "react";
import { Playground } from "../components/Playground";
import styles from './playground.module.css';

const PlaygroundRoute: Component = () => {
    return (
        <div className={styles.playgroundContainer}>
            <Playground.Root>
                <Playground.Toolbar/>
                <Playground.Content/>
            </Playground.Root>
        </div>
    )
}

export default PlaygroundRoute;