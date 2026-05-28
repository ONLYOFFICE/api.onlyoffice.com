# Copy

Creates a copy of the specified shape.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

Duplicate a shape on a worksheet and place the copy next to the original in a spreadsheet.

```javascript editor-xlsx
// How do I make a copy of a shape in a spreadsheet?

// Clone a shape and add the copy to the sheet at a different cell anchor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let copyShape = shape.Copy();
worksheet.AddDrawing(copyShape, 4, 2 * 36000, 2, 3 * 36000);
```
