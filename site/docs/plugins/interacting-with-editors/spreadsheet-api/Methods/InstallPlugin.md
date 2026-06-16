# InstallPlugin

Installs a plugin using the specified plugin config.

## Syntax

```javascript
expression.InstallPlugin(config);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| config | Optional | object |  | The plugin [config](../../../../../docs/plugins/configuration/configuration.md). |

## Returns

object

## Example

```javascript
window.Asc.plugin.executeMethod ("InstallPlugin", [config], function (result) {
    postMessage (JSON.stringify (result));
});
```
