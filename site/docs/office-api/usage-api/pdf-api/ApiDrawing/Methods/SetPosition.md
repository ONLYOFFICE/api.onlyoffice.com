# SetPosition

Sets the position of the drawing on the page.

## Syntax

```javascript
expression.SetPosition(posX, posY);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posX | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the left side of the page to the left side of the drawing measured in English measure units. |
| posY | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the top side of the page to the upper side of the drawing measured in English measure units. |

## Returns

boolean

## Example

How to change a position of a drawing.

```javascript editor-pdf
// Get a shape object from a page and move it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
page.AddObject(shape);
```
