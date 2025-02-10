# sendToPlugin

Sends a message from the modal window to the plugin.

## Syntax

```javascript
expression.sendToPlugin(name, data);
```

`expression` - A variable that represents a [Plugin](../plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The event name. |
| data | Required | object |  | The event data. |

## Returns

boolean