# GetClassType

Returns a type of the ApiStroke class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"stroke"

## Example

Check the class type returned by a stroke in a document.

```javascript editor-docx
// How do I check what type a stroke object is in a document?

// Retrieve and output the class type string for a stroke in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let rgbColor = Api.RGB(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
let drawing = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = stroke.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
