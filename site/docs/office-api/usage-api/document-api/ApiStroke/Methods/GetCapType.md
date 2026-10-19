# GetCapType

Returns the cap type of the stroke.

## Syntax

```javascript
expression.GetCapType();
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[LineCapType](../../Enumeration/LineCapType.md) \| null

## Example

Read the cap type of a shape border in a document.

```javascript editor-docx
// Get the cap type to find out how the stroke ends are drawn.

// Apply a round cap to a line's stroke, then read back its cap type in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(line);
let retrievedStroke = line.GetLine();
retrievedStroke.SetCapType("round");
let capType = retrievedStroke.GetCapType();
paragraph.AddText("Cap type: " + capType);
```
