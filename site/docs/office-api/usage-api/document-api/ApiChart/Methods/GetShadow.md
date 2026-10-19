# GetShadow

Returns the shadow of the current graphic object.

Inherited from [ApiDrawing.GetShadow](../../ApiDrawing/Methods/GetShadow.md).

## Syntax

```javascript
expression.GetShadow();
```

`expression` - A variable that represents an [ApiChart](../ApiChart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShadow](../../ApiShadow/ApiShadow.md) \| null

## Example

Read the shadow of a drawing and reuse it in a document.

```javascript editor-docx
// Retrieve the shadow applied to one shape and apply the same shadow to another.

// Set a shadow on the first shape, read it with GetShadow, and apply it to a second shape.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
shape.SetWrappingStyle("inFront");
shape.SetHorPosition("page", 30 * 36000);
shape.SetVerPosition("page", 30 * 36000);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 }));
const shadow = shape.GetShadow();
const shape2 = Api.CreateShape("ellipse", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape2);
shape2.SetWrappingStyle("inFront");
shape2.SetHorPosition("page", 30 * 36000);
shape2.SetVerPosition("page", 90 * 36000);
shape2.SetShadow(shadow);
```
