export function getFullUrl(localUrl: string): string {
    if (typeof window === 'undefined') {
        return localUrl; // SSR fallback
    }

    let url = location.href;
    url = url.substring(0, url.lastIndexOf("/"));
    return url + localUrl;
}