# GetDashType

Gets the dash type of the stroke.

## Syntax

```javascript
expression.GetDashType();
```

`expression` - A variable that represents a [ApiStroke](../ApiStroke.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[DashType](../../Enumeration/DashType.md) \| null

## Example

Identify the line pattern style of a border in a PDF

```javascript editor-pdf
// What dash pattern is applied to a border line in a PDF?

// Extract and show the line style for a border in a PDF

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
paragraph.AddText("Dash type: " + (dashType ? dashType : "not set"));
```
