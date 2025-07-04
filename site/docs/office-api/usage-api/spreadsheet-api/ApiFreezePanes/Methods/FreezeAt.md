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

This example freezes the specified range in top-and-left-most pane of the worksheet.

```javascript editor-xlsx
// How to freeze a specified range of panes.

// Get freeze panes and freeze the specified part.

let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = Api.GetRange('H2:K4');
freezePanes.FreezeAt(range);
```
