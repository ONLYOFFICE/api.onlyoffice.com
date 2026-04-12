'use client'

import React, {useRef, useEffect, useId, useCallback, useImperativeHandle, forwardRef} from 'react'
import type {DocSpaceMode} from './codeSnippets'

const DOCSPACE_URL = 'https://testaccount2025.onlyoffice.com'
const API_KEY = 'sk-fd9d706e2ab674ea363eeb948629e536466d89a7c04b3cf379cb86c290d659a0'

const METHOD_MAP: Record<string, string> = {
    'manager': 'initManager',
    'public-room': 'initPublicRoom',
    'viewer': 'initViewer',
    'editor': 'initEditor',
    'room-selector': 'initRoomSelector',
    'file-selector': 'initFileSelector',
    'system': 'initSystem',
    'frame': 'initFrame',
}

declare const DocSpace: any

export interface DocSpacePreviewHandle {
    runScript: (script: string) => void
}

export interface DocSpacePreviewProps {
    mode: DocSpaceMode
    theme: string
    id?: number
    requestToken?: string
    className?: string
    style?: React.CSSProperties
    /** When true, auto-initializes on mount. When false, waits for runScript(). */
    autoInit?: boolean
}

export const DocSpacePreview = forwardRef<DocSpacePreviewHandle, DocSpacePreviewProps>(
    ({mode, theme, id: fileId, requestToken, className, style, autoInit = true}, ref) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const reactId = useId()
    const frameIdRef = useRef(`ds-frame-${reactId.replace(/:/g, '')}`)

    const destroyFrame = useCallback(() => {
        try {
            const frame = typeof DocSpace !== 'undefined' &&
                DocSpace.SDK?.frames?.[frameIdRef.current]
            if (frame?.destroyFrame) frame.destroyFrame()
        } catch { /* ignore */ }
    }, [])

    const resetContainer = useCallback(() => {
        const container = containerRef.current
        if (!container) return null

        destroyFrame()
        container.innerHTML = ''
        const frameDiv = document.createElement('div')
        frameDiv.id = frameIdRef.current
        frameDiv.style.width = '100%'
        frameDiv.style.height = '100%'
        container.appendChild(frameDiv)
        return frameDiv
    }, [destroyFrame])

    const showError = useCallback((msg: string) => {
        const frameDiv = containerRef.current?.querySelector(`#${CSS.escape(frameIdRef.current)}`) as HTMLElement
        if (frameDiv) {
            frameDiv.style.cssText = 'display:flex;align-items:center;justify-content:center;color:#888;font-size:14px;width:100%;height:100%;'
            frameDiv.textContent = msg
        }
    }, [])

    const executeScript = useCallback((script: string) => {
        const frameDiv = resetContainer()
        if (!frameDiv) return

        const frameId = frameIdRef.current
        const isDark = theme === 'dark'

        try {
            const originalSDK = DocSpace.SDK
            const handler: ProxyHandler<any> = {
                get(target, prop) {
                    const val = target[prop]
                    if (typeof val === 'function' && (prop === 'init' || String(prop).startsWith('init'))) {
                        return (userConfig: any) => {
                            const mergedConfig = {
                                ...userConfig,
                                frameId,
                                src: DOCSPACE_URL,
                                width: '100%',
                                height: '100%',
                                checkCSP: false,
                                theme: isDark ? 'Dark' : 'Base',
                            }
                            return val.call(target, mergedConfig)
                        }
                    }
                    return val
                }
            }
            const proxySDK = new Proxy(originalSDK, handler)
            const proxyDocSpace = {SDK: proxySDK}

            const userFn = new Function('DocSpace', script)
            userFn(proxyDocSpace)
        } catch (e: any) {
            showError('Script error: ' + (e?.message ?? e))
        }
    }, [theme, resetContainer, showError])

    // Run user script — waits for SDK load + login before executing
    const runScript = useCallback((script: string) => {
        ensureReady()
            .then(() => executeScript(script))
            .catch((err) => showError(String(err)))
    }, [executeScript, showError])

    useImperativeHandle(ref, () => ({runScript}), [runScript])

    // Auto-init: load SDK, login, init with props (used by DocspaceEmbed)
    useEffect(() => {
        if (!autoInit) {
            // Pre-load SDK + login so runScript is fast
            ensureReady().catch(() => {})
            return destroyFrame
        }

        const frameDiv = resetContainer()
        if (!frameDiv) return

        const frameId = frameIdRef.current

        function initDocSpace() {
            if (typeof DocSpace === 'undefined' || !DocSpace.SDK) {
                showError('DocSpace SDK unavailable.')
                return
            }

            const isDark = theme === 'dark'
            const config: any = {
                frameId,
                src: DOCSPACE_URL,
                width: '100%',
                height: '100%',
                checkCSP: false,
                theme: isDark ? 'Dark' : 'Base',
                events: {
                    onAppReady() {
                        const frame = DocSpace.SDK.frames[frameId]
                        if (frame?.setConfig) {
                            frame.setConfig({theme: isDark ? 'Dark' : 'Base'})
                        }
                    },
                    onAppError(e: any) {
                        showError('DocSpace error: ' + (e?.message ?? e))
                    },
                },
            }

            if (fileId !== undefined) config.id = fileId
            if (requestToken !== undefined) config.requestToken = requestToken

            if (mode === 'public-room') {
                config.mode = 'public-room'
                config.rootPath = '/rooms/share'
                DocSpace.SDK.init(config)
                return
            }

            const methodName = METHOD_MAP[mode] || 'initManager'
            if (typeof DocSpace.SDK[methodName] !== 'function') {
                showError(`SDK method "${methodName}" is not available.`)
                return
            }
            DocSpace.SDK[methodName](config)
        }

        ensureReady()
            .then(() => initDocSpace())
            .catch(() => showError('Failed to load DocSpace SDK.'))

        return destroyFrame
    }, [autoInit, mode, theme, fileId, requestToken])

    return (
        <div className={className} style={style} ref={containerRef} />
    )
})

// ── Shared SDK load + login (runs once, all callers await the same promise) ──

let readyPromise: Promise<void> | null = null

function ensureReady(): Promise<void> {
    if (readyPromise) return readyPromise

    readyPromise = new Promise<void>((resolve, reject) => {
        function doAuth() {
            if (!API_KEY) {
                resolve()
                return
            }

            // Authenticate via API key — sets session cookie for the SDK iframe
            fetch(`${DOCSPACE_URL}/api/2.0/authentication`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
                credentials: 'include',
            })
                .then(() => resolve())
                .catch(() => resolve()) // Proceed even if auth fails
        }

        if (typeof DocSpace !== 'undefined' && DocSpace.SDK) {
            doAuth()
        } else {
            const script = document.createElement('script')
            script.src = `${DOCSPACE_URL}/static/scripts/sdk/2.0.0/api.js?src=${encodeURIComponent(DOCSPACE_URL)}`
            script.onload = () => doAuth()
            script.onerror = () => reject('Failed to load DocSpace SDK.')
            document.head.appendChild(script)
        }
    })

    return readyPromise
}
