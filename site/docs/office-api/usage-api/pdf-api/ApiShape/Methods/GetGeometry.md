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

Find out the drawing pattern details of a shape in a PDF.

```javascript editor-pdf
// Check the shape's drawing pattern in a PDF.

// Access the shape's built-in or custom drawing design in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 50 * 36000, 50 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
shape.GetContent().GetElement(0).AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
shape.SetPosition(1000000, 1000000);
page.AddObject(shape);
```
