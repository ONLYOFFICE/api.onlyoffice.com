# GetRotation

Returns the rotation angle of the current drawing object.

## Syntax

```javascript
expression.GetRotation();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the rotation angle of the drawing.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 110 * 36000, 10 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetRotation(90);
let rotAngle = drawing.GetRotation();
let docContent = drawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing rotation angle is: " + rotAngle + " degrees");
docContent.AddElement(0, paragraph);
```
