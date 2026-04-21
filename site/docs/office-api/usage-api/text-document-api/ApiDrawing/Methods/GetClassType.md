# GetClassType

Returns a type of the ApiDrawing class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"drawing"

## Example

Check the class type returned by a drawing object in a document.

```javascript editor-docx
// How do I check what type a drawing object object is in a document?

// Retrieve and output the class type string for a drawing object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
