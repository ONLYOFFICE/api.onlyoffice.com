# GetClassType

Returns a type of the ApiSchemeColor class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiSchemeColor](../ApiSchemeColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"schemeColor"

## Example

Read the type label assigned to a scheme color in a document.

```javascript editor-docx
// How do I find out what kind of object a scheme color is in a document?

// Confirm the category of a color object by checking its type identifier in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let schemeColor = Api.CreateSchemeColor("dk1");
let fill = Api.CreateSolidFill(schemeColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = schemeColor.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
