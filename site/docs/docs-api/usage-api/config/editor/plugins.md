# Plugins

The plugins section allows you to connect the special add-ons to your ONLYOFFICE Docs installation which will help you add additional features to document editors.

## autostart

**type:** `string[]`

Defines the array of plugin identifiers from the [config.json](../../../../plugin-and-macros/structure/configuration/configuration.md#guid) file. The plugins will automatically start when the editor opens and run one-by-one in the specified order.

**Example**: `["asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}"]`

## options

**type:** `object`

Defines an object which allows configuring plugins from an external source. The settings can be set for all plugins or for a specific plugin. For example, this object can be used to pass an authorization token to the plugin. You can also use the [`SetPluginsOptions`](../../../../plugin-and-macros/interacting-with-editors/text-document-api/Methods/SetPluginsOptions.md) method of the [Automation API](../../automation-api/automation-api.md) to pass the `options` object to the plugin.

**Example**:

``` json
{
  "all": {},
  "pluginGuid": {}
}
```

### options.all

**type:** `object`

Defines the parameters which will be set for all plugins.

**Example**:

``` json
{
  "all": {
    "keyAll": "valueAll"
  }
}
```

### options.pluginGuid

**type:** `object`

Defines the parameters which will be set for a specific plugin. The plugin must be specified with the plugin GUID of the `asc.{UUID}` type.

**Example**:

``` json
{
  "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}": {
    "keyYoutube": "valueYoutube"
  }
}
```

## pluginsData

**type:** `string[]`

Defines the array of absolute URLs to the plugin [config.json](../../../../plugin-and-macros/structure/configuration/configuration.md) files.

**Example**: `["https://example.com/plugins/chess-plugin/config.json"]`

![Plugins](/assets/images/editor/plugins.png#gh-light-mode-only)![Plugins](/assets/images/editor/plugins.dark.png#gh-dark-mode-only)

## Example

``` ts
const config = {
  // ...
  editorConfig: {
    // ...
    plugins: {
      autostart: [
        "asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}",
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
