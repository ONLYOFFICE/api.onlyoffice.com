---
sidebar_position: -2
---

# Config

The *config.json* file is generated based on the data from the *package.json* file.

| Parameter   | Type               | Presence | Description |
|-------------|--------------------|----------|-------------|
| author      | string             | Required | The plugin author. Example: `"ONLYOFFICE"` |
| cspDomains  | array of strings   | Required | The list of all third-party resources that are used in the plugin. Example: `[https://embed.diagrams.net/, https://*.diagrams.net/]` |
| description | string             | Required | The description, i.e. what describes your plugin in the best way. Example: `"plugin description"` |
| homePage    | string             | Optional | The plugin homepage. For example, it can be the plugin GitHub repository. Example: ``https://example.com/url-to-plugin-repository`` |
| image       | string             | Required | The name of the logo image. It is equal to the *logo* parameter from the *package.json* file. The required icon size is 48x48 px. Otherwise, it will be compressed to this size. Example: `"logo.png"` |
| license     | string             | Required | The plugin license. Example: `"MIT"` |
| name        | string             | Required | The plugin name. Example: `"plugin name"` |
| pluginName  | string             | Required | The name by which the plugin is registered in the *window* object. It must match the plugin name from the *plugin.js* file. Example: `"plugin name"` |
| scopes      | string             | Optional | The plugin scopes which are converted from an array into a string. Example: `"ContextMenu,InfoPanel,MainButton"` |
| version     | string             | Required | The current plugin version. Example: `"1.0.0"` |

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
