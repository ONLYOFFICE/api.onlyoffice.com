# GetParentPage

Returns the type of the ApiDrawing class.

Inherited from [ApiDrawing.GetParentPage](../../ApiDrawing/Methods/GetParentPage.md).

## Syntax

```javascript
expression.GetParentPage();
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPage](../../ApiPage/ApiPage.md)

## Example

Identify the type of a shape object in a PDF.

```javascript editor-pdf
// What kind of object is a shape in a PDF?

// Determine the class name of a shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const classType = shape.GetClassType();
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);
```
