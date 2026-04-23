export function getFullUrl(localUrl: string): string {
    if (typeof window === 'undefined') {
        return localUrl; // SSR fallback
    }

    let url = location.href;
    url = url.substring(0, url.lastIndexOf("/"));
    return url + localUrl;
}

type MappingEntry<V> = string | { paramName: string; defaultValue?: V };

/**
 * Maps URL search parameters to a typed object with support for default values.
 *
 * @param search - The search string (e.g., "?name=john&age=30")
 * @param mapping - An object mapping keys to either a string (param name)
 *                  or an object { paramName: string, defaultValue?: T }
 */
export function getSearchParams<T extends Record<string, any>>(
    search: string,
    mapping: { [K in keyof T]: MappingEntry<T[K]> }
): Partial<T> {
    const params = new URLSearchParams(search);
    const result: any = {};

    for (const key in mapping) {
        const config = mapping[key as keyof T];

        const paramName = typeof config === 'string' ? config : config.paramName;
        const defaultValue = typeof config === 'string' ? undefined : config.defaultValue;

        const value = params.get(paramName);

        if (value !== null) {
            result[key] = value;
        } else if (defaultValue !== undefined) {
            result[key] = defaultValue;
        }
    }

    return result;
}
