# GetAllShapes

Returns a collection of shape objects from the document content.

Inherited from [ApiDocumentContent.GetAllShapes](../../ApiDocumentContent/Methods/GetAllShapes.md).

## Syntax

```javascript
expression.GetAllShapes();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md)[]

## Example

Retrieve all shapes in a document.

```javascript editor-docx
// How do I collect every shape object present in a document?

// Change the fill color of the second shape to distinguish it from the others.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing1);
let drawing2 = Api.CreateShape("wave", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing2);
let drawings = doc.GetAllShapes();
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
drawings[1].Fill(fill);
```
