# GetTitle

Gets the title of the current drawing.

Inherited from [ApiDrawing.GetTitle](../../ApiDrawing/Methods/GetTitle.md).

## Syntax

```javascript
expression.GetTitle();
```

`expression` - A variable that represents an [ApiImage](../ApiImage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

Get the title of a drawing in a document.

```javascript editor-docx
// Needed when reading the alternative text title of a drawing.

// Create a drawing, set its title, and read it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing title: " + title);
doc.AddElement(0, paragraph);
```
