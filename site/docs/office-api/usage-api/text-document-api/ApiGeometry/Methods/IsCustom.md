# IsCustom

Checks whether the current geometry is custom.

## Syntax

```javascript
expression.IsCustom();
```

`expression` - A variable that represents a [ApiGeometry](../ApiGeometry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Gets geometry information from a preset star shape.

```javascript editor-docx
// Displays the preset type and checks if the geometry is custom.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
paragraph.AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
paragraph.AddDrawing(shape);
```
