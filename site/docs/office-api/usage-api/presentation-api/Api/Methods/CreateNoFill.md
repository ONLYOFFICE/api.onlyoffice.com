# CreateNoFill

Creates no fill and removes the fill from the element.

## Syntax

```javascript
expression.CreateNoFill();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates no fill and removes the fill from the element.

```javascript editor-pptx
// How to remove background fill from the object.

// Create no fill and apply it to the element.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The stroke of this shape is transparent.");
slide.AddObject(shape);

```
