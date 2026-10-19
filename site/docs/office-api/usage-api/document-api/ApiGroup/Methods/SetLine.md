# SetLine

Sets the outline properties to the current graphic object.

Inherited from [ApiDrawing.SetLine](../../ApiDrawing/Methods/SetLine.md).

## Syntax

```javascript
expression.SetLine(stroke);
```

`expression` - A variable that represents an [ApiGroup](../ApiGroup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| stroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the graphic object outline. |

## Returns

boolean

## Example

Set the outline of a drawing object through the base ApiDrawing interface in a document.

```javascript editor-docx
// SetLine is the base method for the outline and works for any graphic object, not only shapes.

// Add a rectangle to a document and give it a dark solid outline.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
drawing.SetLine(outline);
```
