# FreezeAt

Sets the frozen cells in the active worksheet view. The range provided corresponds to the cells that will be frozen in the top- and left-most pane.

## Syntax

```javascript
expression.FreezeAt(frozenRange);
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| frozenRange | Required | [ApiRange](../../ApiRange/ApiRange.md) \| String |  | A range that represents the cells to be frozen. |

## Returns

This method doesn't return any data.

## Example

Lock a specific area of the sheet so it stays visible while scrolling in a spreadsheet.

```javascript editor-xlsx
// How do I pin a chosen block of rows and columns in place during scrolling in a spreadsheet?

// Keep a defined region always on screen by anchoring it to the corner of the view in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = Api.GetRange('H2:K4');
freezePanes.FreezeAt(range);
```
