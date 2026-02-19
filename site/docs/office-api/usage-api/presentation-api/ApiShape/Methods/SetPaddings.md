# SetPaddings

Sets the text paddings to the current shape.

## Syntax

```javascript
expression.SetPaddings(nLeft, nTop, nRight, nBottom);
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | [EMU](../../Enumeration/EMU.md) |  | Left padding. |
| nTop | Required | [EMU](../../Enumeration/EMU.md) |  | Top padding. |
| nRight | Required | [EMU](../../Enumeration/EMU.md) |  | Right padding. |
| nBottom | Required | [EMU](../../Enumeration/EMU.md) |  | Bottom padding. |

## Returns

boolean

## Example

This example sets the text paddings to the current shape.

```javascript editor-pptx
// How to update paddings of the drawing.

// Create a shape and set its paddings.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is a sample text with paddings set to it. ");
paragraph.AddText("Left: 2cm, Top: 0.5cm, Right: 0.5cm, Bottom: 0.3cm");
docContent.Push(paragraph);
shape.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
slide.AddObject(shape);
```
