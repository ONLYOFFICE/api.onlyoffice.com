# GetGeometry

Returns the geometry object from the current shape.

## Syntax

```javascript
expression.GetGeometry();
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiGeometry](../../ApiGeometry/ApiGeometry.md)

## Example

Read the outline geometry of a shape and display its preset name and custom status in a spreadsheet.

```javascript editor-xlsx
// How do I find out what geometric form a shape is using in a spreadsheet?

// Inspect a shape's outline definition and write the results into sheet cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = worksheet.AddShape("star5", 60 * 36000, 60 * 36000, fill, stroke, 0, 0, 2, 2);
let geometry = shape.GetGeometry();
worksheet.GetRange("A1").SetValue("Preset: " + geometry.GetPreset());
worksheet.GetRange("A2").SetValue("IsCustom: " + geometry.IsCustom());
```
