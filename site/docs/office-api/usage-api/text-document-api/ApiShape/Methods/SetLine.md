# SetLine

Sets the outline properties to the current shape.

## Syntax

```javascript
expression.SetLine(oStroke);
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the shape outline. |

## Returns

boolean

## Example

Set the outline properties to a shape. Creates a rectangle and change its outline to a thick blue line in a document.

```javascript editor-docx
// How do I set line in a document?

// Set line using a shape object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
paragraph.AddText("Original shape with no border");
paragraph.AddLineBreak();
let newStroke = Api.CreateStroke(3 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
shape.SetLine(newStroke);
paragraph.AddText("Border changed to 3pt blue line");
```
