# GetParentContentControl

Returns a parent content control that contains the graphic object.

## Syntax

```javascript
expression.GetParentContentControl();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null

## Example

Retrieve the parent content control that contains a drawing object in a document.

```javascript editor-docx
// How do I find the content control that wraps a drawing in a document?

// Access the enclosing block-level content control to add text alongside a shape in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
let parentContentControl = drawing.GetParentContentControl();
parentContentControl.AddText("This is a parent content control.");
```
