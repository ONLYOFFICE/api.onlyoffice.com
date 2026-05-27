# SetPosY

Sets the y position of the drawing on the page.

## Syntax

```javascript
expression.SetPosY(posY);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posY | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the top side of the page to the upper side of the drawing measured in English measure units. |

## Returns

boolean

## Example

Reposition a drawing object vertically in a PDF.

```javascript editor-pdf
// How do I move a shape to a different vertical location in a PDF?

// Adjust the Y coordinate of a drawing element in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosY(808400);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
page.AddObject(shape);
```
