# UpdatePlugin

Updates a plugin using the specified plugin config.

## Syntax

```javascript
expression.UpdatePlugin(config);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| config | Optional | object |  | The plugin [config](https://api.onlyoffice.com/docs/plugin-and-macros/structure/configuration/). |

## Returns

object

## Example

```javascript
window.Asc.plugin.executeMethod ("UpdatePlugin", [config], function (result) {
    postMessage (JSON.stringify (result));
});
```
