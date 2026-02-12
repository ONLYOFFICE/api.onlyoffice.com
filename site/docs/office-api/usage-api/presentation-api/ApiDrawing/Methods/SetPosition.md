# SetPosition

Sets the position of the drawing on the slide.

## Syntax

```javascript
expression.SetPosition(nPosX, nPosY);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosX | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the left side of the slide to the left side of the drawing measured in English measure units. |
| nPosY | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the top side of the slide to the upper side of the drawing measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets position to the shape.

```javascript editor-pptx
// How to change a position of a drawing.

// Get a shape object from a slide and move it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
slide.AddObject(shape);

```
