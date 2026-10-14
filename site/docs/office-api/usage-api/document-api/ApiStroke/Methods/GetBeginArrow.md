# GetBeginArrow

Returns the beginning arrow properties of the stroke.

## Syntax

```javascript
expression.GetBeginArrow();
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Object \| null

## Example

Read the beginning arrow of a shape border in a document.

```javascript editor-docx
// How do I find out which arrow is applied to the start of a shape's outline in a document?

// Apply a beginning arrow to a shape's stroke, then read back its type, width, and length in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetBeginArrow("triangle", "medium", "large");
let arrow = retrievedStroke.GetBeginArrow();
paragraph.AddText("Begin arrow type: " + (arrow ? arrow.Type : "not set"));
```
