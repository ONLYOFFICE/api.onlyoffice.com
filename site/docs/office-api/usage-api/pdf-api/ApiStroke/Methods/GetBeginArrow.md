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

Read the beginning arrow of a line in a PDF.

```javascript editor-pdf
// Find out which arrow is applied to the start of a line in a PDF.

// Apply a beginning arrow to a line's stroke, read it back, and label the result in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = Api.CreateShape("line", 50 * 36000, 50 * 36000, fill, stroke);
line.SetPosition(2000000, 1000000);
page.AddObject(line);
let retrievedStroke = line.GetLine();
retrievedStroke.SetBeginArrow("triangle", "medium", "large");
let arrow = retrievedStroke.GetBeginArrow();

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
page.AddObject(label);
label.GetContent().GetElement(0).AddText("Begin arrow type: " + (arrow ? arrow.Type : "not set"));
```
