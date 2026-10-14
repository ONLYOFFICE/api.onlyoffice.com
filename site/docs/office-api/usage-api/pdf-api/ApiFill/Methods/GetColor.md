# GetColor

Returns the color of a solid fill.

## Syntax

```javascript
expression.GetColor();
```

`expression` - A variable that represents an [ApiFill](../ApiFill.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null \| undefined

## Example

Read the color back from the fill of a shape in a PDF.

```javascript editor-pdf
// How do I find out which color a shape is filled with in a PDF?

// Inspect the color of a solid fill on the page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const color = shape.GetFill().GetColor();
paragraph.AddText("Solid fill color: " + color.GetHex());
```
