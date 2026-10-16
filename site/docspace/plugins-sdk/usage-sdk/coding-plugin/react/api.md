---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/react/api.ts
---

# Api

The portal API as a plugin sees it: the client every request goes through,
the options a request takes, and the error a failure arrives as.

The client itself comes from [`usePluginAPI`](hooks.md#usepluginapi) — these
types document what it accepts and what it rejects with.

## PluginAPIClient

Typed HTTP client scoped to the current portal.
All requests go through the portal's own HTTP layer, which authenticates them,
so no credentials need to be handled by the plugin.
The base URL already includes the API prefix, so paths are relative to it,
e.g. `"/files/@my"` not `"/api/2.0/files/@my"`.
Returned by [`usePluginAPI`](hooks.md#usepluginapi).

Every helper resolves to the payload itself: the `response` field the portal
wraps its answers in is unwrapped, and a list endpoint that reports a total
resolves to `{ total, items }`. Failures reject with a
[`PluginApiError`](#pluginapierror).

### Example

```tsx
type MyDocuments = { files: { id: number; title: string }[] };

function FileList() {
  const api = usePluginAPI();
  const [files, setFiles] = useState<MyDocuments["files"]>([]);

  useEffect(() => {
    const controller = new AbortController();
    api
      .get<MyDocuments>("/files/@my", { count: 20 }, { signal: controller.signal })
      .then((folder) => setFiles(folder.files));
    return () => controller.abort();
  }, []);

  return <ul>{files.map((f) => <li key={f.id}>{f.title}</li>)}</ul>;
}
```

### Methods

#### request()

```ts
request<T>(options: PluginApiRequest): Promise<T>;
```

Send a request described in full. The helpers below cover the common
cases; reach for this one when a request needs a method, a body and query
parameters at the same time.

##### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `unknown` | Expected payload type. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`PluginApiRequest`](#pluginapirequest) | The request to send. |

##### Returns

`Promise`\<`T`\>

##### Example

```ts
const operations = await api.request<Operation[]>({
  method: "PUT",
  path: "/files/fileops/delete",
  data: { fileIds: [1, 2], folderIds: [] },
  params: { returnSingleOperation: true },
});
```

#### get()

```ts
get<T>(
   path: string, 
   params?: Record<string, unknown>, 
options?: PluginApiOptions): Promise<T>;
```

Send a GET request to the portal API.

##### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `unknown` | Expected payload type. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | API path relative to the base URL, e.g. `"/files/@my"`. |
| `params?` | `Record`\<`string`, `unknown`\> | Query string parameters. Merged with `options.params`, which loses on a conflict. |
| `options?` | [`PluginApiOptions`](#pluginapioptions) | Headers and abort signal. |

##### Returns

`Promise`\<`T`\>

##### Example

```ts
const rooms = await api.get<{ folders: Room[] }>("/files/rooms");
```

#### post()

```ts
post<T>(
   path: string, 
   data?: unknown, 
options?: PluginApiOptions): Promise<T>;
```

Send a POST request to the portal API.

##### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `unknown` | Expected payload type. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | API path relative to the base URL. |
| `data?` | `unknown` | Request body (JSON-serialisable). |
| `options?` | [`PluginApiOptions`](#pluginapioptions) | Query parameters, headers and abort signal. |

##### Returns

`Promise`\<`T`\>

##### Example

```ts
const file = await api.post<FileDto>(`/files/${folderId}/file`, { title });
```

#### put()

```ts
put<T>(
   path: string, 
   data?: unknown, 
options?: PluginApiOptions): Promise<T>;
```

Send a PUT request to the portal API.

##### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `unknown` | Expected payload type. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | API path relative to the base URL. |
| `data?` | `unknown` | Request body (JSON-serialisable). |
| `options?` | [`PluginApiOptions`](#pluginapioptions) | Query parameters, headers and abort signal. |

##### Returns

`Promise`\<`T`\>

#### patch()

```ts
patch<T>(
   path: string, 
   data?: unknown, 
options?: PluginApiOptions): Promise<T>;
```

Send a PATCH request to the portal API.

##### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `unknown` | Expected payload type. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | API path relative to the base URL. |
| `data?` | `unknown` | Request body (JSON-serialisable). |
| `options?` | [`PluginApiOptions`](#pluginapioptions) | Query parameters, headers and abort signal. |

##### Returns

`Promise`\<`T`\>

#### delete()

```ts
delete<T>(
   path: string, 
   data?: unknown, 
options?: PluginApiOptions): Promise<T>;
```

Send a DELETE request to the portal API.

##### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `unknown` | Expected payload type. |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | API path relative to the base URL. |
| `data?` | `unknown` | Request body (JSON-serialisable). Endpoints such as `DELETE /files/file/{id}` declare a required body, so it is sent for `DELETE` as it is for `PUT`. |
| `options?` | [`PluginApiOptions`](#pluginapioptions) | Query parameters, headers and abort signal. |

##### Returns

`Promise`\<`T`\>

##### Example

```ts
await api.delete(`/files/file/${id}`, { deleteAfter: false, immediately: false });
```

***

## PluginApiOptions

The parts of a request that every method takes, whichever helper sends it.

Passed as the last argument of [`get`](#get), [`post`](#post) and the other
helpers on [`PluginAPIClient`](#pluginapiclient), and inline in
[`request`](#request).

### Extended by

- [`PluginApiRequest`](#pluginapirequest)

### Properties

import APITable from '@site/src/components/APITable/APITable';

<APITable name="Extendedby">

| Property | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Query string parameters. `undefined` and `null` values are dropped rather than sent as empty strings. |
| `headers?` | `Record`\<`string`, `string`\> | Extra request headers. Authentication headers are added by DocSpace and cannot be overridden here. |
| `signal?` | `AbortSignal` | Cancels the request when the signal is aborted, e.g. from the cleanup function of the `useEffect` that started it. An aborted request rejects with a [`PluginApiError`](#pluginapierror) whose `code` is `"ABORTED"`. |

</APITable>

***

## PluginApiRequest

One request, described in full. This is what [`request`](#request) takes, and
what every other helper on [`PluginAPIClient`](#pluginapiclient) is shorthand
for.

### Extends

- [`PluginApiOptions`](#pluginapioptions)

### Properties

<APITable name="Extends">

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Query string parameters. `undefined` and `null` values are dropped rather than sent as empty strings. | [`PluginApiOptions`](#pluginapioptions).[`params`](#Extendedby-params?) |
| `headers?` | `Record`\<`string`, `string`\> | Extra request headers. Authentication headers are added by DocSpace and cannot be overridden here. | [`PluginApiOptions`](#pluginapioptions).[`headers`](#Extendedby-headers?) |
| `signal?` | `AbortSignal` | Cancels the request when the signal is aborted, e.g. from the cleanup function of the `useEffect` that started it. An aborted request rejects with a [`PluginApiError`](#pluginapierror) whose `code` is `"ABORTED"`. | [`PluginApiOptions`](#pluginapioptions).[`signal`](#Extendedby-signal?) |
| `path` | `string` | API path relative to the portal API base URL, e.g. `"/files/@my"`. | - |
| `method?` | [`PluginApiMethod`](#pluginapimethod) | Defaults to `"GET"`. | - |
| `data?` | `unknown` | Request body, JSON-serialisable. Sent with any method that accepts one, `DELETE` included — several portal endpoints require a body on `DELETE`. | - |

</APITable>

***

## PluginApiError

A request that did not succeed.

Every rejection from [`PluginAPIClient`](#pluginapiclient) is one of these,
so a plugin can branch on `status` instead of digging through whatever the
portal's HTTP layer happened to throw.

### Example

```ts
import { isPluginApiError } from "@onlyoffice/docspace-plugin-sdk/react";

try {
  await api.delete(`/files/file/${id}`, { deleteAfter: false });
} catch (error) {
  if (isPluginApiError(error) && error.status === 403) {
    showToast({ type: ToastType.error, title: "Not allowed" });
    return;
  }
  throw error;
}
```

### Extends

- `Error`

### Properties

<APITable name="Extends">

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `name` | `"PluginApiError"` | - | `Error.name` |
| `status` | `number` | HTTP status code, or `0` when the request never reached the portal. | - |
| `code?` | `"ABORTED"` \| `"NETWORK"` \| `"INVALID_PATH"` | Why the request failed when there is no status to go by: `"ABORTED"` when the `signal` fired, `"NETWORK"` when the request never got an answer, `"INVALID_PATH"` when `path` was rejected before anything was sent. | - |
| `request` | `string` | The method and path that failed, e.g. `"PUT /files/fileops/delete"`. | - |
| `details?` | `unknown` | The error payload the portal sent, when it sent one. | - |

</APITable>

***

## PluginApiMethod

```ts
type PluginApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

## isPluginApiError()

```ts
function isPluginApiError(error: unknown): error is PluginApiError;
```

Tells a failed portal request apart from any other thrown value, and narrows
it to [`PluginApiError`](#pluginapierror).

A `catch` block sees `unknown`, so the fields worth branching on — `status`
above all — are not reachable without a check of some kind. This is that
check: it reads the shape rather than the prototype, so it holds for an error
that crossed a module boundary on its way to the plugin.

### Example

```ts
import { isPluginApiError } from "@onlyoffice/docspace-plugin-sdk/react";

try {
  await api.get(`/files/file/${id}`);
} catch (error) {
  if (isPluginApiError(error) && error.status === 404) return null;
  throw error;
}
```

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error` | `unknown` | The value caught. |

### Returns

`error is PluginApiError`

