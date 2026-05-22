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

Read the preset type name from a shape's geometry in a document.

```javascript editor-docx
// How do I get the preset identifier of a shape's geometry in a document?

// Identify which built-in shape template a geometry is based on before applying further changes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
paragraph.AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
paragraph.AddDrawing(shape);
```
