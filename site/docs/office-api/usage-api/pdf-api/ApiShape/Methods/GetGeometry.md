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

Displays preset type and custom status in a text shape.

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
shape.GetContent().GetElement(0).AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
shape.SetPosition(1000000, 1000000);
page.AddObject(shape);
```
