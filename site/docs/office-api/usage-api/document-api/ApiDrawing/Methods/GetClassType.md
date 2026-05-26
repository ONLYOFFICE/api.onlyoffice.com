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

Retrieve the class type of a drawing object in a document.

```javascript editor-docx
// How do I identify what class type a drawing object belongs to in a document?

// Verify the kind of object a shape is before applying type-specific logic in a document.

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
