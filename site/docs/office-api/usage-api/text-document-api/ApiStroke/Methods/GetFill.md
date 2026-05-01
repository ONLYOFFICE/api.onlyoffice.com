# GetFill

Gets the fill (color) of the stroke.

## Syntax

```javascript
expression.GetFill();
```

`expression` - A variable that represents a [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFill](../../ApiFill/ApiFill.md) \| null

## Example

Get the fill color of a stroke. Creates a shape with a colored border and retrieve its fill properties in a document.

```javascript editor-docx
// How do I get the fill in a document?

// Get the fill using a stroke object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
let strokeObj = shape.GetLine();
if (strokeObj) {
    let strokeFill = strokeObj.GetFill();
    if (strokeFill) {
        paragraph.AddText("Stroke fill type: " + strokeFill.GetType());
    }
}
```
