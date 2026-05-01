import { useCallback, useEffect, useImperativeHandle, useRef, type Ref } from "react";
import styles from './styles.module.css';

export interface EditorPreviewRef {
    initEditor: (config: Record<string, any>) => Promise<void>;
}

interface EditorPreviewProps {
    documentServerUrl: string;
    documentServerSecret?: string;
    onReady?: () => void;
    ref?: Ref<EditorPreviewRef>;
}

export const EditorPreview = ({
    documentServerUrl,
    documentServerSecret,
    onReady,
    ref,
}: EditorPreviewProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isApiLoadedRef = useRef(false);
    const initializingRef = useRef(false);
    const onReadyRef = useRef(onReady);
    onReadyRef.current = onReady;

    const createJWT = useCallback(
        async (payload: object): Promise<string> => {
            if (!documentServerSecret) return '';

            const base64EncodeURL = (str: string): string =>
                btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

            const encodedHeader = base64EncodeURL(JSON.stringify({ typ: 'JWT', alg: 'HS256' }));
            const encodedPayload = base64EncodeURL(JSON.stringify(payload));

            const encoder = new TextEncoder();
            const algorithm = { name: 'HMAC', hash: 'SHA-256' };

            const key = await crypto.subtle.importKey(
                'raw',
                encoder.encode(documentServerSecret),
                algorithm,
                false,
                ['sign']
            );

            const signature = await crypto.subtle.sign(
                algorithm.name,
                key,
                encoder.encode(`${encodedHeader}.${encodedPayload}`)
            );

            const hash = base64EncodeURL(String.fromCharCode(...new Uint8Array(signature)));
            return `${encodedHeader}.${encodedPayload}.${hash}`;
        },
        [documentServerSecret]
    );

    const destroyEditor = useCallback(() => {
        if (window.docEditor) {
            try {
                window.docEditor.destroyEditor();
            } catch (error) {
                console.warn('Failed to destroy editor:', error);
            }
            delete window.docEditor;
        }
    }, []);

    const initEditor = useCallback(
        async (config: Record<string, any>) => {
            if (!isApiLoadedRef.current) return;

            if (!containerRef.current || initializingRef.current) return;
            initializingRef.current = true;

            try {
                destroyEditor();
                containerRef.current.innerHTML = '<div id="placeholder" style="width:100%;height:100%;"></div>';

                const finalConfig = { ...config };

                if (documentServerSecret?.length) {
                    const { events: _, ...configForJWT } = finalConfig;
                    finalConfig.token = await createJWT(configForJWT);
                }

                if (config.type === 'mobile') {
                    const observer = new MutationObserver(() => {
                        const iframe = containerRef.current?.querySelector('iframe');
                        if (iframe) {
                            iframe.style.position = 'absolute';
                            iframe.style.top = '0';
                            iframe.style.left = '0';
                            observer.disconnect();
                        }
                    });
                    observer.observe(containerRef.current, { childList: true, subtree: true });
                }

                window.docEditor = new window.DocsAPI.DocEditor('placeholder', finalConfig);
            } catch (error) {
                console.error('Failed to create editor:', error);
            } finally {
                initializingRef.current = false;
            }
        },
        [createJWT, destroyEditor, documentServerSecret]
    );

    useImperativeHandle(ref, () => ({ initEditor }), [initEditor]);

    useEffect(() => {
        if (!documentServerUrl) return;

        const script = document.createElement('script');
        script.src = `${documentServerUrl}web-apps/apps/api/documents/api.js`;
        script.async = true;
        script.onload = () => {
            isApiLoadedRef.current = true;
            onReadyRef.current?.();
        };
        script.onerror = () => console.error('Failed to load OnlyOffice API');

        document.body.appendChild(script);

        return () => {
            destroyEditor();
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, [documentServerUrl, destroyEditor]);

    return <div ref={containerRef} className={styles.container}/>;
};
