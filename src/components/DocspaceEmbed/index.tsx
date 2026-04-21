import BrowserOnly from '@docusaurus/BrowserOnly';
import {useColorMode} from '@docusaurus/theme-common';
import {DocSpacePreview} from '@site/src/components/DocSpacePlayground/DocSpacePreview';
import type {DocSpaceMode} from '@site/src/components/DocSpacePlayground/codeSnippets';

interface DocspaceEmbedProps {
    params: string;
    width?: string;
    height?: string;
    className?: string;
}

function DocspaceEmbedInner({params, width = '100%', height = '600px', className = 'embed-sample'}: DocspaceEmbedProps) {
    useColorMode(); // subscribe to re-renders when the theme changes
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

    const searchParams = new URLSearchParams(params);
    const mode = (searchParams.get('mode') || 'manager') as DocSpaceMode;
    const id = searchParams.get('id') ? Number(searchParams.get('id')) : undefined;
    const token = searchParams.get('token') || undefined;

    return (
        <DocSpacePreview
            mode={mode}
            theme={theme}
            id={id}
            requestToken={token}
            className={className}
            style={{width, height}}
        />
    );
}

export default function DocspaceEmbed({width = '100%', height = '600px', ...rest}: DocspaceEmbedProps) {
    return (
        <BrowserOnly fallback={<div style={{width, height}}/>}>
            {() => <DocspaceEmbedInner width={width} height={height} {...rest} />}
        </BrowserOnly>
    );
}
