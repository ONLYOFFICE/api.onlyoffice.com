# GetTransparent

Returns the transparency of the fill.

## Syntax

```javascript
expression.GetTransparent();
```

`expression` - A variable that represents an [ApiFill](../ApiFill.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read back the transparency of a shape's fill in a document.

```javascript editor-docx
// Find out how transparent a shape's fill is in a document.

// Check the transparency that was applied to a shape's fill in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
let shape = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke);
paragraph.AddDrawing(shape);

let appliedFill = shape.GetFill();
paragraph.AddText("Fill transparency: " + appliedFill.GetTransparent());
```
