# GetPreset

Returns the name of the preset shape if the current geometry is based on a preset.

## Syntax

```javascript
expression.GetPreset();
```

`expression` - A variable that represents a [ApiGeometry](../ApiGeometry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ShapeType](../../Enumeration/ShapeType.md) \| null

## Example

Read the built-in shape template name assigned to a shape in a spreadsheet.

```javascript editor-xlsx
// How do I find out which standard shape template a shape is based on in a spreadsheet?

// Identify the predefined outline category that describes a shape's form in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = worksheet.AddShape("star5", 60 * 36000, 60 * 36000, fill, stroke, 0, 0, 2, 2);
let geometry = shape.GetGeometry();
worksheet.GetRange("A1").SetValue("Preset: " + geometry.GetPreset());
worksheet.GetRange("A2").SetValue("IsCustom: " + geometry.IsCustom());
```
