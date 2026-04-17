import {ColorModeProvider} from "@docusaurus/theme-common/internal";
import {useLocation} from "react-router-dom";
import Head from '@docusaurus/Head';
import BrowserOnly from "@docusaurus/BrowserOnly";
import {getSearchParams} from "@site/src/utils/url";
import type {DocSpaceMode} from "@site/src/components/DocSpacePlayground/codeSnippets";
import {DocSpacePlayground} from "@site/src/components/DocSpacePlayground/DocSpacePlayground";

const DocSpacePlaygroundRoute = () => {
    const location = useLocation();

    const {mode} = getSearchParams<{ mode: DocSpaceMode }>(location.search, {
        mode: 'mode',
    });

    return (
        <ColorModeProvider>
            <Head>
                <title>DocSpace SDK Playground | ONLYOFFICE</title>
                <meta name="description" content="An interactive platform to explore and test ONLYOFFICE DocSpace SDK embedding modes — manager, editor, viewer, selectors, and more." />
                <meta property="og:title" content="DocSpace SDK Playground | ONLYOFFICE" />
                <meta property="og:description" content="An interactive platform to explore and test ONLYOFFICE DocSpace SDK embedding modes — manager, editor, viewer, selectors, and more." />
            </Head>
            <BrowserOnly>
                {() => (
                    <DocSpacePlayground initialMode={mode}/>
                )}
            </BrowserOnly>
        </ColorModeProvider>
    )
}

export default DocSpacePlaygroundRoute;
