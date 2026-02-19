# GetAllDrawings

Gets all drawing objects from the page.

## Syntax

```javascript
expression.GetAllDrawings();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Drawing](../../Enumeration/Drawing.md)[]

## Example

How to get drawings on a page.

```javascript editor-pdf
// Get drawing on a page and select it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 425, 184, fill, stroke);
shape.SetPosition(48, 100);

const height = shape.GetHeight();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Example drawing");
page.AddObject(shape);

const allDrawings = page.GetAllDrawings();
if (allDrawings.length > 0) {
	const drawing = allDrawings[0];
	drawing.Select();
}
```
