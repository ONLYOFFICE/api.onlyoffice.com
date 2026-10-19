# GetColor

Returns the color of a solid fill.

## Syntax

```javascript
expression.GetColor();
```

`expression` - A variable that represents an [ApiFill](../ApiFill.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null \| undefined

## Example

Read the color back from the fill of a shape in a spreadsheet.

```javascript editor-xlsx
// How do I find out which color a shape is filled with in a spreadsheet?

// Inspect the color of a solid fill on a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let color = shape.GetFill().GetColor();
paragraph.AddText("Solid fill color: " + color.GetHex());
```
