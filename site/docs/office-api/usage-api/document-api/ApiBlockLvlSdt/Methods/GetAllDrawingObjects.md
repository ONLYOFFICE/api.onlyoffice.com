# GetAllDrawingObjects

Returns a collection of drawing objects in the current content control.

## Syntax

```javascript
expression.GetAllDrawingObjects();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Drawing](../../Enumeration/Drawing.md)[]

## Example

Get a collection of drawing objects in the content control in a document.

```javascript editor-docx
// How can I get all drawing objects using a block-level content control in a document?

// Get all drawing objects for a block-level content control in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
shape = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
let drawingObjects = blockLvlSdt.GetAllDrawingObjects();
drawingObjects[0].Delete();
```
