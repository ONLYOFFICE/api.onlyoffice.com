# SetHorPosition

Sets the absolute measurement for the horizontal positioning of the floating object.

## Syntax

```javascript
expression.SetHorPosition(sRelativeFrom, nDistance, bPercent);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | Required | [RelFromH](../../Enumeration/RelFromH.md) |  | The document element which will be taken as a countdown point for the object horizontal alignment. |
| nDistance | Required | [EMU](../../Enumeration/EMU.md) \| number |  | The distance from the right side of the document element to the floating object. Use EMU for absolute distance or a number for percent (1 = 1%) when bPercent=true. |
| bPercent | Optional | boolean | false | The option defining whether the vertical alignment offset is specified in percent. |

## Returns

boolean

## Example

This example sets the absolute measurement for the horizontal positioning of the floating object.

```javascript editor-docx
// How to set the horizontal position property of the shape.

// Create a drawing, add text to it and set its horizontal position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetHorPosition("rightMargin", 0);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another paragraph.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned next to the right margin horizontally.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The next blue shape is aligned next to the left margin horizontally by 10% percent.");
fill = Api.CreateSolidFill(Api.CreateRGBColor(91, 155, 213));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetHorPosition("page", 5, true);
paragraph.AddDrawing(drawing);
doc.Push(paragraph);
```
