# SetFlipH

Sets the horizontal flip of the current drawing.

## Syntax

```javascript
expression.SetFlipH(bFlip);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | Required | boolean |  | Specifies if the figure will be flipped horizontally or not. |

## Returns

boolean

## Example

This example shows how to set the horizontal flip for a drawing.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(100, 130, 170));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rightArrow', Api.MillimetersToEmus(40), Api.MillimetersToEmus(20), fill, stroke);
paragraph.AddDrawing(drawing);

const flippedDrawing = drawing.Copy();
flippedDrawing.SetFlipH(true);
paragraph.AddDrawing(flippedDrawing);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('The right arrow shape above is flipped horizontally.');
doc.Push(paragraph2);

```
