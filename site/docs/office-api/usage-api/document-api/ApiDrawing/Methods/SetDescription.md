# SetDescription

Sets the description of the current drawing.

## Syntax

```javascript
expression.SetDescription(description);
```

`expression` - A variable that represents an [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| description | Required | string |  | The description to set for the current drawing. |

## Returns

boolean

## Example

Set the description of a drawing in a document.

```javascript editor-docx
// Useful for assigning the alternative text of a drawing.

// Create a drawing and set its description.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing description: " + description);
doc.AddElement(0, paragraph);
```
