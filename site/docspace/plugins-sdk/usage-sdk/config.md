---
sidebar_position: -2
---

# Config

The *config.json* file is generated based on the data from the *package.json* file.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter   | Type             | Description                                                                                                                                                                      | Example                                                  |
|-------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| author      | string           | The plugin author.                                                                                                                                                               | `"ONLYOFFICE"`                                           |
| cspDomains  | array of strings | The list of all third-party resources that are used in the plugin.                                                                                                               | `[https://embed.diagrams.net/, https://*.diagrams.net/]` |
| description | string           | The description, i.e. what describes your plugin in the best way.                                                                                                                | `"plugin description"`                                   |
| homePage    | string           | The plugin homepage. For example, it can be the plugin GitHub repository.                                                                                                        | `https://example.com/url-to-plugin-repository`           |
| image       | string           | The name of the logo image. It is equal to the `logo` parameter from the `package.json` file. The required icon size is 48x48 px. Otherwise, it will be compressed to this size. | `"logo.png"`                                             |
| license     | string           | The plugin license.                                                                                                                                                              | `"MIT"`                                                  |
| name        | string           | The plugin name.                                                                                                                                                                 | `"plugin name"`                                          |
| pluginName  | string           | The name by which the plugin is registered in the `window` object. It must match the plugin name from the `plugin.js` file.                                                      | `"plugin name"`                                          |
| scopes      | string           | The plugin scopes which are converted from an array into a string.                                                                                                               | `"ContextMenu,InfoPanel,MainButton"`                     |
| version     | string           | The current plugin version.                                                                                                                                                      | `"1.0.0"`                                                |

```mdx-code-block
</APITable>
```

## Example

``` ts
const config = {
  author: "ONLYOFFICE",
  cspDomains: [
    "https://embed.diagrams.net/",
    "https://*.diagrams.net/",
  ],
  description: "plugin description",
  homePage: "https://example.com/url-to-plugin-repository",
  image: "logo.png",
  license: "MIT",
  name: "plugin name",
  pluginName: "plugin name",
  scopes: "ContextMenu,InfoPanel,MainButton",
  version: "1.0.0",
}
```
