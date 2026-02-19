# GetFlipH

Get horizontal flip of current drawing.

## Syntax

```javascript
expression.GetFlipH();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

This example inserts a break at the specified location in the main document.

```javascript editor-docx
// How to add some space from the drawing.

// Insert a drawing and text into document and add a break to them.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertParagraph("Added a line break after this paragraph.", "before", false);
drawing.AddBreak(1, "before");
```
