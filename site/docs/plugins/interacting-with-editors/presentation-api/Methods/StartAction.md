# StartAction

Specifies the start action for long operations.

## Syntax

```javascript
expression.StartAction(type, description);
```

`expression` - A variable that represents an [Api](../presentation-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "Information" \| "Block" |  | The action type: **"Information"** - a non-blocking informational action, **"Block"** - a blocking interaction action. |
| description | Optional | string |  | A string description displayed during the action. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("StartAction", ["Block", "Save to local storage..."], function () {
    setPasswordByFile ("sha256", "123456");

    setTimeout (function () {
        window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to localstorage..."]);
    }, 200);
});
```
