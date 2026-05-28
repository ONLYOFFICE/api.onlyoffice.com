# SetOutLine

Sets the outline properties to the specified graphic object.

## Syntax

```javascript
expression.SetOutLine(oStroke);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the graphic object outline. |

## Returns

boolean

## Example

Add a visible border outline to a drawing in a document.

```javascript editor-docx
// How do I apply a stroke to the edge of a shape in a document?

// Copy a shape and give the duplicate a dark solid outline to contrast with the original in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing); 
let copyDrawing = drawing.Copy();
stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
copyDrawing.SetOutLine(stroke);
paragraph.AddDrawing(copyDrawing);
```
