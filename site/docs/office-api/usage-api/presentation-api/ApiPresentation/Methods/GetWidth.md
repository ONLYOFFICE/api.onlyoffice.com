# GetWidth

Returns the presentation width in English measure units.

## Syntax

```javascript
expression.GetWidth();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EMU](../../Enumeration/EMU.md)

## Example

This example shows how to get the presentation width in English measure units.

```javascript editor-pptx playground
// How to get a width of the presentation.

// Get a width of the ApiPresentation object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const width = presentation.GetWidth();
paragraph.AddText("Width = " + width);
slide.AddObject(shape);

```
