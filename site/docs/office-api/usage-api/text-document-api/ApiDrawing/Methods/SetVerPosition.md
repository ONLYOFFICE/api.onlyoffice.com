# SetVerPosition

Sets the absolute measurement for the vertical positioning of the floating object.

## Syntax

```javascript
expression.SetVerPosition(sRelativeFrom, nDistance, bPercent);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | Required | [RelFromV](../../Enumeration/RelFromV.md) |  | The document element which will be taken as a countdown point for the object vertical alignment. |
| nDistance | Required | [EMU](../../Enumeration/EMU.md) \| number |  | The distance from the bottom part of the document element to the floating object. Use EMU for absolute units or a number (1 = 1%) when bPercent=true for percent relative positioning. |
| bPercent | Optional | boolean | false | The option defining whether the vertical alignment offset is specified in percent. |

## Returns

boolean

## Example

This example sets the absolute measurement for the vertical positioning of the floating object.

```javascript editor-docx
// How to set the vertical position at page in points.

// Move the shape vertically on the page.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text (horizontally) is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetVerPosition("page", 914400);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned to the top of the page, and outstands from the page top 1 inch.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The next blue shape is aligned vertically by 50% relative to the page.");
fill = Api.CreateSolidFill(Api.CreateRGBColor(91, 155, 213));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetVerPosition("page", 50, true);
paragraph.AddDrawing(drawing);
doc.Push(paragraph);
```
