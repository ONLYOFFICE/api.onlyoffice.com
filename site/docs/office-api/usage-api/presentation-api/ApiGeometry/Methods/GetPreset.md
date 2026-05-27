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

Identify the preset shape type used for geometry in a presentation.

```javascript editor-pptx
// How do I determine if a shape is a preset type in a presentation?

// Check what built-in shape preset defines a geometry in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
shape.GetDocContent().GetElement(0).AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
shape.SetPosition(1000000, 1000000);
slide.AddObject(shape);
```
