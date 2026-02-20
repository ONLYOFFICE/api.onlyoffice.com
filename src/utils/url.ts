export function getFullUrl(localUrl: string): string {
    if (typeof window === 'undefined') {
        return localUrl; // SSR fallback
    }

    let url = location.href;
    url = url.substring(0, url.lastIndexOf("/"));
    return url + localUrl;
}

export function getSearchParams<T extends Record<string, string>>(
    search: string,
    mapping: Record<keyof T, string>
): Partial<T> {
    const params = new URLSearchParams(search);
    const result: any = {};
    for (const [key, paramName] of Object.entries(mapping)) {
        const value = params.get(paramName);
        if (value != null) result[key] = value;
    }
    return result;
}
