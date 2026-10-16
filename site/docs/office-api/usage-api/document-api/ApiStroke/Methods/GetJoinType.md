# GetJoinType

Returns the join type of the stroke.

## Syntax

```javascript
expression.GetJoinType();
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[LineJoinType](../../Enumeration/LineJoinType.md) \| null

## Example

Read the join type of a shape border in a document.

```javascript editor-docx
// Get the join type to find out how the stroke corners are drawn.

// Apply a miter join to a rectangle's stroke, then read back its join type in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetJoinType("miter");
let joinType = retrievedStroke.GetJoinType();
paragraph.AddText("Join type: " + joinType);
```
