The plugin that is provided with the origin, proxy, and prefix to make requests to the portal server.

**Interface**: IApiPlugin.

Variables

| Name   | Description                                                                   | Type   | Example                  |
| ------ | ----------------------------------------------------------------------------- | ------ | ------------------------ |
| origin | Stores the origin parameter of the DocSpace portal.                           | string | "https\://example.com"   |
| proxy  | Stores the proxy parameter of the DocSpace portal.                            | string | "https\://proxy-example" |
| prefix | Stores the prefix parameter of the DocSpace portal to access the server side. | string | "prefix"                 |

## Methods and their description:

* **setOrigin** - update the origin parameter of the DocSpace portal.

  Parameters

  | Name   | Description                                          | Type   | Example                |
  | ------ | ---------------------------------------------------- | ------ | ---------------------- |
  | origin | Defines the origin parameter of the DocSpace portal. | string | "https\://example.com" |

* **getOrigin** - get the origin parameter of the DocSpace portal.

* **setProxy** - update the proxy parameter of the DocSpace portal.

  Parameters

  | Name  | Description                                         | Type   | Example                  |
  | ----- | --------------------------------------------------- | ------ | ------------------------ |
  | proxy | Defines the proxy parameter of the DocSpace portal. | string | "https\://proxy-example" |

* **getProxy** - get the proxy parameter of the DocSpace portal.

* **setPrefix** - update the prefix parameter of the DocSpace portal.

  Parameters

  | Name   | Description                                          | Type   | Example  |
  | ------ | ---------------------------------------------------- | ------ | -------- |
  | prefix | Defines the prefix parameter of the DocSpace portal. | string | "prefix" |

* **getPrefix** - get the prefix parameter of the DocSpace portal.

* **setAPI** - update all the API parameters of the DocSpace portal in one request.

  Parameters

  | Name   | Description                                                                   | Type   | Example                  |
  | ------ | ----------------------------------------------------------------------------- | ------ | ------------------------ |
  | origin | Stores the origin parameter of the DocSpace portal.                           | string | "https\://example.com"   |
  | proxy  | Stores the proxy parameter of the DocSpace portal.                            | string | "https\://proxy-example" |
  | prefix | Stores the prefix parameter of the DocSpace portal to access the server side. | string | "prefix"                 |

* **getAPI** - get all the API parameters of the DocSpace portal in one request. Returns an object with the origin, proxy, and prefix parameters.

Example

```
import {IApiPlugin} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IApiPlugin {
    origin = "";
    proxy = "";
    prefix = "";

    setOrigin = (origin: string): void => {
        this.origin = origin;
    };

    getOrigin = (): string => {
        return this.origin;
    };

    setProxy = (proxy: string): void => {
        this.proxy = proxy;
    };

    getProxy = (): string => {
        return this.proxy;
    };

    setPrefix = (prefix: string): void => {
        this.prefix = prefix;
    };

    getPrefix = (): string => {
        return this.prefix;
    };

    setAPI = (origin: string, proxy: string, prefix: string): void => {
        this.origin = origin;
        this.proxy = proxy;
        this.prefix = prefix;
    };

    getAPI = (): {origin: string, proxy: string, prefix: string} => {
        return {origin: this.origin, proxy: this.proxy, prefix: this.prefix};
    };
}
```
