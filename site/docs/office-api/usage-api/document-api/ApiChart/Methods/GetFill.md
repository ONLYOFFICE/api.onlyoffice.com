# GetFill

Gets the fill formatting properties from the current graphic object.

Inherited from [ApiDrawing.GetFill](../../ApiDrawing/Methods/GetFill.md).

## Syntax

```javascript
expression.GetFill();
```

`expression` - A variable that represents an [ApiChart](../ApiChart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFill](../../ApiFill/ApiFill.md) \| null

## Example

Get the fill formatting properties from a drawing object through the base ApiDrawing interface in a document.

```javascript editor-docx
// GetFill returns the ApiFill applied to any graphic object, or null when the object has no fill.

// Read back the fill type of a filled rectangle and write it into the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let currentFill = drawing.GetFill();
if (currentFill) {
	let resultParagraph = Api.CreateParagraph();
	resultParagraph.AddText("Drawing fill type: " + currentFill.GetType());
	doc.Push(resultParagraph);
}
```
