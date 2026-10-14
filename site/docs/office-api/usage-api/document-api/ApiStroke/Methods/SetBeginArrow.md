# SetBeginArrow

Sets the beginning arrow of the stroke.

## Syntax

```javascript
expression.SetBeginArrow(type, width, length);
```

`expression` - A variable that represents an [ApiStroke](../ApiStroke.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [LineEndType](../../Enumeration/LineEndType.md) |  | The type of the beginning arrow. |
| width | Optional | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | The width of the beginning arrow. |
| length | Optional | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | The length of the beginning arrow. |

## Returns

boolean

## Example

Add an arrowhead to the start of a shape border in a document.

```javascript editor-docx
// How do I set the beginning arrow of a shape's outline in a document?

// Create a shape, retrieve its stroke, and apply a triangle arrow to the start of the border line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetBeginArrow("triangle", "medium", "large");
paragraph.AddText("Begin arrow set: " + result);
```
