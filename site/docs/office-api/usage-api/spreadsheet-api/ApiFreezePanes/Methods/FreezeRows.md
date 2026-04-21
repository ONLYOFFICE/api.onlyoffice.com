# FreezeRows

Freezes the top row or rows of the current worksheet.

## Syntax

```javascript
expression.FreezeRows(count);
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | Number | 0 | Optional number of rows to freeze, or zero to unfreeze all rows. |

## Returns

This method doesn't return any data.

## Example

Freeze the top row in a spreadsheet.

```javascript editor-xlsx
// How to freeze rows using their indices in a spreadsheet.

// Get freeze panes and freeze a row using its index in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.FreezeRows(1);
```
