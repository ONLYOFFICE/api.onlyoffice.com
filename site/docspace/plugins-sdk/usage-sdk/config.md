---
sidebar_position: -2
---

# Config

The *config.json* file is generated based on the data from the *package.json* file.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter          | Type             | Example                                                  | Description                                                                                                                                                                      |
|--------------------|------------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| author             | string           | `"ONLYOFFICE"`                                           | The plugin author.                                                                                                                                                               |
| cspDomains         | array of strings | `[https://embed.diagrams.net/, https://*.diagrams.net/]` | The list of all third-party resources that are used in the plugin.                                                                                                               |
| description        | string           | `"plugin description"`                                   | The description, i.e. what describes your plugin in the best way.                                                                                                                |
| homePage           | string           | `https://example.com/url-to-plugin-repository`           | The plugin homepage. For example, it can be the plugin GitHub repository.                                                                                                        |
| image              | string           | `"logo.png"`                                             | The name of the logo image. It is equal to the `logo` parameter from the `package.json` file. The required icon size is 48x48 px. Otherwise, it will be compressed to this size. |
| license            | string           | `"MIT"`                                                  | The plugin license.                                                                                                                                                              |
| minDocSpaceVersion | string           | `"7.2.0"`                                                | The minimum DocSpace version required by the plugin. It is compared with the current version of the DocSpace client where the plugin is uploaded.                                |
| name               | string           | `"plugin name"`                                          | The plugin name.                                                                                                                                                                 |
| pluginName         | string           | `"plugin name"`                                          | The name by which the plugin is registered in the `window` object. It must match the plugin name from the `plugin.js` file.                                                      |
| scopes             | string           | `"ContextMenu,InfoPanel,MainButton"`                     | The plugin scopes which are converted from an array into a string.                                                                                                               |
| version            | string           | `"1.0.0"`                                                | The current plugin version.                                                                                                                                                      |

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
