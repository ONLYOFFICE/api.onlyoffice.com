# SetFlipV

Sets the vertical flip of the current drawing.

## Syntax

```javascript
expression.SetFlipV(bFlip);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | Required | boolean |  | Specifies if the figure will be flipped vertically or not. |

## Returns

boolean

## Example

This example shows how to set the vertical flip for a drawing.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(90, 140, 120));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('upArrow', Api.MillimetersToEmus(40), Api.MillimetersToEmus(80), fill, stroke);
paragraph.AddDrawing(drawing);

const flippedDrawing = drawing.Copy();
flippedDrawing.SetFlipV(true);
paragraph.AddDrawing(flippedDrawing);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('The right arrow shape above is flipped vertically.');
doc.Push(paragraph2);

```
