# Delete

Deletes the current graphic object.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a shape from the paragraph it is anchored to in a document.

```javascript editor-docx
// How do I delete a drawing object that has been inserted into a paragraph in a document?

// Clean up unwanted graphics by programmatically deleting a shape after it has been placed.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.Delete();
paragraph.AddLineBreak();
paragraph.AddText("In this paragraph, the Drawing object has been deleted.");
```
