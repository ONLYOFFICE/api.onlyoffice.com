# GetDescription

Gets the description of the current drawing.

Inherited from [ApiDrawing.GetDescription](../../ApiDrawing/Methods/GetDescription.md).

## Syntax

```javascript
expression.GetDescription();
```

`expression` - A variable that represents an [ApiChart](../ApiChart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

Get the description of a drawing in a spreadsheet.

```javascript editor-xlsx
// Needed when reading the alternative text of a drawing.

// Create a drawing, set its description, and read it back.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
worksheet.SetColumnWidth(0, 30);
worksheet.GetRange("A1").SetValue("Drawing description: " + description);
```
