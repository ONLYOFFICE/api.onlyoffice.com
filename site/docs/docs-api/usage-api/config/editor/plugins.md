# Plugins

The plugins section defines the runtime plugin parameters.

## autostart

**type:** `string[]`

The plugin identifiers from the [config.json](../../../../plugins/fundamentals/configuration/config-json.md#guid) file that automatically start when the editor opens. The plugins run sequentially in the listed order.

**Example**: `["asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}"]`

## disable

**type:** `string[]`

The plugin identifiers from the [config.json](../../../../plugins/fundamentals/configuration/config-json.md#guid) file for plugins that will be disabled on load. The specified plugins will be blocked and unavailable in the editor interface.

**Example**: `["asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}"]`

## options

**type:** `object`

The external configuration settings for plugins. Settings can target all plugins or a specific plugin — for example, passing an authorization token.

:::note
You can also use the [`SetPluginsOptions`](../../../../plugins/interacting-with-editors/document-api/Methods/SetPluginsOptions.md) method of the [Automation API](../../automation-api/automation-api.md) to pass this object to the plugin.
:::

**Example**:

```json
{
  "all": {},
  "pluginGuid": {}
}
```

### options.all

**type:** `object`

The parameters applied to all plugins.

**Example**:

```json
{
  "all": {
    "keyAll": "valueAll"
  }
}
```

### options.pluginGuid

**type:** `object`

The parameters for a specific plugin, identified by its GUID in the `asc.{UUID}` format.

**Example**:

```json
{
  "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}": {
    "keyYoutube": "valueYoutube"
  }
}
```

## pluginsData

**type:** `string[]`

The absolute URLs to the plugin [config.json](../../../../plugins/fundamentals/configuration/config-json.md) files.

**Example**: `["https://example.com/plugins/chess-plugin/config.json"]`

![Plugins](/assets/images/editor/plugins.png#gh-light-mode-only)![Plugins](/assets/images/editor/plugins.dark.png#gh-dark-mode-only)

## Example

```ts
const config = {
  // ...
  editorConfig: {
    // ...
    plugins: {
      autostart: [
        "asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}",
      ],
      disable: [
        "asc.{CFE4BE46-3F85-4B79-B96E-B5AAF0EC9BC3}",
      ],
      options: {
        "all": {
          keyAll: "valueAll",
        },
        "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}": {
          keyYoutube: "valueYoutube",
        },
      },
      pluginsData: [
        "https://example.com/plugins/chess-plugin/config.json",
      ],
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

The **example.com** is the name of the server where **document manager** and **document storage service** are installed and the plugins are placed. See the [How it works](../../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.
