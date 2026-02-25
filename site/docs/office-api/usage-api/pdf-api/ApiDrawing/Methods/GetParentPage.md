# GetParentPage

Returns the type of the ApiDrawing class.

## Syntax

```javascript
expression.GetParentPage();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPage](../../ApiPage/ApiPage.md)

## Example

How to get a class type of ApiDrawing.

```javascript editor-pdf
// Retrieve class type of ApiDrawing object and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(150 * 36000, 65 * 36000);
page.AddObject(drawing);

const aDrawings = page.GetAllDrawings();
const sType = aDrawings[0].GetClassType();
const docContent = drawing.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + sType);
```
