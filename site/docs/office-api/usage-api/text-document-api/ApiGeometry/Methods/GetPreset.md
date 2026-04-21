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

Get geometry information from a preset star shape. Displays the preset type and check if the geometry is custom.

```javascript editor-docx
// How can I get the preset using a geometry in a document?

// Get the preset for a geometry in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
paragraph.AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
paragraph.AddDrawing(shape);
```
