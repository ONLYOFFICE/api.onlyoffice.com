# IApiPlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IApiPlugin.ts#L79)

The plugin that is provided with the origin, proxy, and prefix to make requests to the portal server.

## Example

The plugin class implements `IApiPlugin`. DocSpace fills in the API parameters
via `setOrigin`/`setProxy`/`setPrefix` (or `setAPI`) when the plugin is loaded;
the plugin then uses `getAPI` to build request URLs to the portal.

```typescript
import { type IApiPlugin } from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IApiPlugin {
  origin = "";
  proxy = "";
  prefix = "";

  setOrigin = (origin: string): void => {
    this.origin = origin;
  };

  setProxy = (proxy: string): void => {
    this.proxy = proxy;
  };

  setPrefix = (prefix: string): void => {
    this.prefix = prefix;
  };

  getOrigin = (): string => {
    return this.origin;
  };

  getProxy = (): string => {
    return this.proxy;
  };

  getPrefix = (): string => {
    return this.prefix;
  };

  setAPI = (origin: string, proxy: string, prefix: string): void => {
    this.origin = origin;
    this.proxy = proxy;
    this.prefix = prefix;
  };

  getAPI = (): { origin: string; proxy: string; prefix: string } => {
    return { origin: this.origin, proxy: this.proxy, prefix: this.prefix };
  };

  // Example of a custom method that uses the API parameters to call the portal
  getUsersList = async (): Promise<unknown> => {
    const { origin, proxy, prefix } = this.getAPI();
    const response = await fetch(`${origin}${proxy}${prefix}/people`);
    return response.json();
  };
}
```

## Methods

### setOrigin()

```ts
setOrigin(origin: string): void;
```

Update the origin parameter of the DocSpace portal.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `origin` | `string` | The new origin parameter |

#### Returns

`void`

### setProxy()

```ts
setProxy(proxy: string): void;
```

Update the proxy parameter of the DocSpace portal.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `proxy` | `string` | The new proxy parameter |

#### Returns

`void`

### setPrefix()

```ts
setPrefix(prefix: string): void;
```

Update the prefix parameter of the DocSpace portal.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prefix` | `string` | The new prefix parameter |

#### Returns

`void`

### getOrigin()

```ts
getOrigin(): string;
```

Get the origin parameter of the DocSpace portal.

#### Returns

`string`

The current origin parameter

### getProxy()

```ts
getProxy(): string;
```

Get the proxy parameter of the DocSpace portal.

#### Returns

`string`

The current proxy parameter

### getPrefix()

```ts
getPrefix(): string;
```

Get the prefix parameter of the DocSpace portal to access the server side.

#### Returns

`string`

The current prefix parameter

### setAPI()

```ts
setAPI(
   origin: string, 
   proxy: string, 
   prefix: string): void;
```

Update all the API parameters of the DocSpace portal in one request.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `origin` | `string` | The new origin parameter |
| `proxy` | `string` | The new proxy parameter |
| `prefix` | `string` | The new prefix parameter |

#### Returns

`void`

### getAPI()

```ts
getAPI(): {
  origin: string;
  proxy: string;
  prefix: string;
};
```

Get all the API parameters of the DocSpace portal in one request.

#### Returns

```ts
{
  origin: string;
  proxy: string;
  prefix: string;
}
```

An object containing the current origin, proxy, and prefix parameters

| Name | Type |
| ------ | ------ |
| `origin` | `string` |
| `proxy` | `string` |
| `prefix` | `string` |

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `origin` | `string` | Stores the origin parameter of the DocSpace portal |
| `proxy` | `string` | Stores the proxy parameter of the DocSpace portal |
| `prefix` | `string` | Stores the prefix parameter of the DocSpace portal to access the server side |

```mdx-code-block
</APITable>
```
