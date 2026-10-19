# EndAction

Specifies the end action for long operations.

## Syntax

```javascript
expression.EndAction(type, description, status);
```

`expression` - A variable that represents an [Api](../spreadsheet-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "Information" \| "Block" |  | The action type: **"Information"** - ends a non-blocking informational action, **"Block"** - ends a blocking interaction action. |
| description | Optional | string |  | A string description displayed during the action. |
| status | Optional | string |  | The error status code. If no error occurs, then an empty string is passed. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to local storage...", ""]);
```
