export function getFullUrl(localUrl: string): string {
    let url = location.href;
    url = url.substring(0, url.lastIndexOf("/"));
    return url + localUrl;
}