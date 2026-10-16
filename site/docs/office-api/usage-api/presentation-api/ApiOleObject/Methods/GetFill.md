# GetFill

Gets the fill formatting properties from the current graphic object.

Inherited from [ApiDrawing.GetFill](../../ApiDrawing/Methods/GetFill.md).

## Syntax

```javascript
expression.GetFill();
```

`expression` - A variable that represents an [ApiOleObject](../ApiOleObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFill](../../ApiFill/ApiFill.md) \| null

## Example

Get the fill formatting properties from a drawing object through the base ApiDrawing interface in a presentation.

```javascript editor-pptx
// GetFill returns the ApiFill applied to any graphic object on a slide, or null when the object has no fill.

// Read back the fill type of a filled rectangle and show it inside the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const currentFill = drawing.GetFill();
if (currentFill) {
	drawing.GetContent().GetElement(0).AddText("Fill type: " + currentFill.GetType());
}
```
