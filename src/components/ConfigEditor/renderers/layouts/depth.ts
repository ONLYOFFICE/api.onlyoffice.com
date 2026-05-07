export function depthOfPath(path: string): number {
    if (!path) return 0;
    return path.split('.').filter(Boolean).length;
}

export function titleFromKey(key: string): string {
    if (!key) return '';
    const spaced = key.replace(/([A-Z])/g, ' $1').replace(/[_-]+/g, ' ').trim();
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
