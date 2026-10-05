# GetContent

Returns the drawing inner contents where a paragraph or text runs can be inserted if it exists.

Inherited from [ApiDrawing.GetContent](../../ApiDrawing/Methods/GetContent.md).

## Syntax

```javascript
expression.GetContent();
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

Access the editable interior of a shape to add text in a document.

```javascript editor-docx
// How do I place text inside a drawn shape in a document?

// Insert a paragraph into the inner area of a shape in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
docContent.AddElement(0, paragraph);
```
